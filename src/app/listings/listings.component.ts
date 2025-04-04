import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  allListings = [
    { id: 1, title: 'Honda 2 Pozitsiya', price: '12,000 USD', location: 'Toshkent', image: 'assets/cars/car1.jfif', category: 'yengil-avtomobillar' },
    { id: 2, title: 'Lacetti 1 Pozitsiya', price: '10,500 USD', location: 'Samarqand', image: 'assets/cars/car2.jfif', category: 'yengil-avtomobillar' },
    { id: 3, title: 'Spark 4 Pozitsiya', price: '9,000 USD', location: 'Buxoro', image: 'assets/cars/car3.jfif', category: 'yengil-avtomobillar' },
    { id: 4, title: 'Shina almashtirish', price: '100,000 UZS', location: 'Andijon', image: 'assets/services/images1.jfif', category: 'xizmatlar' },
    { id: 5, title: 'Moy almashtirish', price: '100,000 UZS', location: 'Andijon', image: 'assets/services/images2.jfif', category: 'xizmatlar' },
    { id: 6, title: 'Avto diagnostika', price: '150,000 UZS', location: 'Toshkent', image: 'assets/services/images3.jfif', category: 'xizmatlar' },
    { id: 7, title: 'Motor moylar', price: '80 USD', location: 'Farg\'ona', image: 'assets/zapchas/images1.jfif', category: 'ehtiyot-qismlar' },
    { id: 8, title: 'Rullar', price: '50 USD', location: 'Toshkent', image: 'assets/zapchas/images2.jfif', category: 'ehtiyot-qismlar' },
    { id: 9, title: 'Faralar', price: '50 USD', location: 'Toshkent', image: 'assets/zapchas/images3.jfif', category: 'ehtiyot-qismlar' },
    { id: 10, title: 'Honda 2 Pozitsiya', price: '12,000 USD', location: 'Toshkent', image: 'assets/cars/car1.jfif', category: 'yengil-avtomobillar' },
    { id: 12, title: 'Lacetti 1 Pozitsiya', price: '10,500 USD', location: 'Samarqand', image: 'assets/cars/car2.jfif', category: 'yengil-avtomobillar' },
    { id: 13, title: 'Spark 4 Pozitsiya', price: '9,000 USD', location: 'Buxoro', image: 'assets/cars/car3.jfif', category: 'yengil-avtomobillar' },
    { id: 14, title: 'Shina almashtirish', price: '100,000 UZS', location: 'Andijon', image: 'assets/services/images1.jfif', category: 'xizmatlar' },
    { id: 15, title: 'Moy almashtirish', price: '100,000 UZS', location: 'Andijon', image: 'assets/services/images2.jfif', category: 'xizmatlar' },
    { id: 16, title: 'Avto diagnostika', price: '150,000 UZS', location: 'Toshkent', image: 'assets/services/images3.jfif', category: 'xizmatlar' },
    { id: 17, title: 'Motor moylar', price: '80 USD', location: 'Farg\'ona', image: 'assets/zapchas/images1.jfif', category: 'ehtiyot-qismlar' },
    { id: 18, title: 'Rullar', price: '50 USD', location: 'Toshkent', image: 'assets/zapchas/images2.jfif', category: 'ehtiyot-qismlar' },
    { id: 19, title: 'Faralar', price: '50 USD', location: 'Toshkent', image: 'assets/zapchas/images3.jfif', category: 'ehtiyot-qismlar' },
    { id: 21, title: 'Honda 2 Pozitsiya', price: '12,000 USD', location: 'Toshkent', image: 'assets/cars/car1.jfif', category: 'yengil-avtomobillar' },
    { id: 22, title: 'Lacetti 1 Pozitsiya', price: '10,500 USD', location: 'Samarqand', image: 'assets/cars/car2.jfif', category: 'yengil-avtomobillar' },
    { id: 23, title: 'Spark 4 Pozitsiya', price: '9,000 USD', location: 'Buxoro', image: 'assets/cars/car3.jfif', category: 'yengil-avtomobillar' },
    { id: 24, title: 'Shina almashtirish', price: '100,000 UZS', location: 'Andijon', image: 'assets/services/images1.jfif', category: 'xizmatlar' },
    { id: 25, title: 'Moy almashtirish', price: '100,000 UZS', location: 'Andijon', image: 'assets/services/images2.jfif', category: 'xizmatlar' },
    { id: 26, title: 'Avto diagnostika', price: '150,000 UZS', location: 'Toshkent', image: 'assets/services/images3.jfif', category: 'xizmatlar' },
    { id: 27, title: 'Motor moylar', price: '80 USD', location: 'Farg\'ona', image: 'assets/zapchas/images1.jfif', category: 'ehtiyot-qismlar' },
    { id: 28, title: 'Rullar', price: '50 USD', location: 'Toshkent', image: 'assets/zapchas/images2.jfif', category: 'ehtiyot-qismlar' },
    { id: 29, title: 'Faralar', price: '50 USD', location: 'Toshkent', image: 'assets/zapchas/images3.jfif', category: 'ehtiyot-qismlar' },
  
  ];

  filteredListings: any[] = [];
  currentCategory: string | null = null;
  pageTitle: string = 'Barcha E\'lonlar';

  categoryLinks = [
    { slug: 'yengil-avtomobillar', name: 'Yengil Avtomobillar' },
    { slug: 'ehtiyot-qismlar', name: 'Ehtiyot Qismlar' },
    { slug: 'xizmatlar', name: 'Xizmatlar' }
  ];

  categoryNames: { [key: string]: string } = {
    'yengil-avtomobillar': 'Yengil Avtomobillar',
    'ehtiyot-qismlar': 'Ehtiyot Qismlar',
    'xizmatlar': 'Xizmatlar'
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.currentCategory = params.get('category');

      if (this.currentCategory) {
        this.filteredListings = this.allListings.filter(
          listing => listing.category === this.currentCategory
        );
        this.pageTitle = this.categoryNames[this.currentCategory] || 'E\'lonlar';
      } else {
        this.filteredListings = this.allListings;
        this.pageTitle = 'Barcha E\'lonlar';
      }
    });
  }
}
