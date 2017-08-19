var page = require('page');
var template  =  require('./template');
var header = require('../header');

page('/', header, loading, asyncLoadPictures, function(ctx, next){
	document.title ='Platzigram'; 
	var $main = $('#main-container');
	$main.html(template(ctx.pictures));
});

function loadPictures (ctx, next) {
	fetch('/api/pictures')
	.then(function (res) {
		return res.json();
	})
	.then(function (pictures) {
		ctx.pictures = pictures;
		next();
	})
	.catch(function (err) {
		console.log(err);
	})
}

function loading(ctx, next) {
	var container = document.createElement('div');
	var loadingEl = document.createElement('div');
	container.classList.add('loader-container');
	loadingEl.classList.add('loader');
	container.appendChild(loadingEl);

	var $main = $('#main-container');
	$main.html(container);
	next();
}

async function asyncLoadPictures(ctx, next) {
	try {
		ctx.pictures =  await fetch('/api/pictures').then(res => res.json());
		next();
	} catch(e) {
		console.log(e);
	}
}