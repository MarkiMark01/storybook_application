// App.tsx
import React, { useState } from 'react';
import { Input } from './components/Input/Input';
import { Toast } from './components/Toast/Toast';
import { SidebarMenu, type MenuItem } from './components/SidebarMenu/SidebarMenu';

export const App: React.FC = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems: MenuItem[] = [
    { title: 'Home' },
    { title: 'About', subItems: [{ title: 'Team' }, { title: 'Company' }] },
    { title: 'Contact' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>React Component Library Demo</h1>

      <h2>Input</h2>
      <Input type="text" placeholder="Text" clearable />
      <Input type="password" placeholder="Password" clearable />
      <Input type="number" placeholder="Number" />

      <h2>Toast</h2>
      {toastVisible && (
        <Toast
          message="This is a toast message!"
          type="success"
          duration={5000}
          onClose={() => setToastVisible(false)}
        />
      )}
      <button onClick={() => setToastVisible(true)}>Show Toast</button>

      <h2>Sidebar</h2>
      <button onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <SidebarMenu items={sidebarItems} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};


