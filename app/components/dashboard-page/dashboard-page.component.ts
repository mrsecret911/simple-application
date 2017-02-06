import { Component } from '@angular/core';
import { Router }   from '@angular/router';
import { Location } from '@angular/common';

import { TokenService } from '../../services/token.service';

@Component({
	selector: 'dashboard',
	templateUrl: './app/components/dashboard-page/dashboard-page.component.html',
	styleUrls: ['./app/components/dashboard-page/dashboard-page.component.css']
})

export class DashboardPageComponent {
	status: Boolean;

	constructor(
		private tokenService: TokenService, 
		private router: Router
	) {}

	checkToken() {
		let param = {
			token: localStorage.getItem('token'),
			date:  localStorage.getItem('date')
		};

		this.tokenService
			.checkToken(param)
			.then(res => {
				this.status = res.success ? true : false;
				if(!res.success){
					this.router.navigate(['login']);
				}
			})
	}
	closeWindow() {
		this.status = false;
	}
}


