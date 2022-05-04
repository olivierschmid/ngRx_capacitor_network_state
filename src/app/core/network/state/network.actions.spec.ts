import * as fromNetwork from './network.actions';

describe('loadNetworks', () => {
  it('should return an action', () => {
    expect(fromNetwork.loadNetworks().type).toBe('[Network] Load Networks');
  });
});
