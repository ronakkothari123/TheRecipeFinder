const formInput = document.getElementById('form-input');

let foodList = []

function createItem(){

    if(formInput.value.slice(-3) == "ies"){
        formInput.value = formInput.value.substring(0, formInput.value.length - 3)
    }

    if(formInput.value.slice(-2) == "es"){
        formInput.value = formInput.value.substring(0, formInput.value.length - 2)
    }

    if(formInput.value.slice(-1) == "s"){
        formInput.value = formInput.value.substring(0, formInput.value.length - 1)
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

function searchFoods(){
    let matches = []
    let include = false;

    const myNode = document.getElementById("food-list");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }

    for(let i = 0; i < foods.length; i++){
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
            let newP = document.createElement('p');
        newP.appendChild(document.createTextNode(foods[i][0] + " - " + (matches.length * 100 / foods[i][2].length).toFixed(1) + "% Match"))
        myNode.appendChild(newP);
        }

        matches = []
    }
}

document.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        createItem();
    }
})