const formInput = document.getElementById('form-input');

let foodList = [];
let items = [];
let matches = [];
let include = false;

function createItem(){

    if(formInput.value.slice(-3) == "ies"){
        formInput.value = formInput.value.substring(0, formInput.value.length - 3)
        formInput.value += "y";
    }

    if(formInput.value.slice(-2) == "es"){
        formInput.value = formInput.value.substring(0, formInput.value.length - 2)
    }

    if(formInput.value.slice(-1) == "s"){
        if(!formInput.value.slice(-2) == "ss"){
            formInput.value = formInput.value.substring(0, formInput.value.length - 1)
        }
    }

    if(ingredients.includes(formInput.value.toLowerCase()) && !foodList.includes(formInput.value.toLowerCase())){
        let newP = document.createElement('p')
        const words = formInput.value.toLowerCase().split(" ")
        let final = ""

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            if(i < words.length - 1){
                final += words[i] + " "
            } else {
                final += words[i]
            }
        }

        newP.appendChild(document.createTextNode(final));
        document.getElementById('form-list').appendChild(newP)
        foodList.push(formInput.value.toLowerCase());
        formInput.value = "";
    } else {
        formInput.value = "";
    }
}

function searchAlgReal(i){
    for(let j = 0; j < foods[i][2].length; j++){
        if(foodList.includes(foods[i][2][j])){
            matches.push(foods[i][2][j])
        }
    }

    include = true;
    for(let j = 0; j < foods[i][1].length; j++){
        if(!foodList.includes(foods[i][1][j])){
            include = false;
        }
    }

    if(include){
        if(items.length == 0){
            items.push([i,matches.length / foods[i][2].length])
        } else {
            for(let j = 0; j < items.length + 1; j++){
                let matchAmount = matches.length / foods[i][2].length;
                items.splice(j, 0, [i,matches.length / foods[i][2].length]);
                return;
            }
        }
    }

    matches = []
}

function searchFoods(){
    const myNode = document.getElementById("food-list");

    items = [];
    matches = [];
    include = true;

    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    for(let i = 0; i < foods.length; i++){
        searchAlgReal(i)
    }

    for(let i = 0; i < items.length; i++){
        let newP = document.createElement('p');
        let newImage = document.createElement('img')
        newImage.src = "./icons/foods/" + foods[items[i][0]][4] + ".png"
        newP.appendChild(newImage)
        newP.appendChild(document.createTextNode(foods[items[i][0]][0] + " - " + (items[i][1] * 100).toFixed(1) + "% Match"))
        myNode.appendChild(newP);
    }
}

document.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        createItem();
    }
})