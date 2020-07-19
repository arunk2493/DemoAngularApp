import {AppComponent} from '../app/app.component';
import {HeroesComponent} from '../app/heroes/heroes.component';
import {Button, ButtonModule} from 'primeng/button';

export default {
  title: 'Heros List'
};

export const Heros = () => ({
  component: HeroesComponent,
  props: {}
});

