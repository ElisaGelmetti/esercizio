import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { HomePage } from './pages/home.page';
import { ActivePostsPage } from './pages/active-posts.page';
import { InactivePostsPage } from './pages/inactive-posts.page';
import { PostCardComponent } from './components/post-card.component';
import { AngularComponent } from './angular/angular.component';

import { DemoComponent } from './Demo/Demo.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'active-posts',
    component: ActivePostsPage,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsPage,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePage,
    ActivePostsPage,
    InactivePostsPage,
    PostCardComponent,
    AngularComponent,
    AngularComponent,
    DemoComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
