import { render, click, fillIn } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";
import { setupMirage } from "ember-cli-mirage/test-support";
import { setupRenderingTest } from "ember-qunit";
import { module, test } from "qunit";

module("Integration | Component | identity-addresses", function (hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(function () {
    this.owner.register(
      "service:session",
      {
        isAuthenticated: true,
        data: { authenticated: { userinfo: { mysagw_groups: ["sagw"] } } },
      },
      { instantiate: false }
    );
  });

  test("it renders", async function (assert) {
    this.server.create("identity");

    this.identity = { id: "1" };

    await render(hbs`<IdentityAddresses @identity={{this.identity}} />`);
    assert.ok(this.element);
  });

  test("it can add new addresses", async function (assert) {
    this.server.create("identity");

    this.identity = { id: "1" };

    await render(hbs`<IdentityAddresses @identity={{this.identity}} />`);
    assert.ok(this.element);

    await click("[data-test-address-add]");

    assert.dom("form").exists();

    await fillIn("input[name=streetAndNumber]", "Musterstrasse. 1");
    await fillIn("input[name=postcode]", "8000");
    await fillIn("input[name=town]", "Zürich");
    await click("button[type=submit]");

    assert.dom("form").doesNotExist();
  });
});
