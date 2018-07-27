import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandpageComponent } from './landpage/landpage.component';
import { AppRoutingModule } from './app-routing.module';
import { JoinPageComponent } from './join-page/join-page.component';
import { LobbyPageComponent } from './lobby-page/lobby-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandpageComponent,
    JoinPageComponent,
    LobbyPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
