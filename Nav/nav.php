<nav>
  <section class="choix">
            <?php if(basename($_SERVER['PHP_SELF']) !== 'minuteur.php'): ?>
              <a href="./minuteur.php"><div class="cont">Minuteur</div></a>
            <?php endif; ?>
            <?php if(basename($_SERVER['PHP_SELF']) !== 'index.php'): ?>
              <a href="./index.php"><div class="cont">Horloge</div></a>
            <?php endif; ?>
            <?php if(basename($_SERVER['PHP_SELF']) !== 'chrono.php'): ?>
              <a href="./chrono.php"><div class="cont">Chronomètre</div></a>
            <?php endif; ?>
            <?php if(basename($_SERVER['PHP_SELF']) !== 'reveil.php'): ?>
              <a href="./reveil.php"><div class="cont">Réveil</div></a>
            <?php endif; ?>
   </section>
</nav>
