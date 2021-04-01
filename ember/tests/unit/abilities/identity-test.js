import { setupTest } from "ember-qunit";
import { module, test } from "qunit";

module("Unit | Ability | identity", function (hooks) {
  setupTest(hooks);

  test("it exists", function (assert) {
    const ability = this.owner.lookup("ability:identity");
    assert.ok(ability);
  });
});
