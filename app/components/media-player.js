import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['ap'],
    playing: false,
    timePosition: 0,
    track: null,
    didInsertElement () {
        this.$('audio').on( 'play pause loadmetadata timeupdate ended', this._mediaEvents.bind( this ) );
    },
    _mediaEvents (event) {
        let type = event.type;
        let target = event.target;

        switch( type ) {
        case 'play':
            this.set('playing', true);
            break;
        case 'pause':
            this.set('playing', false);
            break;
        case 'timeupdate':
            this.set('timePosition', target.currentTime);
            break;
        case 'loadedmetadata':
            console.log('metadata loaded');
            break;
        case 'ended':
            this.send('nextTrack', target);
            break;
        }
    },
    actions: {
        toggle () {
            if (this.get('playing')) {
                this.$('audio')[0].pause();
            } else {
                this.$('audio')[0].play();
            }
        },
        nextTrack () {
            let currentSongIndex = this.get('tracks').lastIndexOf(this.get('track'));
            if(currentSongIndex > -1) {
                let nextSong = this.get('tracks').objectAt(currentSongIndex + 1);
                if (nextSong) {
                    this.set('track', nextSong);
                }
            }
        },
        previousTrack () {
            let currentSongIndex = this.get('tracks').lastIndexOf(this.get('track'));
            if(currentSongIndex > -1) {
                let nextSong = this.get('tracks').objectAt(currentSongIndex - 1);
                if (nextSong) {
                    this.set('track', nextSong);
                }
            }
        }
    }
});
