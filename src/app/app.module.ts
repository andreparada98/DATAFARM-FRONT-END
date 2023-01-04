import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { MapComponent } from './map/map.component';
import { ApplicationComponent } from './application/application.component';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import { MenuActionsComponent } from './main/components/menu-actions/menu-actions.component';
import { HeaderComponent } from './main/components/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        ApplicationComponent,
        MenuActionsComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        LeafletModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
