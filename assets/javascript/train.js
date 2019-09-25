$(document).ready(function(){

    var config = {
        apiKey: "AIzaSyAE5dWmau3ZxWPdTb49sGvDSqR2VCSOM68",
        authDomain: "train-scheduler-4106f.firebaseapp.com",
        databaseURL: "https://train-scheduler-4106f.firebaseio.com",
        projectId: "train-scheduler-4106f",
        storageBucket: "train-scheduler-4106f.appspot.com",
        messagingSenderId: "376387335459"
      };
      firebase.initializeApp(config);
      var database = firebase.database();
    
      $("#submit").on("click", function() {
              //VALUES FOR EACH VARIABLE IN HTML
              var name = $('#nameInput').val().trim();
              var dest = $('#destInput').val().trim();
              var time = $('#timeInput').val().trim();
              var freq = $('#freqInput').val().trim();
          
          // PUSH NEW ENTRY TO FIREBASE
              database.ref().push({
                  name: name,
                  dest: dest,
                  time: time,
                  freq: freq,
                  timeAdded: firebase.database.ServerValue.TIMESTAMP
              });
              // NO REFRESH
              $("input").val('');
              return false;
          });
          
      });     