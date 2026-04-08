import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { LiffService } from './services/liff.service';

import { AppSpinningComponent } from './layouts/components/app.spinning';
import { AppHeader } from './layouts/components/app.header';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    AppSpinningComponent,
    ProgressSpinnerModule,
    AppHeader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('frontend-PM');
  public liff = inject(LiffService);

  pageHeader = "Home";

  ngOnInit(): void {
    this.liff.getLiff();
  }

}
