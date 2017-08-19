var express = require('express')
var app = express()

app.set('view engine','pug');					//Para servir vistas desde el servidor

app.use(express.static(__dirname + '/public'));  //Servir archivos estaticos con express

app.get(['/','/signup','/signin'], function(req,res){
	res.render('index');
});

app.get('/api/pictures',  function(req, res, next){
	var pictures = [
		{
			user: {
				username: 'rchrdhys',
				avatar: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/19260552_10154460532332443_1070552376320186867_n.jpg?oh=bfd7528c8a34821ef4a226a2e06555b4&oe=59FE21BA'
			},
			url: 'office.jpg',
			likes: 10,
			liked: true,
			createAt: new Date().getTime()
		},
		{
			user: {
				username: 'rchrdhys',
				avatar: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/19260552_10154460532332443_1070552376320186867_n.jpg?oh=bfd7528c8a34821ef4a226a2e06555b4&oe=59FE21BA'
			},
			url: 'office.jpg',
			likes: 1,
			liked: false,
			createAt: new Date().setDate('10')
		},
		{
			user: {
				username: 'rchrdhys',
				avatar: 'https://scontent.feoh3-1.fna.fbcdn.net/v/t1.0-9/19260552_10154460532332443_1070552376320186867_n.jpg?oh=bfd7528c8a34821ef4a226a2e06555b4&oe=59FE21BA'
			},
			url: 'office.jpg',
			likes: 24,
			liked: true,
			createAt: new Date().setDate('15')
		}
	];

	setTimeout(function loadPicture () {
		res.send(pictures); 
	},2000);
	
});

app.post('/api/pictures', function (req, res) {
  upload(req, res, function (err) {
    if (err) {
      return res.send(500, "Error uploading file");
    }
    res.send('File uploaded');
  })
})

app.get('/api/user/:username', (req, res) => {
  const user = {
    username: 'platzi',
    avatar: 'https://igcdn-photos-b-a.akamaihd.net/hphotos-ak-xpa1/t51.2885-19/11351571_102153813463801_2062911600_a.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/13129218_1692859530968044_751360067_n.jpg?ig_cache_key=MTI0MjIzMTY4MzQ5NzU1MTQxOQ%3D%3D.2.c',
        likes: 3
      },
      {
        id: 2,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/13126768_259576907723683_861119732_n.jpg?ig_cache_key=MTIzODYzMjE4NDk1NDk3MTY5OQ%3D%3D.2',
        likes: 1
      },
      {
        id: 3,
        src: 'https://igcdn-photos-d-a.akamaihd.net/hphotos-ak-xfa1/t51.2885-15/s640x640/sh0.08/e35/13118139_1705318183067891_1113349381_n.jpg?ig_cache_key=MTI0MTQwNzk1ODEyODc0ODQ5MQ%3D%3D.2',
        likes: 10
      },
      {
        id: 4,
        src: 'https://igcdn-photos-g-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12940327_1784772678421526_1500743370_n.jpg?ig_cache_key=MTIyMzQxODEwNTQ4MzE5MjE4OQ%3D%3D.2',
        likes: 0
      },
      {
        id: 5,
        src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xpt1/t51.2885-15/e35/11934723_222119064823256_2005955609_n.jpg?ig_cache_key=MTIyMzQwOTg2OTkwODU2NzY1MA%3D%3D.2',
        likes: 23
      },
      {
        id: 6,
        src: 'https://igcdn-photos-a-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-15/e35/12904985_475045592684864_301128546_n.jpg?ig_cache_key=MTIyMzQwNjg2NDA5NDE2MDM5NA%3D%3D.2',
        likes: 11
      }
    ]
  }

  res.send(user);
})

app.get('/:username', function (req, res) {
  res.render('index', { title: `Platzigram - ${req.params.username}` });
})

app.get('/:username/:id', function (req, res) {
  res.render('index', { title: `Platzigram - ${req.params.username}` });
})

app.listen(3000, function(err){
	if(err) return console.log('Hubo un error'), process.exit(1);

	console.log('Platzigram escuchando por el puerto 3000');
});