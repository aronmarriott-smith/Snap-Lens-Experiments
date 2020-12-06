// -----JS CODE-----

//@input Component.AudioComponent audio
//@input float volumeSlider =0.5 {"widget":"slider", "min":0, "max":1, "step":0.01}
//@input Component.ObjectTracking handTracking;


var targetToFollow;
var volume = 0;
var magnitude = 0;

// run every frame:
// track the hand movelment
// translate the movement into the magnitude (0, 1)
// change the volume of the audio acording to the magnitude

function onStart() {
    script.audio.play(-1);
}

function onUpdate(eventData) {
    
    if (script.handTracking) {
        targetToFollow = script.handTracking.getSceneObject().getComponent("Component.ScreenTransform");
        
        // center is zero, left and right go from minus one to plus one.
        // take one from the other to find the magnitude?
        //print(targetToFollow.anchors);
        volume = Math.abs(targetToFollow.anchors.left);
        
        magnitude = Math.abs(targetToFollow.anchors.left - targetToFollow.anchors.right);
        //print("Volume: " + volume);
        //print("Magnitude: " + magnitude);
    }
    
    if (script.audio) {
        script.audio.volume = volume;
    }
}

var updateEvent = script.createEvent("UpdateEvent");
updateEvent.bind(onUpdate);
var turnOnEvent = script.createEvent("TurnOnEvent");
turnOnEvent.bind(onStart);
