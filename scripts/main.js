
let current=false;
let count=0;
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
    $('#scor1').html(`<p>${score1}</p>`);
    $('#scor2').html(`<p>${score2}</p>`);

// let name1=$('#').val() ;
// let name2= ;
// $('#').val()

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
        $(var1).css("background-color","lightgrey");
            $(var2).css("background-color","lightgrey");
            $(var3).css("background-color","lightgrey");
    },
    clicking:function(){

        count+= 1;
        if (count%2 === 0) {
            current=false; }
        else
        current=true;
      
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

          let event1 = "#"+event.target.id;
        $(event1).off('click');

        if(current)
        $(event1).html("<img src='../images/star.png' alt='' >");
        else 
        $(event1).html("<img src='../images/heart.png' alt='' >");

    
        table[event.target.id] = String(current);
        // stopping the game after finding a winner
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
                $('td').off('click');
                $("#winner").html("<h2>Tie</h2>")
                }
                // $('#scor1').html(`<p>${score2}</p>`);
      },
}


$('td').on("click",table.clicking);

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
  $(".clear").click(function(){
    score2=0;
    score1=0;
    localStorage.setItem("score1", score1)
    localStorage.setItem("score2", score2);
      $('#scor1').html(score1);   
      $('#scor2').html(score2);
    })
// $("#target").submit(function(){




    
// })


// $("#cell1").click(function(){
//     $('#cell1').off('click');
//     if(current)
//     $("#cell1").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell1").html("<img src='../images/heart.png' alt='' >");

//     table['cell1'] = String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });
//   $("#cell2").click(function(){
//     $('#cell2').off('click');
//     if(current)
//     $("#cell2").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell2").html("<img src='../images/heart.png' alt='' >");
//     table['cell2'] =String(current);
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
      
    
//   });
//   $("#cell3").click(function(){
//     $('#cell3').off('click');
//     if(current)
//     $("#cell3").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell3").html("<img src='../images/heart.png' alt='' >");
//     table['cell3'] = String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });
//   $("#cell4").click(function(){
//     $('#cell4').off('click');
//     if(current)
//     $("#cell4").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell4").html("<img src='../images/heart.png' alt='' >");
//     table['cell4'] = String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });
//   $("#cell5").click(function(){
//     $('#cell5').off('click');
//     if(current)
//     $("#cell5").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell5").html("<img src='../images/heart.png' alt='' >");
//     table['cell5']= String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });
//   $("#cell6").click(function(){
//     $('#cell6').off('click');
//     if(current)
//     $("#cell6").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell6").html("<img src='../images/heart.png' alt='' >");
//     table['cell6']= String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });
//   $("#cell7").click(function(){
//     $('#cell7').off('click');
//     if(current)
//     $("#cell7").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell7").html("<img src='../images/heart.png' alt='' >");
//     table['cell7']= String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });
//   $("#cell8").click(function(){
//     $('#cell8').off('click');
//     if(current)
//     $("#cell8").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell8").html("<img src='../images/heart.png' alt='' >");
//     table['cell8']= String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });
//   $("#cell9").click(function(){
//     $('#cell9').off('click');
//     if(current)
//     $("#cell9").html("<img src='../images/star.png' alt='' >");
//     else 
//     $("#cell9").html("<img src='../images/heart.png' alt='' >");
//     table['cell9']= String(current);
//     table.count();
//     if (table.count())
//     $("#winner").html("<h2>you are a star</h2>");
//   });





  













