import { attr, belongsTo } from "@ember-data/model";
import { LocalizedModel } from "ember-localized-model";
import { DateTime } from "luxon";

export default class MembershipModel extends LocalizedModel {
  @belongsTo("identity", {async: true, inverse: "memberships"}) identity;
  @belongsTo("identity", {async: true, inverse: "members"}) organisation;
  @belongsTo("membership-role", {async: true, inverse: "memberships"}) role;
  @attr authorized;
  @attr timeSlot;
  @attr nextElection;
  @attr comment;
  @attr inactive;

  get isInactive() {
    return this.timeSlot && this.timeSlot.upper
      ? this.inactive || DateTime.now() > DateTime.fromISO(this.timeSlot.upper)
      : this.inactive;
  }
}
