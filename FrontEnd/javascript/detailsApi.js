var Email = "yusufdon001@gmail.com"
var movName = "teddy"
var st = "11:30am"
var dt = "14/03/2021"
var theatreName = "sathyam"
var totSeats = "14"

var js = {
   mailId : Email ,
   movieName : movName,
   showTime : st,
   date : dt,
   theatre : theatreName,
   seat : totSeats
}

function sending() {
    var data = $.ajax({
        url : "http://localhost:8080/user/register" ,
        method: 'POST',
        dataType: 'json',
        data: js,
        success: function(data , status) {
          console.log(data.mailId)
        }
});
}