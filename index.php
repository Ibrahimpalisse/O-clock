<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Horlog</title>
    <link rel="stylesheet" href="./assets/css/nav.css?<?php echo time(); ?>">
    <link rel="stylesheet" href="./assets/css/style_horloge.css?<?php echo time(); ?>">
</head>
<body>
    <main>
        <section class="hero">
             <?php include('./Nav/nav.php'); ?>
            <div class="container">
                <div class="clock">
                    <span id="hours">00</span>
                    <span>:</span>
                    <span id="minutes">00</span>
                    <span>:</span>
                    <span id="seconds">00</span>
                </div>
            </div>
        </section> 
    </main>    
    <script src="./assets/js/recupe_horloge.js"></script>
</body>
</html>
