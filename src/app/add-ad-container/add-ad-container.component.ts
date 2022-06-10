import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ad-container',
  templateUrl: './add-ad-container.component.html',
  styleUrls: ['./add-ad-container.component.scss']
})
export class AddAdContainerComponent implements OnInit {

  addAdContainerFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addAdContainerFormGroup = this.fb.group({
      adsContainers: this.fb.array([]),
    });
  }

  public addAdContainer(): void {
    (this.addAdContainerFormGroup.get('adsContainers') as FormArray).push(this.fb.group({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      linkName: new FormControl(''),
      linkURL: new FormControl(''),
      ads: this.fb.array([]),
      buttonName: new FormControl(''),
      buttonURL: new FormControl(''),
    }));
  }

  get adsContainers() {
    return this.addAdContainerFormGroup.get('adsContainers') as FormArray;
  }

  public ads(index: number){
    return this.adsContainers.at(index).get('ads') as FormArray;
  }

  public addAd(index: number): void {
    this.ads(index).push(this.fb.group({
      adTitle: new FormControl('',Validators.required),
      imageSource: new FormControl(),
    }));
  }
}
