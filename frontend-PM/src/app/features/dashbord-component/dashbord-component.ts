import { Component } from '@angular/core';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppSpinningComponent } from '../../layouts/components/app.spinning';

@Component({
  selector: 'app-dashbord-component',
  imports: [ProgressSpinnerModule, AppSpinningComponent],
  templateUrl: './dashbord-component.html',
  styleUrl: './dashbord-component.css',
})
export class DashbordComponent {}
