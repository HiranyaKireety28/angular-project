import { Component, OnInit } from '@angular/core';
import { Carousel, CarouselItem } from '../carousel/carousel';

@Component({
  selector: 'app-one-ad-carousel',
  templateUrl: './one-ad-carousel.component.html',
  styleUrls: ['./one-ad-carousel.component.scss']
})
export class OneAdCarouselComponent implements OnInit {

  items: CarouselItem[][] = [
    [
      {
        id: 1,
        imageSource: 'assets/mobile.jpg',
      },
      {
        id: 2,
        imageSource: 'assets/earphones.jpg',
      },
      {
        id: 3,
        imageSource: 'assets/earpods.jpg',
      },
      {
        id: 4,
        imageSource: 'assets/tresemme.jpg',
      },
      {
        id: 5,
        imageSource: 'assets/laptop.jpg',
      },
      {
        id: 6,
        imageSource: 'assets/wired-ear-phones.jpg',
      },
      {
        id: 7,
        imageSource: 'assets/mobile-white.jpg',
      },
    ],
    [
      {
        id: 8,
        imageSource: 'assets/trolley.jpg',
      },
      {
        id: 9,
        imageSource: 'assets/helmet.jpg',
      },
      {
        id: 10,
        imageSource: 'assets/light.jpg',
      },
      {
        id: 11,
        imageSource: 'assets/aer.jpg',
      },
    ],
    [
      {
        id: 12,
        imageSource: 'assets/laptop-stand.jpg',
      },
      {
        id: 13,
        imageSource: 'assets/sandisk.jpg',
      },
      {
        id: 14,
        imageSource: 'assets/mouse.jpg',
      },
      {
        id: 15,
        imageSource: 'assets/hpink.jpg',
      },
    ],
  ];

  carousels: Carousel[] = [
    {
      title: 'Today’s Deals',
      linkName: 'See all deals',
      linkURL:
        'https://www.amazon.in/gp/goldbox/?ie=UTF8&ref=nav_topnav_deals&pd_rd_w=iSqj7&pf_rd_p=78c9b567-1104-4e60-a4cc-720319b5249d&pf_rd_r=9PQDEG3G4Z70RRJ9HTG4&pd_rd_r=bb55db65-a764-4b69-b520-b45dd3376f39&pd_rd_wg=a2f6Q&ref_=pd_gw_unk',
      items: this.items[0],
    },
    {
      title: 'Up to 60% off | Car & bike accessories & more',
      linkName: 'See all offers',
      linkURL:
        'https://www.amazon.in/deal/f40dbb69?showVariations=true&moreDeals=4cba0240%2Cc15423bd%2C9f0bbdc3%2Cebf16110%2Caebe29f2%2C1d07adba%2Cc7f50333%2Cd4ca38f2%2Cf1f6a2de%2C6f02668b%2C9e8760a1%2Cf541389d%2C30bbf8e1%2C244f2972%2Cd998a222%2C75de6060%2C4c0b343b%2Ceed63efa%2C68c85be2%2C6112f25a&smid=AT95IG9ONZD7S&dealid=f40dbb69&pf_rd_p=ea3ddfcb-3d3d-46c1-b56d-aea7bcaaaa91&pf_rd_s=mobile-hybrid-1&pf_rd_t=30901&pf_rd_i=26214841031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=BQ4NTBH98XTTW8ZSPX1C&pd_rd_w=1hxSo&pf_rd_p=ad2751ef-ec31-41b9-9358-4b223fee36fb&pf_rd_r=PN0038Z39ZF010DD45QT&pd_rd_r=ce832e90-6863-48d2-aa75-0d5320c0318f&pd_rd_wg=IHtcC',
      items: this.items[1],
    },
    {
      title: 'Best Sellers in Computers & Accessories',
      items: this.items[2],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
