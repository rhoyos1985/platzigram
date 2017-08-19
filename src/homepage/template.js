var yo = require('yo-yo');
var layout = require('../layout');
var picture = require('../picture-card');
var translate = require('../translate');


module.exports = function template (pictures) {
	var el = yo`<div class="container timeline">
						<div class="row">
							<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
								<form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
									<div id="filename" class="fileUpload btn btn-flat cyan">
										<span><i class="fa fa-camera" aria-hidden="true"> </i> ${translate.message('upload-picture')}</span>
										<input id="file" type="file" name="picture" class="upload" onchange=${onchange} />
									</div>
									<button id="btnUpload" type="submit" class="btn btn-flat cyan hide">${translate.message('upload')}</button>
									<button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${oncancel}><i class="fa fa-times" aria-hidden="true"></button>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="col s12 m10 offset-m1 l6 offset-l3">
								${pictures.map(function(pic){
									return picture(pic)
								})}
							</div>
						</div>
					</div>`;
	
	function toggleButtons () {
		document.getElementById('filename').classList.toggle('hide');
		document.getElementById('btnUpload').classList.toggle('hide');
		document.getElementById('btnCancel').classList.toggle('hide');
		document.getElementById('formUpload').reset();
	}

	function oncancel () {
		toggleButtons();
	}
	function onchange () {
		toggleButtons();
	}

	function onsubmit (ev) {
		ev.preventDefault();

		var data = new new FormData(this);

		fetch('/api/pictures', {  
			method: 'POST',   
		 	body: data
		})
		.then(function (data) {  
			console.log('Request success: ', data);  
		})  
		.catch(function (error) {  
			console.log('Request failure: ', error);  
		});
	}
	
	return layout(el) 
}