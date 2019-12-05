



# Project <Tic tac toe>
This project is basically a tic tac toe game. the stars and hearts are the x and o . scores are stored lacally in the browser and could be cleared .

## My Project Deployment
https://modhi1993.github.io/project-1-SEI-game/
## Technologies used in the project
1. javascript
2. jquery
3. HTML
4. CSS
## wireframes and user stories.
1. First a welcoming page shows the conains a button that leads to the page of the game.
2. The main game board will be displayed on the page. with a heading that tells who should start first.
3. The star reassembles the first player and the heart reassembles the second player.
4. If any player wins the game ,the cell of the winning symbols will be highlighted and the heading will display which player won.
5. If the game ended up in a tie situation. the header will display a tie statement.
6. A counter will keep track of the scores each player earned after each round.
7. There are two buttons one that clears the stored scores and the other helps replay/reset the game. 
<!--link-->
[jquery](https://code.jquery.com/jquery-3.4.1.min.js)

[wireframe](https://www.canva.com/design/DADsvtEvA-w/share/preview?token=tAJ4KYyxXodVKpA_LhaV9A&role=EDITOR&utm_content=DADsvtEvA-w&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton)

[audio](http://soundbible.com/)

[javascript confetti](https://www.cssscript.com/confetti-falling-animation/)

## Planning and Development Process

### day1
wireframe and strucrering the project with some css
### day2
I did Javascript and Jquery 
### day3
improved my css styling and making sure its resposive
### day4
adding audio , local storage, animation and other extra features 

# Describe any lines or function in the code
```js



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
 
```
this function was called everytime a player hit the reset button. It makes sure all the cells are disabled from being clicked .It switches them on again. and it resets all the variables to thier first values .It displayes the scores again and switch the turn to player number 1 ,finally it stops the confetti effect.
## Challenges
The most challenging part of the whole thing was making the responsive design. css is apain tbh.
## Unsolved problems which would be fixed in future iterations.
not problems but extra features like entering your name and playing against the computer ,changing themes , adding images and playing through a network.