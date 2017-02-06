import { Component } from '@angular/core';
import { Router }   from '@angular/router';

import { TokenService } from '../../services/token.service';

@Component({
	selector: 'login-page',
	template: `
		<button class="btn btn-success" (click)="createToken()">Create token</button>
	`
})

export class LoginPageComponent { 

	constructor(
		private tokenService: TokenService, 
		private router: Router

	) {}

	createToken() {
		var param = {
			email: 'user@gmail.com',
			password: 'password'
		};
		this.tokenService
			.createToken(param)
			.then(res => {
				localStorage.setItem('token', JSON.stringify(res.token));
				this.router.navigate(['/dashboard']);
			})
	}
}


