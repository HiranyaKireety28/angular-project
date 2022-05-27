import { Component } from '@angular/core';
import { Carousel, CarouselItem } from './carousel/carousel';
import { Product } from './product/product';
import { AdContainer } from './two-col-ads/ad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  selectedProduct?: Product;

  clickedItem!: CarouselItem;

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

  products: Product[] = [
    {
      id: '1',
      imageSource: 'assets/m12.jpg',
      title: 'Samsung Galaxy M12 (Blue,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad Camera | 90Hz Refresh Rate',
      rating: 4.5,
      reviewCount: 143546,
      isLimitedDeal: true,
      currency: '₹',
      sellingPrice: 10499,
      costPrice: 12999,
      discount: -19,
      discountTexts: ['Upto Rs. 1500 off On Citibank Cards'],
      deliveryText: 'Get it by',
      deliveryDate: new Date(),
      additionalDeliveryTexts: ['FREE Delivery by Amazon'],
    },
    {
      id: '2',
      imageSource: 'assets/m32.jpg',
      title: 'Samsung Galaxy M32 (Light Blue, 4GB RAM, 64GB Storage) 6 Months Free Screen Replacement for Prime',
      rating: 4.2,
      reviewCount: 4550,
      isLimitedDeal: true,
      currency: '₹',
      sellingPrice: 11999,
      costPrice: 16999,
      discount: 20,
      discountTexts: ['Save ₹250 with coupon'],
      deliveryText: 'Get it by',
      deliveryDate: new Date(),
      additionalDeliveryTexts: ['FREE Delivery by Amazon'],
    },
    {
      id: '3',
      imageSource: 'assets/redmi9.jpg',
      title: 'Redmi 9 Activ (Coral Green, 4GB RAM, 64GB Storage)',
      rating: 4.3,
      reviewCount: 158450,
      isLimitedDeal: false,
      currency: '₹',
      sellingPrice: 9499,
      costPrice: 10999,
      discount: -14,
      discountTexts: ['Save ₹500 with coupon'],
      deliveryText: 'Get it by',
      deliveryDate: new Date(),
      additionalDeliveryTexts: ['FREE Delivery by Amazon'],
    },
  ];

  carousels: Carousel[] = [
    {
      title: 'Today’s Deals',
      linkName: 'See all deals',
      linkURL: 'https://www.amazon.in/gp/goldbox/?ie=UTF8&ref=nav_topnav_deals&pd_rd_w=iSqj7&pf_rd_p=78c9b567-1104-4e60-a4cc-720319b5249d&pf_rd_r=9PQDEG3G4Z70RRJ9HTG4&pd_rd_r=bb55db65-a764-4b69-b520-b45dd3376f39&pd_rd_wg=a2f6Q&ref_=pd_gw_unk',
      items: this.items[0]
    },
    {
      title: 'Up to 60% off | Car & bike accessories & more',
      linkName: 'See all offers',
      linkURL: 'https://www.amazon.in/deal/f40dbb69?showVariations=true&moreDeals=4cba0240%2Cc15423bd%2C9f0bbdc3%2Cebf16110%2Caebe29f2%2C1d07adba%2Cc7f50333%2Cd4ca38f2%2Cf1f6a2de%2C6f02668b%2C9e8760a1%2Cf541389d%2C30bbf8e1%2C244f2972%2Cd998a222%2C75de6060%2C4c0b343b%2Ceed63efa%2C68c85be2%2C6112f25a&smid=AT95IG9ONZD7S&dealid=f40dbb69&pf_rd_p=ea3ddfcb-3d3d-46c1-b56d-aea7bcaaaa91&pf_rd_s=mobile-hybrid-1&pf_rd_t=30901&pf_rd_i=26214841031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_r=BQ4NTBH98XTTW8ZSPX1C&pd_rd_w=1hxSo&pf_rd_p=ad2751ef-ec31-41b9-9358-4b223fee36fb&pf_rd_r=PN0038Z39ZF010DD45QT&pd_rd_r=ce832e90-6863-48d2-aa75-0d5320c0318f&pd_rd_wg=IHtcC',
      items: this.items[1]
    },
    {
      title: 'Best Sellers in Computers & Accessories',
      items: this.items[2]
    },
  ];

  adsContainers: AdContainer[] = [
    {
      title: 'Upgrade your home | Amazon Brands & more',
      linkName: 'Shop now',
      linkURL:'https://www.amazon.in/gp/sva/dashboard',
      ads: [
        {
          imageSource: 'assets/tv.jpg',
          title: 'Smart LED TVs'
        },
        {
          imageSource: 'assets/appliances.jpg',
          title: 'Appliances'
        },
        {
          imageSource: 'assets/furniture.jpg',
          title: 'Furniture'
        },
        {
          imageSource: 'assets/kitchen-products.jpg',
          title: 'Kitchen products'
        }
      ]
    },
    {
      title: 'Keep Shopping for',
      ads: [
        {
          imageSource: 'assets/godrej-soap-pink.jpg',
          title: 'Godrej No. 1 Bathing Soap Kesar & Milk Cream – Grade 1 Soap & Long-lasting Fragrance'
        },
        {
          imageSource: 'assets/godrej-soap.jpg',
          title: 'Godrej No.1 Lime & Aloe Vera (150g)'
        },
        {
          imageSource: 'assets/boroplus-antiseptic.jpg',
          title: 'BoroPlus Antiseptic and Moisturising Bathing Soap with Aloe Vera, Neem and Tulsi'
        },
        {
          imageSource: 'assets/vivel-soap.jpg',
          title: 'Vivel Aloe Vera Bathing Soap with Vitamin E for Soft, Glowing skin'
        }
      ],
    },
    {
      title: 'Amazon Pay | Pay utility bills fast & conveniently',
      linkName: 'Explore more from Amazon Pay',
      linkURL:'https://www.amazon.in/gp/sva/dashboard',
      ads: [
        {
          imageSource: 'assets/electricity-bill.jpg',
          title: 'Electricity bill'
        },
        {
          imageSource: 'assets/lpg-gas-cylinder.jpg',
          title: 'LPG gas cylinder'
        },
        {
          imageSource: 'assets/broadband-bill.jpg',
          title: 'Broadband bill'
        },
        {
          imageSource: 'assets/dth-recharge.jpg',
          title: 'DTH Recharge'
        }
      ]
    },
    {
      title: 'Automotive essentials | Up to 60% off',
      linkName: 'See more',
      linkURL:'https://www.amazon.in/gp/sva/dashboard',
      ads: [
        {
          imageSource: 'assets/cleaning-accessories.jpg',
          title: 'Cleaning accessories'
        },
        {
          imageSource: 'assets/tyre.jpg',
          title: 'Tyre & rim care'
        },
        {
          imageSource: 'assets/helmets.jpg',
          title: 'Helmets'
        },
        {
          imageSource: 'assets/vacuum-cleaner.jpg',
          title: 'Vacuum cleaner'
        }
      ]
    },
    {
      title: 'Shop by Category',
      linkName: 'See more',
      linkURL:'https://www.amazon.in/gp/sva/dashboard',
      ads: [
        {
          imageSource: 'assets/fresh.jpg',
          title: 'Fresh'
        },
        {
          imageSource: 'assets/mobiles.jpg',
          title: 'Mobiles'
        },
        {
          imageSource: 'assets/fashion.jpg',
          title: 'Fashion'
        },
        {
          imageSource: 'assets/electronics.jpg',
          title: 'Electronics'
        }
      ]
    },
    {
      title: 'Sign in for your best experience',
      buttonName: 'Sign in securely',
      buttonURL:'https://www.amazon.in/ap/signin',
    }
  ];

  showDetails(item: CarouselItem){
    this.clickedItem = item;
  }

  showProductDetails(product: Product): void{
    this.selectedProduct = product;
  }

  trackByProduct(index: number, product: Product) {
    return product.id;
  }
}
