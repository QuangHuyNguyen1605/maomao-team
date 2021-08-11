import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GenerateTeamsButtonComponent } from './generate-teams-button/generate-teams-button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, GenerateTeamsButtonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
