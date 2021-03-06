# Connect4 FrontEnd Challenge / Jules Chavent
Projet disponible à l'adresse suivante 
    => https://juleschavent.github.io/NG-connect-4/

Code source disponible à l'adresse suivante
    => https://github.com/juleschavent/NG-connect-4

## Réflexion :

J'ai d'abord préféré prendre un moment pour comprendre les consignes et contraintes liées à l'exercice.
En effet, n'ayant pas encore eu l'occasion d'utiliser NG sur des projets, et avec seulement 3 semaines de JS, j'ai préféré prendre le temps nécssaire afin de comprendre les outils que j'allais utiliser.

La première difficulté a été de comprendre le principe même de Angular mais aussi de NGXS. N'ayant pas encore eu l'occasion de travailler avec des state manager, j'ai vite rencontré une difficulté.

J'ai aussi regardé si ce type de projet avait déjà été réalisé. J'ai trouvé plusieurs exemples en JS mais aucun de ceux-là ne correspondaient à ce que j'avais en tête. En effet, j'ai souhaité simuler au maximum le vrai jeu. Il fallait qu'un joueur spécifie une colonne et que son pion aille se placer automatiquement au premier emplacement libre. A l'inverse, la facilité aurait été de forcer le joueur et cliquer sur les bonnes coordonnées en X et Y.
D'autre part, le challenge était aussi de trouver un gagnant. Même problème, les exemples que j'avais trouvé n'étaient pas optimisés et forçaient à rentrer manuellement chaque combinaison possible de victoire.
Côté HTML, je voulais rester au maximum DRY et donc ne pas créer manuellement chacun des 42 emplacements de pion.

J'ai alors décidé de faire un premier test et d'effectuer l'exercice avec mes compétences sur des technos familières en JS.
Puis une fois que la logique était assimilé, j'ai adapté le projet à NG.


## Exercice :

Il y a eu une vraie évolution entre la première version de l'exercice et ce que je vous présente. J'ai essayé de comprendre l'organisation du frameWork et malgré la petite envergure du projet, j'ai essayé de me projeter et d'appliquer la même rigueur que si cela avait été un projet plus important.

J'ai donc séparé les différentes parties de l'app en component.
    => app.component.html regroupe les différentes sections de l'app
    => le plateau de jeu ainsi que la logique sont regroupés dans le component Board
    => le header (titre du jeu) ainsi que le footer sont séparés du reste pour garder une meilleure lisibilité
    => les boutons Info et Rules ainsi que le pop-up howToPlay sont dans leur propre component

J'ai commencé à comprendre l'intérêt de NGXS lorsque je me suis penché sur le darkMode. En effet le toggle étant dans son propre composant, il ne pouvait pas communiquer avec le reste de l'app pour donner l'information.
J'ai donc découvert les shared services.
C'est ici, je pense, que NGXS aurait été opportun mais par manque de temps et par souci de vous présenter un projet "terminé", j'ai préféré rester sur ce que je comprenais.

## Compétences utilisées :

J'ai utilisé plusieurs alternatives sur l'app. En effet le pop-up et le bouton des règles du jeu sont faits via NG Material alors que le pop-up lorsqu'un joueur gagne la partie est "fait main".
D'autre part, dans la partie logique du jeu "board.component.ts", j'ai utilisé des options différentes entre les méthodes findWinner() qui servent à vérifier s'il y a un gagnant à chaque coup.


Concernant votre review du code, celui-ci a été commenté au maximum afin d'être le plus clair et lisible possible. La partie qui vous intéressera le plus se trouve dans le composant "board".

J'ai préféré retiré la majorité des console.log par souci de lisibilité.