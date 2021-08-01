console.log("Mam When You will run the functions, it is possible that text is not vissible");
console.log("This is because text is similar to background color");

menu_list_array = ["Chicken Tandoori Pizza",
                   "Veg Supreme  Pizza",
                   "Paneer Tikka Pizza",
                   "Deluxe Veggie Pizza",
                   "Veg Extravaganza Pizza"
                  ];

function getmenu(){
    var htmldata;
    htmldata = "<ol class='menulist'>";
  menu_list_array.sort();
   for(var i=0;i<menu_list_array.length;i++){
        htmldata = htmldata+'<li>' + menu_list_array[i] + '</li>';
    }
    htmldata = htmldata + "</ol>";
    document.getElementById("display_menu").innerHTML = htmldata;
} 

function add_item(){
    console.log("Add Item Function is working but not sure about Stylesheet");
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>";
    for(var i=0;i < menu_list_array.length;i++){
        htmldata = htmldata + "<div class='cards'>" + "<img src='images/pizzaImg.png'" + menu_list_array[i] + "</div>";
        console.log("Text Displayed")
    }
    htmldata = htmldata + "</section>";
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}