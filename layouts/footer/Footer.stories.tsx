import { ComponentMeta, ComponentStory } from '@storybook/react';

import Footer, { FooterProps } from './Footer';
import mockFooterProps from './Footer.mocks';

export default {
  title: 'layouts/Footer',
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

function Template({ text }: FooterProps) {
  return <Footer text={text} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Footer>;

Base.args = {
  ...mockFooterProps.base,
} as FooterProps;
