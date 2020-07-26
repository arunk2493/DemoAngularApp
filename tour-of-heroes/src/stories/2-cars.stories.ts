import {AppComponent} from '../app/app.component';
import {HeroesComponent} from '../app/heroes/heroes.component';
import {Button, ButtonModule} from 'primeng/button';
import {action} from '@storybook/addon-actions';
import {moduleMetadata} from '@storybook/angular';
import {CarsComponent} from '../app/cars/cars.component';

export default {
  title: 'Add List',
};
export const addHeroComponent = () => ({
  component: CarsComponent,
  props: {
  }
});

