import { Component, input, } from '@angular/core';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'app-spinning-component',
    imports: [ProgressSpinnerModule],
    template: `

    @if(isLoading()) {
        <div class="spinner-overlay">
            <p-progress-spinner strokeWidth="8" fill="transparent" animationDuration=".5s" />
        </div>
    }
`
})

export class AppSpinningComponent {
     isLoading = input<boolean>(false);
}