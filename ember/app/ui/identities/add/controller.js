import Controller from "@ember/controller";
import { action } from "@ember/object";
import { inject as service } from "@ember/service";

export default class IdentitiesAddController extends Controller {
  @service router

  @action onSave(identity) {
    this.router.transitionTo("identities.edit", identity.id);
  }
}
