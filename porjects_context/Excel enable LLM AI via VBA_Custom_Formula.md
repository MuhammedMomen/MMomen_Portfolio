Option Explicit

' Public function that can be used as a worksheet formula.
' "query" is mandatory; "dataRange" is optional.
Public Function GeminiQuery(query As String, Optional dataRange As Range) As String
    Dim trimmedQuery As String
    trimmedQuery = Trim(query)
    If trimmedQuery = "" Then
        GeminiQuery = "No query provided."
        Exit Function
    End If
    
    ' Build data string if a data range is provided
    Dim dataString As String
    dataString = ""
    If Not dataRange Is Nothing Then
        Dim rw As Range, cell As Range, temp As String
        For Each rw In dataRange.Rows
            temp = ""
            For Each cell In rw.Cells
                temp = temp & CStr(cell.Value) & vbTab
            Next cell
            ' Remove trailing tab
            If Right(temp, 1) = vbTab Then temp = Left(temp, Len(temp) - 1)
            dataString = dataString & temp & vbCrLf
        Next rw
    End If
    
    ' Combine query and data
    Dim combinedPrompt As String
    combinedPrompt = trimmedQuery & vbCrLf & vbCrLf & "Data:" & vbCrLf & dataString
    
    ' Get the API response
    GeminiQuery = GetGeminiResponse(combinedPrompt)
End Function

' Calls the Gemini API and returns the extracted text.
Private Function GetGeminiResponse(ByVal prompt As String) As String
    Dim apiKey As String
    apiKey = "Your_API_Here"  ' <-- Replace with your valid Gemini API key
    
    Dim endpoint As String
    endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-thinking-exp-01-21:generateContent?key=" & apiKey
    
    ' Build JSON payload
    Dim jsonBody As String
    jsonBody = _
        "{""contents"":[{""role"":""user"",""parts"":[{""text"":""" & EscapeJSON(prompt) & """}]}]," & _
        """generationConfig"":{""temperature"":1,""topK"":40,""topP"":0.95,""maxOutputTokens"":8192,""responseMimeType"":""text/plain""}}"
    
    ' Create and send HTTP POST request
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    http.Open "POST", endpoint, False
    http.setRequestHeader "Content-Type", "application/json"
    http.send jsonBody
    
    ' Check for errors
    If http.Status <> 200 Then
        GetGeminiResponse = "API error: " & http.Status & " - " & http.statusText
        Exit Function
    End If
    
    Dim responseText As String
    responseText = http.responseText
    
    ' Extract the "text" field using a simple regular expression
    Dim re As Object
    Set re = CreateObject("VBScript.RegExp")
    re.Pattern = """text"":\s*""([^""]*)"
    re.IgnoreCase = True
    re.Global = False
    
    If re.Test(responseText) Then
        Dim matches As Object
        Set matches = re.Execute(responseText)
        GetGeminiResponse = DecodeJSON(matches(0).SubMatches(0))
    Else
        GetGeminiResponse = "No text found in response: " & responseText
    End If
End Function

' Escapes quotes and backslashes in the prompt for JSON formatting.
Private Function EscapeJSON(ByVal s As String) As String
    s = Replace(s, "\", "\\")
    s = Replace(s, """", "\""")
    EscapeJSON = s
End Function

' Converts any JSON-escaped newlines/tabs into actual line breaks/tabs.
Private Function DecodeJSON(ByVal s As String) As String
    s = Replace(s, "\n", vbCrLf)
    s = Replace(s, "\t", vbTab)
    DecodeJSON = s
End Function




