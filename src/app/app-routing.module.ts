import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CurrencyComponent} from './currency/currency.component';
import {DestinationComponent} from './destination/destination.component';
import {MumbaiComponent} from './mumbai/mumbai.component';
import {BangloreComponent} from './banglore/banglore.component';
import {ChikmangalurComponent} from './chikmangalur/chikmangalur.component';
import {CoorgComponent} from './coorg/coorg.component';
import {DelhiComponent} from './delhi/delhi.component';
import {GoaComponent} from './goa/goa.component';
import {PuneComponent} from './pune/pune.component';
import {ManaliComponent} from './manali/manali.component';
import {ShimlaComponent} from './shimla/shimla.component';



import { from } from 'rxjs';
const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'Currency', component: CurrencyComponent},
{path: 'Destination', component: DestinationComponent},
{path: 'Mumbai', component: MumbaiComponent},
{path: 'Banglore', component: BangloreComponent},
{path: 'Chikmangalur', component: ChikmangalurComponent},
{path: 'Coorg', component: CoorgComponent},
{path: 'Delhi', component: DelhiComponent},
{path: 'Goa', component: GoaComponent},
{path: 'Pune', component: PuneComponent},
{path: 'Manali', component: ManaliComponent},
{path: 'Shimla', component: ShimlaComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
