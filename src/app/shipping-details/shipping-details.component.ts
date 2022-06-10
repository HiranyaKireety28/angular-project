import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit, AfterViewInit {

  firstname: string = 'Placeholder';
  @ViewChild('firstName') firstName?: ElementRef;
  @ViewChild('lastName') lastName?: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
  }

  save(element: any) {
    console.log("save", element);
    console.log("firstName", this.firstName?.nativeElement.value);
    console.log("lastName", this.lastName?.nativeElement.value);
  }
}
