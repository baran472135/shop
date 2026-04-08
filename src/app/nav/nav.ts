import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.html',
  imports: [FormsModule]
})
export class Nav {
  private productService = inject(ProductService);

  get searchTerm(): string {
    return this.productService.searchTerm();
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.productService.updateSearch(input.value);
  }
}