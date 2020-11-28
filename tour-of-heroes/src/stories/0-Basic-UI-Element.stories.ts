import {Button} from 'primeng/button';
import {action} from '@storybook/addon-actions';
import {InputTextModule} from 'primeng';
import {hrefTo} from '@storybook/addon-links';

export default {
  title: 'UI Element'
};

export const Buttons = () => ({
  component: Button,
  props: {
    text: 'Welcome',
    label: 'Prime NG Button',
    styleClass: '.ui-button-success',
    onClick: action('hi')
  }
});
