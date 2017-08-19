var page = require('page');
var template  =  require('./template');
var translate = require('../translate');

page('/signup', function(ctx, next){
	document.title = `Platzigram - ${translate.message('signup.call-to-action')}`; 
	var $main = $('#main-container');
	$main.html(template);
});
