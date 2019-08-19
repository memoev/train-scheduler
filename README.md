# train-scheduler
Train schedule application that incorporates Firebase to host arrival and departure data. Time and dates get calculated using Moment.js
  
## Value Proposition :dart:
  
Responsive table, rendering records on a Test Firebase database project. Contents of table can be changed to hold different types of process data. This specfiic one displays a Train Scheduler application with some time calculations using Moment.js.  
  
## Instructions :memo:  
  
Administrators/users have full permissions to submit a record into the database. Fields to be submitted are:
- Train Name
- Destination
- First Train Time
- Frequency (in min)

This app will calculare when the next train will arrive (Next Arrival) and minutes left between the current time and the Next Arrival, relative to the clock on the user's client. Rendering the results on a table. It's important to mention that this application does NOT run input validation. *Empty input is allowed*, this will be fixed on the next release.
  
## Code Overview :deciduous_tree:

The most import piece of code on this repository is the use of `Firebase` for storing and rendering the values of each record. That's achive by user the `push()` method and the `on("child_added", function (childSnapshot)` event listener on a `Firebase` db.  
  
The other important code piece is the time calculations to give the correct times for `Next Arrival` and `Minutes Away`. This is where we use the `Moment.js` library:
  
```javascript
    var trainFirstMoment = moment(trainFirstTime, "HH:mm");

    var currentTime = moment();

    var minuteArrival = currentTime.diff(trainFirstMoment, 'minutes');
    var minuteLast = minuteArrival % trainFreq;
    var awayTrain = trainFreq - minuteLast;

    var nextArrival = currentTime.add(awayTrain, 'minutes');
    var arrivalTime = nextArrival.format("HH:mm");
```  
  
## Prerequisites :computer:
Working web browser (e.g Chrome, Firefox, Safari, Opera, etc.) from the list of browser that support jQuery (https://jquery.com/browser-support/):

* Desktop:
  * Chrome: (Current - 1) and Current
  * Edge: (Current - 1) and Current
  * Firefox: (Current - 1) and Current, ESR
  * Internet Explorer: 9+
  * Safari: (Current - 1) and Current
  * Opera: Current

* Mobile
  * Stock browser on Android 4.0+
  * Safari on iOS 7+