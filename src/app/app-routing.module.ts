import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ChatsComponent } from './components/chats/chats.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'register',component:SignupComponent
  },
  {
    path:'members-list',component:MembersListComponent,
    // canActivate:[AuthGuard]
  },
  {
    path:'chats',component:ChatsComponent,
    // canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
