import { Component } from '@angular/core';

import { ProgressSpinnerModule } from 'primeng/progressspinner';

import { AppSpinningComponent } from '../../layouts/components/app.spinning';
import { AppProduct } from '../../layouts/components/app.product';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashbord-component',
  imports: [ProgressSpinnerModule,
    AppSpinningComponent,
    AppProduct, RouterLink],
  templateUrl: './dashbord-component.html',
  styleUrl: './dashbord-component.css',
})
export class DashbordComponent {
  isLoading = false;
  products = [{
    id: 1,
    name: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    image: 'https://i.pinimg.com/736x/5d/4f/f4/5d4ff49d0706a0c7fd6d185573ab2e12.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'Description for Product 2',
    price: 29.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS75dzpwSv5-jzQTzK808eSvzM1slgSgXoT9w&s'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'Description for Product 3',
    price: 39.99,
    image: 'https://inwfile.com/s-fy/lo39jm.jpg'
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'Description for Product 4',
    price: 49.99,
    image: 'assets/images/peach-goma-summer-fields-wallpaper-kawaii-hoshi.jpg'
  }
  ]

  getProducts() {
    this.isLoading = true;
  }
}
