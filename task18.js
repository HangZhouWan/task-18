// JavaScript Document
window.onload = function(){
	ChangeList();
}

var list = [];


function ChangeList(){
	var leftIn = document.getElementById("left-in");
	var rightIn = document.getElementById("right-in");
	var leftOut = document.getElementById("left-out");
	var rightOut = document.getElementById("right-out");
	leftIn.onclick = Unshift;
	rightIn.onclick = Push;
	leftOut.onclick = Shift;
	rightOut.onclick = Pop;
}
function diplayList(){
	var container = document.getElementById("container");
	var inner = "";
	for(i in list){
		inner += "<span>"+list[i]+"</span>";
	}
	container.innerHTML = inner;
}

function Unshift(){
	var input = document.getElementById("input").value;
	if(typeof(input.number()) =="number"){
	list.unshift(input);
	}
	document.getElementById("input").value = "";
	diplayList()
}
function Push(){
	var input = document.getElementById("input").value;
	if(typeof(input.number()) =="number"){
	list.push(input);
	}
	document.getElementById("input").value = "";
	diplayList();
}
function Shift(){
	var input = document.getElementById("input").value;
	if(list.length!==0){
	var items = list.shift();
	alert(items);
	}
	diplayList();
}
function Pop(){
	var input = document.getElementById("input").value;
	if(list.length!==0){
	var items = list.pop();
	alert(items);
	}
	diplayList();
}
