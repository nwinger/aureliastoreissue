import { autoinject } from "aurelia-framework";
import { Subscription } from "rxjs";
import { State } from "state";
import { Store } from "aurelia-store";
@autoinject
export class Home {
  public state: State;

  private subscription: Subscription;

  message = "Home";

  constructor(private store: Store<State>) {
    this.subscription = this.store.state.subscribe(
      (state: State) => (this.state = state)
    );
    this.functionDependingOnState();
  }

  private functionDependingOnState() {
    console.log(this.state.emails); // Yields Array(0) - Still not being populated in time
  }
}
