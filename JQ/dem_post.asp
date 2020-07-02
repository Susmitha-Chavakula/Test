<%
dim name,email
name=Request.Form("name")
email=Request.Form("email")
Response.Write("Dear " & name & ". ")
Response.Write("Hope you live well in " & email & ".")
%>