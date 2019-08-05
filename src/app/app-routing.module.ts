import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryFilterComponent } from './category-filter/category-filter.component';


const routes: Routes = [

  { path: 'Electricity', component: CategoryFilterComponent },
  { path: 'Broadband Postpaid', component: CategoryFilterComponent },
  { path: 'Water', component: CategoryFilterComponent },
  { path: 'Gas', component: CategoryFilterComponent },
  { path: 'DTH', component: CategoryFilterComponent },
  { path: 'Landline Postpaid', component: CategoryFilterComponent },
  { path: 'Credit Card', component: CategoryFilterComponent },
  { path: 'Mutual Fund', component: CategoryFilterComponent },
  { path: 'Mobile Prepaid', component: CategoryFilterComponent },
  { path: 'Mobile Postpaid', component: CategoryFilterComponent }, 
  { path: 'Insurance', component: CategoryFilterComponent },
  { path: 'Tax', component: CategoryFilterComponent },
  { path: 'Donation', component: CategoryFilterComponent },
  { path: 'Subscription', component: CategoryFilterComponent },
  { path: 'Loan', component: CategoryFilterComponent },
  { path: 'Rental Payment', component: CategoryFilterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
