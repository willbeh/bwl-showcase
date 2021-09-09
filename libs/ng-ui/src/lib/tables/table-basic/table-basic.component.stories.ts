import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { Observable } from 'rxjs';
import { TableBasicComponent } from './table-basic.component';

export default {
  title: 'TableBasicComponent',
  component: TableBasicComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<TableBasicComponent>;

const Template: Story<TableBasicComponent> = (args: TableBasicComponent) => ({
  component: TableBasicComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
    schemas:  [],
    entities$:  new Observable<any>(),
    showEdit:  false,
}