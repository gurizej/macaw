var defaultText = "I need a text file to read!";
var text = defaultText;

function speakOutLoud(theText) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = theText;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

function readNow() {
    speakOutLoud(text);
    if(text == defaultText) {
        document.getElementById("output").textContent = text;
    }
}

document.addEventListener("click", function(e) {
    var target = e.target;
    var elementToLookFor = "span";
    while (target !== null){
        if(target.tagName.toLowerCase() == elementToLookFor){
            speakOutLoud(target.textContent)
        }
        target = target.parentElement;
    }
})

document.getElementById("inputfile").addEventListener("change", function() {
    var fr = new FileReader();
    fr.onload = function() {
        // document.getElementById("output").textContent = fr.result;
        // speakOutLoud(fr.result);
        text = fr.result;
        
        var textArray = text.split(" ");
        var textWithSpans = "";
        for(var i=0; i<textArray.length; i++) {
            textWithSpans = textWithSpans + "<span>" + textArray[i] + "</span>"+ " ";
        }
        document.getElementById("output").innerHTML = textWithSpans;
    }
    fr.readAsText(this.files[0]);
});

