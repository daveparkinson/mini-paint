$(document).ready(function() {
  // all code goes in here
    var color = 'white';
    var colors = 'red yellow white blue green';

    $('#red').on('click', function () {
    	color = 'red';
    })
   	$('#green').on('click', function () {
    	color = 'green';
    })
    $('#yellow').on('click', function () {
    	color = 'yellow';
    })
    $('#blue').on('click', function () {
    	color = 'blue';
    })
    $('#white').on('click', function () {
    	color = 'white';
    })

    $('.box').on('click', function() {
    	$(this).addClass(color);
  	})
    $('.box').on('dblclick', function() {
    	$(this).removeClass(colors);
    })
    $('#reset').on('click', function() {
    	$('.box').removeClass(colors);
    })



  })
