// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the months worked. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Total billed

// 1. Initialize Firebase
var config = {
    apiKey: "AIzaSyA_vFvHta_qRms0ZH7xIr64R8p3YR1P2Ao",
    authDomain: "trainscheduler-451ed.firebaseapp.com",
    databaseURL: "https://trainscheduler-451ed.firebaseio.com",
    projectId: "trainscheduler-451ed",
    storageBucket: "",
    messagingSenderId: "538080640042",
    appId: "1:538080640042:web:172d95ba4e1a2b73"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding Trains
$("#add-train-btn").on("click", function (event) {
    event.preventDefault();

    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#destination-input").val().trim();
    var trainFirstTime = moment($("#firsttime-input").val().trim(), "hh:mm").format("HH:mm");
    var trainFreq = $("#freq-input").val().trim();

    // Creates local "temporary" object for holding employee data
    var newTrain = {
        name: trainName,
        dest: trainDest,
        first: trainFirstTime,
        freq: trainFreq
    };

    // Uploads employee data to the database
    database.ref().push(newTrain);

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.dest);
    console.log(newTrain.first);
    console.log(newTrain.freq);

    alert("Train successfully added");

    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#firsttime-input").val("");
    $("#freq-input").val("");
});