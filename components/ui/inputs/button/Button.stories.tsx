import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button, { ButtonProps } from './Button';
import mockButtonProps from './Button.mocks';

export default {
  title: 'core/inputs/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

function Template({ text }: ButtonProps) {
  return <Button text={text} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Button>;

Base.args = {
  ...mockButtonProps.base,
} as ButtonProps;
