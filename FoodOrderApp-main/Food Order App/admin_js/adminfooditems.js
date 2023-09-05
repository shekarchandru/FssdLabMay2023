//To load all available categories in Add Food Page
function loadCategories(){
    var parentElement = document.getElementById("category");
    parentElement.innerHTML="";
    for(categoryId in categoryCollection){
        var categoryObj = categoryCollection[categoryId];
        var categoryName = categoryObj["name"];
        parentElement.innerHTML +='<option value="'+categoryName+'">'+categoryName+'</option>';
    };
}

//To load all available cuisines in Add Food Page
function loadCuisines(){
    //Task 1.i
    //Write the code here to display cuisine names in the Cuisine dropdown menu on Add FoodItem webpage
    var cuisine = document.getElementById("cuisine");
    cuisine.innerHTML = "";
    for(var itr in cuisineCollection){
        //var cuisine = document.getElementById("cuisine");
        var cuisineOption = document.createElement("option");
        cuisineOption.text = cuisineCollection[itr]["name"];
        //console.log(cuisineCollection[itr]["name"]);
        cuisine.appendChild(cuisineOption);
    }
}

//View All Food Items Info
//View All Food Items Info
function listFoodItems(){
    var fooditemTable = document.getElementById("fooditemstable");
    for(fooditemId in foodItemsCollection){
        var fooditemObj = foodItemsCollection[fooditemId];
        fooditemTable.innerHTML += "<tr><td>"+fooditemObj['id']+"</td>"+
                                    "<td>"+fooditemObj['title']+"</td>"+
                                    "<td>"+fooditemObj['description']+"</td>"+
                                    "<td>"+fooditemObj['inStock']+"</td>"+
                                    "<td>"+fooditemObj['isVeg']+"</td>"+
                                    "<td>"+fooditemObj['category']+"</td>"+
                                    "<td>"+fooditemObj['cuisine']+"</td>"+
                                    '<td><img src="'+fooditemObj['image']+'" style="width:100px;height:100px;"'+'></td>'+
                                    '<td><button id="'+fooditemObj['id']+'" class="btn btn-primary">Edit</button></td></tr>';
    }
}