let nr = 0;
var doneTask = 0;

function buttonClicked(){
    var nodeList = document.getElementsByTagName("li");
    var li = document.createElement("li");
    var inputValue = document.getElementById("centerBlock").value;
    var txt = document.createTextNode(inputValue);
    var checkBox = document.createElement("input");
    nr = nodeList.length + 1;
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "checkBox" + nr);
	li.setAttribute("id", "list" + nr);
    
    li.appendChild(checkBox);
    li.appendChild(txt);

    if (inputValue === '') {
        alert("nothing to print");
    }
    else {
        document.getElementById('list0').appendChild(li);
    }
    document.getElementById("doneCounter").textContent=doneTask+" / "+nr;
	checkBox.addEventListener("click", function(){
		let nummer = this.id.substring(this.id.length-1);
		strikeThrough(nummer);
	});
};

function strikeThrough(idNr) {
		let selectedCheckBox = document.getElementById("checkBox" + idNr);
		let liElement = document.getElementById("list" + idNr);
		console.log(liElement);
		if (selectedCheckBox.checked == true){
			console.log("this is checked");
			liElement.style.textDecoration = "line-through";
            doneTask = doneTask + 1;
		}
		else{
			liElement.style.textDecoration = "none";
            doneTask = doneTask - 1;
		}
        document.getElementById("doneCounter").textContent=doneTask+" / "+nr;
}


window.onload = function() {
    document.getElementById("centerBlock").focus();
  };
