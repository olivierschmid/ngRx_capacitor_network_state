import * as fromNetwork from './network.reducer';
import { selectNetworkState } from './network.selectors';

describe('Network Selectors', () => {
  it('should select the feature state', () => {
    const result = selectNetworkState({
      [fromNetwork.networkFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
