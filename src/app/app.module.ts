import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { SubmitpropertyComponent } from './submitproperty/submitproperty.component';
import { PricingtableComponent } from './pricingtable/pricingtable.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import {MessageComponent}from'./message/message.component';
import {SettingComponent}from'./setting/setting.component';
import {WishlistComponent}from'./wishlist/wishlist.component';
import {NotificationComponent}from'./notification/notification.component';
import {PasswordComponent}from'./password/password.component';
import { ContactComponent } from './contact/contact.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component'
import {ProfileComponent} from './profile/profile.component';
import{HttpModule, Response} from '@angular/http';
import { MypropertyComponent } from './myproperty/myproperty.component';
import {ListComponent} from './list/list.component';
import {List2Component} from './list2/list2.component';
import {List3Component} from './list3/list3.component';
import { List4Component } from './list4/list4.component';
import { List5Component } from './list5/list5.component';
import { PaymentComponent } from './payment/payment.component';
import { APP_BASE_HREF } from '@angular/common';
import {PropertyListComponent} from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component'

const appRoutes: Routes = [
{path: '', redirectTo:'Home', pathMatch:"full"},
{path: 'Login', component: LoginComponent },
{path: 'login', component: LoginComponent },
{path: 'Signup', component: SignupComponent },
{path: 'Home',component:HomeComponent},
{path:'About',component:AboutComponent},
{path:'propertyList',component:PropertyListComponent},
{path:'seller',component:MyprofileComponent},
{path:'Submit',component:SubmitpropertyComponent},
{path:'Pricing',component:PricingtableComponent},
{path:'Forgetpassword',component:ForgetpasswordComponent},
{path:'message',component:MessageComponent},
{path:'wishlist',component:WishlistComponent},
{path:'notification',component:NotificationComponent},
{path:'password',component:PasswordComponent},
{path:'contact',component:ContactComponent},
{path:'buyer',component:UserDashboardComponent},
{path:'profile',component:ProfileComponent},
{path:'myproperty',component:MypropertyComponent},
{path:'List',component:ListComponent},
{path:'List2',component:List2Component},
{path:'List3',component:List3Component},
{path:'List4',component:List4Component},
{path:'List5',component:List5Component},
{path:'payment',component:PaymentComponent},
{path:'propertyDetails',component:PropertyDetailComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AboutComponent,
    MyprofileComponent,
    SubmitpropertyComponent,
    PricingtableComponent,
    ForgetpasswordComponent,
    WishlistComponent,
    MessageComponent,
    NotificationComponent,
    SettingComponent,
    PasswordComponent,
    ContactComponent, 
    UserDashboardComponent,
    ProfileComponent,
    MypropertyComponent,
    ListComponent,
    List2Component,
    List3Component,
    List4Component,
    List5Component,
    PaymentComponent,
    PropertyListComponent,
    PropertyDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ {provide: APP_BASE_HREF, useValue: '/'} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
