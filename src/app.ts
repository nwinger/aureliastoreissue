import { RouterConfiguration, Router } from "aurelia-router";
import { autoinject } from "aurelia-framework";
import { APP_ROUTES } from "routes";
import { State } from "state";
import { Store } from "aurelia-store";
import { fetchAction } from "actions";
import { Service } from "shared/services/service";

@autoinject
export class App {
  public state: State;
  router: Router;
  message = "Hello World!";

  private service: Service;

  constructor(private store: Store<State>, service: Service) {
    this.service = service;
    this.store.registerAction("FetchAction", fetchAction);

    this.loadAndDispatch();
  }

  private async loadAndDispatch() {
    this.service.fetchSomeData().then(data => {
      const res =
        data &&
        data.results.map(result => {
          return result.email;
        });
      this.store.dispatch("FetchAction", res);
    });
  }

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.options.pushState = true;
    config.title = "Aurelia";
    config.map(APP_ROUTES);
  }
}
