import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonPrimaryComponent } from './button-primary.component';

export default {
  title: 'ButtonPrimaryComponent',
  component: ButtonPrimaryComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ButtonPrimaryComponent>;

const Template: Story<ButtonPrimaryComponent> = (args: ButtonPrimaryComponent) => ({
  component: ButtonPrimaryComponent,
  props: args,
  template: `<bwl-button-primary>My Button</bwl-button-primary>`
});


export const Primary = Template.bind({});
Primary.args = {
}