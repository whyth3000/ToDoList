// function getTask(){
//     var input1 = document.getElementById("centerBlock").value;
//     console.log (input1);
// }
// function printTask(){
//     var list = document.getElementById("")
// }

function buttonClicked(){
    var nodeList = document.getElementsByTagName("li");
    var li = document.createElement("li");
    var inputValue = document.getElementById("centerBlock").value;
    var txt = document.createTextNode(inputValue);
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    li.appendChild(checkBox);
    li.appendChild(txt);

    if (inputValue === '') {
        alert("nothing to print");
    }
    else {
        document.getElementById('list1').appendChild(li);
    }
}

// let counter = 0
// setInterval(() => {
//     counter++
// }, 1000);

var count = 0;
function counter(){
    var y=document.getElemenetById("checkBox").checked;
    if(Number(y)== 1)
    {
    count+=1;
    }
    else
    {
    count;
    }
    return count;
}