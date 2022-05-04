import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromNetwork from './state/network.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NetworkEffects } from './state/network.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromNetwork.networkFeatureKey, fromNetwork.reducer),
    EffectsModule.forFeature([NetworkEffects])
  ]
})
export class NetworkStateModule { }
