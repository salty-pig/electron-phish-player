import Ember from 'ember';

export default Ember.Controller.extend({
    application: Ember.inject.controller(),
    actions: {
        playTrack (track) {
            this.get('application').set('currentTrack', track);
        }
    }
});
