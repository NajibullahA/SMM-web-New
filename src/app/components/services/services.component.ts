import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  services = [
    { title: 'Social Media Advertising', description: 'Targeted ads across Facebook, Instagram, Tiktok, Trends, and more.' },
    { title: 'Content Creation', description: 'High-quality graphics, videos, and written content to engage audiences.' },
    { title: 'Website Development', description: 'Custom websites with a focus on UI/UX design for improved engagement.' },
    { title: 'Marketing Strategy Development', description: 'Tailored strategies to build and strengthen brand identity.' },
    { title: 'Trend Analysis', description: 'Stay relevant with the latest social media trends and engagement tactics.' }
  ];
  visibleServices: any[] = [];
  currentIndex = 0;


  ngOnInit() {
    this.updateVisibleServices();
  }

  updateVisibleServices() {
    // Ensure circular wrapping of items
    const total = this.services.length;
    this.visibleServices = [
      this.services[this.currentIndex % total],
      this.services[(this.currentIndex + 1) % total],
      this.services[(this.currentIndex + 2) % total]
    ];
  }
  next() {
    this.currentIndex = (this.currentIndex + 1) % this.services.length;
    this.updateVisibleServices();
  }
  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.services.length) % this.services.length;
    this.updateVisibleServices();
  }

  pricingPlans = [
    { name: 'Monthly Retainer', description: 'Ongoing support and management.', price: '€300-€4000' },
    { name: 'Project Based', description: 'One-time fee starting from', price: '€300' },
    { name: 'Commission Based', description: 'Based on sales percentage', price: '20% (by agreement)' }
  ];

  selectedPlan: any = null;

  selectPlan(plan: any) {
    this.selectedPlan = this.selectedPlan === plan ? null : plan; // Toggle selection
  }


}