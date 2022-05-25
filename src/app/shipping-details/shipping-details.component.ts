import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('firstName') firstName?: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    console.log(this.firstName?.nativeElement?.value);
  }
}
