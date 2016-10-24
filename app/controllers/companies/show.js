import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    delete(model) {
      return model.destroyRecord().then((model) => {
        this.transitionToRoute('companies.index');
      });
    }
  }
});
