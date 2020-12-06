// -----JS CODE-----
// @input Component.AudioComponent BrowsRaisedSound
// @input Component.AudioComponent MouthOpenSound

function playSound(eventData)
{
    if (script.BrowsRaisedSound.isPlaying()) {
        script.BrowsRaisedSound.stop();
    }
    script.BrowsRaisedSound.play(1);
}

function playMouthOpenedSound(eventData)
{
    if (script.MouthOpenSound.isPlaying()) {
        script.MouthOpenSound.stop();
    }
    script.MouthOpenSound.play(1);
}

var browsRaisedEvent = script.createEvent("BrowsRaisedEvent");
browsRaisedEvent.bind(playSound);

var mouthOpenEvent = script.createEvent("MouthOpenedEvent");
mouthOpenEvent.bind(playMouthOpenedSound);
var mouthClosedEvent = script.createEvent("MouthClosedEvent");
mouthClosedEvent.bind(playMouthOpenedSound);