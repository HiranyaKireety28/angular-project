import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navLinks = [
    'All',
    'Fresh',
    'Health, Household & Personal Care',
    'Kindle eBooks',
    'Audible',
    'Gift Cards',
    'Books',
    'Buy Again',
    'Baby',
    'Subscribe & Save',
    'Gift Ideas',
    'Amazon Pay',
    'Home Improvement',
  ];
  constructor() {}

  ngOnInit(): void {}
}
