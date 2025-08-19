// src/stories/Toast.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from '../components/Toast/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  argTypes: {
    message: { control: 'text' },
    type: { control: 'select', options: ['success', 'error', 'info'] },
    duration: { control: 'number' },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <div style={{ padding: '2rem' }}>
        <button onClick={() => setVisible(true)}>Show Toast</button>
        {visible && (
          <Toast
            {...args}
            onClose={() => setVisible(false)}
          />
        )}
      </div>
    );
  },
};

Default.args = {
  message: 'This is a toast message!',
  type: 'success',
  duration: 3000,
};
