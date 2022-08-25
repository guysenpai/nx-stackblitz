import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: 'shell',
        loadChildren: () =>
          import('@nx-stackblitz/frontend/demo/public/shell').then(
            module => module.ShellModule
          )
      },
      {
        path: 'shell',
        loadChildren: () =>
          import('@nx-stackblitz/frontend/demo/portal/shell').then(
            module => module.ShellModule
          )
      }
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ]
})
export class ShellModule {}
