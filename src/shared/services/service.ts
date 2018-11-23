// import { Config, Rest } from "aurelia-api";
export class Service {
  //   private endpoint: Rest;

  public async fetchSomeData() {
    const url = "https://randomuser.me/api/?results=10";
    const result = await fetch(url)
      .then(response => response)
      .then(res => res.json());

    return result;
  }
}
