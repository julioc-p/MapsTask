import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDBcKPKNkeSSQzwvcH2-Ds_BmvM3_yMYlQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
