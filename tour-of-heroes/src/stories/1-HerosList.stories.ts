import {AppComponent} from '../app/app.component';
import {HeroesComponent} from '../app/heroes/heroes.component';
import {Button, ButtonModule} from 'primeng/button';
import {action} from '@storybook/addon-actions';
import {moduleMetadata} from '@storybook/angular';
import {CarsComponent} from "../app/cars/cars.component";

export default {
  title: 'Heros List',
  declarations: [AppComponent],
};

export const Heros = () => ({
  component: HeroesComponent,
  props: {
  }
});
Heros.story = {
  parameters: { notes: 'My Herolist with Details' },
};



