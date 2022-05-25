import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarouselItem } from './carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() title!: string;
  @Input() linkName?: string;
  @Input() linkURL?: string;
  @Input() items!: CarouselItem[];
  @Output() carouselItemClicked = new  EventEmitter<CarouselItem>();

  responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  navigateToDetails(item: CarouselItem): void {
    this.carouselItemClicked.emit(item);
  }
}
