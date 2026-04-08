import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class AppComponent {   
  private productService = inject(ProductService);

  get filteredProducts() {
    return this.productService.filteredProducts;
  }

  get searchTerm(): string {
    return this.productService.searchTerm();
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.productService.updateSearch(input.value);
  }
}