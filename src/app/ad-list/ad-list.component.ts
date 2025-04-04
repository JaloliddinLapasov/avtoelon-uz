import { Component, OnInit } from '@angular/core';
import { AdService } from '../services/ad.service';
import { Ad } from '../ad/ad.module';
// import { AdService } from './ad.service';
// import { Ad } from './ad.model';

@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {
deleteAd(arg0: any) {
throw new Error('Method not implemented.');
}
  ads: Ad[] = [];

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.adService.getAds().subscribe(
      (data) => {
        this.ads = data;
      },
      (error) => {
        console.error('Error fetching ads:', error);
      }
    );
  }
}
