var playerTime = true;

var icons = {
  defesa: "https://cdn-icons-png.flaticon.com/512/3442/3442934.png",
  forca: "https://cdn-icons-png.flaticon.com/512/7445/7445281.png",
  destreza: "https://cdn-icons-png.flaticon.com/512/5376/5376750.png",
  precisao: "https://cdn-icons-png.flaticon.com/512/3464/3464725.png"

}
var baralho = [];
var baralhoJogador = [];
var baralhoMaquina = [];

function mostraCartaJogador() {
  var campoNome = document.getElementById("div-card-player-name");
  var campoImagem = document.getElementById("img-card-player");

  campoNome.innerHTML = "<p id='p-card-name'>" + baralhoJogador[0].nome + "</p>";
  campoImagem.src = baralhoJogador[0].imagem;
  for (var atributo in baralhoJogador[0].atributos) {
    var elemento = document.getElementById(("div-card-player-stats-" + atributo));
    elemento.innerHTML = "<input id='radioBtnStats' type='radio' name='radioStats' value='" + atributo + "'><img id='imgStats' src='" + icons[atributo] + "' height='23px'>" + baralhoJogador[0].atributos[atributo];
  }
}

function mostraCartaMaquina() {
  var campoNome = document.getElementById("div-card-machine-name");
  var campoImagem = document.getElementById("img-card-machine");

  campoNome.innerHTML = "<p id='p-card-name'>" + baralhoMaquina[0].nome + "</p>";
  campoImagem.src = baralhoMaquina[0].imagem;
  for (var atributo in baralhoMaquina[0].atributos) {
    var elemento = document.getElementById(("div-card-machine-stats-" + atributo));
    elemento.innerHTML = "<img id='imgStats' src='" + icons[atributo] + "' height='23px'>" + baralhoMaquina[0].atributos[atributo];
  }
}

function startGame() {
  baralho = [];
  baralhoJogador = [];
  baralhoMaquina = [];
  playerTime = true;

  baralho = criarBaralhoPrincipal();

  entregaCartasDoisJogadores();

  showBattlefield();
  hiddeBattle()
  mostraCartaJogador();
  changeStartButton();
  imprimeQuantidades();

  var divGameOver = document.getElementById("game-over");
  divGameOver.style.display = "none";
}

function rodadaMaquina() {
  var tempCard = baralhoJogador.splice(0, 1);
  baralhoMaquina.push(tempCard[0]);

  tempCard = baralhoMaquina.splice(0, 1);
  baralhoMaquina.push(tempCard[0]);

  while (baralho.length > 0) {
    tempCard = baralho.splice(0, 1);
    baralhoMaquina.push(tempCard[0]);
  }
}

function rodadaJogador() {
  var tempCard = baralhoMaquina.splice(0, 1);
  baralhoJogador.push(tempCard[0]);

  tempCard = baralhoJogador.splice(0, 1);
  baralhoJogador.push(tempCard[0]);

  while (baralho.length > 0) {
    tempCard = baralho.splice(0, 1);
    baralhoJogador.push(tempCard[0]);
  }
}

function rodadaEmpate() {
  var tempCard = baralhoJogador.splice(0, 1);
  baralho.push(tempCard[0]);

  tempCard = baralhoMaquina.splice(0, 1);
  baralho.push(tempCard[0]);
}

function entregaCartasDoisJogadores() {
  while (baralho.length != 0) {
    var indexCartaJogador = parseInt(Math.random() * baralho.length);
    var tempCard = baralho.splice(indexCartaJogador, 1)
    baralhoJogador.push(tempCard[0]);

    var indexCartaMaquina = parseInt(Math.random() * baralho.length);
    tempCard = baralho.splice(indexCartaMaquina, 1)
    baralhoMaquina.push(tempCard[0]);
  }
}

function newCard(nome, atrPrecisao, atrDestreza, atrForca, atrDefesa, img) {
  var createdCard = {
    nome: nome,
    imagem: img,
    atributos: {
      precisao: atrPrecisao,
      destreza: atrDestreza,
      forca: atrForca,
      defesa: atrDefesa
    }
  };
  return createdCard;
}

function addCard(baralho, card) {
  baralho.push(card);
}

function criarBaralhoPrincipal() {
  var baralho = [];

  addCard(
    baralho,
    newCard(
      "B-Wing",
      3,
      1,
      4,
      4,
      "https://icons.iconarchive.com/icons/jonathan-rey/star-wars-vehicles/256/B-Wing-icon.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "Aggressor Assault Fighter",
      3,
      3,
      5,
      3,
      "https://static.wikia.nocookie.net/starwars/images/8/80/IG2000-NEGVV.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "Alpha-Class Star Wing",
      2,
      2,
      4,
      3,
      "https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/8/8c/Star_Wing_Ship.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "ARC-170 Starfighter",
      2,
      2,
      4,
      3,
      "https://static.wikia.nocookie.net/swse/images/2/29/ARC-170_Starfighter.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "Attack Shuttle",
      3,
      2,
      3,
      1,
      "https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/a/a1/Attack_Shuttle_Ship.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "Auzituck Gunship",
      3,
      1,
      6,
      2,
      "https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/a/a2/Auzituck_Gunship_Ship.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "BTL-A4 Y-Wing",
      2,
      1,
      6,
      2,
      "https://static.wikia.nocookie.net/ptstarwars/images/8/81/Y-wing.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "BTL-B Y-Wing",
      2,
      1,
      5,
      3,
      "https://static.wikia.nocookie.net/vsbattles/images/f/f0/Y-wing_01.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "BTL-S8 K-Wing",
      2,
      1,
      6,
      3,
      "https://static.wikia.nocookie.net/starwars/images/b/b3/K-Wing_NEGVV.png"
    )
  );

  addCard(
    baralho,
    newCard(
      "C-ROC Cruiser",
      3,
      0,
      12,
      4,
      "https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/a/ae/C-ROC_Ship.png"
    )
  );

  addCard(baralho, newCard("CR90 Corellian Corvette", 4, 0, 18, 7, "https://static.wikia.nocookie.net/swse/images/0/0b/Corellian_Corvette.png"));

  addCard(baralho, newCard("Custom YT-1300 Light Freighter", 2, 1, 8, 3, "https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/a/ac/Ship_Customized_YT-1300.png"));

  addCard(baralho, newCard("Delta-7 Aethersprite", 2, 3, 3, 1, "https://static.wikia.nocookie.net/starwars/images/f/f0/Jedi_Starfighter_TCW.png"));

  addCard(baralho, newCard("Droid Tri-Fighter", 3, 3, 3, 0, "https://wallpapercave.com/wp/wp9023383.png"));

  addCard(baralho, newCard("E-Wing", 3, 3, 3, 3, "https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/e/e6/E-Wing_Ship.png"));

  addCard(baralho, newCard("Eta-2 Actis", 2, 3, 3, 2, "https://static.wikia.nocookie.net/starwars/images/0/04/Eta-2JediInterceptor-USC.png"));

  addCard(baralho, newCard("Fang Fighter", 3, 3, 4, 0, "https://i.pinimg.com/originals/dd/f3/29/ddf32912c980dd84e201764fda7155a7.png"));

  addCard(baralho, newCard("Firespray-Class Patrol Craft", 3, 2, 6, 4, "https://static.wikia.nocookie.net/xwing-miniatures-second-edition/images/c/c1/Ship_Firespray.png"));

  return baralho;
}

function imprimeQuantidades() {
  var playerArea = document.getElementById("player-deck");
  playerArea.innerHTML = `<div>Suas cartas</div><div class="points">${baralhoJogador.length}</div>`;
  var talbeArea = document.getElementById("table-deck");
  talbeArea.innerHTML = `<div>Cartas na mesa</div><div class="points">${baralho.length}</div>`;
  var machineArea = document.getElementById("machine-deck");
  machineArea.innerHTML = `<div>Cartas da Máquina</div><div class="points">${baralhoMaquina.length}</div>`
}

function showBattlefield() {
  var divBattle = document.getElementById("div-battle-main");
  divBattle.style.display = "flex";

  var playableButtons = document.getElementById("buttons-to-play");
  playableButtons.style.display = "flow-root";

  var divScore = document.getElementById("main-score");
  divScore.style.display = "flex";
}

function changeStartButton() {
  var button = document.getElementById("div-btn-start");
  if (button.style.display == "block") {
    button.style.display = "none";
  } else {
    button.style.display = "block";
  }
}

function getRadioSelected() {
  var radioButtons = document.getElementsByName("radioStats");
  for (var cont = 0; cont < radioButtons.length; cont++) {
    if (radioButtons[cont].checked) {
      return radioButtons[cont].value;
    }
  }
}

function verifyRadioIsSelected() {
  var radioButtons = document.getElementsByName("radioStats");
  for (var cont = 0; cont < radioButtons.length; cont++) {
    if (radioButtons[cont].checked) {
      return true;
    }
  }
  return false;
}

function play() {
  if (verifyRadioIsSelected()) {
    mostraCartaMaquina();
    showBattle();
    resolveBattle(getRadioSelected());
    changePlayButtons();
  } else {
    window.alert("Selecione com qual atributo você irá duelar")
  }
}

function changePlayButtons() {
  var playButton = document.getElementById("btn-play");
  var nextButton = document.getElementById("btn-next-duel");
  if (nextButton.disabled) {
    playButton.disabled = true;
    nextButton.disabled = false;
  } else {
    playButton.disabled = false;
    nextButton.disabled = true;
  }

}

function hiddeBattle() {
  var divMachineCard = document.getElementById("div-card-machine");
  var divVersus = document.getElementById("div-versus");

  divMachineCard.style.display = "none";
  divVersus.style.display = "none";
}

function showBattle() {
  var divMachineCard = document.getElementById("div-card-machine");
  var divVersus = document.getElementById("div-versus");

  divMachineCard.style.display = "flow-root";
  divVersus.style.display = "flow-root";
}

function resolveBattle(selectedStatus) {
  var playerStatusValue = baralhoJogador[0].atributos[selectedStatus];
  var machineStatusValue = baralhoMaquina[0].atributos[selectedStatus];
  if (playerStatusValue > machineStatusValue) {
    rodadaJogador();
    imprimeQuantidades();
    var message = "Utilizou " + selectedStatus + " para atacar.<br>Muito bem! Você conseguiu superar a " + selectedStatus + " do adversário."
    showMessage(message);
    playerTime = true;
  } else if (machineStatusValue > playerStatusValue) {
    rodadaMaquina();
    imprimeQuantidades();
    var message = "Utilizou " + selectedStatus + " para atacar.<br>Infelizmente a " + selectedStatus + " do adversário é melhor que a sua."
    showMessage(message);
    playerTime = false;
  } else {
    rodadaEmpate();
    imprimeQuantidades();
    var message = "Utilizou " + selectedStatus + " para atacar.<br>Aparentemente a " + selectedStatus + " do adversário é idêntica a sua."
    showMessage(message);
  }
}

function nextDuel() {
  if (gameOverVerify()) {
    if(playerTime) {
    hiddeMessage();
    hiddeBattle();
    mostraCartaJogador();
    changePlayButtons();
    } else {
      mostraCartaJogador();
      machinePlay();
    }
  } else {
    hiddeAll();
    changeStartButton();
    var divGameOver = document.getElementById("game-over");
    divGameOver.style.display = "flow-root";
    if (baralhoJogador.length > 0) {
      divGameOver.innerHTML =
        `<div class="final-message"><h2 id="win">VITÓRIA!</h2><p>Você soube usar uma boa estratégia e superou o inimigo no campo de batalha</p></div>`
    } else {
      divGameOver.innerHTML =
        `<div class="final-message"><h2 id="lose">DERROTA!</h2><p>Seus esforços não foram suficientes para derrotar o inimigo</p></div>`
    }


  }
}

function gameOverVerify() {
  return (baralhoJogador.length > 0 && baralhoMaquina.length > 0);
}

function hiddeAll() {
  var divBattle = document.getElementById("div-battle-main");
  divBattle.style.display = "none";

  var playableButtons = document.getElementById("buttons-to-play");
  playableButtons.style.display = "none";

  var divScore = document.getElementById("main-score");
  divScore.style.display = "none";

  hiddeMessage();
}

function showMessage(message) {
  var elementToFill = document.getElementById("mensagem-resultado");
  elementToFill.innerHTML = message;
  elementToFill.style.display = "block";
}

function hiddeMessage() {
  var elementToFill = document.getElementById("mensagem-resultado");
  elementToFill.style.display = "none";
}

function cardAnalytics(cardToPlay) {
  /*
  forca>10
  precisão>3
  defesa>3
  destreza>=3
  */

  if(cardToPlay.atributos.forca > 7) {
    return "forca";
  } else if (cardToPlay.atributos.precisao > 3) {
    return "precisao";
  } else if (cardToPlay.atributos.defesa > 3) {
    return "defesa";
  } else if (cardToPlay.atributos.destreza > 2) {
    return "destreza";
  } else if (cardToPlay.atributos.precisao == cardToPlay.atributos.destreza && cardToPlay.atributos.destreza == cardToPlay.atributos.forca && cardToPlay.atributos.forca == cardToPlay.atributos.defesa) {
    return "precisao";
  } else {
    return "forca";
  }
}

function machinePlay() {
  mostraCartaMaquina();
  showBattle();
  var cardOnTop = baralhoMaquina[0];
  resolveBattle(cardAnalytics(cardOnTop));
}