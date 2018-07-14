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