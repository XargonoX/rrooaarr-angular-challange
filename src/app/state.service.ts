import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Measurement } from "../models/measurement.interface";
import { mockdata } from "./mockdata";

@Injectable({
  providedIn: "root"
})
export class StateService {
  sideNavState$: BehaviorSubject<boolean>;
  currentMasurements$: BehaviorSubject<Measurement[]>;
  constructor() {
    this.sideNavState$ = new BehaviorSubject<boolean>(false);
    this.currentMasurements$ = new BehaviorSubject<Measurement[]>(mockdata);
  }
}
