var worldsize = 1;
var worldram = 420;
var playeramount = 1;
const baseram = 2048;
const basecpu = 2800;


function onLoad() {
    document.getElementById("playercount").addEventListener("input", updatePlayers);
    document.getElementById("worldsize").addEventListener("input", updateWorldSize);
    reCalc();
}

function reCalc() {
    /* RAM */

    switch (worldsize) {
        case "1":
            worldram = 420;
            break;
        case "2":
            worldram = 640;
            break;
        case "3":
            worldram = 1000;
            break;
    }

    playerram = 50*playeramount;

    finalram = ((baseram + worldram + playerram)/1024).toFixed(1);
    document.getElementById("ramvalue").innerHTML = finalram;

    /* CPU */

    playercpu = 25*playeramount;
    finalcpu = ((basecpu+playercpu)/1000).toFixed(1);

    document.getElementById("cpuvalue").innerHTML = finalcpu;

}

function updatePlayers() {
    playeramount = document.getElementById("playercount").value;
    if (playeramount == "" || playeramount <= 0) {
        playeramount = 1;
        document.getElementById("playercount").value = "";
        document.getElementById("playercount").placeholder = "1";
    }
    if (playeramount > 255) {
        playeramount = 255;
        document.getElementById("playercount").value = "255";
    }
    reCalc();
}

function updateWorldSize() {
    worldsize = document.getElementById("worldsize").value;
    reCalc();
}