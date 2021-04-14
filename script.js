function counter () {
    const inputDate = document.getElementById('dateCounter').value;

    // console.log(inputDate);

    var timestamp = Date.parse(inputDate);
    var dateObject = new Date(timestamp);

    // console.log(dateObject);
    daysLeft(dateObject);
}

// Set the date we're counting down to

function daysLeft (date) {
    setInterval(function() {
    
        // console.log(date)

        // Get today's date and time
        var now = new Date().getTime();
      
        // Find the distance between now and the count down date
        var distance = date - now;
      
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
      
        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "EXPIRED";
        }
      }, 1000);    
};

