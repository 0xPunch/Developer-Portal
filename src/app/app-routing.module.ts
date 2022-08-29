import { IRoute } from './models/route';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { asideRoutes } from './constants/routes';
import { AuthGuard } from '@auth0/auth0-angular';
import { ContainerComponent } from './ui/container/container.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./ui/container/container.module').then((m) => m.ContainerModule),
  },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: asideRoutes[0].path,
  // },
  // ...asideRoutes.map((r: IRoute) => {
  //   if (!r.external || r.module) {
  //     const moduleName = r.module.charAt(0).toUpperCase() + r.module.slice(1);
  //     const fullName = `${moduleName}Module`;
  //     return {
  //       path: r.path,

  //       canActivate: [AuthGuard],
  //       loadChildren: () =>
  //         import(`./routes/${r.module}/${r.module}.module`).then(
  //           (m) => m[fullName]
  //         ),
  //     };
  //   }
  //   return {
  //     path: r.path,
  //     redirectTo: '/',
  //   };
  // }),
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
