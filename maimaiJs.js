musicBLock = document.querySelectorAll(".music_master_score_back");
var nameData = [];
var scoreData = [];

for (i = 0; i < musicBLock.length; i++) {
    n = musicBLock[i].querySelector(".music_name_block").innerText;
    try {
        s = musicBLock[i].querySelector(".music_score_block").innerText;
    } catch{
        s = 0
    }
    nameData.push(n);
    scoreData.push(s);

    console.log(nameData[i] + " " + scoreData[i])
}
document.open();
document.write("<body></body>");
var table = document.createElement("TABLE");
document.body.appendChild(table);

function setUpTable() {
    for (i = 0; i < musicBLock.length; i++) {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = nameData[i];
        cell2.innerHTML = scoreData[i];
    }

}
setUpTable();
// var btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";                   // Insert text
document.close();
