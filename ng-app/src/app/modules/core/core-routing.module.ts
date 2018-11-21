import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CoreComponent } from './core.component'

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'account',
        loadChildren: './account/account.module#AccountModule'
      },
      {
        path: 'messages',
        loadChildren: './messages/messages.module#MessagesModule'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
