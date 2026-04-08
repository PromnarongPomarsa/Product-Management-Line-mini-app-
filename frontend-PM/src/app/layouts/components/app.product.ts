import { Component, input } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";


@Component({
    standalone: true,
    selector: 'app-product',
    imports: [CardModule, ButtonModule, CurrencyPipe],
    template: `
    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <img
        [src]="image()"
        [alt]="name()"
        class="aspect-square w-full object-cover"
      />

      <div class="p-2.5">
        <div class="line-clamp-2 min-h-[2.5rem] text-xs font-medium leading-5 text-gray-900 sm:text-sm">
          {{ name() }}
        </div>

        <div class="mt-1 line-clamp-2 text-[11px] leading-4 text-gray-500 sm:text-xs">
          {{ description() }}
        </div>

        <div class="mt-2 text-base font-bold leading-none text-[#ee4d2d]">
          {{ price() | currency:'THB':'symbol':'1.0-0' }}
        </div>

        <!-- <button
          pButton
          type="button"
          label="เพิ่ม"
          class="p-button-sm mt-2 w-full"
        ></button> -->
      </div>
    </div>
    `
})
export class AppProduct {
    name = input<string>('สินค้า');
    description = input<string>('รายละเอียดสินค้า');
    price = input<number>(0);
    image = input<string>('assets/product-placeholder.jpg');

}