<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minuteur</title>
    <link rel="stylesheet" href="../assets/css/nav.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="../assets/css/style_minuteur.css?<?php echo time(); ?>">
</head>
<body>

<section class="timer-container">
    <?php include('../Nav/nav.php'); ?>
    <h1>Minuteur</h1>
    <div id="time-display">00:00</div>
    <div class="timer-controls">
        <button id="decrease-time">-</button>
        <input type="number" id="time-input" min="0" value="0">
        <button id="increase-time">+</button>
    </div>
    <div class="timer-actions">
        <button id="start-stop-btn">Démarrer</button>
    </div>
   
</section>

<script src="../assets/js/script_minuteur.js"></script>
</body>
</html>
