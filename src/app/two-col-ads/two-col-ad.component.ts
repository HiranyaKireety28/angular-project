import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Ad } from './ad';

@Component({
  selector: 'app-two-col-ad',
  templateUrl: './two-col-ad.component.html',
  styleUrls: ['./two-col-ad.component.scss'],
  encapsulation: ViewEncapsulation.Emulated//ViewEncapsulation
})
export class TwoColAdComponent implements OnInit {

  @Input() title!: string;
  @Input() ads?: Ad[];
  @Input() linkName?: string;
  @Input() linkURL?: string;
  @Input() buttonName?: string;
  @Input() buttonURL?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
