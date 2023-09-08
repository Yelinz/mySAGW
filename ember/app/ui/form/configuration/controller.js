import Controller from "@ember/controller";
import { inject as service } from "@ember/service";
import calumaQuery from "@projectcaluma/ember-core/caluma-query";
import { allForms } from "@projectcaluma/ember-core/caluma-query/queries";
import { queryManager } from "ember-apollo-client";
import { restartableTask, enqueueTask } from "ember-concurrency";

import ENV from "mysagw/config/environment";
import saveFormMutation from "mysagw/gql/mutations/save-form.graphql";

export default class FormConfigurationController extends Controller {
  @service notification;
  @service intl;

  @queryManager apollo;

  @calumaQuery({ query: allForms })
  formQuery;

  formVisibilities = ENV.APP.caluma.formVisibilities;

  @restartableTask
  *fetchForms() {
    yield this.formQuery.fetch({
      filter: [{ questions: ["dossier-nr"] }, { isArchived: false }],
    });
  }

  @enqueueTask
  *setFormMeta(form, formType) {
    try {
      const meta = Object.assign({}, form.meta);

      if (meta[formType]) {
        delete meta[formType];
      } else {
        meta[formType] = true;
      }

      yield this.apollo.mutate({
        mutation: saveFormMutation,
        variables: {
          input: {
            slug: form.slug,
            name: form.name,
            meta: JSON.stringify(meta),
          },
        },
      });

      this.notification.success(
        this.intl.t("form-configuration.saveSuccess", { name: form.name })
      );
    } catch (error) {
      console.error(error);
      this.notification.fromError(error);
    }
  }
}
