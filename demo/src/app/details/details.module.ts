import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import { routes } from './details.routes';

@NgModule({
  declarations: [DetailsComponent],
  imports: [RouterModule.forChild(routes)],
})
export class DetailsModules {}
