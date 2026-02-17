import { Component } from '@angular/core';
import { Nav } from './nav/nav';
import { CategoryComponent } from './category/category';
import { ProductComponent } from './product/product'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Nav, ProductComponent, CategoryComponent], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }
 