import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save() {
      return this.get('model').save().then(() =>{
        this.transitionToRoute('companies.show', this.get('model'));
      });
    },

    cancel() {
      return this.transitionToRoute('companies.index');
    }
  }
});
