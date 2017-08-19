var yo = require('yo-yo');
var translate = require('../translate');

module.exports = function pictureCard(pic) {
  var el;

  function render(picture) {

    return yo`<div class="card ${picture.liked ? 'liked' : ''}">
      <div class="card-image">
        <img class="activator" src="${picture.url}" ondblclick=${like.bind(null, !picture.liked)} />
        <i class="fa fa-heart like-heart ${ picture.likedHeart ? 'liked' : '' }"></i>
      </div>
      <div class="card-content">
        <a href="/${picture.user.username}" class="card-title">
          <img src="${picture.user.avatar}" class="avatar" />
          <span class="username">${picture.user.username}</span>
        </a>
        <small class="right time">${translate.date.format(picture.createdAt)}</small>
        <p>
          <a class="left" href="#" onclick=${like.bind(null, true)}><i class="fa fa-heart-o heart-o" aria-hidden="true"></i></a>
          <a class="left" href="#" onclick=${like.bind(null, false)}><i class="fa fa-heart heart" aria-hidden="true"></i></a>
          <span class="left likes">${translate.message('likes', { likes: picture.likes })}</span>
        </p>
      </div>
    </div>`
  }

  function like(liked) {

    pic.likedHeart = pic.liked = liked;
    pic.likes += liked ? 1 : -1;  
    
    function doRender () {
    	var newEl = render(pic);
    	yo.update(el, newEl); 
    }

    doRender();

    setTimeout(function () {
      pic.likedHeart = false;
      doRender();
    }, 1000)

    return false;
  }

  el = render(pic);
  return el;
}