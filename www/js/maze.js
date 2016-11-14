//We will need a counter for the 8 lives (buckeyes)


//This function will turn the first block if clicked first


//This function will show the correct block and make sure they're clicked in order


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





