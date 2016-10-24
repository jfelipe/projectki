import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';
import ENV from 'r-frontend/config/environment';

export default ToriiAuthenticator.extend({
  apiHost: ENV.apiHost + "/authorizations",
  torii: Ember.inject.service(),
  ajax: Ember.inject.service(),

  authenticate: function(...args){
    var self = this;
    return new Ember.RSVP.Promise(function(resolve){
      self._super(...args).then(function(data){
        self.get('ajax').post(self.get('apiHost'), {
          data: {
            grant_type: 'google_auth_code',
            authorization_code: data.authorizationCode
          }
        }).then(function(response){
          return resolve({
            provider: data.provider,
            access_token: response.token,
            email: response.email
          });
        });
      });
    });
  }
});
