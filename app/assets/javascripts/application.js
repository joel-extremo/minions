// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$( document ).ready(function() {

  var modalTitles = {
    lose : 'YOU LOSE!',
    win : 'YOU WIN!',
    tie : 'TIE!'
  }

  //when the user select paper, rock or scissor
  $('.game-option').click(function(){

    let userOption = $(this).data('option')

    $.ajax({
      url: "/minions/result",
      data: { userOption }
    })
    .done(function( response ) {

      console.log(response)

      loadModalData(response)
    
      $(`#modal-triggers .result`).trigger('click')
    });  
  })

  //insert the html in the modal by the result of the game
  function loadModalData(response)
  {
    title = modalTitles[response.result]
    winner = getWinner(response.result) 
    resetWinner()

    $('#result-modal .minion').attr('src','images/minions/'+response.result+'.png')

    $('#result-modal h1').text(title)

    $('#result-modal .user-option').attr('src','images/'+response.user+'.png')

    $('#result-modal .minions-option').attr('src','images/'+response.minions+'.png')

    $('#result-modal .' + winner).addClass('winner')
  }

  function getWinner(result) 
  {
    switch (result) 
    {
      case 'win': return 'user-option'
      case 'lose': return 'minions-option'
      default: return ''
    }
  }

  function resetWinner() 
  {
    $('#result-modal .user-option').removeClass('winner')
    $('#result-modal .minions-option').removeClass('winner')
  }

  // loadModalData({user: "paper", minions: "rock", result: 'lose'})

  // $('#modal-triggers .result').trigger('click')
});
