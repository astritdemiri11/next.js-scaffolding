import { ComponentMeta, ComponentStory } from '@storybook/react';

import Server, { ServerProps } from './Server';
import mockServerProps from './Server.mocks';

export default {
  title: 'pages/Server',
  component: Server,
  argTypes: {},
} as ComponentMeta<typeof Server>;

function Template({ todos }: ServerProps) {
  return <Server todos={todos} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Server>;

Base.args = {
  ...mockServerProps.base,
} as ServerProps;
