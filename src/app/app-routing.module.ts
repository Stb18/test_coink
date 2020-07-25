import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', loadChildren: () => import('./views/main/main.module').then( m => m.MainPageModule)},
  {
    path: 'register-phone',
    loadChildren: () => import('./views/register-phone/register-phone.module').then( m => m.RegisterPhonePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
