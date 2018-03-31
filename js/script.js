 // var config = {
 //   apiKey: "AIzaSyATiRsiPRE7RDRnVoVeOqpBFWuc7po54SM",
 //   authDomain: "my-portfolio-cb0ba.firebaseapp.com",
 //   databaseURL: "https://my-portfolio-cb0ba.firebaseio.com",
 //   projectId: "my-portfolio-cb0ba",
 //   storageBucket: "",
 //   messagingSenderId: "655685115416"
 // };
 // firebase.initializeApp(config);


 // var firstName = firebase.database().ref("info.first-name");

 // firstName.on('value', function(snapshot){
 //   console.log(snapshot.val()); 
 //   $(".name").html(snapshot.val());
 // });


 $(document).ready(function() {
  $('.parallax').parallax();
  
    $('.carousel.carousel-slider').carousel({ indicators: true });
    $('.carousel.carousel-slider').carousel({ fullWidth: false });
    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4000);
    }

 });

 
 
// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAVqtabe9PZTAWHNCCJ4wNgeu4g0qGWfOA",
  //   authDomain: "imani-da538.firebaseapp.com",
  //   databaseURL: "https://imani-da538.firebaseio.com",
  //   projectId: "imani-da538",
  //   storageBucket: "",
  //   messagingSenderId: "874151128786"
  // };
  // firebase.initializeApp(config);
  