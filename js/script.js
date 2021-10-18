const formInput = document.getElementById('form-input');

let foodList = []

function createItem(){
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

    for(let i = 0; i < foods.length; i++){
        for(let j = 0; j < foods[i][1].length; j++){
            if(foodList.includes(foods[i][1][j])){
                matches.push(foods[i][1][j])
            }
        }

        let newP = document.createElement('p');
        newP.appendChild(document.createTextNode(foods[i][0] + " - " + (matches.length * 100 / foods[i][1].length).toFixed(1) + "% Match"))
        document.getElementById('food-list').appendChild(newP);

        matches = []
    }
}

document.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        createItem();
    }
})