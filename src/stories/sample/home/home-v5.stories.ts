import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { BlockComponent } from '@uiux/combs/block/block/block.component';
import { BlockModule } from '@uiux/combs/block/block.module';
import { StorysModule } from '@core/module/storys.module';
import { BrandingModule } from '@core/branding/branding.module';
import { defaultHeader, footerInverse } from '../../global/Branding.json';
import { of } from 'rxjs';
import { BRANDING, ENABLE_BUILDER_TOOLBAR } from '@core/token/token-providers';
import { home_v5 } from '@stories/builder/data/sample/home-v5.builder';

export default {
  title: '示例页面/首页示例/05 在线课程',
  id: 'home-v5',
  component: BlockComponent,
  decorators: [
    moduleMetadata({
      entryComponents: [...StorysModule.forEntryComponents()],
      declarations: [],
      imports: [StorysModule.forRoot(), BlockModule, BrandingModule],
      providers: [
        {
          provide: BRANDING,
          useValue: of({
            header: defaultHeader,
            footer: footerInverse,
          }),
        },
        {
          provide: ENABLE_BUILDER_TOOLBAR,
          useValue: of(true),
        },
      ],
    }),
    componentWrapperDecorator(
      (story) => `
      <app-header></app-header>
      <div style="overflow:hidden">
      ${story}
      </div>
      <app-footer></app-footer>
    `
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Page = Template.bind({});
// Raname Story
const content = of(home_v5);
Page.storyName = '预览';
Page.args = {
  pageContent$: content,
};
