import { ComponentMeta, ComponentStory } from '@storybook/react';

import Dialog, { DialogProps } from './Dialog';
import mockDialogProps from './Dialog.mocks';

export default {
  title: 'core/inputs/Button',
  component: Dialog,
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

function Template({ text }: DialogProps) {
  return <Dialog text={text} />;
}

export const Base = Template.bind({}) as ComponentStory<typeof Dialog>;

Base.args = {
  ...mockDialogProps.base,
} as DialogProps;
