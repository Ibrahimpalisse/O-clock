<nav>
  <section class="choix">
            <?php if(basename($_SERVER['PHP_SELF']) !== 'minuteur.php'): ?>
                <div class="cont"><a href="./minuteur/minuteur.php">Minuteur</a></div>
            <?php endif; ?>
            <?php if(basename($_SERVER['PHP_SELF']) !== 'index.php'): ?>
                <div class="cont"><a href="../index.php">Horloge</a></div>
            <?php endif; ?>
   </section>
</nav>
