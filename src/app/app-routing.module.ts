import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareerComponent } from './components/career/career.component';
import { HomeComponent } from './components/home/home.component';
import { PolicyComponent } from './components/policy/policy.component';
import { LicenseComponent } from './components/license/license.component';
import { TermsComponent } from './components/terms/terms.component';
import { RefundsComponent } from './components/refunds/refunds.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'career',component:CareerComponent},
  {path:'policy',component:PolicyComponent},
  {path:'license',component:LicenseComponent},
  {path:'terms',component:TermsComponent},
  {path:'refunds',component:RefundsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
