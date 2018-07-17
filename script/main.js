var modal = document.getElementById("simplemodal");
var modalBTN = document.getElementById("modalBTN");
var closeBTN = document.getElementsByClassName("closeBTN") [0];

modalBTN.addEventListener("click", openmodal);
closeBTN.addEventListener("click", closeModal);
window.addEventListener("click", clickoutside);

function openmodal(){
	modal.style.display = "block";
}

function closeModal(){
	modal.style.display = "none";
}

function clickoutside(e){ 
	if(e.target == modal)
	{
	modal.style.display = "none";
}
}

var modal2 = document.getElementById("simplemodal2");
var modalBTN2 = document.getElementById("modalBTN2");
var closeBTN2 = document.getElementsByClassName("closeBTN2") [0];

modalBTN2.addEventListener("click", openmodal2);
closeBTN2.addEventListener("click", closeModal2);
window.addEventListener("click", clickoutside2);

function openmodal2(){
	modal2.style.display = "block";
}

function closeModal2(){
	modal2.style.display = "none";
}

function clickoutside2(e){ 
	if(e.target == modal2)
	{
	modal2.style.display = "none";
}
}

var modal3 = document.getElementById("simplemodal3");
var modalBTN3 = document.getElementById("modalBTN3");
var closeBTN3 = document.getElementsByClassName("closeBTN3") [0];

modalBTN3.addEventListener("click", openmodal3);
closeBTN3.addEventListener("click", closeModal3);
window.addEventListener("click", clickoutside3);

function openmodal3(){
	modal3.style.display = "block";
}

function closeModal3(){
	modal3.style.display = "none";
}

function clickoutside3(e){ 
	if(e.target == modal3)
	{
	modal3.style.display = "none";
}
}

var modal4 = document.getElementById("simplemodal4");
var modalBTN4 = document.getElementById("modalBTN4");
var closeBTN4 = document.getElementsByClassName("closeBTN4") [0];

modalBTN4.addEventListener("click", openmodal4);
closeBTN4.addEventListener("click", closeModal4);
window.addEventListener("click", clickoutside4);

function openmodal4(){
	modal4.style.display = "block";
}

function closeModal4(){
	modal4.style.display = "none";
}

function clickoutside4(e){ 
	if(e.target == modal4)
	{
	modal4.style.display = "none";
}
}