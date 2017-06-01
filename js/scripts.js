$(document).ready(function() {
  $("#submit").click(function(event) {


  var qt1 = $("input:radio[name=question1]:checked").val();
  var qf1 = $("input:radio[name=question1]:checked").val();
  var qt2 = $("input:radio[name=question2]:checked").val();
  var qf2 = $("input:radio[name=question2]:checked").val();
  console.log(qt1);
  //var qt3 = $("input:radio[name=question3]:checked").val();
  //var qf3 = $("input:radio[name=question3]:checked").val();
  //var qt4 = $("input:radio[name=question4]:checked").val();
  //var qf4 = $("input:radio[name=question4]:checked").val();
  //var qt5 = $("input:radio[name=question5]:checked").val();
  //var qf5 = $("input:radio[name=question5]:checked").val();

  //var qtotal = $("qt1 + qt2").val();
  //var qftotal = $("qf1 + qf2").val();

  //var qtotal = $(qt1 && qt2).val();

  if (qt1 === "true" && qt2 === "true") {

    $("#Jagger").show();
  } else {
    $("#sadpuppy").show();
  }
  console.log("checked");
  event.preventDefault();

  });
});
