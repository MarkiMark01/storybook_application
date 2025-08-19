# React Component Library - Front-end JS Engineer Test

## 🎯 Overview
This project is a **React component library** built using **Storybook**. It includes three reusable UI components with multiple states and props. Each component is displayed in Storybook with visual variations and can be tested interactively.

## 🚀 Goal
The library includes:

- **Input Component** (multi-type, password visibility toggle, clearable)
- **Toast Component** (notification with auto-dismiss and transitions)
- **Sidebar Menu Component** (nested menus with sliding animation)

## 🧩 Components

### 📥 Input Component
- **Features**:
  - Supports `text`, `password`, `number`
  - Password fields have toggle visibility
  - Clearable input with "X" button
- **Storybook Stories**:
  - Text input with/without clearable
  - Password input with toggle
  - Number input with clearable

### 🔔 Toast Component
- **Features**:
  - Appears at bottom-right
  - Auto-dismisses after configurable duration
  - Optional manual close button
  - Fade/slide transition
- **Storybook Stories**:
  - Success, error, info variants
  - Different durations
  - Manual close example

### 📚 Sidebar Menu Component
- **Features**:
  - Slides in from the right
  - Supports nested submenus (accordion)
  - Closes when clicking outside
- **Storybook Stories**:
  - One-level and two-level nested menus
  - Open/closed states

### Installation
git clone git@github.com:MarkiMark01/storybook_application.git
npm install
npm run storybook
npm run dev

