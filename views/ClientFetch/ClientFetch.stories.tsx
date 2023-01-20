import { ComponentMeta, ComponentStory } from '@storybook/react';

import ClientFetch, { ClientFetchProps } from './ClientFetch';
import mockClientFetchProps from './ClientFetch.mocks';

export default {
  title: 'pages/ClientFetch',
  component: ClientFetch,
  argTypes: {},
} as ComponentMeta<typeof ClientFetch>;

function Template({ todos }: ClientFetchProps) {
  return <ClientFetch todos={todos} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof ClientFetch>;

Base.args = {
  ...mockClientFetchProps.base,
} as ClientFetchProps;
