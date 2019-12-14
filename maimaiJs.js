musicBLock = document.querySelectorAll(".w_450");

var nameData = [];
var scoreData = [];
var lvData = [];
var difficult = [];
var typeData = [];


console.log(musicBLock.length);


for (i = 0; i < musicBLock.length; i++) {
    try {
        n = musicBLock[i].querySelector(".music_name_block").innerText;
        lv = musicBLock[i].querySelector(".music_lv_block").innerText;
        try {
            s = musicBLock[i].querySelector(".music_score_block").innerText;
            var news = s.replace("%", "");
        } catch{
            news = 0
        }

        try {
            type = musicBLock[i].querySelector(".music_kind_icon").src.includes("standard") ? "ST" : "DX";
        } catch{
            if (i != 0 && masterMusicBLock[i].querySelector(".music_name_block").innerText ==
                masterMusicBLock[i - 1].querySelector(".music_name_block").innerText) {
                type = "ST"
            } else {
                type = "DX"
            }
            // type = "two Type"
        }

        nameData.push(n);
        scoreData.push(Number(news));
        lvData.push(String(lv).trim());
        difficult.push("Master");
        typeData.push(type);

        // console.log(lvData[i]+ " " + lvData[i] + " " + nameData[i] + " " + scoreData[i]);
    } catch{
        continue;
    }
}


function showData() {
    for (i = 0; i < lvData.length; i++) {
        console.log(difficult[i] + " " + lvData[i] + " " + nameData[i] + " " + scoreData[i]);
    }
}

function getRemasterData() {
    const Http = new XMLHttpRequest();
    const url = 'https://maimaidx-eng.com/maimai-mobile/record/musicGenre/search/?genre=99&diff=4';
    Http.open("GET", url);
    Http.responseType = "document";
    Http.send();
    Http.onload = function () {
        var RemasterMusicBLock = this.responseXML.querySelectorAll(".w_450");
        // var RemasterMusicType = this.responseXML.querySelectorAll(".music_kind_icon");


        for (i = 0; i < RemasterMusicBLock.length; i++) {
            try {
                n = RemasterMusicBLock[i].querySelector(".music_name_block").innerText;
                lv = RemasterMusicBLock[i].querySelector(".music_lv_block").innerText;
                // typeString = String(RemasterMusicBLock[i].src);
                try {
                    s = RemasterMusicBLock[i].querySelector(".music_score_block").innerText;
                    var news = s.replace("%", "");
                } catch{
                    news = 0;
                }

                try {
                    type = RemasterMusicBLock[i].querySelector(".music_kind_icon").src.includes("standard") ? "ST" : "DX";
                    console.log(RemasterMusicBLock[i].querySelector(".music_kind_icon").src + " " + n);
                } catch{
                    // if(i!= 0  && RemasterMusicBLock[i].querySelector(".music_name_block").innerText == 
                    // RemasterMusicBLock[i-1].querySelector(".music_name_block").innerText){
                    //     type = "ST"
                    // }else{
                    //     type = "DX"
                    // }
                    type = "two Type"
                }
                nameData.push(n);
                scoreData.push(Number(news));
                lvData.push(String(lv).trim());
                difficult.push("ReMaster");
                typeData.push(type);
            } catch{
                continue;
            }
        }
        setUpTable();
    }
}

getRemasterData();
showData();
//show data in web page

document.open();
document.write("<body></body>");
var table = document.createElement("TABLE");
document.body.appendChild(table);
table.border = "3";

var arrayString = "["

function setUpTable() {
    for (i = 0; i < lvData.length; i++) {
        if (lvData[i] != "13+" && lvData[i] != "13" && lvData[i] != "12+" && lvData[i] != "14") {

        } else {
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);

            cell1.innerHTML = lvData[i];
            cell2.innerHTML = difficult[i];
            cell3.innerHTML = nameData[i];
            cell4.innerHTML = scoreData[i];
            cell5.innerHTML = typeData[i];

            arrayString += "[\"" + nameData[i] + "\",],";
        }
    }
    row = table.insertRow(0);

    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);

    cell1.innerHTML = "Lv";
    cell2.innerHTML = "Diff";
    cell3.innerHTML = "Title";
    cell4.innerHTML = "Score";

}
// setUpTable();

arrayString += "]";

console.log(arrayString)

// var btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";                   // Insert text
document.close();
