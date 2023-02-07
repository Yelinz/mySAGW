import { attr, hasMany } from "@ember-data/model";
import { LocalizedModel } from "ember-localized-model";

export default class IdentityModel extends LocalizedModel {
  @attr idpId;
  @attr salutation;
  @attr title;
  @attr organisationName;
  @attr firstName;
  @attr lastName;
  @attr email;
  @attr language;
  @hasMany("additional-email", {async:true, inverse: "identity"}) additionalEmails;
  @hasMany("phone-number", {async:true, inverse: "identity"}) phoneNumbers;
  @hasMany("interest", {async:true, inverse: "identity"}) interests;
  @hasMany("address", {async:true, inverse: "identity"}) addresses;
  @hasMany("case-access", {async:true, inverse: "identity"}) cases;
  @hasMany("membership", {async:true, inverse: "identity"}) memberships;
  @hasMany("membership", {async:true, inverse: "organisation"}) members;
  @attr isOrganisation;
  @attr isExpertAssociation;
  @attr isAdvisoryBoard;
  @attr comment;
  @attr hasMemberships;
  @attr hasMembers;
  @attr isAuthorized;

  get fullName() {
    return [this.lastName, this.firstName].filter(Boolean).join(" ");
  }

  get label() {
    return this.fullName;
  }
}
