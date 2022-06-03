import { Injectable } from '@angular/core';
import { AdContainer } from '../../two-col-ads/ad';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  private adContainers!: AdContainer[];

  constructor() { }

  public addAdContainer(adContainer: AdContainer): void {
    this.adContainers.push(adContainer);
  }

  public removeAdContainer(id: number): void {
    const index = this.adContainers.findIndex((adContainer: AdContainer) => adContainer.id === id);
    this.adContainers.splice(index);
  }

  public getAdContainers(): AdContainer[] {
    return this.adContainers;
  }
}
