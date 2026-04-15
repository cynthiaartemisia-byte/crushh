function checkReality() {
    let msg = document.getElementById("msg").value;
    let result = document.getElementById("result");

    if (msg.trim() === "") {
        result.innerText = "tulis dulu pesannya 😭";
        return;
    }

    let responses = [

        "ayo lanjut ngebadutnya 🤡",
        "wkwkwk crushnya gak suka balik ya 😭",
        "kamu mikirin dia, dia mikirin crushnya 😶",
        "tenang, dia gak kepikiran kamu sama sekali 😶",
        "kamu overthinking, dia biasa aja",
        "dia mungkin lagi chat orang lain sekarang 💔",
        "kamu berharap, dia... enggak 🫠",
        "cieeee berharap sendirian ya",
        "kamu nunggu dia, dia nunggu orang lain 💔"
        
    ];

    let random = responses[Math.floor(Math.random() * responses.length)];

    result.innerText = random;
}
