import { ComponentMeta, ComponentStory } from '@storybook/react';

import Home, { HomeProps } from './Home';
import mockHomeProps from './Home.mocks';

export default {
  title: 'pages/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

function Template({ todos }: HomeProps) {
  return <Home todos={todos} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Home>;

Base.args = {
  ...mockHomeProps.base,
} as HomeProps;
