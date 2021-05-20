import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default class SnippetsEditRoute extends Route {
  @service store;

  model({ snippet }) {
    return this.store.findRecord("snippet", snippet);
  }
}
