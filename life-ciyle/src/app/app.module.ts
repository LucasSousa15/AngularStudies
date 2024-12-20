import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { CheckSamplesComponent } from './check-samples/check-samples.component';
import { ListaModule } from './lista/lista.module'

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CheckSamplesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
