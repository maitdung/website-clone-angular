// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { PRODUCTS, Product } from './product';

@Component({
  selector: 'app-root',
  standalone: true,                   
  imports: [CommonModule],           
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyApp';
  products: Product[] = PRODUCTS;
}
