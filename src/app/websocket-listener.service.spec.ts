import { TestBed } from '@angular/core/testing';

import { WebsocketListenerService } from './websocket-listener.service';

describe('WebsocketListenerService', () => {
  let service: WebsocketListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebsocketListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
