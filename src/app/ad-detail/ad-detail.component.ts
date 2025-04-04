import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router'; // Import RouterLink

    @Component({
      selector: 'app-ad-detail',
      standalone: true,
      imports: [CommonModule, RouterLink], // Add RouterLink
      templateUrl: './ad-detail.component.html',
      styleUrls: ['./ad-detail.component.css']
    })
    export class AdDetailComponent implements OnInit {
      adId: string | null = null;
      // Placeholder data - fetch real data based on adId
      adDetails = {
        title: 'Cobalt 2 Pozitsiya (Placeholder)',
        price: '12,000 USD',
        location: 'Toshkent',
        description: 'Bu yerda e\'lon haqida batafsil ma\'lumot bo\'ladi. Avtomobil holati, yurgan masofasi, rangi va boshqa xususiyatlari.',
        images: [ ],
        seller: { name: 'Sotuvchi Ismi', phone: '+998 XX XXX XX XX'}
      };

      constructor(private route: ActivatedRoute) {}

      ngOnInit(): void {
        this.adId = this.route.snapshot.paramMap.get('id');
        // Here you would typically fetch ad details from a service using this.adId
        console.log('Loading details for ad ID:', this.adId);
      }
    }
