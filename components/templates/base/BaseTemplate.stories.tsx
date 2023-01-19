import { ComponentMeta, ComponentStory } from '@storybook/react';

import BaseTemplate, { BaseTemplateProps } from './BaseTemplate';
import mockBaseTemplateProps from './BaseTemplate.mocks';

export default {
  title: 'templates/BaseTemplate',
  component: BaseTemplate,
  argTypes: {},
} as ComponentMeta<typeof BaseTemplate>;

function Template({ text }: BaseTemplateProps) {
  return <BaseTemplate text={text} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof BaseTemplate>;

Base.args = {
  ...mockBaseTemplateProps.base,
} as BaseTemplateProps;
