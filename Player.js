function Player() {
    this.shots = 0;

    this.shoot = {key:"Skjut", value:false};
    this.block = {key:"Blocka", value:true};
    this.shotgun = {key:"Shotgun", value:false};
    this.reload = {key:"Ladda", value:true};
    this.choice = "";
    
    this.getChoice = function() {
        if (this.name == "Computer") {
            var computorChoice = GetRandomComputorChoice();
            computer.choice = computorChoice;
        } else if (this.name == "User") {
            // Do nothing - choice will be updated with events
        }
    };

    this.useChoice = function() {
        if (user.choice == "Ladda") {
            LoadFunc();
        } else if (user.choice == "Blocka") {
            BlockFunc();
        } else if (user.choice == "Skjut") {
            ShootFunc();
        } else if (user.choice == "Shotgun"){
            ShotgunFunc();
        }
    };  
}

function LoadFunc() {
    buttonClickAnimation("#loadBtn");
    UpdateRoundNumber();    
    
    if (computer.choice == user.reload.key) {
        UserShotPlus();
        ComputorShotPlus();
        UpdateButtonsAfterRound();   
    } else if (computer.choice == user.block.key) {
        UserShotPlus();  
        UpdateButtonsAfterRound();           
    } else if (computer.choice == user.shoot.key) {
        UserKilled();
    } else if (computer.choice == user.shotgun.key) {
        UserKilled();
    }
    
    UpdateRoundText("userRound", user.reload.key);
}

function BlockFunc() {
    buttonClickAnimation("#blockBtn");
    UpdateRoundNumber();    
    
    if (computer.choice == user.reload.key) {
        ComputorShotPlus();
        UpdateButtonsAfterRound();
    } else if (computer.choice == user.block.key) {
        // nothing happens
    } else if (computer.choice == user.shoot.key) {
        ComputorShotMinus();
        UpdateButtonsAfterRound();        
    } else if (computer.choice == user.shotgun.key) {
        UserKilled();
    }
    
    UpdateRoundText("userRound", user.block.key);
}

function ShootFunc() {
    buttonClickAnimation("#shootBtn");
    UpdateRoundNumber();    
    
    if (computer.choice == user.reload.key) {
        ComputerKilled();
    } else if (computer.choice == user.block.key) {
        UserShotMinus();
        UpdateButtonsAfterRound();        
    } else if (computer.choice == user.shoot.key) {
        ComputorShotMinus();        
        UserShotMinus(); 
        UpdateButtonsAfterRound();                
    } else if (computer.choice == user.shotgun.key) {
        UserKilled();
    }
    
    UpdateRoundText("userRound", user.shoot.key);
}

function ShotgunFunc() {
    buttonClickAnimation("#shotgunBtn");
    UpdateRoundNumber();    
    
    ComputerKilled();
    
    UpdateRoundText("userRound", user.shotgun.key);
}

var user = new Player();
user.name = "User";

var computer = new Player();
computer.name = "Computer";
