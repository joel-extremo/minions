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

  //when the user select paper, rock or scissor
  $('.game-option').click(function(){

    let userOption = $(this).data('option')

    $.ajax({
      url: "/minions/result",
      data: { userOption }
    })
    .done(function( response ) {

      console.log(response)

      result = response.result ? 'win' : 'lose'

      html = getResultHTML(response.user, response.minions)

      $('#' + result + '-modal .result').html(html)
    
      $(`#modal-triggers .${result}`).trigger('click')
    });  
  })

  //html for the result modal
  function getResultHTML(userOption, minionsOption)
  {
    return `
      <div class="row">
        <div class="col-sm">
          <h3>You</h3>
        </div>
        <div class="col-sm">
          <img src="images/${userOption}.png">
        </div>
        <div class="col-sm">
          <img src="images/${minionsOption}.png">
        </div>
        <div class="col-sm">
          <h3>Minions</h3>
        </div>
      </div>
    `
  }

  // $('#modal-triggers .lose').trigger('click')
});
