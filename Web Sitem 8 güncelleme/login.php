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
