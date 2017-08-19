var page = require('page');
var template  =  require('./template');
var translate = require('../translate');

page('/signin', function(ctx, next){
	//$('title').html('Platzigram - Signin');
	document.title = `Platzigram - ${translate.message('signin')}`; 
	var $main = $('#main-container');
	$main.html(template);
});
