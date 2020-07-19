import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesComponent} from './heroes.component';
import {AppModule} from '../app.module';
import {AppComponent} from '../app.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [HeroesComponent, AppComponent],
  imports: [
    CommonModule,
    AppModule,
    FormsModule
  ],
  exports: [HeroesComponent, AppComponent]
})
export class HeroesModule { }
