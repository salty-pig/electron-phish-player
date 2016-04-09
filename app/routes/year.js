import Ember from 'ember';

export default Ember.Route.extend({
    phish: Ember.inject.service(),
    model (params) {
        return this.get('phish').years(params.year_id);
    }
});
