import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  email: DS.attr('string'),
  website: DS.attr('string'),
  address: DS.attr('string'),
  customerId: DS.attr('string'),
  additionalInfo: DS.attr('string'),

  contacts: DS.hasMany('contact'),

  formattedAddress: (function() {
    var address = this.get('address').replace(/\n/g, '<br>');
    return Ember.String.htmlSafe(address);
  }).property('address')
});
