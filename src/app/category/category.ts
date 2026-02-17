import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from './category1';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.html',
  styleUrls: ['./category.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi";
  categories: Category[] = [
    { id: 1, name: "Elektronik" },
    { id: 2, name: "Bilgisayar" },
    { id: 3, name: "İletişim" },
    { id: 4, name: "Müzik" },
  ];

  ngOnInit() {
  }

}

