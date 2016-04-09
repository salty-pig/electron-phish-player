import Ember from 'ember';

export function prettyTime([value, option]) {
  var time = 0, secNum;
    if (option === 'seconds') {
        secNum = parseInt(value, 10);
    } else {
        secNum = parseInt(value/1000, 10); // don't forget the second param
    }

    var hours   = Math.floor(secNum / 3600);
    var minutes = Math.floor((secNum - (hours * 3600)) / 60);
    var seconds = secNum - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = '0' + hours;}
    if (minutes < 10) {minutes = '0' + minutes;}
    if (seconds < 10) {seconds = '0' + seconds;}

    time = (hours !== '00' ? hours + ':' : '') + minutes + ':' + seconds;
    return time;
}

export default Ember.Helper.helper(prettyTime);
