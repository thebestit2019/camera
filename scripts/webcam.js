(function(){
    navigator.mediaDevices.getUserMedia = (navigator.mediaDevices.getUserMedia || navigator.mediaDevices.webkitGetUserMedia || navigator.mediaDevices.mozGetUserMedia);
    navigator.getUserMedia(
        {video:true, audio:false},
        
        function(stream){
            var video = document.getElementById('player');
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        },
        function(error){
            console.log(error)
        },

        document.getElementById("capture").addEventListener("click", takeSnapshot)
    );
})();

// var getUserMedia = navigator.getUserMedia ||
// navigator.mozGetUserMedia ||
// navigator.webkitGetUserMedia;

// // function takeSnapshot(){}
// let constraints = {audio: false, video: true}
// if (navigator.mediaDevices.getUserMedia) {       
//     navigator.mediaDevices.getUserMedia(constraints)
//     .then(function(stream) {
//   //load the stream in the video variable
//       video.srcObject = stream;
//   //load the stream in revokeAccess variable 
//       revokeAccess=stream;
//   //video playback
//       video.play(); 
//   /*
//   Optional to avoid the dual audio disturbance. Playback audio is muted
//   */
//   video.muted= true;


//   if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
//     var options = {mimeType: 'video/webm;codecs=vp9'};
//     console.log("using vp9");
//   } else if (MediaRecorder.isTypeSupported('video/webm;codecs=h264')) {
//     var options = {mimeType: 'video/webm;codecs=h264'};
//     console.log("using h264");
//   } else  if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
//     var options = {mimeType: 'video/webm;codecs=vp8',videoBitsPerSecond : 1500000,audioBitsPerSecond : 160000};
//     console.log("using vp8");
//   }else{
//   console.log('isTypeSupported is not supported, using default codecs for browser');
//   } 

//   //load the stream and type of video in the function
//   var mediaRecorder = new MediaRecorder(stream,options);
//   //handle the data availability
//   mediaRecorder.ondataavailable = handleDataAvailable;
//   //Start the recording
//   mediaRecorder.start(); 

//   alert("Started Recording");

//   let recordedChunks = new Array;
//   //push the data into chunks(array)
//   function handleDataAvailable(event) {
//    if (event.data.size > 0) {
//      recordedChunks.push(event.data);
//       console.log(recordedChunks);
//    } else {
//     alert(event);
//    }
//   }
//   //disable the Start Recording button
//   document.getElementById("capture").disabled = true;  
//     })
//     .catch(function(error) {
//   //handle the device not found exception
//       alert("Camera not Found !! Please connect camera properly");
//       console.log(error);
//     });
//   }