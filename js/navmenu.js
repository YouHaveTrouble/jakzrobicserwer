page = 0;

function onLoad() {
    document.getElementById("mainpage").addEventListener("click", goHome);
    document.getElementById("minecraftpage").addEventListener("click", goMinecraft);
    document.getElementById("terrariapage").addEventListener("click", goTerraria);
    document.getElementById("changelog").addEventListener("click", goChangelog);
    document.getElementById("mainpage").setAttribute("class", "active");
}

function goHome() {
    if (page == 0) {
        return;
    }
    page = 0;
    document.getElementById("frame").src = "/main.html";
    document.getElementById("mainpage").setAttribute("class", "active");
    document.getElementById("minecraftpage").setAttribute("class", "inactive");
    document.getElementById("terrariapage").setAttribute("class", "inactive");
    document.getElementById("changelog").setAttribute("class", "inactive");
}

function goMinecraft() {
    if (page == 1) {
        return;
    }
    page = 1;
    document.getElementById("frame").src = "/games/minecraft.html";
    document.getElementById("mainpage").setAttribute("class", "inactive");
    document.getElementById("changelog").setAttribute("class", "inactive");
    document.getElementById("terrariapage").setAttribute("class", "inactive");
    document.getElementById("minecraftpage").setAttribute("class", "active");
}

function goTerraria() {
    if (page == 2) {
        return;
    }
    page = 2;
    document.getElementById("frame").src = "/games/terraria.html";
    document.getElementById("mainpage").setAttribute("class", "inactive");
    document.getElementById("changelog").setAttribute("class", "inactive");
    document.getElementById("minecraftpage").setAttribute("class", "inactive");
    document.getElementById("terrariapage").setAttribute("class", "active");
}

function goChangelog() {
    if (page == 99) {
        return;
    }
    page = 99;
    document.getElementById("frame").src = "/changelog";
    document.getElementById("mainpage").setAttribute("class", "inactive");
    document.getElementById("changelog").setAttribute("class", "active");
    document.getElementById("minecraftpage").setAttribute("class", "inactive");
    document.getElementById("terrariapage").setAttribute("class", "inactive");
}