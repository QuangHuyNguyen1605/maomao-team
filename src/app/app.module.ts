import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MemberListComponent } from './members/member-list.component';
import { MemberDetailsComponent } from './members/member-details.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MemberListComponent,
    MemberDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
