import { autoinject } from "aurelia-framework";
import { connectTo } from "aurelia-store";
import { Subscription } from "rxjs";

import { State } from "state";

@autoinject
@connectTo({
  selector: store => store.state,
  setup: "attached"
})
export class async {
  public data: any[];
  public state: State;

  private subscription: Subscription;

  constructor() {
    if (this.state) {
      // What if I want to access a slice of the state here?
      // The point would be to avoid duplicate service calls across the app and load them from app.ts
    }
  }

  attached() {
    console.log(this.state); // Yields {emails: Array(0)}
  }

  activate() {
    console.log(this.state); // Yields undefined, probably due to setup: "attached"
  }
}
