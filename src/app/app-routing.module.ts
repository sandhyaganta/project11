import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionComponent } from './section/section.component';
import  { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {
    path: "hai",
    component:SectionComponent,
  },
  {
    path: "hello",
    component:FooterComponent,
  }
 
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
