var plusColor = "limeGreen";
var minusColor = "red";
var userShotId = "#userShots";
var computerShotId = "#computerShots";
var time = 1000;

function UpdateButtonsAfterRound() {
    UpdateLoadBtn(user);
    UpdateLoadBtn(computer);
}

function UserShotPlus() {
    user.shots += 1;
    
    $(userShotId).css("color", plusColor);
    setTimeout(function() {
        $(userShotId).css("color", "black");    
    }, time);  
    
    UpdateUserShots(); 
}

function ComputorShotPlus() {
    computer.shots += 1;
    
    $(computerShotId).css("color", plusColor);
    setTimeout(function() {
        $(computerShotId).css("color", "black");    
    }, time);  
    
    UpdateComputorShots(); 
}

function UserShotMinus() {
    user.shots -= 1;
    
    $(userShotId).css("color", minusColor);
    setTimeout(function() {
        $(userShotId).css("color", "black");    
    }, time); 
    
    UpdateUserShots();  
}

function ComputorShotMinus() {
    computer.shots -= 1;
   
    $(computerShotId).css("color", minusColor);
    setTimeout(function() {
        $(computerShotId).css("color", "black");    
    }, time); 
    
    UpdateComputorShots();  
}

function GetRandomComputorChoice() {
    var choices = [];
    
    if (computer.block.value == true) {
        if (user.shots !== 0) {
            choices.push(computer.block.key);
        }
    } 

    if (computer.reload.value == true) {
        choices.push(computer.reload.key);
    } 

    if (computer.shoot.value == true) {
        choices.push(computer.shoot.key);
    } 

    if (computer.shotgun.value == true) {
        choices.push(computer.shotgun.key);
    } 

    var rnd = choices[Math.floor(Math.random() * choices.length)];

    console.log(round);
    choices.forEach(element => {
        console.log(element);
    });

    UpdateRoundText("computerRound", rnd);

    return rnd;    
}

function UserKilled() {
    document.getElementById("result").innerHTML = "Datorn sköt dig och vann!";
    $("#loadBtn").hide(50);
    $("#shootBtn").hide(250);
    $("#shotgunBtn").hide(350);
    $("#blockBtn").hide(450);    
    $("#playAgainBtn").addClass("btn-danger");
    $("#playAgainBtn").show(500);
}

function ComputerKilled() {
    document.getElementById("result").innerHTML = "Du sköt datorn och vann!";
    $("#loadBtn").hide(50);
    $("#shootBtn").hide(250);
    $("#shotgunBtn").hide(350);
    $("#blockBtn").hide(450);    
    $("#playAgainBtn").addClass("btn-success");
    $("#playAgainBtn").show(500);
}

function UpdateUserShots() {
    document.getElementById("userShots").innerHTML = user.shots;    
}

function UpdateComputorShots() {
    document.getElementById("computerShots").innerHTML = computer.shots;        
}

function UpdateLoadBtn(player) {
    var shootBtn = document.getElementById("shootBtn");
    var shotgunBtn = document.getElementById("shotgunBtn");

    if (player.shots >= 1 && player.shots <= 2) {
        PlayerShootTrue(player, shootBtn);
        PlayerShotgunFalse(player, shotgunBtn);
    } else if (player.shots >= 3) {
        PlayerShootTrue(player, shootBtn);
        playerShotgunTrue(player, shotgunBtn);
    } else {
        PlayerShootFalse(player, shootBtn);
        PlayerShotgunFalse(player, shotgunBtn);        
    }
}

function UpdateRoundText(player, text) {
    var round = document.getElementById(player);    
    round.innerHTML = text;
}

function UpdateRoundNumber() {
    var round = document.getElementById("round");
    var nrAsText = round.innerHTML;
    var nrAsNumber = Number(nrAsText);
    round.innerHTML = nrAsNumber + 1;
}

function PlayerShootTrue(player, btn) {
    player.shoot.value = true;    

    if (player.name == "User") {
        $("#shootBtn").fadeIn(1000);
        btn.classList = "btn btn-primary active btn-lg";
    }
}

function playerShotgunTrue(player, btn) {
    player.shotgun.value = true;    

    if (player.name == "User") {
        $("#shotgunBtn").fadeIn(1000);
        btn.classList = "btn btn-primary active btn-lg";  
    }
}

function PlayerShotgunFalse(player, btn) {
    player.shotgun.value = false;    

    if (player.name == "User") {
        btn.classList = "btn btn-primary disabled btn-lg";
        $("#shotgunBtn").fadeOut(1000);                
    }
}

function PlayerShootFalse(player, btn) {
    player.shoot.value = false;
    
    if (player.name == "User") {
        btn.classList = "btn btn-primary disabled btn-lg"; 
        $("#shootBtn").fadeOut(1000);        
    }
}


