import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { DestinationComponent } from './destination/destination.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { CurrencyComponent } from './currency/currency.component';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { BangloreComponent } from './banglore/banglore.component';
import { CoorgComponent } from './coorg/coorg.component';
import { ChikmangalurComponent } from './chikmangalur/chikmangalur.component';
import { DelhiComponent } from './delhi/delhi.component';
import { GoaComponent } from './goa/goa.component';
import { PuneComponent } from './pune/pune.component';
import { ManaliComponent } from './manali/manali.component';
import { ShimlaComponent } from './shimla/shimla.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    DestinationComponent,
    CurrencyComponent,
    MumbaiComponent,
    BangloreComponent,
    CoorgComponent,
    ChikmangalurComponent,
    DelhiComponent,
    GoaComponent,
    PuneComponent,
    ManaliComponent,
    ShimlaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
