<!-- jQuery 2.1.4 -->
<script src="./plugins/jQuery/jQuery-2.1.4.min.js"></script>
<meta charset="utf-8">
<form action="javascript:void(null);">
    Login <input type="text" id="login">
    Password<input type="password" id="password">
    <button  onclick="loginUser();">Войти</button>
</form>

<script type="text/javascript">
    function loginUser(){
        var login = document.getElementById("login").value ? document.getElementById("login").value : "";
        var password = document.getElementById("password").value ? document.getElementById("password").value : "";
        $.post( "controller.php",{ login: login, password: password,  action:"login"}, function( data ) {
            if (data == "accepted"){
                location.href = "index.php";
            }
        });
    }
</script>