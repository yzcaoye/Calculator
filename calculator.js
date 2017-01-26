var para1=0;
var para2=0;
var operator="+";
var text="0";

function clickC(){
	var content=document.getElementById("content");
	content.innerText="0";
	var oper=document.getElementById("oper");
	oper.innerText="";
	para1=0;
	para2=0;
	operator="+";
}

function click1(){
	var content=document.getElementById("content");
	var content_text="";
	if(text=="0"){
		content_text="1";
	}
	else{
		content_text=text+"1";
	}
	content.innerText=content_text;
	text=content_text;
}
function click2(){
	var content=document.getElementById("content");
	var content_text="";
	if(text=="0"){
		content_text="2";
	}
	else{
		content_text=text+"2";
	}
	content.innerText=content_text;
	text=content_text;

}
function click3(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="3";
	}
	else{
		content_text=text+"3";
	}
	content.innerText=content_text;
	text=content_text;
}
function click4(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="4";
	}
	else{
		content_text=text+"4";
	}
	content.innerText=content_text;
	text=content_text;
}
function click5(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="5";
	}
	else{
		content_text=text+"5";
	}
	content.innerText=content_text;
	text=content_text;

}
function click6(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="6";
	}
	else{
		content_text=text+"6";
	}
	content.innerText=content_text;
	text=content_text;

}
function click7(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="7";
	}
	else{
		content_text=text+"7";
	}
	content.innerText=content_text;
	text=content_text;

}
function click8(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="8";
	}
	else{
		content_text=text+"8";
	}
	content.innerText=content_text;
	text=content_text;

}
function click9(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="9";
	}
	else{
		content_text=text+"9";
	}
	content.innerText=content_text;
	text=content_text;

}
function click0(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text=="0"){
		content_text="0";
	}
	else{
		content_text=text+"0";
	}
	content.innerText=content_text;
	text=content_text;

}

function clickPoint(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(text.indexOf(".")<0){
		content_text=text+".";
		content.innerText=content_text;
		text=content_text;
	}
}

function equal(){
	para2=document.getElementById("content").innerText;
	var result=calculate(para1,para2,operator);
	para1=0;
	if(para1=="err") para1=0;
	document.getElementById("content").innerText=result;
	document.getElementById("oper").innerText="";
	text="0";
	para2=0;
	operator="+";
}
function calculate(p1,p2,operator){
	var pp1=parseFloat(p1);
	var pp2=parseFloat(p2);
	if(operator=="+"){
		return parseFloat(pp1)+parseFloat(pp2);
	}
	else if(operator=="-"){
		return pp1-pp2;
	}
	else if(operator=="*"){
		return pp1*pp2;
	}
	else{
		if(p2!=0){
			return pp1/pp2;
		}
		else{
			return "err";
		}
	}
}

function add(){
	var content=document.getElementById("content");
	document.getElementById("oper").innerText="+";
	
	para2=content.innerText;
	if(para2=="err") para2=0;
	content.innerText=calculate(para1,para2,operator);
	para1=calculate(para1,para2,operator);
	operator="+";
	if(para1=="err") para1=0;
	text="0";

}

function multiply(){
	var content=document.getElementById("content");
	document.getElementById("oper").innerHTML="&times";
	
	para2=content.innerText;
	if(para2=="err") para2=0;
	content.innerText=calculate(para1,para2,operator);
	para1=calculate(para1,para2,operator);
	operator="*";
	if(para1=="err") para1=0;
	text="0";
}

function minus(){
	var content=document.getElementById("content");
	document.getElementById("oper").innerHTML="-";
	
	para2=content.innerText;
	if(para2=="err") para2=0;
	content.innerText=calculate(para1,para2,operator);

	para1=calculate(para1,para2,operator);
	operator="-";
	if(para1=="err") para1=0;
	text="0";
}
function divide(){
	var content=document.getElementById("content");
	document.getElementById("oper").innerHTML="&divide";	
	para2=content.innerText;
	if(para2=="err") para2=0;
	content.innerText=calculate(para1,para2,operator);
	para1=calculate(para1,para2,operator);
	operator="/";
	if(para1=="err") para1=0;
	text="0";
}

function sign(){
	var content=document.getElementById("content");
	var content_text=content.innerText;
	if(content_text=="0"||content_text=="0."||content_text=="err"){

	}
	else if(content_text.indexOf("-")<0){
		content_text="-"+content_text;
	}
	else{
		content_text=content_text.substring(1);
	}
	content.innerText=content_text;
	text=content_text;
}