import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('contact');
  },

  renderTemplate: function() {
    this.render('contacts/form');
  },

  deactivate: function() {
    return this.get('controller.model').rollbackAttributes();
  }
});
