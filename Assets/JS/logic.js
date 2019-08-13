$(document).ready(function() { 

    //Clock display function 

    const config = { 
        apiKey: "AIzaSyDoEg6tWteXY0G0wfUSqavYsMxpgnrrvdo",
        authDomain: "train-scheduler-homework1.firebaseio.com", 
        databaseURL: "https://train-scheduler-homework1.firebaseio.com", 
        storageBucket: "train-scheduler-homework1.appspot.com"
    }; 

    firebase.initializeApp(config); 

    const database = firebase.database(); 

    // Adding rows to train table
    $("#submit").on("click", function(event) { 
        event.preventDefault(); 
        console.log("testing"); 

        const trainName = $("#train-name").val().trim(); 
        const trainDestination = $("#train-destination").val().trim();
        const trainTime = moment($("#train-time").val().trim(), "HH:mm").format("X");
        const trainFrequency = $("#train-frequency").val().trim();

        let addedTrain = { 
            name: trainName, 
            destination: trainDestination, 
            time: trainTime, 
            frequency: trainFrequency
        }; 

        database.ref().push(addedTrain); 

        // testing 
        console.log(addedTrain.name);
        console.log(addedTrain.destination); 
        console.log(addedTrain.time); 
        console.log(addedTrain.frequency); 
        
        // clears childSnapshot fields
        $("#train-name").val(" "); 
        $("#train-destination").val(" "); 
        $("#train-time").val(" "); 
        $("#train-frequency").val(" "); 
    });

    database.ref().on("child_added", function(childSnapshot) { 
        console.log(childSnapshot.val()); 

        const name = childSnapshot.val().name; 
        console.log(name);
        const dest = childSnapshot.val().name;
        console.log(dest);
        const first = childSnapshot.val().name;
        console.log(first);
        const freq = childSnapshot.val().name;
        console.log(freq);

        // Calculating train times 
        const addedTrainTime = moment.unix(first).format("HH:mm"); 
        console.log(addedTrainTime); 

        const trainYear = moment(first, "HH:mm").subtract(1, "years");
        console.log(trainYear);

        const now = moment(); 
        console.log(moment(now).format("HH:mm")); 

        const differentTime= moment().diff(moment(trainYear), "minutes"); 
        console.log(differentTime); 

        const timeRemaining = differentTime % freq;
        console.log(timeRemaining); 

        const next = freq - timeRemaining; 
        console.log(next); 

        // Calculations for next train 
        const nextTrain = moment().add(next, "minutes").format("HH:mm"); 
        console.log(moment(nextTrain).format("HH:mm")); 

        // Adding new rows 
        
    });



})