import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {

  private allProducts = signal<Product[]>([
    { 
      id: 1, 
      name: 'Laptop', 
      price: 35000, 
      category: 'Bilgisayar', 
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    { 
      id: 2, 
      name: 'Fare', 
      price: 400, 
      category: 'Araç', 
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 3, 
      name: 'Klavye', 
      price: 500,
      category: 'Araç', 
      image: 'https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 4, 
      name: 'Kulaklık', 
      price: 1400, 
      category: 'Araç', 
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 5, 
      name: 'Oyuncu Koltuğu', 
      price: 9500, 
      category: 'Koltuk', 
      image: 'https://images.unsplash.com/photo-1598550487031-0898b4852123?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    { 
      id: 6, 
      name: 'Laptop Çantası', 
      price: 1480, 
      category: 'Çanta', 
      image: 'https://images.unsplash.com/photo-1643033998435-dd69a55811be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    }
  ]);

  searchTerm = signal<string>('');

  filteredProducts = computed(() => {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) return this.allProducts();

    return this.allProducts().filter(p => 
      p.name.toLowerCase().includes(term)
    );
  });

  updateSearch(term: string) {
    this.searchTerm.set(term);
  }
}