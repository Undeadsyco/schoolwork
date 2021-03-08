$(document).ready(function(){
    changeHeader();
    addText();
    hideList();
    inputColor();
})

const changeHeader=()=>{
    $("header").hover(function(){
        $(this).css("background-color", "lightblue");
    }, function(){
        $(this).css("background-color", "indianred");
    });
}

const addText=()=>{
    $("p").click(function(){
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
    });
}

const hideList=()=>{
    $("ul").dblclick(function(){
        $(this).hide();
    });
}

const inputColor=()=>{
    $("input").keydown(function(){
        $(this).toggleClass("input");
    });
}