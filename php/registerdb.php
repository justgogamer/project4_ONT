<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <?php
        $melding = "";
        if (isset($_POST['submit'])) {
            if (!empty($_POST['password'])) {
                require("dbconnect.php");

                function secure($value){
                    $value = md5(trim($value));
                    $value = stripslashes($value);
                    $value = htmlspecialchars($value);
                    return $value;
                }

                $username = $_POST['username'];
                $password = secure($_POST['password']);
                $password = $conn->real_escape_string($password);

                $sql = "INSERT INTO gebruikers (username, password) VALUES ('$username', '$password')";

                if ($conn->query($sql)){
                    $melding = "Created user";
                }
            }
        }
    ?>
</head>
<body>
    <h1>Register here!</h1>
    <?php
        echo $melding;
    ?>
    <form method="POST">
        <input type="text" name="username" placeholder="username" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="submit" name="submit" value="submit">
    </form>
    <a href="formdb.php">Or go back to login</a>
</body>
</html>