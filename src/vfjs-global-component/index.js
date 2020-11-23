import { h } from 'vue';
import vfjsGlobalMixin from '../vfjs-global-mixin';

const VueFormJsonSchema = {
  name: 'vue-form-json-schema',
  ...vfjsGlobalMixin,
  render() {
    const createElement = h || window.Vue.h || this.$createElement;

    return createElement(this.tag, this.vfjsFields);
  },
};

export default VueFormJsonSchema;
