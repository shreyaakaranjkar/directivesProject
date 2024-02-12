import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicCss } from './shared/directives/basiccss.directive';
import { AdvanceCss } from './shared/directives/advanceCSS.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicCss,
    AdvanceCss
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
