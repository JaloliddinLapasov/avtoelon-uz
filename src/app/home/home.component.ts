import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { RouterLink } from '@angular/router'; // Agar linklar ishlatsangiz kerak

    @Component({
      selector: 'app-home',
      standalone: true,
      imports: [CommonModule, RouterLink], // RouterLink qo'shildi
      templateUrl: './home.component.html',
      styleUrls: ['./home.component.css']
    })
    export class HomeComponent { }
