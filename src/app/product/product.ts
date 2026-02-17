import { Component, OnInit, signal } from '@angular/core';
import { Category } from '../category/category1';
import { Product } from './product1';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent{
  title = signal('Ürün Listesi')
  products: Product[] = [
    { id: 1, name: "Laptop", price: 35000, categoryId: 1, description: "Asus ZenBook", imageUrl: "https://images.unsplash.com/photo-1636211993589-6daf32038bd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Mouse", price: 400, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2V8ZW58MHx8MHx8fDA%3D" },
    { id: 1, name: "Laptop", price: 35000, categoryId: 1, description: "Asus ZenBook", imageUrl: "https://images.unsplash.com/photo-1636211993589-6daf32038bd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Mouse", price: 400, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2V8ZW58MHx8MHx8fDA%3D" },
    { id: 1, name: "Laptop", price: 35000, categoryId: 1, description: "Asus ZenBook", imageUrl: "https://images.unsplash.com/photo-1636211993589-6daf32038bd1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Mouse", price: 400, categoryId: 2, description: "A4 Tech", imageUrl: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW91c2V8ZW58MHx8MHx8fDA%3D" },
  ];
}
