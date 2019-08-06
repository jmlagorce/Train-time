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

  function minAway (){
    var currentTime = moment().format("X")/60;

    var firstTrainConverted = moment(firstTrain, "HH:mm").format("X")/60;
    
    var timeDiff = currentTime - firstTrainConverted;

    var timeRemain = timeDiff % parseInt(frequency);

    var minAway = parseInt(frequency) - timeRemain;

    return minAway;

    
  }
  
  function nextArrival(frequency, firstTrain) {
    //converts unix into minutes.
    var currentTime = moment().format("X")/60;

    var firstTrainConverted = moment(firstTrain, "HH:mm").format("X")/60;
    
    var timeDiff = currentTime - firstTrainConverted;

    var timeRemain = timeDiff % parseInt(frequency);

    var minAway = parseInt(frequency) - timeRemain;

    var nextTrain = moment((currentTime + minAway)*60, "X").format("HH:mm");

    
    return nextTrain;
    
    
  


    // var minutesLeft = moment() -
     // Test case 2:
    // 16 - 00 = 16
    // 16 % 7 = 2 (Modulus is the remainder)
    // 7 - 2 = 5 minutes away
    // 5 + 3:16 = 3:21
  };
  
    
    $("#add-employee-btn").on("click", function(event) {
        event.preventDefault();
        
        
        var trainName = $("#train-name").val();
        var destination = $("#destination").val();
        var firstTrain = $("#first-train").val();
        var frequency = $("#frequency").val();
        
        nextArrival(frequency, firstTrain);
        var newTrain = {
          name: trainName,
          destination: destination,
          firsttrain: firstTrain,
          frequency: frequency
      };

        database.ref().push(newTrain);

    

    $("#employee-name-input").val("");
    $("#role-input").val("");
    $("#start-input").val("");
    $("#rate-input").val("");
      });

      database.ref().on("child_added", function(childSnapshot) {
        
      
        
        var trainName = childSnapshot.val().name;
        var trainDestination = childSnapshot.val().destination;
        var trainFirst = childSnapshot.val().firsttrain;
        var trainFrequency = childSnapshot.val().frequency;
        var nextTime = nextArrival(trainFrequency, trainFirst);
        // var minAway = minAway(next, );
        
      
     
      

      
        
      
        
        var newRow = $("<tr>").append(
          $("<td>").text(trainName),
          $("<td>").text(trainDestination),
          $("<td>").text(trainFrequency),
          $("<td>").text(nextTime),
          // $("<td>").text(minAway),

          
   
        );
      
        
        $("#train-info").append(newRow);
      });
      


// });