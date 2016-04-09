import Ember from 'ember';

export default Ember.Route.extend({
    phish: Ember.inject.service(),
    model () {
        return this.get('phish').years();
    }
});
