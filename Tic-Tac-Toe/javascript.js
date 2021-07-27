const player = document.querySelectorAll(".Box-element");
const cont = document.getElementById('container');
var chk = document.getElementsByClassName('chkID')
var Winner = document.querySelector('.Winner');

//Tile combination of tic tac toe
let TileCombos = [
    [0,1,2], 
    [3,4,5], 
    [6,7,8], 
    [0,3,6],
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6],
];

//Front page
$(document).ready(function(){
       $(".playB ").click(function(){
        $(".Box-element").css( "pointer-events", "all" )
        $("#container").css("opacity", 1)
        $(".playB").css("opacity", 0)
        $(".Reset").css("opacity", 1)
        $(".PLAYER").css("opacity", 1)
     
    })
})

//To make the tile unable to click if it's already clicked
function boxChecker(i){
        if(cont.contains(player[i]) || cont.contains(player[i])){
                player[i].style.pointerEvents = "none";
        }
}

//Content checker
    chk[0].innerHTML = '<div class = player1></div>'
        chk[1].innerHTML = '<div class = player2></div>'

//Main function
function Main() {
    let PlayerTurn = true
$(".container div").click(function(){
    let index = $(this).index();
        boxChecker(index);
        if(PlayerTurn === true) { 
            $("#PLAYER2").css("color","red")
            $("#PLAYER1").css("color","black")
            player[index].innerHTML = '<div class = player1></div>';
            PlayerTurn = false
    }
        else if(PlayerTurn === false){
            $("#PLAYER1").css("color","red")
            $("#PLAYER2").css("color","black")
            player[index].innerHTML = '<div class = player2></div>';
            PlayerTurn = true
    }
});   
};
    Main();

//Function to know who is the winner
var i = -1;
var WinnerChecker = setInterval(() =>{
var p1 = 0, p2 = 0;
    i = i<TileCombos.length ? ++i : 0
        for(let j = 0; j<3; j++){
            if(player[TileCombos[i][j]].innerHTML == chk[0].innerHTML){
                    p1 += 1;
            }
            if(player[TileCombos[i][j]].innerHTML == chk[1].innerHTML){
                    p2 += 1;
            }
        }
    if(p1 == 3){
        Winner.innerText = 'PLAYER 1 WON';
        $(".PLAYER").css("opacity", 0);
        $(".Box-element").css( "pointer-events", "none" );

    }
    if(p2 == 3){
        Winner.innerText = 'PLAYER 2 WON'
        $(".PLAYER").css("opacity", 0);
        $(".Box-element").css( "pointer-events", "none" );
    }    
},)


//For reloading the game
$(document).ready(function(){
    $(".Reset").click(function(){
        window.location.reload()
  })
})
