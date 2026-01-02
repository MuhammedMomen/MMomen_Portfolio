// --------------------------------------
// 1) Interfaces for the Gemini API
// --------------------------------------
interface GeminiResponseCandidate {
    content?: {
        parts?: Array<{
            text?: string;
        }>;
        role?: string;
    };
    output?: string;
    text?: string;
    [key: string]: unknown;
}

interface GeminiResponse {
    candidates?: GeminiResponseCandidate[];
    [key: string]: unknown;
}

// --------------------------------------
// 2) Main Office Script function
// --------------------------------------
function main(workbook: ExcelScript.Workbook): void {
    console.log("Script started.");

    const sheet: ExcelScript.Worksheet = workbook.getActiveWorksheet();

    // A) Read the question from cell B1
    const question: string = sheet.getRange("B1").getText().trim();
    console.log("Question (B1):", question);

    if (!question) {
        console.log("No question in B1. Stopping.");
        sheet.getRange("B2").setValue("No question found in cell B1.");
        return;
    }

    // B) Locate the named item "data" (list of data/cities)
    const allNames: ExcelScript.NamedItem[] = workbook.getNames();
    console.log("Named items found:", allNames.map(n => n.getName()).join(", "));

    let dataRange: ExcelScript.Range | null = null;
    for (const namedItem of allNames) {
        if (namedItem.getName() === "data") {
            console.log('Found named item "data".');
            dataRange = namedItem.getRange();
            break;
        }
    }

    // C) Convert the data to a string if found
    let dataString = "";
    if (dataRange) {
        const dataValues: (string | number | boolean)[][] = dataRange.getValues();
        dataString = dataValues
            .map(row => row.join("\t"))
            .join("\n");

        console.log('Data from "data" named range:', dataString);
    } else {
        console.log('No named item "data" found. Using empty data string.');
    }

    // D) Combine question + data
    const combinedPrompt = question.concat("\n\nData:\n", dataString);
    console.log("Combined prompt:", combinedPrompt);

    // E) Call Gemini with the combined prompt
    callGeminiAPI(combinedPrompt)
        .then((modelResponse: string) => {
            console.log("Model response (truncated to B2):", modelResponse);
            sheet.getRange("B2").setValue(modelResponse);
        })
        .catch((error: unknown) => {
            console.log("Error calling Gemini API:", error);
            sheet.getRange("B2").setValue("Error in API call");
        });
}

// --------------------------------------
// 3) Gemini API call
// --------------------------------------
async function callGeminiAPI(prompt: string): Promise<string> {
    console.log("callGeminiAPI started. Prompt length:", prompt.length);

    const apiKey: string = "Your_API_Here"; // <-- Replace with your valid API key
    const endpoint: string =
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const headers: { [key: string]: string } = {
        "Content-Type": "application/json"
    };

    // a) Build the request body
    const body: string = JSON.stringify({
        contents: [
            {
                role: "user",
                parts: [
                    {
                        text: prompt
                    }
                ]
            }
        ],
        generationConfig: {
            temperature: 1,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain"
        }
    });

    console.log("Sending POST request to:", endpoint);

    try {
        const response: Response = await fetch(endpoint, {
            method: "POST",
            headers,
            body
        });

        console.log("Fetch completed. Status:", response.status, response.statusText);

        if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
        }

        // b) Parse the JSON
        const data: GeminiResponse = await response.json();
        console.log("Raw JSON from Gemini:", JSON.stringify(data, null, 2));

        // c) Extract text from data.candidates[0].content.parts[0].text
        if (
            data.candidates &&
            data.candidates.length > 0 &&
            data.candidates[0].content &&
            data.candidates[0].content.parts &&
            data.candidates[0].content.parts.length > 0 &&
            typeof data.candidates[0].content.parts[0].text === "string"
        ) {
            const text = data.candidates[0].content.parts[0].text.trim();
            console.log("Extracted text:", text);
            return text;
        }

        // d) Fallback: check candidate.output or candidate.text
        const candidate = data.candidates && data.candidates.length > 0
            ? data.candidates[0]
            : null;
        if (candidate) {
            if (candidate.output && typeof candidate.output === "string") {
                console.log("Extracted from candidate.output");
                return candidate.output.trim();
            }
            if (candidate.text && typeof candidate.text === "string") {
                console.log("Extracted from candidate.text");
                return candidate.text.trim();
            }
        }

        // e) If no text found, return empty string
        console.log("No text found in the response.");
        return "";
    } catch (error) {
        console.log("Error in callGeminiAPI:", error);
        return "API call failed: " + error;
    }
}
