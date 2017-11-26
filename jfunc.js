$('#formular').submit(function(event) {
  var user = $('#username').val();
  var pass = $('#password').val();
  $.post('dbs.php', { user: user , pass: pass}, function(data) {
    $('#dbs_feed').html(data);
    event.preventDefault();
  });
});
