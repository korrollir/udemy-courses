# Higher Order Components

### Purpose
HoCs are React components that adds addtional functionality or behavior to an existing component.

Combine a normal component with one or more HoCs, which returns an "enhanced" or "composed" component.

Reduces duplicated logic in the app.

### Uses
DRY repeated functionality among multiple components.

Commonly used in third-party libraries.

### Conventions
Normal to place HoCs in a nested folder in components folder.
HoC argument is named ComposedComponent.

### Steps to Build an HOC
  1. Write the logic you want to resuse into a component
  2. Create an HOC file and add the HOC scaffold
  3. Move the reusable logic into the HOC
  4. Pass props/config/behavior through to child component

### HOC Scaffold
```import React, { Component } from 'react';
export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return <ChildComponent />>;
    }
  }

  return ComposedComponent;
} ```