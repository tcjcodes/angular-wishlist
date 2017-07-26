import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ViewListComponent } from './view-list/view-list.component';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
    declarations: [
        AppComponent,
        ViewListComponent,
        AddItemComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: ViewListComponent
            },
            {
                path: 'item/new',
                component: AddItemComponent
            }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
