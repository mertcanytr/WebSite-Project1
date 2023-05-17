<!DOCTYPE html>
<html>
<head>
  <title>Giriş Sayfası</title>  
  
  <style>
    body {    
    background-color: #f2f2f2;
    font-family: Arial, sans-serif;
  }

  .giris-formu {
    width: 300px;
    margin: 100px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }

  h2 {
    text-align: center;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 10px; 
    color: #333;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #45a049;
  }
  </style>
</head>
<body>
  <div class="giris-formu">
    <h2>Giriş Yap</h2>
    <?php if (isset($hataMesaji)) : ?>
      <p><?php echo $hataMesaji; ?></p>
    <?php endif; ?>
    <form action="login.php" method="post">
      <label for="kullanici_adi">Kullanıcı Adı:</label>
      <input type="text" id="kullanici_adi" name="kullanici_adi" required><br><br>
      <label for="sifre">Şifre:</label>
      <input type="password" id="sifre" name="sifre" required><br><br>
      <button type="submit">Giriş Yap</button>
    </form>
  </div>
</body>
</html>

<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $kullaniciAdi = $_POST["kullanici_adi"];
  $sifre = $_POST["sifre"];

  
  if ($kullaniciAdi == "b211210092@sakarya.edu.tr" && $sifre == "b211210092") {
    
    $_SESSION["kullanici_adi"] = $kullaniciAdi;
    header("Location: about-me.html");
    exit();
  } else {
    
    $hataMesaji = "Geçersiz kullanıcı adı veya şifre.";
  }
}
?>
