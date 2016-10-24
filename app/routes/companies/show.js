import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.findRecord('company', params.company_id);
  }
});
