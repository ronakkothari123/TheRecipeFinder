var foods = [
    ["Burger", ["bread", "patty"], ["bread", "cheese", "tomato", "patty", "ketchup", "mustard", "onion", "chilli", "pepper", "salt", "cheese"], ["breakfast"], 0],
    ["Pasta", ["pasta"], ["pasta", "marinara sauce", "salt", "pepper", "black pepper"], ["breakfast", "lunch"], 5],
    ["Chole Bhature", ["chickpea"], ["bhatura", "chickpea", "yogurt", "sugar", "baking soda", "salt", "oil", "tea", "cardamom", "cumin", "cinnamon", "onion", "ginger", "garlic", "chilli", "turmeric", "coriander", "spice", "butter", "ghee"], ["lunch", "dinner"], 4],
    ["Macaroni & Cheese", ["pasta", "cheese"], ["cheese", "pasta", "milk", "butter", "salt"], ["breakfast"], 5],
    ["Pav Bhaji", ["bread", "potato"], ["butter", "onion", "chilli", "pepper", "turmeric", "potato", "salt", "pea", "spice", "ginger", "garlic", "coriander", "lemon", "bell pepper", "bread", "spinach"], ["lunch", "dinner"], 4],
    ["Paneer Tikka Masala", ["paneer"], ["yogurt", "turmeric", "chilli", "cumin", "coriander", "pepper", "salt", "oil", "lemon", "ginger", "garlic", "bell pepper", "paneer", "cinnamon", "cardamom", "onion", "tomato", "coriander"], ["lunch"], 4],
    ["Dal Makhani", ["lentil"], ["lentil", "salt", "ginger", "garlic", "tomato", "tumeric", "cumin", "coriander", "onion", "chilli", "yogurt", "ghee", "spice", "pepper", "asafoetida"], ["lunch", "dinner"], 4],
    ["Pancakes", ["egg"], ["flour", "milk", "egg", "butter", "sugar", "baking powder", "salt"], ["breakfast"], 2],
    ["Pizza", ["cheese", "marinara sauce"], ["bread", "marinara sauce", "cheese", "chilli", "tomato", "mushroom", "pepperoni", "chicken", "paneer"], ["breakfast", "lunch", "dinner"], 2],
    ["Butter Chicken", ["butter", "chicken"], ["butter", "chicken", "chilli", "spice", "tomato", "onion", "garlic", "ginger"], ["lunch", "dinner"], 1],
    ["Sandwich", ["bread"], ["bread", "tomato", "lettuce", "mustard", "ketchup", "butter", "onion", "cucumber", "salt", "potato", "coriander"], ["breakfast"], 8],
    ["Salad", ["lettuce"], ["lettuce", "spinach", "ranch", "cucmber", "carrot", "onion"], ["breakfast"], 6],
    ["Apple Pie", ["apple"], ["apple", "sugar", "flour", "salt", "lemon", "cinnamon", "nutmeg"], ["dessert"], 3],
    ["Roast Chicken", ["chicken"], ["lemon", "lime", "chicken", "garlic", "salt", "chilli", "pepper", "onion", "butter"], ["lunch", "dinner"], 1],
    ["Ice Cream", ["vanilla", "milk"], ["vanilla", "milk", "salt"], ["dessert"], 7],
    ["Aloo Gobi", ["potato", "cauliflower"], ["chilli", "oil", "potato", "cauliflower", "ginger", "garlic", "turmeric", "salt", "coriander", "pepper"], ["lunch", "dinner"], 4],
    ["Fish Curry", ["fish"], ["fish", "salt", "chilli", "turmeric", "oil", "mustard seed", "asafoetida", "ginger", "garlic", "curry leaf", "onion", "tomato", "milk"], ["lunch", "dinner"], 1],
    ["Chicken Biryani", ["rice", "chicken"], ["rice", "chicken", "yogurt", "ginger", "garlic", "salt", "chilli", "spice", "lemon", "turmeric", "saffron", "cardamom", "cumin", "onion"], ["breakfast", "lunch", "dinner"], 1],
    ["Vegetable Biryani", ["rice"], ["rice", "cinnamon", "cardamom", "garlic", "cumin", "ginger", "chilli", "onion", "potato", "pea", "carrot", "cauliflower", "bean", "coriander", "salt", "turmeric", "spice", "yogurt"], ["breakfast", "lunch", "dinner"], 4],
    ["Grilled Cheese Sandwich", ["bread", "cheese"], ["bread", "cheese", "salt", "pepper"], ["breakfast"], 0],
    ["Bean Burrito", ["tortilla"], ["tortilla", "rice", "lime", "onion", "garlic", "oil", "bean", "chilli", "cumin", "hot sauce", "salt"], ["breakfast", "lunch", "dinner"], 9],
    ["Lemongrass Tofu", ["lemongrass", "tofu"], ["oil", "onion", "garlic", "lemongrass", "chilli", "tofu", "spice", "salt"], ["lunch", "dinner"], 4],
]

// Template for new item
// ["", [], [], [], 0],
// 1: Name
// 2: Key Ingredients
// 3: Ingredients
// 4: Meal Time
// 5: Icon Number

//Icon Numbers
//0: Burger
//1: Meat
//2: Pizza
//3: Donut
//4: Meal
//5: Fries
//6: Salad
//7: Ice-cream
//8: Sandwich
//9: Burrito