var yo = require('yo-yo');
var landing = require('../landing');
var translate = require('../translate');


var signin = yo`<div class="col s12 m7">
					<div class="row">
						<div class="signup-box">
							<h1 class="platzigram">
								Platzigram
							</h1>
							<form class="signup-form">
								<h2>${translate.message('signup.subheading')}</h2>
								<div class="section">
									<a href="#" class="btn btn-fb hide-on-small-only">${translate.message('signup.facebook')}</a>
									<a href="#" class="btn btn-fb hide-on-med-and-up">
										<i class="fa fa-facebook-official"></i>${translate.message('signup.text')}
									</a>
								</div>
								<div class="divider"></div>
								<div class="section">
									<input type="text" name="username" placeholder="${translate.message('username')}" />
									<input type="password" name="password" placeholder="${translate.message('password')}" />
									<button class="btn wave-effect wave-light btn-signup" type="submit">${translate.message('signup.text')}</button>
								</div>
							</form>	
						</div>
					</div>
					<div class="row">
						<div class="login-box">
							${translate.message('signin.not-have-account')} <a href="/signup">${translate.message('signup.call-to-action')}</a>
						</div>
					</div>
				</div>`;

module.exports = landing(signin);