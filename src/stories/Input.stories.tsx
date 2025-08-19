import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input/Input';
import type { InputProps } from '../components/Input/Input';

const meta: Meta<InputProps> = {
  title: 'Input',
  component: Input,
};

export default meta;

type Story = StoryObj<InputProps>;

export const TextInput: Story = {
  args: {
    type: 'text',
    clearable: true,
    placeholder: 'Type here...',
  },
};

export const PasswordInput: Story = {
  args: {
    type: 'password',
    clearable: true,
    placeholder: 'Enter password',
  },
};

export const NumberInputClearable: Story = {
  args: {
    type: 'number',
    clearable: true,
    placeholder: 'Enter number...',
  },
};

