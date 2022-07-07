import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'demo',
    loadChildren: () => import('./demo').then(m => m.DemoModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'demo',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
