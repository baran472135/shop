import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../services/product'; // .service sildik!

@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  standalone: true,
  imports: [FormsModule]
})
export class Nav {
  filterText: string = ""; 
  constructor(public productServices: ProductService) {}
}