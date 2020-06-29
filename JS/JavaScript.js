document.body.innerHTML = '<h1>Working with JavaScript...</h1><p>JavaScript is the programming language of HTML and the Web. It is easy to learn. Web pages are not the only place where JavaScript is used. Many desktop and server programs use JavaScript. Node.js is the best known. Some databases, like MongoDB and CouchDB, also use JavaScript as their programming language. It is mainly used to link pages. </p>';


var myName='Susmitha';
var myAge = 19;
console.log(myName,myAge);

var num = [1, 2, 3, 4, 5];
var num1 = num[3];
console.log(num1.toString());
	
console.log(Math.pow(9,3));    
console.log(Math.sqrt(9));
console.log(Math.abs(-5.9));
console.log((6.4), Math.ceil(6.4), Math.round(6.4), Math.floor(6.4));
console.log(Math.sin(60 * Math.PI / 180));

<FORM NAME="joe">
<INPUT TYPE="hidden" NAME="burns">
</FORM>

<SCRIPT LANGUAGE="javascript">

var locate = window.location
document.joe.burns.value = locate

var text = document.joe.burns.value

function delineate(str)
{
theleft = str.indexOf("=") + 1;
theright = str.lastIndexOf("&");
return(str.substring(theleft, theright));
}
document.write("First Name is " +delineate(text));

</SCRIPT>