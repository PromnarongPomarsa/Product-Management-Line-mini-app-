import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LiffService } from './services/liff.service';
import { signal } from '@angular/core';
import { ProgressSpinner } from 'primeng/progressspinner';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressSpinner],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  protected readonly title = signal('frontend-PM');
  public liff = inject(LiffService);

  pageHeader = "หน้าแรก";

  ngOnInit(): void {
    this.liff.getLiff();
  }

}
