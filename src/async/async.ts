import { autoinject } from "aurelia-framework";
import { Store } from "aurelia-store";
import { Subscription } from "rxjs";

import { State } from "state";

@autoinject
export class async {
  public data: any[];
  public state: State;

  private subscription: Subscription;

  constructor(private store: Store<State>) {
    this.subscription = this.store.state.subscribe(
      (state: State) => (this.state = state)
    );

    if (this.state) {
      console.log(this.state);
      // What if I want to access a slice of the state here?
      // The point would be to avoid duplicate service calls across the app and load them from app.ts
    }
  }

  attached() {
    console.log(this.state);
  }

  activate() {
    console.log(this.state);
  }
}
