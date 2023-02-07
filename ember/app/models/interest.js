import { attr, belongsTo, hasMany } from "@ember-data/model";
import { localizedAttr, LocalizedModel } from "ember-localized-model";

export default class InterestModel extends LocalizedModel {
  @localizedAttr title;
  @attr description;
  @belongsTo("interest-category", {async: true, inverse: "interests"}) category;
  @attr archived;
  @hasMany("identity", {async: true, inverse: "interests"}) identities;
}
