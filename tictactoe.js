
//minimax (one day)
//https://en.wikipedia.org/wiki/Minimax
//http://neverstopbuilding.com/minimax

var aiScore = 0, userScore = 0, drawsScore = 0, minimaxScore = 0, aiSettings = {weapon:'', start:'', aiTurn:''}, userSettings = {weapon:''}, tiles = {box1:'open', box1who:'', box2:'open', box2who:'', box3:'open', box3who:'', box4:'open', box4who:'', box5:'open', box5who:'', box6:'open', box6who:'', box7:'open', box7who:'', box8:'open', box8who:'', box9:'open', box9who:''}, openTiles = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'], someTile, anotherTile, someTileWho = '';

//sound effect
var newGame = new Audio('https://notificationsounds.com/message-tones/i-demand-attention-244/download/mp3');


$(document).ready(function(){
  
  //x or o
  //x
  $('#smallBox1').click(function(){
    $('#choiceBody').fadeOut(function(){
      aiSettings.weapon = 'O';
      userSettings.weapon = 'X';
      $('#startBody').fadeIn();
    });  
  });
  
  //o
  $('#smallBox2').click(function(){
    $('#choiceBody').fadeOut(function(){
      aiSettings.weapon = 'X';
      userSettings.weapon = 'O';
      $('#startBody').fadeIn();
    });  
  });
  
  //who starts, ai or you
  //ai
  $('#aiBox').click(function(){
    $('#startBody').fadeOut(function(){
      $('#mainBox, #scoreboardBody, #turnsBody').fadeIn(function(){
       aiSettings.start = 'yes';
       aiSettings.aiTurn = 'yes';
       setTimeout(aiMove(), 500);
      });
      //console.log('weapon: ' + aiSettings.weapon);
      //console.log('ai starts? ' + aiSettings.start);
      //console.log('ai turn? ' + aiSettings.aiTurn);
    });
  });
  
  //you
  $('#userBox').click(function(){
    $('#startBody').fadeOut(function(){
      $('#turnBox').css('top', '50px');
      $('#mainBox, #scoreboardBody, #turnsBody').fadeIn(function(){
       aiSettings.start = 'no';
       aiSettings.aiTurn = 'no';
      });
      //console.log('weapon: ' + aiSettings.weapon);
      //console.log('ai starts? ' + aiSettings.start);
      //console.log('ai turn? ' + aiSettings.aiTurn);
    });
  });
  
  //////////// game /////////////////
  
  //MINIMAAAAAAX
  //not yet
  function minimax(){
       
  }
  
  //random ai move
  function aiMove(){
    //executes 3 times... why?
    console.log('execution');
    anotherTile = '#' + openTiles[Math.floor(Math.random() * (openTiles.length))];
    console.log(anotherTile);
    console.log(openTiles);
    //the setTimeout seems to fix the 3 executions thing, but why?
    setTimeout(function(){$(anotherTile).trigger('click')}, 500);
  }
  
  //function gameMove(){
    $('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').click(function(event){
      //event.stopPropagation();
      //console.log(event);
      someTile = event.currentTarget.id;
      someTileWho = someTile + 'who';
      console.log(someTile + " is " + tiles[someTile]);
      //console.log(tiles);
      if(tiles[someTile] === 'open'){
        tiles[someTile] = 'closed';
        for(var i = 0; i < openTiles.length; i++){
          if(openTiles[i] === someTile){
            openTiles.splice(i,1);
          }
        }
        //console.log(someTile + " is now " + tiles[someTile]);
        if(aiSettings.aiTurn === 'yes'){
          document.getElementById(someTile).innerHTML = '<h3>' + aiSettings.weapon + '</h3>';
          aiSettings.aiTurn = 'no';
          tiles[someTileWho] = 'ai';
          $('#turnBox').css('top', '50px');
          console.log(someTile + ": " + tiles[someTileWho]);
        }
        else{
          document.getElementById(someTile).innerHTML = '<h3>' + userSettings.weapon + '</h3>';
          aiSettings.aiTurn = 'yes';
          tiles[someTileWho] = 'user';
          $('#turnBox').css('top', '10px');
          console.log(someTile + ": " + tiles[someTileWho]);
        }
        
        gameEnd();
      }
      else{
        //console.log(someTile + " is closed")
      }
    });//box click 
  //}gameMove
  
  //win if : 123, 456, 789, 147, 258, 369, 159, 357
  function gameEnd(){
    if(tiles.box1who === 'user' && tiles.box2who === 'user' && tiles.box3who === 'user'){
      console.log('user won, 123');
      userWon();
      endGame('#box1 h3', '#box2 h3', '#box3 h3');
    }
    else if(tiles.box1who === 'ai' && tiles.box2who === 'ai' && tiles.box3who === 'ai'){
      aiWon();
      console.log('ai won, 123');
      endGame('#box1 h3', '#box2 h3', '#box3 h3');
    }
    else if(tiles.box4who === 'user' && tiles.box5who === 'user' && tiles.box6who === 'user'){    
      console.log('user won, 456');
      userWon();
      endGame('#box4 h3', '#box5 h3', '#box6 h3');
    }
    else if(tiles.box4who === 'ai' && tiles.box5who === 'ai' && tiles.box6who === 'ai'){
      console.log('ai won, 456');
      aiWon();
      endGame('#box4 h3', '#box5 h3', '#box6 h3');
    }
    else if(tiles.box7who === 'user' && tiles.box8who === 'user' && tiles.box9who === 'user'){
      console.log('user won, 789');
      userWon();
       endGame('#box7 h3', '#box8 h3', '#box9 h3');
    }
    else if(tiles.box7who === 'ai' && tiles.box8who === 'ai' && tiles.box9who === 'ai'){
      console.log('ai won, 789');
      aiWon();
       endGame('#box7 h3', '#box8 h3', '#box9 h3');
    }
    else if(tiles.box1who === 'user' && tiles.box4who === 'user' && tiles.box7who === 'user'){
      console.log('user won, 147');
      userWon();
       endGame('#box1 h3', '#box4 h3', '#box7 h3');
    }
    else if(tiles.box1who === 'ai' && tiles.box4who === 'ai' && tiles.box7who === 'ai'){
      console.log('ai won, 147');
      aiWon();
       endGame('#box1 h3', '#box4 h3', '#box7 h3');
    }
    else if(tiles.box2who === 'user' && tiles.box5who === 'user' && tiles.box8who === 'user'){
      console.log('user won, 258');
      userWon();
       endGame('#box2 h3', '#box5 h3', '#box8 h3');
    }
    else if(tiles.box2who === 'ai' && tiles.box5who === 'ai' && tiles.box8who === 'ai'){
      console.log('ai won, 258');
      aiWon();
       endGame('#box2 h3', '#box5 h3', '#box8 h3');
    }
    else if(tiles.box3who === 'user' && tiles.box6who === 'user' && tiles.box9who === 'user'){
      console.log('user won, 369');
      userWon();
       endGame('#box3 h3', '#box6 h3', '#box9 h3');
    }
    else if(tiles.box3who === 'ai' && tiles.box6who === 'ai' && tiles.box9who === 'ai'){
      console.log('ai won, 369');
      aiWon();
       endGame('#box3 h3', '#box6 h3', '#box9 h3');
    }
    else if(tiles.box1who === 'user' && tiles.box5who === 'user' && tiles.box9who === 'user'){
      console.log('user won, 159');
      userWon();
       endGame('#box1 h3', '#box5 h3', '#box9 h3');
    }
    else if(tiles.box1who === 'ai' && tiles.box5who === 'ai' && tiles.box9who === 'ai'){
      console.log('ai won, 159');
      aiWon();
       endGame('#box1 h3', '#box5 h3', '#box9 h3');
    }
    else if(tiles.box3who === 'user' && tiles.box5who === 'user' && tiles.box7who === 'user'){
      console.log('user won, 357');
      userWon();
       endGame('#box3 h3', '#box5 h3', '#box7 h3');
    }
    else if(tiles.box3who === 'ai' && tiles.box5who === 'ai' && tiles.box7who === 'ai'){
      console.log('ai won, 357');
      aiWon();
      endGame('#box3 h3', '#box5 h3', '#box7 h3');
    }
    else if(tiles.box1 === 'closed' && tiles.box2 === 'closed' && tiles.box3 === 'closed' && tiles.box4 === 'closed' && tiles.box5 === 'closed' && tiles.box6 === 'closed' && tiles.box7 === 'closed' && tiles.box8 === 'closed' && tiles.box9 === 'closed'){
      console.log("it's a draw");
      draw();
      setTimeout(clearBoard, 2000);
    }
    else if(aiSettings.aiTurn === 'yes'){
      aiMove();
    }
  }//gameEnd
  
  //user won
  function userWon(){
    userScore = document.getElementById('winsScore').innerHTML;
    userScore = Number(userScore) + 1;
    console.log(userScore);
    $('#winsScore').html(userScore);
    $('#userWins').fadeIn().delay(2000).fadeOut();
  }
  
  //draw
  function draw(){
    drawsScore = document.getElementById('tiesScore').innerHTML;
    drawsScore = Number(drawsScore) + 1;
    console.log(drawsScore);
    $('#tiesScore').html(drawsScore);
    $('#itsADraw').fadeIn().delay(2000).fadeOut();
  }
  
  //ai won
  function aiWon(){
    aiScore = document.getElementById('lossesScore').innerHTML;
    aiScore = Number(aiScore) + 1;
    console.log(aiScore);
    $('#lossesScore').html(aiScore);
    $('#aiWins').fadeIn().delay(2000).fadeOut();
  }
  
  //endGame
  function endGame(b1, b2, b3){
    tiles = {box1:'closed', box2:'closed', box3:'closed', box4:'closed', box5:'closed', box6:'closed', box7:'closed', box8:'closed', box9:'closed'};
    $(b1).addClass('end');
    $(b2).addClass('end');
    $(b3).addClass('end');
    console.log('end of game, starting new game');
    setTimeout(clearBoard, 3000);
  }
  
  function clearBoard(){
    $('#box1 h3, #box2 h3, #box3 h3, #box4 h3, #box5 h3, #box6 h3, #box7 h3, #box8 h3, #box9 h3').fadeOut(function(){
      $('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9').html('');
      tiles = {box1:'open', box1who:'', box2:'open', box2who:'', box3:'open', box3who:'', box4:'open', box4who:'', box5:'open', box5who:'', box6:'open', box6who:'', box7:'open', box7who:'', box8:'open', box8who:'', box9:'open', box9who:''};
      openTiles = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];
      setTimeout(function(){if(aiSettings.aiTurn === 'yes'){
        aiMove();
      }}, 500);
    });
    newGame.play();
  }
  
});// doc rdy