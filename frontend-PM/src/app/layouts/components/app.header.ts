import { Component, inject, input } from "@angular/core";
import { Location } from "@angular/common";

@Component({
    standalone: true,
    selector: 'app-header',
    template: `
    <!-- <header class="top-bar px-4 py-3 md:px-6">
        <div class="top-bar_title text-lg md:text-xl font-semibold truncate">{{ pageHeader() }}</div>
    </header> -->
   <header
      class="sticky top-0 z-50 border-b border-gray-200 bg-white/95 pt-[env(safe-area-inset-top)] backdrop-blur"
    >
      <div  
        class="mx-auto grid h-14 max-w-screen-md grid-cols-[40px_1fr_40px] items-center px-3 sm:grid-cols-[44px_1fr_44px] sm:px-4 md:h-16 md:px-6"
      >
        <button
          type="button"
          class="flex h-9 w-9 items-center justify-center rounded-full text-gray-700 active:bg-gray-100 sm:h-10 sm:w-10"
          aria-label="Back"
          (click)="goBack()"
        >
          <i class="pi pi-angle-left text-sm sm:text-base"></i>
        </button>

        <div
          class="truncate px-2 text-center text-[15px] font-semibold text-gray-900 sm:text-base md:text-lg"
        >
          {{ pageHeader() }}
        </div>

        <img
          [src]="profileImage()"
          alt="Profile"
          class="h-9 w-9 rounded-full object-cover ring-1 ring-gray-200 sm:h-10 sm:w-10"
        />
       </div>
    </header>
    `
})
export class AppHeader {
    private Location = inject(Location);

    pageHeader = input<string>("Home");
    profileImage = input<string>("https://profile.line-scdn.net/0h3COpWwuCbGxiCXzxvrISExJZbwZBeDV-TGsjDVQANFtYbi5qHWwrX1ULYV8Ianw5STwlDAMANAtuGhsKfF-QWGU5MV1eMS06S2Ymig");

    goBack() {
        this.Location.back();
    }
}