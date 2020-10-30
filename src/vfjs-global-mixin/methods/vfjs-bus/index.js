import vfjsBusEventActions from './actions';
import Events from './events';

const vfjsBus = {
  addVfjsListener(event, callback) {
    this.vfjsBus.$on(event, (value) => callback(event, value));
  },
  addVfjsListeners(events = [], callback) {
    events.forEach((event) => this.addVfjsListener(event, callback));
  },
  removeVfjsListener(event) {
    this.vfjsBus.$off(event);
  },
  removeVfjsListeners(events = []) {
    events.forEach(this.removeVfjsListener);
  },
  removeVfjsListenersAll() {
    this.vfjsBus.$off();
  },
  vfjsBusInitialize() {
    this.vfjsBus = new Events();
  },
  vfjsBusEventHandler(event, payload) {
    if (event && event in vfjsBusEventActions) {
      vfjsBusEventActions[event].call(this, payload);
    }
  },
};

export default vfjsBus;
