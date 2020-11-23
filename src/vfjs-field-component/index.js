import { h } from 'vue';
import vfjsFieldMixin from '../vfjs-field-mixin';

const VueFormJsonSchemaFieldComponent = {
  name: 'vue-form-json-schema-field-component',
  mixins: [vfjsFieldMixin],
  render() {
    const createElement =
      h || window.Vue.h || window.Vue.h || this.$createElement;

    return createElement(
      this.vfjsComponent,
      {
        ...this.getVfjsAttributes(),
      },
      this.getVfjsChildren(),
    );
  },
};

export default VueFormJsonSchemaFieldComponent;
