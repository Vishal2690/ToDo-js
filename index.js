
function setTime() {
    document.getElementById("sr-container").style.filter = "blur(8px)";
    document.getElementById("sr1-container").style.visibility =
        "visible";
    document.getElementById("add-some-msg").style.display = "none";
}

let addSumObj = [];
function addObj1() {
    let changetext = document.getElementById("list").value;
   
    let myObj = {
        id: Date.now(),
        taskName: changetext,
    }

    addSumObj.push(myObj);
    selectedFunction()

}

function selectedFunction() {

    let addCard = document.createElement("div")
    let addTextinHead = document.createElement("div");
    let midDiv = document.createElement("div");
    let addSomeImg = document.createElement("div");
    let headingAdd = document.createElement("h1");
    let addImg = document.createElement("i");
    let changeimg = document.createElement("i");
   

    addCard.setAttribute("class", "flex-card");
    addCard.setAttribute("id", "cardId");

    addTextinHead.setAttribute("class", "head-div");
    addTextinHead.setAttribute("id", "head-div-Id");

    midDiv.setAttribute("class", "middle-div");
    midDiv.setAttribute("id", "middle-div-Id");

    addSomeImg.setAttribute("class", "icon-div");
    addSomeImg.setAttribute("id", "icon-div-Id");

    addImg.setAttribute("class", "fa fa-pencil-square-o");
    addImg.setAttribute("id", "add-icon");

    changeimg.setAttribute("class", "fas fa-trash-alt");
    changeimg.setAttribute("id", "deleteIcon");




    let headingText = document.createTextNode(addSumObj[addSumObj.length - 1].taskName);
    headingAdd.appendChild(headingText)
    addTextinHead.appendChild(headingAdd);
    addCard.appendChild(addTextinHead);
    addCard.appendChild(midDiv);
    addSomeImg.appendChild(changeimg);
    addSomeImg.appendChild(addImg);
    addCard.appendChild(addSomeImg);




    //deleting the card

    changeimg.addEventListener('click', () => {
        addCard.remove();
    })


    //creating again mini item
    addImg.addEventListener('click', () => {
        document.getElementById("sr-container").style.filter = "blur(8px)";
        document.getElementById("sr2-container").style.visibility =
            "visible";

    })

 




    document.getElementById("main-flex-container").appendChild(addCard);
    document.getElementById("sr1-container").style.visibility = "hidden";

    document.getElementById("sr-container").style.filter = "blur(0px)";


    addTextinHead.addEventListener('click', () => {
        document.getElementById("top-heading").style.display = "none";        
        document.getElementById("card-header-content").style.display = "block";
        document.getElementById("middle-mini-item-heading").innerHTML = addSumObj[addSumObj.length - 1].taskName;
        document.getElementById("add-list").innerText = "";
        document.getElementById("main-flex-container").style.visibility = "hidden";
        addCard.style.visibility = "visible";
        document.getElementById("middle-mini-item-heading").style.fontSize = "50px";



    })
}



function addObj2() {
    document.getElementById("sr1-container").style.visibility = "hidden";
    document.getElementById("sr2-container").style.visibility = "hidden";
    document.getElementById("sr-container").style.filter = "blur(0px)";
    document.getElementById("add-some-msg").style.display="block";
    
}
let miniAddBtn = document.getElementById("miniaddbtn");
miniAddBtn.addEventListener("click", miniItemObj);

function wrostAgain() {
    document.getElementById("sr1-container").style.visibility = "hidden";
    document.getElementById("sr2-container").style.visibility = "hidden";
    document.getElementById("sr-container").style.filter = "blur(0px)";
    document.getElementById("add-some-msg").style.display="block";
    
}

let myArray = [];
function miniItemObj() {
    let inputValue = document.getElementById("nextlist").value;
    let miniObj = {
        id: Date.now(),
        miniItemName: inputValue,
    }

    myArray.push(miniObj);
    addItem()


}

function addItem() {


    let miniItemDiv = document.createElement("div");
    let itemSpan = document.createElement("span");
    let cancelItem = document.createElement("span");
    let v = document.createTextNode(myArray[myArray.length - 1].miniItemName);
    let i = document.createElement("i");


    miniItemDiv.setAttribute("class", "mini-item-div");
    itemSpan.setAttribute("id", "mini-item");
    i.setAttribute("class", "fa fa-check-circle-o");
    cancelItem.setAttribute("id", "change-item");


    miniItemDiv.appendChild(itemSpan);
    miniItemDiv.appendChild(cancelItem);
    itemSpan.appendChild(v);
    cancelItem.appendChild(i);
    document.getElementById("middle-div-Id").appendChild(miniItemDiv);





    cancelItem.addEventListener('click', () => {
        cancelItem.style.color = "blue";
        itemSpan.style.textDecoration = "line-through";
        itemSpan.style.color = "red";

    })

    document.getElementById("sr2-container").style.visibility = "hidden";

    document.getElementById("sr-container").style.filter = "blur(0px)";
task-input-button
}
