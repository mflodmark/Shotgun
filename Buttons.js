
var loadBtn = "#loadBtn";
var shotgunBtn = "#shotgunBtn";
var shootBtn = "#shootBtn";
var blockBtn = "#blockBtn";
var time = 500;

$("#playAgainBtn").hide();
$("#info").hide();
$(".container").hide();

$("#playAgainBtn").click(function(){
    location.reload();
});

$("#infoBtn").click(function(){
    $("#info").slideToggle(750);
});

$("#ready-to-play").click(function(){
    $("#ready-to-play").hide(250);    
    $(".jumbotron img").hide(250);    
    $(".jumbotron p").hide(250);    
    $(".container").show(500);
    $("#shotgunBtn").fadeOut(2000);
    $("#shootBtn").fadeOut(1500);
});

$("#loadBtn").click(function() {
    user.choice = "Ladda";
    computer.getChoice();
    user.useChoice();    
});

$("#blockBtn").click(function(){
    user.choice = "Blocka"; 
    computer.getChoice();    
    user.useChoice();
});

$("#shootBtn").click(function(){
    user.choice = "Skjut"; 
    computer.getChoice();    
    user.useChoice();
});

$("#shotgunBtn").click(function(){
    user.choice = "Shotgun";
    computer.getChoice();    
    user.useChoice();
});

function buttonClickAnimation(btn) {
    // $(btn).css("background-color","#e67e22");
    // setTimeout(function() {
    //     $(btn).css("background-color", "#337ab7");    
    // }, time); 
}

// $(loadBtn).hover(function(){
//     $(loadBtn).removeClass("btn-md");
//     $(loadBtn).addClass("btn-lg");
// }, function() {
//     $(loadBtn).removeClass("btn-lg");
//     $(loadBtn).addClass("btn-md");
// });


// $(blockBtn).hover(function(){
//     $(blockBtn).removeClass("btn-md");
//     $(blockBtn).addClass("btn-lg");
// }, function() {
//     $(blockBtn).removeClass("btn-lg");
//     $(blockBtn).addClass("btn-md");
// });


// $(shootBtn).hover(function(){
//     $(shootBtn).removeClass("btn-md");
//     $(shootBtn).addClass("btn-lg");
// }, function() {
//     $(shootBtn).removeClass("btn-lg");
//     $(shootBtn).addClass("btn-md");
// });


// $(shotgunBtn).hover(function(){
//     $(shotgunBtn).removeClass("btn-md");
//     $(shotgunBtn).addClass("btn-lg");
// }, function() {
//     $(shotgunBtn).removeClass("btn-lg");
//     $(shotgunBtn).addClass("btn-md");
// });