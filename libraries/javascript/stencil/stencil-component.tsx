// libraries/javascript/stencil/stencil-component.tsx
import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'stencil-polyglot-button',
  styleUrl: 'stencil-button.css',
  shadow: true,
})
export class StencilPolyglotButton {
  @Prop() label: string = 'Click me';
  @State() clickedCount: number = 0;

  private handleClick = () => {
    this.clickedCount++;
  };

  render() {
    return (
      <button onClick={this.handleClick} class="custom-btn">
        {this.label} ({this.clickedCount})
      </button>
    );
  }
}
