import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('company');
  },

  deactivate: function() {
    return this.get('controller.model').rollbackAttributes();
  }

});
