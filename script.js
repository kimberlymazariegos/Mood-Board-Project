var happy=["https://cdn.tinybuddha.com/wp-content/uploads/2015/06/Happy-Woman.jpg"];
var hangry=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutbGZuSxO0YC0Lp4t58nOX6Qa63TAMtKe_rUOOgPsHJU9244q"];
var stressed=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXFo6T0y16gyW6I5eouQEywIAykx074I254SY5O8JqztkUvFBnWg"];
var lazy=["https://blog.malwarebytes.com/wp-content/uploads/2019/02/shutterstock_461354353-900x506.jpg"];

$('button').click(function(){
    var input = $('input').val();
    $(".images").html("");
    if(input === "happy"){
        happyMood(input);
    }else if(input==="hangry"){
        hangryMood(input);
    }else if(input==="stressed"){
        stressedMood(input);
    }else if(input==="lazy"){
        lazyMood(input);
    }else{
        alert("Please enter happy, hangry, stressed, or lazy");   
    }
});

function changeBackground(color){
    $("html").css("background-color", color);
}
function changeTextColor(color){
    $("p").css("color", color);
}
function displayImage(image){
    $('.images').append('<img src ='+ image + '>');
}

function happyMood(){
    changeBackground("yellow");
    changeTextColor("blue");
    displayImage(happy);
}
function hangryMood(){
    changeBackground("green");
    changeTextColor("orange");
    displayImage(hangry);
}
function stressedMood(){
    changeBackground("red");
    changeTextColor("white");
    displayImage(stressed);
}
function lazyMood(){
    changeBackground("blue");
    changeTextColor("yellow");
    displayImage(lazy);
}