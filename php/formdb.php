<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Encrypted formDB</title>
    <?php
    $err ="";
    if (isset($_POST['submit'])){
        if (!empty($_POST['username']) && !empty($_POST['password'])) {
            require 'dbconnect.php';

            $username = trim($_POST['username']);
            $password = md5(trim($_POST['password']));

            $sql = "SELECT * FROM gebruikers WHERE username = '".$username."' AND password = '".$password."'";

            if($result = $conn->query($sql)){
                $aantal = $result->num_rows;
                if($aantal == 1){
                    $user = $result->fetch_row();
                    session_start();
                    $_SESSION['user'] = $user[1];
                    $_SESSION['ingelogd'] = true;
                    header("Location: ingelogd.php");
                }
                else{
                    $err = "Username and/or password incorrect.";
                }
            }
        }
    }
    ?>
</head>
<body>
<?php
    echo $err;
?>
    <h1>Login here!</h1>
    <form method="POST">
        <input type="text" name="username" placeholder="username" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="submit" name="submit" value="submit">
    </form>
    <a href="registerdb.php">Or register here!</a>
</body>
</html>