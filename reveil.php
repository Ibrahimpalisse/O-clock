<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Réveil</title>
    <link rel="stylesheet" href="./assets/css/nav.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./assets/css/style_reveil.css?<?php echo time(); ?>">
</head>
<body>

<div class="alarm-container">
<?php include('./Nav/nav.php'); ?>
    <h1>Réveil</h1>
    <div class="alarm-inputs">
        <input type="time" id="alarm-time" required>
        <input type="text" id="alarm-message" placeholder="Entrez votre message" required>
        <button id="set-alarm-btn">Ajouter alarme</button>
    </div>
    
    <div class="alarm-list">
        <h3>Alarmes programmées</h3>
        <ul id="alarms-list"></ul>
    </div>
</div>

<script src="script.js"></script>
</body>
</html>
