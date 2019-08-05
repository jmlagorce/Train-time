// $(document).ready(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyDlsec8RK-GCPTjurNlgSnrXP2MSGS25yg",
    authDomain: "train-times-5fa32.firebaseapp.com",
    databaseURL: "https://train-times-5fa32.firebaseio.com",
    projectId: "train-times-5fa32",
    storageBucket: "",
    messagingSenderId: "332249696860",
    appId: "1:332249696860:web:69bbf7e0b45a38e0"
  };
  
  firebase.initializeApp(firebaseConfig);

  var database = firebase.database();
  console.log(moment().format("X"));
  function nextArrival(frequency, firstTrain) {
    //
    
  };
    
    $("#add-employee-btn").on("click", function(event) {
        event.preventDefault();
        console.log("click");
        
        var trainName = $("#train-name").val();
        var destination = $("#destination").val();
        var firstTrain = $("#first-train").val();
        var frequency = $("#frequency").val();
        

        var newTrain = {
          name: trainName,
          destination: destination,
          firsttrain: firstTrain,
          frequency: frequency
      };

        database.ref().push(newTrain);

    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.firsttrain);
    console.log(newTrain.frequency);

    $("#employee-name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");
      });

      database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());
      
        
        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainFirst = childSnapshot.val().firsttrain;
        var trainFrequency = childSnapshot.val().frequency;
      
        
        console.log(trainName);
        console.log(trainDestination);
        console.log(trainFirst);
        console.log(trainFrequency);
      
     
      

      
        
      
        
        var newRow = $("<tr>").append(
          $("<td>").text(trainName),
          $("<td>").text(trainDestination),
          $("<td>").text(trainFrequency),
          $("<td>").text(trainFirst),
          
   
        );
      
        
        $("#train-info").append(newRow);
      });
      


// });