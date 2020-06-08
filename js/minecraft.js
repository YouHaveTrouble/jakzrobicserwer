var playeramount = 1;
var pluginamount = 0;
var gamever = "1.15";
const baseram = 1536;
const basecpu = 1800;

function onLoad() {
    document.getElementById("playeramountchoice").addEventListener("input", updatePlayers);
    document.getElementById("playeramountchoice").placeholder = "1";
    document.getElementById("pluginamountchoice").addEventListener("input", updatePlugins);
    document.getElementById("pluginamountchoice").placeholder = "0";
    document.getElementById("versionchoice").addEventListener("input", updateVersion);
    document.getElementById("silnik").addEventListener("mouseover", showDesc1);
    document.getElementById("silnik").addEventListener("mouseout", clearDesc1);
    document.getElementById("typhosta").addEventListener("mouseover", showDesc2);
    document.getElementById("typhosta").addEventListener("mouseout", clearDesc1);
    document.getElementById("iloscram").addEventListener("mouseover", showDesc3);
    document.getElementById("iloscram").addEventListener("mouseout", clearDesc1);
    document.getElementById("ilosccpu").addEventListener("mouseover", showDesc4);
    document.getElementById("ilosccpu").addEventListener("mouseout", clearDesc1);
    recalc();

    randomad = Math.floor(Math.random() * 3);
    switch (randomad) {
        case 0:
            document.getElementById("randomad").innerHTML = "Potrzebujesz pomocy w konfiguracji?"
            break;
        case 1:
            document.getElementById("randomad").innerHTML = "Nie umiesz samemu skonfigurowac VPS?"
            break;
        case 2:
            document.getElementById("randomad").innerHTML = "Chcesz dowiedziec się wiecej o serwerach Minecraft?"
            break;
    }
    document.getElementById("lsplug").innerHTML = "Odwiedz <a href=\"http://laststation.pl/sklep\" target=\"_blank\">laststation.pl</a>"
}

function updatePlayers() {
    playeramount = document.getElementById("playeramountchoice").value;
    if (playeramount == "" || playeramount <= 0) {
        playeramount = 1;
        document.getElementById("playeramountchoice").value = "";
        document.getElementById("playeramountchoice").placeholder = "1";
    }
    if (playeramount > 99) {
        playeramount = 99;
        document.getElementById("playeramountchoice").value = "99";
    }
    recalc();
}

function updatePlugins() {
    pluginamount = document.getElementById("pluginamountchoice").value;
    if (pluginamount == "" || pluginamount < 0) {
        pluginamount = 0;
        pluginamount = document.getElementById("pluginamountchoice").value = "";
        document.getElementById("pluginamountchoice").placeholder = "0";
    }
    if (pluginamount > 99) {
        pluginamount = 99;
        pluginamount = document.getElementById("pluginamountchoice").value = "99";
    }
    recalc();
}

function updateVersion() {
    gamever = document.getElementById("versionchoice").value;
    recalc();
}

function showDesc1() {
    if (document.getElementById("return1").innerHTML == "Vanilla") {
        document.getElementById("descbox1").innerHTML = "Domyslny, oficjalny silnik serwera Minecraft."
    } else if (document.getElementById("return1").innerHTML == "Spigot") {
        document.getElementById("descbox1").innerHTML = "Nowoczesny silnik umożliwiający instalowanie pluginow."
    } else if (document.getElementById("return1").innerHTML == "Paper") {
        document.getElementById("descbox1").innerHTML = "Silnik stworzony w celu wycisnięcia jak największej wydajności."
    } else if (document.getElementById("return1").innerHTML == "Tuinity") {
        document.getElementById("descbox1").innerHTML = "Silnik budujący na silniku Paper. Dodaje wielordzeniowosc swiatow."
    }
}

function showDesc2() {
    if (document.getElementById("return2").innerHTML == "Dzielony") {
        document.getElementById("descbox1").innerHTML = "Prosty i latwy w konfiguracji, jednak mocno ograniczony zasobami."
    } else if (document.getElementById("return2").innerHTML == "VPS") {
        document.getElementById("descbox1").innerHTML = "Wirtualizowana prywatna maszyna."
    }
}

function showDesc3() {
    document.getElementById("descbox1").innerHTML = "Szacowana ilosc pamieci RAM potrzebna do plynnego dzialania serwera."
}
function showDesc4() {
    document.getElementById("descbox1").innerHTML = "Szacowane taktowanie procesora na rdzen potrzebne do plynnego dzialania serwera."
}


function clearDesc1() {
    document.getElementById("descbox1").innerHTML = "---"
}

function recalc() {
    /* plik serwerowy */

    switch (gamever) {
        case "1.15":
            if (pluginamount == 0) {
                if (playeramount >= 30) {
                    document.getElementById("return1").innerHTML = "Tuinity";
                }
                else if (playeramount >= 20 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount < 20 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 20) {
                    document.getElementById("return1").innerHTML = "Tuinity";
                } else if (playeramount <= 20 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
            }
            break;
        case "1.14":
            if (pluginamount == 0) {
                if (playeramount >= 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
                else if (playeramount >= 20 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Spigot";
                } else if (playeramount < 20 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount <= 30 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Spigot";
                }
            }
            break;
        case "1.13":
            if (pluginamount == 0) {
                if (playeramount >= 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
                else if (playeramount >= 20 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Spigot";
                } else if (playeramount < 20 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 20) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount <= 20 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Spigot";
                }
            }
            break;
        case "1.12":
            if (pluginamount == 0) {
                if (playeramount >= 40) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
                else if (playeramount >= 25 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Spigot";
                } else if (playeramount < 25 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount <= 30 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Spigot";
                }
            }
            break;
        case "1.11":
            if (pluginamount == 0) {
                if (playeramount >= 40) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
                else if (playeramount >= 25 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Spigot";
                } else if (playeramount < 25 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount <= 30 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Spigot";
                }
            }
            break;
        case "1.10":
            if (pluginamount == 0) {
                if (playeramount >= 40) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
                else if (playeramount >= 25 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Spigot";
                } else if (playeramount < 25 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount <= 30 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Spigot";
                }
            }
            break;
        case "1.9":
            if (pluginamount == 0) {
                if (playeramount >= 40) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
                else if (playeramount >= 25 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Spigot";
                } else if (playeramount < 25 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 30) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount <= 30 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Spigot";
                }
            }
            break;
        case "1.8":
            if (pluginamount == 0) {
                if (playeramount >= 40) {
                    document.getElementById("return1").innerHTML = "Paper";
                }
                else if (playeramount >= 25 && playeramount < 30) {
                    document.getElementById("return1").innerHTML = "Spigot";
                } else if (playeramount < 25 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Vanilla";
                }
            } else if (pluginamount >= 1) {
                if (playeramount > 40) {
                    document.getElementById("return1").innerHTML = "Paper";
                } else if (playeramount <= 40 && playeramount >= 1) {
                    document.getElementById("return1").innerHTML = "Spigot";
                }
            }
            break;
    }

    /* typ hostingu */

    switch (gamever) {
        case "1.15":
            if (playeramount >= 1 && playeramount < 20) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 20) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
        case "1.14":
            if (playeramount >= 1 && playeramount < 20) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 20) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
        case "1.13":
            if (playeramount >= 1 && playeramount < 20) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 20) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
        case "1.12":
            if (playeramount >= 1 && playeramount < 40) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 40) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
        case "1.11":
            if (playeramount >= 1 && playeramount < 40) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 40) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
        case "1.10":
            if (playeramount >= 1 && playeramount < 40) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 40) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
        case "1.9":
            if (playeramount >= 1 && playeramount < 45) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 45) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
        case "1.8":
            if (playeramount >= 1 && playeramount < 50) {
                document.getElementById("return2").innerHTML = "Dzielony";
            } else if (playeramount >= 50) {
                document.getElementById("return2").innerHTML = "VPS";
            }
            break;
    }

    /* obliczanie ramu */

    ramamount = baseram;
    ramamount = ramamount + playeramount*64;
    ramamount = ramamount + pluginamount*24;
    ramamount = (ramamount/1024).toFixed(1);
    document.getElementById("return3").innerHTML = ramamount+"GB";

    /* obliczanie zużycia cpu */

    cpuamount = basecpu;
    if (gamever == "1.13" || gamever == "1.14" || gamever == "1.15") {
        cpuamount = cpuamount + playeramount*12;
        cpuamount = cpuamount + pluginamount*10;
    } else if (gamever == "1.12" || gamever == "1.11" || gamever == "1.10") {
        cpuamount = cpuamount + playeramount*10;
        cpuamount = cpuamount + pluginamount*8;
    } else if (gamever == "1.9" || gamever == "1.8") {
        cpuamount = cpuamount + playeramount*8;
        cpuamount = cpuamount + pluginamount*7;
    }

    cpuamount = (cpuamount/1000).toFixed(1);
    document.getElementById("return4").innerHTML = cpuamount+"Ghz";

    /* pobieranie serwera */

    switch (gamever) {
        case "1.15":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/bb2b6b1aefcd70dfd1892149ac3a215f6c636b07/server.jar\">Vanilla 1.15.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/ci/job/Paper-1.15/lastSuccessfulBuild/artifact/paperclip.jar\">Paper 1.15.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Tuinity") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://ci.codemc.io/job/Spottedleaf/job/Tuinity/lastSuccessfulBuild/artifact/tuinity-paperclip.jar\">Tuinity 1.15.2<a>"
            }
            break;
        case "1.14":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/3dc3d84a581f14691199cf6831b71ed1296a9fdf/server.jar\">Vanilla 1.14.4<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/api/v1/paper/1.14.4/243/download\">Paper 1.14.4<a>"
            } else if (document.getElementById("return1").innerHTML == "Spigot") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://cdn.getbukkit.org/spigot/spigot-1.14.4.jar\">Spigot 1.14.4<a>"
            }
            break;
        case "1.13":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/3737db93722a9e39eeada7c27e7aca28b144ffa7/server.jar\">Vanilla 1.13.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/api/v1/paper/1.13.2/655/download\">Paper 1.13.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Spigot") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://cdn.getbukkit.org/spigot/spigot-1.13.2.jar\">Spigot 1.13.2<a>"
            }
            break;
        case "1.12":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/886945bfb2b978778c3a0288fd7fab09d315b25f/server.jar\">Vanilla 1.12.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/api/v1/paper/1.12.2/1618/download\">Paper 1.12.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Spigot") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://cdn.getbukkit.org/spigot/spigot-1.12.2.jar\">Spigot 1.12.2<a>"
            }
            break;
        case "1.11":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/f00c294a1576e03fddcac777c3cf4c7d404c4ba4/server.jar\">Vanilla 1.11.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/api/v1/paper/1.11.2/1104/download\">Paper 1.11.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Spigot") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://cdn.getbukkit.org/spigot/spigot-1.11.2.jar\">Spigot 1.11.2<a>"
            }
            break;
        case "1.10":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/3d501b23df53c548254f5e3f66492d178a48db63/server.jar\">Vanilla 1.10.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/api/v1/paper/1.10.2/916/download\">Paper 1.10.2<a>"
            } else if (document.getElementById("return1").innerHTML == "Spigot") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://cdn.getbukkit.org/spigot/spigot-1.10.2-R0.1-SNAPSHOT-latest.jar\">Spigot 1.10.2<a>"
            }
            break;
        case "1.9":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/edbb7b1758af33d365bf835eb9d13de005b1e274/server.jar\">Vanilla 1.9.4<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/api/v1/paper/1.9.4/773/download\">Paper 1.9.4<a>"
            } else if (document.getElementById("return1").innerHTML == "Spigot") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://cdn.getbukkit.org/spigot/spigot-1.9.4-R0.1-SNAPSHOT-latest.jar\">Spigot 1.9.4<a>"
            }
            break;
        case "1.8":
            if (document.getElementById("return1").innerHTML == "Vanilla") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://launcher.mojang.com/v1/objects/b58b2ceb36e01bcd8dbf49c8fb66c55a9f0676cd/server.jar\">Vanilla 1.8.9<a>"
            } else if (document.getElementById("return1").innerHTML == "Paper") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://papermc.io/api/v1/paper/1.8.8/443/download\">Paper 1.8.8<a>"
            } else if (document.getElementById("return1").innerHTML == "Spigot") {
                document.getElementById("return5").innerHTML = "<a class=\"link\" href=\"https://cdn.getbukkit.org/spigot/spigot-1.8.8-R0.1-SNAPSHOT-latest.jar\">Spigot 1.8.8<a>"
            }
            break;
    }

    /* propozycja hostingu */

    if (document.getElementById("return2").innerHTML == "Dzielony") {
        document.getElementById("return6").innerHTML = "<a class=\"link\" href=\"http://titanaxe.com/r/27622\" target=\"_blank\">TitanAxe</a>"
        document.getElementById("hostspecific").innerHTML = ""
    } else if (document.getElementById("return2").innerHTML == "VPS") {
        document.getElementById("return6").innerHTML = "<a class=\"link\" href=\"https://www.lvlup.pro/pl/oferta/vps-kvm/\" target=\"_blank\">LvlUp Pro</a>"
        document.getElementById("hostspecific").innerHTML = "Uzyj kodu eg65yx6c , żeby uzyskac znizkę 10% w lvlup.pro!"
    }


}