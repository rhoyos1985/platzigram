var page = require('page');
var header = require('../header');
var template = require('./template');

page('/:username', loadUser, header, function(ctx, next){
	document.title =`Platzigram - ${ctx.params.username}`; 
	var $main = $('#main-container');
	$main.html(template(ctx.user));
	//$('.modal-trigger').leanModal();
})

page('/:username/:id', loadUser, header, function (ctx, next) {
	document.title =`Platzigram - ${ctx.params.username}`;
	var $main = $('#main-container');
	$main.html(template(ctx.user));
	$(`#modal${ctx.params.id}`).modal('open',{
		complete: function () {
    		page(`/${ctx.params.username}`)
    	}		
	});
	
});

async function loadUser (ctx, next) {
  try {
    ctx.user = await fetch(`/api/user/${ctx.params.username}`).then(res => res.json());
    next();
  } catch (err) {
    console.log(err);
  }
}