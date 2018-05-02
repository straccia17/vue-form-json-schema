import Ajv from 'ajv';
import getters from './getters';
import { VFJS_EVENT_MODEL_VALIDATE } from '../../../constants';

const vfjsValidation = {
  vfjsValidationInitialize() {
    const { ajvOptions = {} } = this.vfjsOptions;

    // Set up Ajv
    this.ajv = new Ajv({
      ...ajvOptions,
      // The `allErrors` option is required for validation to work
      allErrors: true,
    });

    // Add custom keywords
    const { customKeywords = {} } = ajvOptions;
    Object.keys(customKeywords).forEach((key) => {
      this.ajv.addKeyword(key, customKeywords[key]);
    });

    // Add additional schemas
    Object.keys(this.schemas).forEach((key) => {
      this.ajv.addSchema(this.schemas[key], key);
    });

    // TODO: Move this to a method so we can call it when the schema/ui-schema/model is updated

    // This is somewhat of a hack...
    //
    // To find out if a property is required
    // we get the schema and use an empty object
    // as the data, with allErrors option in Ajv
    // we can get all the required properties
    // and check if the model key is found in the errors
    this.ajv.validate(this.getVfjsSchema(), {});

    if (this.ajv.errors) {
      const propertiesRequired = this.getVfjsPropertiesRequired(this.ajv.errors);
      this.vfjsFieldsRequired = this.getVfjsChildPropertiesRequired(propertiesRequired);
    }

    // Check if validation is enabled and set to run on load
    if (this.vfjsOptions.validate && this.vfjsOptions.validateOnLoad) {
      this.vfjsBus.emit(VFJS_EVENT_MODEL_VALIDATE, { vfjsModel: this.getVfjsModel() });
    }
  },
  ...getters,
};

export default vfjsValidation;
