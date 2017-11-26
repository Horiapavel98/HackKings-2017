<html>

  <head>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </head>

  <body>
    <form id="formular2" action="javascript:.preventDefault();">
    <input type="password" placeholder="Password" id="pass1"/><br>
    <input type="password" placeholder="Retype Password" id="pass2" onchange="checkPasswordMatch()"/><br>
    <input type="submit" value="Create Account/Generate Username"/>
    </form>
    <div id="dbs_sign"></div>
    <script type="text/javascript" src="sign_up.js"></script>

  </body>

</html>
