import { Component } from "@angular/core";
import { StateService } from "./state.service";
import { WebsocketListenerService } from "./websocket-listener.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angular-challenge";
  sidenavOpened$ = this.state.sideNavState$;
  constructor(private state: StateService, private webSocketListener: WebsocketListenerService) {}

  openSidebar(): void {
    this.sidenavOpened$.next(true);
  }

  closeSideBar() {
    this.sidenavOpened$.next(false)
  }
}
