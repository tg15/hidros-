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
  { path: 'nota', loadChildren: './nota/nota.module#NotaPageModule' },  { path: 'notaspda', loadChildren: './notaspda/notaspda.module#NotaspdaPageModule' },
  { path: 'notapc', loadChildren: './notapc/notapc.module#NotapcPageModule' },
  { path: 'notaplacas', loadChildren: './notaplacas/notaplacas.module#NotaplacasPageModule' },
  { path: 'notaweb', loadChildren: './notaweb/notaweb.module#NotawebPageModule' },
  { path: 'notatermo', loadChildren: './notatermo/notatermo.module#NotatermoPageModule' },
  { path: 'notahidro', loadChildren: './notahidro/notahidro.module#NotahidroPageModule' },
  { path: 'notaagua', loadChildren: './notaagua/notaagua.module#NotaaguaPageModule' },
  { path: 'notapgrs', loadChildren: './notapgrs/notapgrs.module#NotapgrsPageModule' },
  { path: 'notareap', loadChildren: './notareap/notareap.module#NotareapPageModule' },
  { path: 'notalic', loadChildren: './notalic/notalic.module#NotalicPageModule' },
  { path: 'notaestr', loadChildren: './notaestr/notaestr.module#NotaestrPageModule' },
  { path: 'notalegal', loadChildren: './notalegal/notalegal.module#NotalegalPageModule' },
  { path: 'notatec', loadChildren: './notatec/notatec.module#NotatecPageModule' },
  { path: 'notaarq', loadChildren: './notaarq/notaarq.module#NotaarqPageModule' },
  { path: 'notalice', loadChildren: './notalice/notalice.module#NotalicePageModule' },
  { path: 'notapredial', loadChildren: './notapredial/notapredial.module#NotapredialPageModule' },
  { path: 'notareforma', loadChildren: './notareforma/notareforma.module#NotareformaPageModule' },
  { path: 'notainc', loadChildren: './notainc/notainc.module#NotaincPageModule' },
  { path: 'notaclima', loadChildren: './notaclima/notaclima.module#NotaclimaPageModule' },
  { path: 'notaprod', loadChildren: './notaprod/notaprod.module#NotaprodPageModule' },
  { path: 'notamanu', loadChildren: './notamanu/notamanu.module#NotamanuPageModule' },
  { path: 'notaexaus', loadChildren: './notaexaus/notaexaus.module#NotaexausPageModule' },
  { path: 'notamat', loadChildren: './notamat/notamat.module#NotamatPageModule' },
  { path: 'notaseg', loadChildren: './notaseg/notaseg.module#NotasegPageModule' },
  { path: 'notamec', loadChildren: './notamec/notamec.module#NotamecPageModule' },
  { path: 'notanal', loadChildren: './notanal/notanal.module#NotanalPageModule' },
  { path: 'notamkt', loadChildren: './notamkt/notamkt.module#NotamktPageModule' },
  { path: 'notaneg', loadChildren: './notaneg/notaneg.module#NotanegPageModule' },
  { path: 'notaop', loadChildren: './notaop/notaop.module#NotaopPageModule' },
  { path: 'notalayout', loadChildren: './notalayout/notalayout.module#NotalayoutPageModule' },
  { path: 'eve', loadChildren: './eve/eve.module#EvePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
