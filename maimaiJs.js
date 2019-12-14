//songRating
function getRatingList() {
    ratingList =
        [["ギリギリ最強あいまいみー！", 12.7],
        ["デンパラダイム", 12.8],
        ["骸骨楽団とリリア", 12.8],
        ["人生リセットボタン", 12.7],
        ["六兆年と一夜物語DX", 12.8],
        ["幸せになれる隠しコマンドがあるらしい", 12.9],
        ["初音ミクの激唱", 13.5],
        ["初音ミクの消失", 12.8],
        ["終点", 12.8],
        ["脳漿炸裂ガール", 12.8],
        ["脳漿炸裂ガールDX", 12.9],
        ["ワンダーラスト", 12.8],
        ["頓珍漢の宴", 12.7],
        ["ドーナツホール", 12.7],
        ["デッドレッドガールズ", 12.7],
        ["ナイト・オブ・ナイツ (Cranky Remix)", 12.7],
        ["もうみんなしねばいいのに", 12.8],
        ["患部で止まってすぐ溶ける～狂気の優曇華院", 12.7],
        ["患部で止まってすぐ溶ける～狂気の優曇華院DX", 12.8],
        ["【東方ニコカラ】秘神マターラ feat.魂音泉【IOSYS】", 12.7],
        ["Scream out! -maimai SONIC WASHER Edit-", 12.8],
        ["Scream out! -maimai SONIC WASHER Edit-DX", 12.8],
        ["幻想のサテライト", 12.9],
        ["幻想のサテライトDX", 12.9],
        ["儚きもの人間", 12.8],
        ["最終鬼畜妹・一部声", 12.8],
        ["ウサテイ", 12.7],
        ["進め！イッスン軍団 -Rebellion of the Dwarfs-", 12.7],
        ["Imperishable Night 2006 (2016 Refine)", 12.7],
        ["Calamity Fortune", 13.2],
        ["Destr0yer", 12.7],
        ["End Time", 13.7],
        ["Altale", 12.7],
        ["B.M.S.", 13.0],
        ["ENERGY SYNERGY MATRIX", 12.7],
        ["FREEDOM DiVE (tpz Overcute Remix)", 13.4],
        ["Credits", 13.6],
        ["MilK", 12.8],
        ["ULTRA B+K", 12.9],
        ["GO BACK 2 YOUR RAVE", 12.9],
        ["B.B.K.K.B.K.K.", 12.9],
        ["魔法少女になるしかねぇ", 12.9],
        ["人里に下ったアタイがいつの間にか社畜になっていた件", 12.9],
        ["Maxi", 12.8],
        ["conflict", 13.2],
        ["conflictDX", 12.8],
        ["Sakura Fubuki", 12.7],
        ["METATRON", 12.8],
        ["Good Bye, Mr. Jack", 12.9],
        ["麒麟", 13.2],
        ["Jack-the-Ripper◆", 12.9],
        ["DRAGONLADY", 12.8],
        ["電車で電車でOPA!OPA!OPA! -GMT mashup-", 12.7],
        ["FUJIN Rumble", 13.3],
        ["Got more raves？", 12.7],
        ["夜明けまであと３秒", 12.9],
        ["Ignis Danse", 13.3],
        ["きたさいたま2000", 13.1],
        ["Scars of FAUNA", 12.7],
        ["FLOWER", 12.8],
        ["セイクリッド　ルイン", 12.9],
        ["Scarlet Lance", 13.0],
        ["極圏", 13.0],
        ["バーチャルダム　ネーション", 13.0],
        ["MAXRAGE", 12.8],
        ["P-qoq", 12.7],
        ["SILENT BLUE", 13.8],
        ["雷切-RAIKIRI-", 13.5],
        ["花と、雪と、ドラムンベース。", 13.5],
        ["Ragnarok", 13.1],
        ["larva", 13.7],
        ["keep hopping", 12.9],
        ["Excalibur ～Revived resolution～", 13.8],
        ["Caliburne ～Story of the Legendary sword～", 13.2],
        ["Justified", 12.9],
        ["Mare Maris", 12.9],
        ["デスパレイト", 12.8],
        ["Moon of Noon", 13.4],
        ["Ultranova", 13.0],
        ["夢花火", 12.7],
        ["FFT", 13.5],
        ["Panopticon", 13.4],
        ["四月の雨", 12.9],
        ["ねぇ、壊れタ人形ハ何処へ棄テらレるノ？", 13.5],
        ["HERA", 13.2],
        ["Alea jacta est!", 13.5],
        ["AMAZING MIGHTYYYY!!!!", 13.6],
        ["CITRUS MONSTER", 13.4],
        ["Hyper Active", 12.9],
        ["Jumble Rumble", 12.8],
        ["Nitrous Fury", 12.9],
        ["GEMINI -M-", 12.7],
        ["天火明命", 12.9],
        ["7thSense", 13.0],
        ["Lividi", 12.9],
        ["Axeria", 13.4],
        ["the EmpErroR", 13.6],
        ["閃鋼のブリューナク", 12.7],
        ["ガラテアの螺旋", 13.5],
        ["QZKago Requiem", 13.7],
        ["Our Wrenally", 13.8],
        ["Contrapasso -paradiso-", 13.4],
        ["Oshama Scramble!", 13.3],
        ["Oshama Scramble!DX", 13.0],
        ["Garakuta Doll Play", 13.1],
        ["MYTHOS", 13.0],
        ["Glorious Crown", 13.7],
        ["Aiolos", 13.0],
        ["D✪N’T ST✪P R✪CKIN’", 12.7],
        ["oboro", 12.7],
        ["KING is BACK!!", 12.8],
        ["Schwarzschild", 13.5],
        ["Fragrance", 13.1],
        ["Nerverakes", 12.8],
        ["Prophesy One", 13.6],
        ["System “Z”", 13.2],
        ["VERTeX", 13.4],
        ["ジングルベル", 13.1],
        ["火炎地獄", 12.7],
        ["Reach For The Stars", 12.7],
        ["Like the Wind [Reborn]", 12.7],
        ["Outlaw's Lullaby", 12.9],
        ["The wheel to the right", 12.9],
        ["エンドマークに希望と涙を添えて", 13.3],
        ["World Vanquisher", 13.2],
        ["Xevel", 13.3],
        ["We Gonna Journey", 12.9],
        ["My First Phone", 12.8],
        ["怒槌", 13.6],
        ["TiamaT:F minor", 13.2],
        ["Kattobi KEIKYU Rider", 12.8],
        ["猛進ソリストライフ！", 12.7],
        ["奏者はただ背中と提琴で語るのみ", 12.7],
        ["分からない", 12.9],
        ["Secret Sleuth", 12.8],
        ["PANDORA PARADOXXX", 13.9],

        //remaster
        ["インビジブル(remas)", 12.7],
        ["ロストワンの号哭(remas)", 12.9],
        ["カゲロウデイズ(remas)", 13.0],
        ["立ち入り禁止(remas)", 12.7],
        ["CYBER Sparks(remas)", 12.8],
        ["患部で止まってすぐ溶ける～狂気の優曇華院(remas)", 13.0],
        ["クレイジークレイジーダンサーズ(remas)", 12, 7],
        ["ナイト・オブ・ナイツ(remas)", 13.3],
        ["サドマミホリック(remas)", 12.7],
        ["最終鬼畜妹フランドール・S(remas)", 12.7],
        ["雷切-RAIKIRI-(remas)", 13.9],
        ["花と、雪と、ドラムンベース。(remas)", 12.9],
        ["FFT(remas)", 13.9],
        ["Panopticon(remas)", 13.4],
        ["Alea jacta est!(remas)", 13.9],
        ["AMAZING MIGHTYYYY!!!!(remas)", 13.5],
        ["the EmpErroR(remas)", 13.9],
        ["ガラテアの螺旋(remas)", 13.7],
        ["QZKago Requiem(remas)", 13.9],
        ["Garakuta Doll Play(remas)", 13.7],
        ["Schwarzschild(remas)", 13.9],
        ["Fragrance(remas)", 13.5],
        ["ジングルベル(remas)", 13.1],
        ["Crush On You(remas)", 12.9],
        ["Sun Dance(remas)", 12.9],
        ["In Chaos(remas)", 13.7],
        ["Beat Of Mind(remas)", 13.5],
        ["Burning Hearts ～炎のANGEL～(remas)", 12.7],
        ["PANDORA PARADOXXX(remas)", 14],
        ];

    return ratingList;
}
musicBLock = document.querySelectorAll(".w_450");

var nameData = [];
var scoreData = [];
var lvData = [];
var difficult = [];
var typeData = [];
var songRt = [];
var songFinalRt = [];

var songRatingList = getRatingList();

function getsongRating(name,lv){
    for (y = 0; y < songRatingList.length; y++) {
        if(name == songRatingList[y][0]){
            // console.log(name + " " +songRatingList[i][1]);
            return songRatingList[y][1];
        }
    }
    return 0;
}
function getsongFinalRating(score,rt){
    if(score>=100.5){
        return (rt * 15.075);
    }else if (score>=100){
        return (rt * score*0.01 * 14)
    }else if(score>=99.5){
        return (rt * score*0.01 * 13)
    }else if(score>=99){
        return (rt * score*0.01 * 12)
    }else if(score>=98){
        return (rt * score*0.01 * 11)
    }
    else{
        return 0;
    }
}


console.log(getsongFinalRating(100.5,13));
// console.log(getsongRating("MAXRAGE","12+"));



for (i = 0; i < musicBLock.length; i++) {
    try {
        var rt =0;
        var n = musicBLock[i].querySelector(".music_name_block").innerText;
        var lv = musicBLock[i].querySelector(".music_lv_block").innerText;



        if (lv != "13+" && lv != "13" && lv != "12+" && lv != "14") {
            continue;
        }
        // console.log("processing " + n);
        // console.log(getsongRating(n,lv));
        try {
            s = musicBLock[i].querySelector(".music_score_block").innerText;
            var news = s.replace("%", "");
        } catch{
            news = 0
        }


        try {
            type = musicBLock[i].querySelector(".music_kind_icon").src.includes("standard") ? "ST" : "DX";
            rt = getsongRating(n,lv);
            // console.log(getsongRating(n,lv));
        } catch{
            // console.log("two type case");
            if (n==
                musicBLock[i - 1].querySelector(".music_name_block").innerText) {
                type = "ST"
                rt = getsongRating(n),lv;
            } else {
                type = "DX"
                rt = getsongRating(n+"DX",lv);
            }
            // type = "two Type"
        }
        finalRt = getsongFinalRating(news,rt);


        nameData.push(n);
        scoreData.push(Number(news));
        lvData.push(String(lv).trim());
        difficult.push("Master");
        typeData.push(type);
        songRt.push(rt);
        songFinalRt.push(finalRt);

        // console.log(songFinalrt[i]+ " " +typeData[i]+ " " + lvData[i] + " " + nameData[i] + " " + scoreData[i]);
    } catch{
        continue;
    }
}


function showData() {
    for (i = 0; i < lvData.length; i++) {
        console.log(songRt[i]+ " " + difficult[i] + " " + lvData[i] + " " + nameData[i] + " " + scoreData[i]);
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
                var rt;

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
                    rt = getsongRating(n+"(remas)",lv);
                    // console.log(RemasterMusicBLock[i].querySelector(".music_kind_icon").src + " " + n);
                } catch{
                    // if(i!= 0  && RemasterMusicBLock[i].querySelector(".music_name_block").innerText == 
                    // RemasterMusicBLock[i-1].querySelector(".music_name_block").innerText){
                    //     type = "ST"
                    // }else{
                    //     type = "DX"
                    // }
                    type = "two Type"
                    rt=0;
                }
                finalRt = getsongFinalRating(news,rt);


                nameData.push(n);
                scoreData.push(Number(news));
                lvData.push(String(lv).trim());
                difficult.push("ReMaster");
                typeData.push(type);
                songRt.push(rt);
                songFinalRt.push(finalRt);


            } catch{
                continue;
            }
        }
        setUpTable();
    }
}

getRemasterData();
// showData();
//show data in web page

function swap(input, index_A, index_B) {
    var temp = input[index_A];
 
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function shortArrat(){
    for (a = 0; a < lvData.length; a++) {
        for (b = 0; b < lvData.length-1; b++) {
            if(songFinalRt[a]<songFinalRt[b]){
                swap(lvData,a,b);
                swap(difficult,a,b);
                swap(nameData,a,b);
                swap(scoreData,a,b);
                swap(typeData,a,b);
                swap(songRt,a,b);
                swap(songFinalRt,a,b);
            }

        }
    }
}

document.open();
document.write("<body></body>");
var table = document.createElement("TABLE");
document.body.appendChild(table);
table.border = "3";

var arrayString = "["

function setUpTable() {
    shortArrat();

    for (i = 0; i < lvData.length; i++) {
        if (lvData[i] != "13+" && lvData[i] != "13" && lvData[i] != "12+" && lvData[i] != "14") {
        } else {
            var row = table.insertRow(0);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(6);

            cell1.innerHTML = lvData.length-i;
            cell2.innerHTML = difficult[i];
            cell3.innerHTML = lvData[i];
            cell4.innerHTML = nameData[i];
            cell5.innerHTML = scoreData[i];
            cell6.innerHTML = typeData[i];
            cell7.innerHTML = songRt[i];
            cell8.innerHTML = songFinalRt[i];

            if(difficult[i] == "Master"){
                cell2.style.backgroundColor="#e3c5fd";
                // #ebff00
                // #e3c5fd 
            }

            if(lvData[i] == "12+"){
                cell3.style.backgroundColor="#9bdcde";
                cell4.style.backgroundColor="#9bdcde";

                // #ebff00
                // #e3c5fd 
            }

            if(lvData[i] == "13"){
                cell3.style.backgroundColor="#ffee4b";
                cell4.style.backgroundColor="#ffee4b";

                // #ebff00
                // #e3c5fd 
            }

            if(lvData[i] == "13+"){
                cell3.style.backgroundColor="#f0666b";
                cell4.style.backgroundColor="#f0666b";

                // #ebff00
                // #e3c5fd 
            }




            arrayString += "[\"" + nameData[i] + "\",],";
        }
    }
    row = table.insertRow(0);

    cell1 = row.insertCell(0);
    cell2 = row.insertCell(1);
    cell3 = row.insertCell(2);
    cell4 = row.insertCell(3);
    cell5 = row.insertCell(4);
    cell6 = row.insertCell(5);
    cell7 = row.insertCell(6);
    cell8 = row.insertCell(6);

    cell1.innerHTML = "no.";
    cell2.innerHTML = "diff";
    cell3.innerHTML = "Lv";
    cell4.innerHTML = "Title";
    cell5.innerHTML = "Score";
    cell6.innerHTML = "Version";
    cell7.innerHTML = "innerLv";
    cell8.innerHTML = "RT";

    

    arrayString += "]";
    // console.log(arrayString)

}
// setUpTable();



// var btn = document.createElement("BUTTON");
// btn.innerHTML = "CLICK ME";                   // Insert text
document.close();



