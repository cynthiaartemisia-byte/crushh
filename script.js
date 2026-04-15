function checkReality() {
    let msg = document.getElementById("msg").value;
    let result = document.getElementById("result");

    if (msg.trim() === "") {
        result.innerText = "tulis dulu pesannya 😭";
        return;
    }

    let responses = [

        "ngapain tulis pesan, kayak dibaca aja 🥲",
        "ayo lanjut ngebadutnya 🤡",
        "wkwkwk crushnya gak suka balik ya 😭",
        "tunggu... kayaknya dia suka kamu—eh gak deng 😭",
        "kamu mikirin dia, dia mikirin crushnya 😶",
        "dia lagi sibuk sama hidupnya sendiri 🙂",
        "kamu overthinking, dia biasa aja",
        "dia mungkin lagi chat orang lain sekarang 💔",
        "kamu berharap, dia... enggak 🫠",
        "cieeee berharap sendirian ya",
        "dia juga mikirin kamu (dalam mimpi)"
        
    ];

    let random = responses[Math.floor(Math.random() * responses.length)];

    result.innerText = random;
}