Option Explicit

Public Sub GeminiMacro()
    Dim ws As Worksheet
    Set ws = ThisWorkbook.ActiveSheet
    
    ' 1) Read the question from B1
    Dim question As String
    question = Trim(ws.Range("B1").Value)
    If question = "" Then
        ws.Range("B2").Value = "No question found in cell B1."
        Exit Sub
    End If
    
    ' 2) Attempt to find named range "data"
    Dim dataRange As Range
    On Error Resume Next
    Set dataRange = ThisWorkbook.Names("data").RefersToRange
    On Error GoTo 0
    
    ' 3) Build data string if the named range exists
    Dim dataString As String
    dataString = ""
    
    If Not dataRange Is Nothing Then
        Dim row As Range
        Dim temp As String
        Dim cellVal As Variant
        
        For Each row In dataRange.Rows
            temp = ""
            For Each cellVal In row.Cells
                temp = temp & CStr(cellVal) & vbTab
            Next cellVal
            ' Remove trailing tab
            If Right(temp, 1) = vbTab Then
                temp = Left(temp, Len(temp) - 1)
            End If
            dataString = dataString & temp & vbCrLf
        Next row
    End If
    
    ' 4) Combine question + data
    Dim combinedPrompt As String
    combinedPrompt = question & vbCrLf & vbCrLf & "Data:" & vbCrLf & dataString
    
    ' 5) Call Gemini API and extract the text
    Dim answer As String
    answer = GetGeminiResponse(combinedPrompt)
    
    ' 6) Write the result to B2, then convert any **text** to bold
    ApplyBoldBetweenAsterisks ws.Range("B2"), answer
End Sub

Private Function GetGeminiResponse(ByVal prompt As String) As String
    Dim apiKey As String
    apiKey = "YOUR_API_HERE"  ' <-- Replace with your valid Gemini API key
    
    Dim endpoint As String
    endpoint = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-thinking-exp-01-21:generateContent?key=" & apiKey
    
    ' Build JSON payload
    Dim jsonBody As String
    jsonBody = _
        "{""contents"":[{""role"":""user"",""parts"":[{""text"":""" & EscapeJSON(prompt) & """}]}]," & _
        """generationConfig"":{""temperature"":1,""topK"":40,""topP"":0.95,""maxOutputTokens"":8192,""responseMimeType"":""text/plain""}}"
    
    ' 1) Create an HTTP request
    Dim http As Object
    Set http = CreateObject("MSXML2.XMLHTTP")
    
    ' 2) POST to Gemini
    http.Open "POST", endpoint, False
    http.setRequestHeader "Content-Type", "application/json"
    http.send jsonBody
    
    ' 3) Check status
    If http.Status <> 200 Then
        GetGeminiResponse = "API error: " & http.Status & " - " & http.statusText
        Exit Function
    End If
    
    ' 4) Parse the JSON to find the "text" field in "candidates[0].content.parts[0].text"
    Dim responseText As String
    responseText = http.responseText
    
    ' --- Simple extraction via RegExp
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

' ----------------------------------------------------
' Converts any \n or \t from the API into actual newlines/tabs
' ----------------------------------------------------
Private Function DecodeJSON(ByVal s As String) As String
    s = Replace(s, "\n", vbCrLf)
    s = Replace(s, "\t", vbTab)
    DecodeJSON = s
End Function

' ----------------------------------------------------
' Escapes quotes/backslashes for JSON
' ----------------------------------------------------
Private Function EscapeJSON(ByVal s As String) As String
    s = Replace(s, "\", "\\")
    s = Replace(s, """", "\""")
    EscapeJSON = s
End Function

' ----------------------------------------------------
' Replaces **text** with bold text in the target cell
' 1) Removes the asterisks from the displayed text
' 2) Applies partial bold formatting to that substring
' ----------------------------------------------------
Private Sub ApplyBoldBetweenAsterisks(ByVal targetCell As Range, ByVal rawText As String)
    Dim finalText As String: finalText = ""
    Dim boldSegments As New Collection
    
    Dim pos As Long: pos = 1
    Dim searchPos As Long: searchPos = 1
    Dim boldOn As Boolean: boldOn = False
    Dim boldStart As Long
    
    ' Loop to find pairs of "**"
    Do
        Dim foundPos As Long
        foundPos = InStr(searchPos, rawText, "**")
        If foundPos = 0 Then
            ' No more asterisks -> append the remainder
            finalText = finalText & Mid(rawText, pos)
            Exit Do
        End If
        
        If Not boldOn Then
            ' Starting a bold segment
            finalText = finalText & Mid(rawText, pos, foundPos - pos)
            boldOn = True
            boldStart = Len(finalText) + 1 ' record the position in finalText
            searchPos = foundPos + 2      ' skip "**"
            pos = searchPos
        Else
            ' Ending a bold segment
            finalText = finalText & Mid(rawText, pos, foundPos - pos)
            boldOn = False
            Dim boldLen As Long
            boldLen = Len(finalText) + 1 - boldStart
            boldSegments.Add Array(boldStart, boldLen)
            searchPos = foundPos + 2
            pos = searchPos
        End If
    Loop
    
    ' 1) Put the "clean" text (no **asterisks**) into the cell
    targetCell.Value = finalText
    
    ' 2) Apply bold to each segment
    Dim seg As Variant
    For Each seg In boldSegments
        Dim startIndex As Long, lengthBold As Long
        startIndex = seg(0)
        lengthBold = seg(1)
        
        ' Make sure the segment is valid in finalText
        If startIndex > 0 And (startIndex + lengthBold - 1) <= Len(finalText) Then
            targetCell.Characters(startIndex, lengthBold).Font.Bold = True
        End If
    Next seg
End Sub


