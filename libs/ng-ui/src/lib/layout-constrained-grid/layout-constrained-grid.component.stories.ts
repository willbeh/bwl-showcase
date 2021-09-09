import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LayoutConstrainedGridComponent } from './layout-constrained-grid.component';
import { User } from '@bwl/data';

export default {
  title: 'LayoutConstrainedGridComponent',
  component: LayoutConstrainedGridComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LayoutConstrainedGridComponent>;

const Template: Story<LayoutConstrainedGridComponent> = (args: LayoutConstrainedGridComponent) => ({
  component: LayoutConstrainedGridComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    menus:  [],
    user: {id:'', name:'Name', email:'email@email.com'} ,
}