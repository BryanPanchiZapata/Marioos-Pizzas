import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './home/info/info.component';
import { MenuComponent } from './home/menu/menu.component';
import { TittlePageComponent } from './home/tittle-page/tittle-page.component';

const routes: Routes = [
  { path: '', component: InfoComponent },
  { path: 'history', component: TittlePageComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
