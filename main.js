function startClasssification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassimodel.jsonfier('', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if (error) {
        console.erroer(error);
    } else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_b+","+ random_number_g+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_b+","+ random_number_g+")";
        img = document.getElementById("download.jpg");
        img1 = document.getElementById("download(2).jpg");
        img2 = document.getElementById("download(3).jpg");
        img3 = document.getElementById("download(4).jpg");
    }} 
        
    
