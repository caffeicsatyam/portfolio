import { Component } from 'react';

export default class WebGLErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.warn('WebGL/3D scene failed to load:', error, info);
  }

  render() {
    if (this.state.hasError) {
      // Silently degrade — show nothing instead of crashing the whole page
      return null;
    }
    return this.props.children;
  }
}
