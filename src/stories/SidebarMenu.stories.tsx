import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SidebarMenu, type MenuItem } from '../components/SidebarMenu/SidebarMenu';

const meta: Meta<React.ComponentProps<typeof SidebarMenu>> = {
  title: 'Navigation/SidebarMenu',
  component: SidebarMenu,
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof SidebarMenu>>;

const sampleItems: MenuItem[] = [
  { title: 'Dashboard' },
  { title: 'Projects', subItems: [{ title: 'Project A' }, { title: 'Project B' }] },
  { title: 'Settings', subItems: [{ title: 'Profile' }, { title: 'Billing' }] },
];

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div style={{ padding: '2rem' }}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Close' : 'Open'} Sidebar
        </button>
        <SidebarMenu items={sampleItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    );
  },
};





