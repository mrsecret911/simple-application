import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { TokenService } from './services/token.service';


const appRoutes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardPageComponent
	},
	{
		path: 'login',
		component: LoginPageComponent
	},
	{ path: '**', redirectTo: 'dashboard' }
];

@NgModule({
	imports: [ 
		BrowserModule,
		HttpModule, 
		RouterModule.forRoot(appRoutes)
	],
	declarations: [ 
		AppComponent,
		DashboardPageComponent,
		LoginPageComponent 
	],
	providers: [ TokenService ],
	bootstrap: [ AppComponent ]
})

export class AppModule { }
