Webcam.set({
  width:350,
  height:300,
  image_format:'png',
  png_quality:100
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
  })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HMdn4lgyK/model.json',modelLoaded);

function modelLoaded(){
  console.log("model Loaded");
}
function check()
  {
    
    img = document.getElementById("captured_img");
    classifier.classify(img, gotResult);
  }
  


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
   if (results[0].label=="Like"){
    var synth=window.speechSynthesis;
    speak_data_1="The emoticon is : " + results[0].label+".";

    var utterThis= new SpeechSynthesisUtterance(speak_data_1);
    
    synth.speak(utterThis);
   
   
    document.getElementById("potatopc").innerHTML = " ⠀ Prediction : 👍 All the best .";
   }
   if (results[0].label=="Amazing"){
    var synth=window.speechSynthesis;
    speak_data_1="The emoticon is : " + results[0].label+".";

    var utterThis= new SpeechSynthesisUtterance(speak_data_1);
   
    synth.speak(utterThis);

    document.getElementById("potatopc").innerHTML = " ⠀ Prediction : 👌 This is looking amazing .";
   }
   if (results[0].label=="Victory"){
    var synth=window.speechSynthesis;
    speak_data_1="The emoticon is : " + results[0].label+".";

    var utterThis= new SpeechSynthesisUtterance(speak_data_1);
    
    synth.speak(utterThis);

    document.getElementById("potatopc").innerHTML = " ⠀ Prediction : ✌️ That was a marvelous victory .";
   }
    
   
  }
}