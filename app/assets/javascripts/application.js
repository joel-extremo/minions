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
    $('.game-option').click(function(){
		let result = getResult($(this).data('option'))

		let stringResult = result ? 'win' : 'lose'
		

		$(`#modal-triggers .${stringResult}`).trigger('click')
	})

	function  getResult(option)
	{
		return false;
		//ajax request
		
		a = Math.floor(Math.random() * 10) + 1 ;
		if(a<=5)
			return true

		return false
	}
	$(`#modal-triggers .lose`).trigger('click')
});
