import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  familyName: DS.attr('string'),
  givenNames: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  website: DS.attr('string'),
  title: DS.attr('string'),
  address: DS.attr('string'),
  customerId: DS.attr('string'),
  additionalInfo: DS.attr('string'),

  company: DS.belongsTo('company'),

  fullName: Ember.computed('familyName', 'givenNames', function(){
    return `${this.get('familyName')}, ${this.get('givenNames')}`;
  })

});
