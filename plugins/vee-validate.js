import {
  extend,
  localize,
  ValidationObserver,
  ValidationProvider,
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import Vue from "vue";

/**
 * Add rules to object
 * @param rule the rule will be added to the object
 */
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize("en", en);
/**
 * Generic rule messages
 */
localize({
  en: {
    messages: {},
  },
});

/**
 * Register gloabally
 */
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;
