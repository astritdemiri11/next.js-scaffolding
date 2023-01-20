import { ComponentMeta, ComponentStory } from '@storybook/react';

import Card, { CardProps } from './Card';
import mockCardProps from './Card.mocks';

export default {
  title: 'core/surfaces/Button',
  component: Card,
  argTypes: {},
} as ComponentMeta<typeof Card>;

function Template({ text }: CardProps) {
  return <Card text={text} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Card>;

Base.args = {
  ...mockCardProps.base,
} as CardProps;
