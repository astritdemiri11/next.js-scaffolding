import { ComponentMeta, ComponentStory } from '@storybook/react';

import Todo, { TodoProps } from './Todo';
import mockTodoProps from './Todo.mocks';

export default {
  title: 'pages/Todo',
  component: Todo,
  argTypes: {},
} as ComponentMeta<typeof Todo>;

function Template({ todo }: TodoProps) {
  return <Todo todo={todo} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Todo>;

Base.args = {
  ...mockTodoProps.base,
} as TodoProps;
