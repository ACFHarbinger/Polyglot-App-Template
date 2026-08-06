// libraries/javascript/aurelia/aurelia-component.js
export class AureliaComponent {
  heading = 'Aurelia Custom Element';
  firstName = 'John';
  lastName = 'Doe';

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    alert(`Welcome to Aurelia, ${this.fullName}!`);
  }
}
