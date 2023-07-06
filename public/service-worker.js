
    self.addEventListener('install', (event) => {
      event.waitUntil(
        caches.open('your-cache-name').then((cache) => {
          return cache.addAll(["/","/index.html","/manifest.json","src/TarotCardGenerator.css","src/TarotCardGenerator.js","src/TarotCards.js","src/App.js","src/index.js","src/images/AceOfCups.png","src/images/AceOfPentacles.png","src/images/AceOfSwords.png","src/images/AceOfWands.png","src/images/Death.png","src/images/EightOfCups.png","src/images/EightOfPentacles.png","src/images/EightOfSwords.png","src/images/EightOfWands.png","src/images/FiveOfCups.png","src/images/FiveOfPentacles.png","src/images/FiveOfSwords.png","src/images/FiveOfWands.png","src/images/FourOfCups.png","src/images/FourOfPentacles.png","src/images/FourOfSwords.png","src/images/FourOfWands.png","src/images/Judgment.png","src/images/Justice.png","src/images/KingOfCups.png","src/images/KingOfPentacles.png","src/images/KingOfSwords.png","src/images/KingOfWands.png","src/images/KnightOfCups.png","src/images/KnightOfPentacles.png","src/images/KnightOfSwords.png","src/images/KnightOfWands.png","src/images/loading.png","src/images/loadings.png","src/images/NineOfCups.png","src/images/NineOfPentacles.png","src/images/NineOfSwords.png","src/images/NineOfWands.png","src/images/PageOfCups.png","src/images/PageOfPentacles.png","src/images/PageOfSwords.png","src/images/PageOfWands.png","src/images/QueenOfCups.png","src/images/QueenOfPentacles.png","src/images/QueenOfSwords.png","src/images/QueenOfWands.png","src/images/SevenOfCups.png","src/images/SevenOfPentacles.png","src/images/SevenOfSwords.png","src/images/SevenOfWands.png","src/images/SixOfCups.png","src/images/SixOfPentacles.png","src/images/SixOfSwords.png","src/images/SixOfWands.png","src/images/Strength.png","src/images/TarotDeckCover.png","src/images/Temperance.png","src/images/TenOfCups.png","src/images/TenOfPentacles.png","src/images/TenOfSwords.png","src/images/TenOfWands.png","src/images/TheChariot.png","src/images/TheDevil.png","src/images/TheEmperor.png","src/images/TheEmpress.png","src/images/TheFool.png","src/images/TheHangedMan.png","src/images/TheHermit.png","src/images/TheHierophant.png","src/images/TheHighPriestess.png","src/images/TheLovers.png","src/images/TheMagician.png","src/images/TheMoon.png","src/images/TheStar.png","src/images/TheSun.png","src/images/TheTower.png","src/images/TheWheelOfFortune.png","src/images/TheWorld.png","src/images/ThreeOfCups.png","src/images/ThreeOfPentacles.png","src/images/ThreeOfSwords.png","src/images/ThreeOfWands.png","src/images/TwoOfCups.png","src/images/TwoOfPentacles.png","src/images/TwoOfSwords.png","src/images/TwoOfWands.png"]);
        })
      );
    });

    self.addEventListener('fetch', (event) => {
      event.respondWith(
        caches.match(event.request).then((response) => {
          return response || fetch(event.request);
        })
      );
    });
  