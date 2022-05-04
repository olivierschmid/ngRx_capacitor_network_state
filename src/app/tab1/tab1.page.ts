import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectIsDeviceOnline} from '../core/network/state/network.selectors';
import {StoreDevtools} from '@ngrx/store-devtools';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public isDeviceOnline$ = this.store.select(selectIsDeviceOnline);

  constructor(
    private store: Store,
    private storeDevtools: StoreDevtools) {
  }

  public async exportStore(): Promise<void> {
    this.storeDevtools.liftedState.subscribe((res) => {
      console.log(JSON.stringify(res));
    });
  }
}
