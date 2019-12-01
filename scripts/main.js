
let user1=true
let user2=false
let current=false;
let count=0;
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
    count: function(thelastclick){
  
        if (table['cell1'] === table['cell2'] && table['cell2'] === table['cell3']){
            
            return true;}
        else if(table['cell4'] === table['cell5'] && table['cell5'] === table['cell6']){
            return true}
        else if(table['cell7'] === table['cell8'] && table['cell8'] === table['cell9'])
             return true;
        else if(table['cell1'] === table['cell4'] && table['cell4'] === table['cell7'])
             return true;
        else if(table['cell2'] === table['cell5'] && table['cell5'] === table['cell8'])
             return true;
        else if(table['cell3'] === table['cell6'] && table['cell6'] === table['cell9'])
             return true;
        else if(table['cell3'] === table['cell5'] && table['cell5'] === table['cell7'])
             return true;
        else if(table['cell1'] === table['cell5'] && table['cell5'] === table['cell9'])
             return true;
        else 
             return false;

    },
}

$('td').click(function () {
    count += 1;

    if (count%2 === 0) {
        current=false;
    }
    else
    current=true;

    if(current)
    $("#player").html("<h2 id='winner'>player 2's turn</h2>");
    else 
    $("#player").html("<h2 id='winner'>player 1's turn</h2>");
   
  });


$("#cell1").click(function(){
    $('#cell1').off('click');
    if(current)
    $("#cell1").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell1").html("<img src='../images/heart.png' alt='' >");

    table['cell1'] = String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });
  $("#cell2").click(function(){
    $('#cell2').off('click');
    if(current)
    $("#cell2").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell2").html("<img src='../images/heart.png' alt='' >");
    table['cell2'] =String(current);
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
      
    
  });
  $("#cell3").click(function(){
    $('#cell3').off('click');
    if(current)
    $("#cell3").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell3").html("<img src='../images/heart.png' alt='' >");
    table['cell3'] = String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });
  $("#cell4").click(function(){
    $('#cell4').off('click');
    if(current)
    $("#cell4").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell4").html("<img src='../images/heart.png' alt='' >");
    table['cell4'] = String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });
  $("#cell5").click(function(){
    $('#cell5').off('click');
    if(current)
    $("#cell5").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell5").html("<img src='../images/heart.png' alt='' >");
    table['cell5']= String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });
  $("#cell6").click(function(){
    $('#cell6').off('click');
    if(current)
    $("#cell6").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell6").html("<img src='../images/heart.png' alt='' >");
    table['cell6']= String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });
  $("#cell7").click(function(){
    $('#cell7').off('click');
    if(current)
    $("#cell7").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell7").html("<img src='../images/heart.png' alt='' >");
    table['cell7']= String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });
  $("#cell8").click(function(){
    $('#cell8').off('click');
    if(current)
    $("#cell8").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell8").html("<img src='../images/heart.png' alt='' >");
    table['cell8']= String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });
  $("#cell9").click(function(){
    $('#cell9').off('click');
    if(current)
    $("#cell9").html("<img src='../images/star.png' alt='' >");
    else 
    $("#cell9").html("<img src='../images/heart.png' alt='' >");
    table['cell9']= String(current);
    table.count();
    if (table.count())
    $("#winner").html("<h2>you are a star</h2>");
  });





  













