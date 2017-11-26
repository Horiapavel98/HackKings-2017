function checkPasswordMatch() {
    var password = $("#pass1").val();
    var confirmPassword = $("#pass2").val();

    return password === confirmPassword;
}

$(document).ready(function () {
   $("#txtConfirmPassword").keyup(checkPasswordMatch);
});

$('#formular2').submit(function(event) {
  var pass = $('#pass2').val();
  if(checkPasswordMatch()){
    $.post('dbs_sign.php', {pass2: pass}, function(data) {
      $('#dbs_sign').html(data);
      event.preventDefault();
    });
  }else{
    alert("Passwords do not match!!!");
  }
});
