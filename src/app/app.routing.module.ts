import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'newEmployeeAcceptance', pathMatch: 'full'},
  {
    path: 'newEmployeeAcceptance',
    loadChildren: () =>
      import(
        './modules/new-employee-acceptance/new-employee-acceptance.module'
      ).then((m) => m.NewEmployeeAcceptanceModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // enableTracing: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
