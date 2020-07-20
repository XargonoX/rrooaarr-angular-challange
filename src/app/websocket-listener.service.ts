import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from "rxjs/webSocket";
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})

export class WebsocketListenerService {
  c3WebSocket: WebSocketSubject<any> = webSocket('wss://challenge3.rrooaarr.cloud');

  constructor(private state: StateService) {
    this.c3WebSocket.subscribe(
      (dataFromServer) => {
        this.state.addMeasurement(dataFromServer.data)
      }
    );
    
    this.c3WebSocket.next(
      {"event": "measurements",
       "data": "test"
      }
    );
   }


}
