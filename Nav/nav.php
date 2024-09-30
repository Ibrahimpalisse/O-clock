<nav>
  <section class="choix">
            <?php if(basename($_SERVER['PHP_SELF']) !== 'minuteur.php'): ?>
                <div class="cont"><a href="./minuteur.php">Minuteur</a></div>
            <?php endif; ?>
            <?php if(basename($_SERVER['PHP_SELF']) !== 'index.php'): ?>
                <div class="cont"><a href="./index.php">Horloge</a></div>
            <?php endif; ?>
            <?php if(basename($_SERVER['PHP_SELF']) !== 'chrono.php'): ?>
                <div class="cont"><a href="./chrono.php">Chronomètre</a></div>
            <?php endif; ?>
            <?php if(basename($_SERVER['PHP_SELF']) !== 'reveil.php'): ?>
                <div class="cont"><a href="./reveil.php">Réveil</a></div>
            <?php endif; ?>
   </section>
</nav>
