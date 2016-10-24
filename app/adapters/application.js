import DS from 'ember-data';
import ENV from 'r-frontend/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  host: ENV.apiHost,
  authorizer: 'authorizer:oauth2'
});
