import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    data: {
      title: 'Card List'
    }
  },
  {
    path: 'add',
    component: AddComponent,
    data: {
      title: 'Card Add'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule {
}
