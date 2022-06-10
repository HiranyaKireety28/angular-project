import { Component, OnInit } from '@angular/core';
import { NavLink } from './navlink';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navLinks: NavLink[] = [
    {
      linkName:'All',
      linkURL: '#',
    },
    {
      linkName:'Best Sellers',
      linkURL: '/bestsellers',
    },
    {
      linkName:'Mobiles',
      linkURL: '/mobiles',
    },
    {
      linkName:'Customer Service',
      linkURL: '/customer-service',
    },
    {
      linkName:'Today\'s Deals',
      linkURL: '#',
    },
    {
      linkName:'Fashion',
      linkURL: '#',
    },
    {
      linkName:'Electronics',
      linkURL: '#',
    },
    {
      linkName:'Prime',
      linkURL: '#',
    },
    {
      linkName:'Home & Kitchen',
      linkURL: '#',
    },
    {
      linkName:'Amazon Pay',
      linkURL: '#',
    },
    {
      linkName:'New Releases',
      linkURL: '#',
    },
    {
      linkName:'Computers',
      linkURL: '#',
    },
    {
      linkName:'Books',
      linkURL: '#',
    },
    {
      linkName:'Coupons',
      linkURL: '#',
    },
    {
      linkName:'Toys & Games',
      linkURL: '#',
    },
    {
      linkName:'Sell',
      linkURL: '#',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
