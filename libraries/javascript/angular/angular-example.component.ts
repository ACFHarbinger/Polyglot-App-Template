// libraries/javascript/angular/angular-example.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polyglot-example',
  template: `
    <div class="angular-card">
      <h2>{{ title }}</h2>
      <p>Current Status: <span [class.active]="isActive">{{ status }}</span></p>
      <button (click)="toggleStatus()" class="btn-toggle">Toggle Connection</button>
    </div>
  `,
  styles: [`
    .angular-card {
      padding: 1.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      background-color: #f8fafc;
    }
    .active {
      color: #10b981;
      font-weight: bold;
    }
  `]
})
export class PolyglotExampleComponent implements OnInit {
  title = 'Angular Integration Module';
  isActive = true;
  status = 'Connected';

  constructor() {}

  ngOnInit(): void {
    console.log('Angular Component Initialized');
  }

  toggleStatus(): void {
    this.isActive = !this.isActive;
    this.status = this.isActive ? 'Connected' : 'Disconnected';
  }
}
