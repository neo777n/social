import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUs}  from './about-us/about-us';
import { Index} from './index/index';
import { AccountInfo } from './account/account-info/account-info';
import {NewPost} from './posts/new-post/new-post';

export const routes: Routes = [
  { path: 'about-us', component: AboutUs },
  { path: 'index', component: Index},
  { path: 'account/account-info', component: AccountInfo},
  { path: 'posts/new-post', component: NewPost},
  { path: '', component: Index },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


