import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterLink } from '@angular/router'; // Import RouterLink

    @Component({
      selector: 'app-cars',
      standalone: true,
      imports: [CommonModule, RouterLink], // Add RouterLink
      templateUrl: './cars.component.html',
      styleUrls: ['./cars.component.css']
    })
    export class CarsComponent {
      // Bu yerda ham ListingsComponent kabi ma'lumotlar bo'lishi mumkin
      // Yoki bu sahifa faqat avtomobillarga oid maxsus filterlar va ko'rinishni taqdim etishi mumkin
       cars = [
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        { id: 11, title: 'Suzuki', price: '8,000 USD', location: 'Farg\'ona', image: 'assets/cars/car2.jfif' },
        { id: 12, title: 'Malibu 2 Premier', price: '32,000 USD', location: 'Toshkent', image: 'assets/cars/car3.jfif' },
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        { id: 11, title: 'Suzuki', price: '8,000 USD', location: 'Farg\'ona', image: 'assets/cars/car2.jfif' },
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        { id: 11, title: 'Suzuki', price: '8,000 USD', location: 'Farg\'ona', image: 'assets/cars/car2.jfif' },
        { id: 12, title: 'Malibu 2 Premier', price: '32,000 USD', location: 'Toshkent', image: 'assets/cars/car3.jfif' },
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        { id: 11, title: 'Suzuki', price: '8,000 USD', location: 'Farg\'ona', image: 'assets/cars/car2.jfif' },
        { id: 12, title: 'Malibu 2 Premier', price: '32,000 USD', location: 'Toshkent', image: 'assets/cars/car3.jfif' },
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        { id: 11, title: 'Suzuki', price: '8,000 USD', location: 'Farg\'ona', image: 'assets/cars/car2.jfif' },
        { id: 12, title: 'Malibu 2 Premier', price: '32,000 USD', location: 'Toshkent', image: 'assets/cars/car3.jfif' },
        { id: 10, title: 'Honda 3 Elegant Plus', price: '11,500 USD', location: 'Jizzax', image: 'assets/cars/car1.jfif' },
        
      ];
    }
