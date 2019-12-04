
let current=false;
let count=0;
// checking for stored values
if(localStorage.length === 0 ){
   score1=0;
   localStorage.setItem("score1", score1)
   score2=0;
   localStorage.setItem("score2", score2);
}
else{
    score1= localStorage.getItem("score1");
    score2= localStorage.getItem("score2");  
}
// displaying scores
    $('#scor1').html(`<p>${score1}</p>`);
    $('#scor2').html(`<p>${score2}</p>`);

// object of cells with reltad methods
let table={
    cell1: "1",
    cell2: "2",
    cell3: "3",
    cell4: "4",
    cell5: "5",
    cell6: "6",
    cell7: "7",
    cell8: "8",
    cell9: "9",
    count: function(){
//   this method check for a winning situation and returns true if its available and false otherwise
// it changes the background of the winning cells as well by calling a changing method
        if (table['cell1'] === table['cell2'] && table['cell2'] === table['cell3']){
            this.changeCss("#cell1","#cell2","#cell3");
            return true;}
        else if(table['cell4'] === table['cell5'] && table['cell5'] === table['cell6']){
            this.changeCss("#cell4","#cell5","#cell6");
            return true}
        else if(table['cell7'] === table['cell8'] && table['cell8'] === table['cell9']){
            this.changeCss("#cell7","#cell8","#cell9");
        return true;}
        else if(table['cell1'] === table['cell4'] && table['cell4'] === table['cell7']){
            this.changeCss("#cell1","#cell4","#cell7");
             return true;}
        else if(table['cell2'] === table['cell5'] && table['cell5'] === table['cell8']){
            this.changeCss("#cell2","#cell5","#cell8");
             return true;}
        else if(table['cell3'] === table['cell6'] && table['cell6'] === table['cell9']){
            this.changeCss("#cell3","#cell6","#cell9");
            return true;}
        else if(table['cell3'] === table['cell5'] && table['cell5'] === table['cell7']){
            this.changeCss("#cell3","#cell5","#cell7");
             return true;}
        else if(table['cell1'] === table['cell5'] && table['cell5'] === table['cell9'])
        {  
            this.changeCss("#cell1","#cell5","#cell9");
             return true;}
        else 
             return false;

    },
    changeCss :function(var1,var2,var3){
        // changing the winning celss background
        $(var1).css("background-color","lightgrey");
            $(var2).css("background-color","lightgrey");
            $(var3).css("background-color","lightgrey");
    },
    clicking:function(){
// each click on the game grid will lead to excuting this method
// setting a counter for the number of clicks
        count+= 1;
        // the players turn is based on the counter even numbers are for player 1 and odd numbers are for player two
        if (count%2 === 0) {
            current=false; }
        else
        current=true;
    //   this if statment decise what heading to show and what audio to play
        if(current){
        $("#winner").html("<h2 >player 2's turn</h2>");
        let audio = new Audio('../audio/click1.mp3');
        audio.play();
        }
        else {
        $("#winner").html("<h2 >player 1's turn</h2>");
        let audio = new Audio('../audio/click2.mp3');
        audio.play();
        }
    //   the folloing lines disable the cell clicking and displayes the relevant image
          let event1 = "#"+event.target.id;
        $(event1).off('click');

        if(current)
        $(event1).html("<img src='../images/star.png' alt='' >");
        else 
        $(event1).html("<img src='../images/heart.png' alt='' >");

    // the following linesgive values to cells to help find a winner
        table[event.target.id] = String(current);
        // stopping the game after finding a winner and updating the scores ,displaying
        // confetti , playing audio or showing a tie message
        if(table.count()){
            $('td').off('click');
            // displaying the winner
            
            if(current === true){
                 $("#winner").html("<h2>player1 is <br> the winner</h2>")
                 let audio = new Audio('../audio/winning.mp3');
                 audio.play();
                 score1++;
                 localStorage.setItem("score1",score1);
                 $('#scor1').html(`<p>${score1}</p>`);
                 
                 confetti.start()
                 
                 
                 
                 }
            else{
                $("#winner").html("<h2>player2 is <br> the winner</h2>")
                let audio = new Audio('../audio/winning.mp3');
                audio.play();
                score2++;
                localStorage.setItem("score2",score2);
                $('#scor2').html(`<p>${score2}</p>`);
               
                confetti.start()}
            }
        else if(count > 8){
            // tie situation
                $('td').off('click');
                $("#winner").html("<h2>Tie</h2>")
                }
                // $('#scor1').html(`<p>${score2}</p>`);
      },
}

// calling the method after each click
$('td').on("click",table.clicking);
// resetting values and the whole game 
  $(".reset").click(function(){
    $('td').off()
    $('td').on("click",table.clicking);
    $('td').html("");
    $("#winner").html("<h2>player 1's turn</h2>");
  
    table.cell1="1";
    table.cell2="2";
    table.cell3="3";
    table.cell4="4";
    table.cell5="5";
    table.cell6="6";
    table.cell7="7";
    table.cell8="8";
    table.cell9="9";
    $('td').css("background-color","transparent");
    count = 0;
  
$('#scor1').html(score1);
$('#scor2').html(score2);
    current=false;
    confetti.stop()

   
  });
//   clearing local storaged games
  $(".clear").click(function(){
    score2=0;
    score1=0;
    localStorage.setItem("score1", score1)
    localStorage.setItem("score2", score2);
      $('#scor1').html(score1);   
      $('#scor2').html(score2);
    })













