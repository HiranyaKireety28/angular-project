import { Component, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../carousel/carousel';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() item?: CarouselItem;

  constructor() { }

  ngOnInit(): void {
  }

}
