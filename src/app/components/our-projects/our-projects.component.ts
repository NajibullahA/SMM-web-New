import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-our-projects',
  templateUrl: './our-projects.component.html',
  styleUrl: './our-projects.component.css'
})
export class OurProjectsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // You can access route parameters or query parameters here
  }
}