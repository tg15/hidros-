import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'eng', loadChildren: './eng/eng.module#EngPageModule' },
  { path: 'engci', loadChildren: './engci/engci.module#EngciPageModule' },
  { path: 'engpro', loadChildren: './engpro/engpro.module#EngproPageModule' },
  { path: 'engmec', loadChildren: './engmec/engmec.module#EngmecPageModule' },
  { path: 'engamb', loadChildren: './engamb/engamb.module#EngambPageModule' },
  { path: 'nota', loadChildren: './nota/nota.module#NotaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
