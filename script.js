const formInput = document.getElementById('form-input');
const foodItems = ['onion', 'ketchup', 'mustard', 'ranch', 'patty', 'tomato', 'lettuce', 'spinach', 'paneer', 'bread', 'naan', 'pasta', 'marinara sauce', 'cucumber', 'chilli', 'cilantro', 'coriander', 'carrot', 'pickle', 'kale', 'apple', 'banana', 'orange', 'grape', 'pear', 'salt', 'pepper', 'sugar', 'potato', 'zucchini', 'cauliflower', 'flour'];

let foodList = []

function createItem(){
    if(foodItems.includes(formInput.value.toLowerCase()) && !foodList.includes(formInput.value.toLowerCase())){
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

document.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        createItem();
    }
})