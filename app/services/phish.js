import Ember from 'ember';

export default Ember.Service.extend({
    phish: null,
    init () {
        this._super(...arguments);
        const ph = Phish.Phishin();
        this.set('phish', ph);
    },
    years (year) {
        return this.get('phish').getYears(year);
    },
    shows (showId) {
        return this.get('phish').getShows(showId);
    }
});
