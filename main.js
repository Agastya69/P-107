function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Keiop0ar6/', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}