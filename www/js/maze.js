var lives = 8;

//This function will turn the first block if clicked first
function firstBlock(firstBlock){
    document.getElementById(firstBlock).className = "done";
}

//This function will show the correct block and make sure they're clicked in order
function rightBlock(previousId,currentId){
    var lastBlock = document.getElementById(previousId);
    var currentBlock = document.getElementById(currentId);
    var lastClassName = lastBlock.className;
    
    if(lastClassName == "done"){
        currentBlock.className = "done";
    }
}

//This function will reset all the blocks if game is reset
function resetAll(){
    var doneBlocks = document.getElementsByClassName('done');
    while(doneBlocks.length>0){
       for(var i = 0; i < doneBlocks.length; i++){
        doneBlocks[i].className = "gridBlocks";
        }
        resetAll();
        doneBlocks = document.getElementsByClassName('done');
    }
    
}
//This function is for removing a buckeye when an incorrect block is clicked
function wrongBlock(){
    lives = lives-1;
    var makeId = "buck" + lives; 
    var thisBuckeye = document.getElementById(makeId);
    thisBuckeye.style.display ="none";
    resetAll();
    if(lives == 0){
    //Make Buckeyes Section say GAME OVER
    document.getElementById('gameOver').style.display = "inline";
    //Make button say START instead of GO BUCKS!
    document.getElementById("start").innerHTML = "START";
    }
}
//This function is to make the buckeyes reappear
function showBuckeyes(){
    lives = 8
    var makeId;
    var thisBuckeye;
    for(var i = 0; i < 8; i++){
        makeId = "buck" + i;
        thisBuckeye = document.getElementById(makeId);
        thisBuckeye.style.display='inline';
    }    
}

//This function will change the START text to GO BUCKS! when clicked
function pressSTART() {
    document.getElementById("start").innerHTML = "GO BUCKS!";
    showBuckeyes();
    document.getElementById('gameOver').style.display = "none";
    resetAll();
   
    
}



