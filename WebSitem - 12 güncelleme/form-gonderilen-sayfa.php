<!DOCTYPE html>
<html lang="tr">
<style>
    @import "css/main.css";

    body {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h2 {
  color: #333;
}

p {
  color: #555;
  margin-bottom: 10px;
}

.back-link {
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  margin-top: 20px;
}

.back-link:hover {
  text-decoration: underline;
}

</style>
<head>
    <title>Gönderilen Form Bilgileri</title>
    <meta charset="utf-8">
</head>

<body>
    <h2>Gönderilen Form Bilgileri</h2>
    <p>Ad: <?php echo $_POST['ad']; ?></p>
    <p>Soyad: <?php echo $_POST['soyad']; ?></p>
    <p>E-posta: <?php echo $_POST['email']; ?></p>
    <p>Şifre: <?php echo $_POST['sifre']; ?></p>
    <p>Yaş: <?php echo $_POST['yas']; ?></p>
</body>

</html>
