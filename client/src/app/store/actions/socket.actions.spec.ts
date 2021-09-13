import * as SocketActions from './socket.actions';

describe('Socket', () => {
  it('should create an instance', () => {
    expect(new SocketActions.LoadSockets()).toBeTruthy();
  });
});
