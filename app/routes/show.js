import Ember from 'ember';

// Hacky. TODO: make better
function parseCurrentYear (yearAsString) {
    return yearAsString.substr(0,4);
}

export default Ember.Route.extend({
    phish: Ember.inject.service(),
    model (params) {
        return this.get('phish').shows(params.show_id);
    },
    setupController (controller, model) {
        controller.set('model', model);
        const currentYear = parseCurrentYear(model.data.date);
        this.controllerFor('application').set('currentYear', currentYear);
        this.controllerFor('application').set('currentShow', model.data);
    }
});
