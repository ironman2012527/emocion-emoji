classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/uR7-Htv_K/model.json",modelLoaded);
function modelLoaded(){
    console.log("version ml5: ",ml5.version);
    console.log("modelo cargado")
}
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='imagen'src='"+data_uri+"'/>";
    })
}
function check(){
    img = document.getElementById("imagen");
    classifier.classify(img,gotResult) 
}
function gotResult(error,results){
    if(error){console.log(error)
        
    }
    else{
        console.log(results);
        document.getElementById("emocion1").innerHTML=results[0].label;
        document.getElementById("emocion2").innerHTML=results[1].label;
    }
}