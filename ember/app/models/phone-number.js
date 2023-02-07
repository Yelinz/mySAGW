import { attr, belongsTo } from "@ember-data/model";
import { LocalizedModel, localizedAttr } from "ember-localized-model";

export default class PhoneNumberModel extends LocalizedModel {
  @belongsTo("identity", {async: true, inverse: "phoneNumbers"}) identity;
  @attr phone;
  @attr phone_pretty;
  @localizedAttr description;
  @attr default;
}
