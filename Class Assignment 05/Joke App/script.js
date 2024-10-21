const jokeButton = document.getElementById('jokeButton');
const jokeDiv = document.getElementById('joke');

const jokes = [
    "Teacher: Baccho, jo kaam tum nahi kar sakte wo main karunga. 😅\nStudent: Sir, hume wo kaam bhi nahi aata. 🤷‍♂️",
    "Husband: Tum ghar mein kaun-kaun se kaam karti ho? 🤔\nWife: Sab kaam karti hoon. 💪\nHusband: Theek hai, ek din tum sab kaam chhod do, phir dekho kya hoga. 🤭",
    "Baccha: Mummy, school mein ek ladka hai jo bahut badmaash hai. 😡\nMummy: Toh tum usse door raho. 🙅‍♀️\nBaccha: Nahin mummy, main toh uske saath khelne jaunga. 🧒🎈",
    "Husband: Tum roz kyun roti ho? 😢\nWife: Kyunki tum mujhse pyaar nahi karte. 💔\nHusband: Main tumse pyaar karta hoon. 😍\nWife: Ye toh tum har baar kehte ho. 😏",
    "Pappu: Yaar, mera naam kyun Pappu hai? 🤔\nGappu: Kyunki tum Pappu ho. 😄\nPappu: Nahin yaar, main apni maa ke naam par naam rakhunga. 🙄",
    "Teacher: Agar ek train 100 km/h ki speed se ja rahi hai, toh 2 ghante baad kya hoga? 🚂💨\nStudent: Train aur tez bhaag jayegi sir! 😂",
    "Babu: Mere paas ek aisa chashma hai jo sab kuch dikhata hai. 👓\nMittu: Kya dikhata hai? 🤨\nBabu: Teri wajah se meri wife ab mujhe chhod ke ja rahi hai! 😱",
    "Friend: Yaar, meri biwi mujhe samajhti nahi. 😩\nPehla dost: Kaisa samajhti nahi? 🤷\nFriend: Usse kaha ki mujhe alag ghar chahiye, woh ghar nahi samajh rahi! 🏠",
    "Bachche: Mummy, aaj school mein ek teacher aaye the jo bade gusse mein the. 😡\nMummy: Phir tumne kya kiya? 🤔\nBachche: Maine bola, ‘Sir, aapko kaisa lag raha hai?’ 😅",
    "Pappu: Mere paas ek aisi kitaab hai, jo khud hi gungunati hai. 📚🎶\nGappu: Kya sach hai? 😮\nPappu: Haan, jab bhi koi kholta hai, wo ‘Awwww’ kehti hai! 😍",
    "Patni: Tumhe yaad hai, jab hum pehli baar mile the, tumne mujhe ek chocolate gift ki thi? 🍫\nPati: Haan, us chocolate ka kya hua? 🤔\nPatni: Kya hua? Aaj bhi woh khushboo hai! 😊",
    "Babu: Tumhare ghar mein to light jaati hai na? 💡\nMittu: Haan, kabhi kabhi jaati hai. 🤷\nBabu: Aur tum kya karte ho? 🤔\nMittu: Chhat pe chala jaata hoon, wahaan light kabhi nahi jaati! 😆",
    "Teacher: Agar tumhare paas 10 aam hain, aur 2 tumhare dost hain, toh har ek ko kitne aam milenge? 🍑\nStudent: Sir, 10 aam akele mere hain! 😂",
    "Husband: Agar main jaan se mar jaun, toh tum kya karogi? 😱\nWife: Tumhe apne dost se milne bhej dungi! 😂",
    "Baccha: Mummy, aaj khana nahi milega kya? 🍽️\nMummy: Kyun nahi milega? 🤔\nBaccha: Kyunki aaj to ‘fast’ hai na! 🙈",
];

function fetchJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDiv.textContent = jokes[randomIndex];
}

jokeButton.addEventListener('click', fetchJoke);
