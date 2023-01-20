import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header, { HeaderProps } from './Header';
import mockHeaderProps from './Header.mocks';

export default {
  title: 'layouts/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

function Template({ text }: HeaderProps) {
  return <Header text={text} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Header>;

Base.args = {
  ...mockHeaderProps.base,
} as HeaderProps;
