
const cartas = document.querySelectorAll(".letter-card");

const letterModal = document.getElementById("letterModal");
const closeLetter = document.getElementById("closeLetter");
const letterTitle = document.getElementById("letterTitle");
const letterText = document.getElementById("letterText");

const declaracao = `Minha princesinha Laís,

Às vezes eu fico pensando em como uma pessoa pode chegar na nossa vida e, em tão pouco tempo, se tornar tão importante. Você chegou e, sem perceber, foi conquistando um espaço enorme dentro de mim.

Eu amo seu jeitinho, suas manias, suas brincadeiras, seu carinho e até nossos ciúmes bobos. Amo poder conversar com você, sentir sua falta quando estamos longe e ficar feliz só de saber que tenho você na minha vida.

Quero que você saiba que não é apenas nos momentos bonitos que eu quero estar ao seu lado. Quero estar com você nos dias difíceis também, segurar sua mão quando tudo parecer complicado, fazer você sorrir quando estiver triste e lembrar sempre o quanto é especial para mim.

Eu lembro de quando fui de bicicleta até sua casa, de madrugada, só para te ver. Eram 16 quilômetros, mas, quando o assunto é você, a distância nunca parece tão grande. E eu faria tudo de novo, quantas vezes fosse preciso.

Minha pequena, eu não sei exatamente o que o futuro nos reserva, mas sei o que desejo: quero continuar construindo nossa história, realizar nossos sonhos, casar com você, formar nossa família e ter milhares de motivos para agradecer por ter você comigo.

Não quero que você duvide do quanto é amada. Quero ser seu carinho, seu abraço apertado, seu companheiro e aquele menino que continua apaixonado por você até nas coisas mais simples.

Eu te amo muito, minha bebê. Muito mais do que consigo colocar em palavras.`;
const especial = `Minha pequena Laís,

Eu queria que você pudesse se enxergar pelos meus olhos por apenas alguns segundos. Talvez assim entendesse o quanto é especial e o quanto significa para mim.

Você tem um jeito único de deixar meus dias melhores. Às vezes, uma simples mensagem sua já consegue mudar completamente meu humor. Seu sorriso, sua voz, suas brincadeiras e até suas pequenas manias são coisas que fazem você ser tão única para mim.

Eu gosto de ter você por perto, de saber como foi seu dia, de ouvir suas histórias e de compartilhar até as coisas mais bobas com você. Porque, quando é com você, até os momentos mais simples se tornam especiais.

Quero que você nunca se esqueça de que merece ser amada, respeitada, cuidada e valorizada. Nunca pense que precisa ser perfeita para merecer meu carinho. Eu gosto de você exatamente como é, com suas qualidades, seus defeitinhos e esse jeitinho que me encanta.

Se algum dia você duvidar do seu valor, lembre-se de que existe um menino que olha para você e encontra milhares de motivos para sorrir.

Você é minha pequena, minha bebê, minha princesinha e uma das partes mais bonitas da minha vida.

Nunca se esqueça do quanto você é especial para mim.`;
const pequena = `Minha bebê, minha princesinha Laís,

Vem cá, deixa eu te encher de carinho um pouquinho? Se eu pudesse, agora mesmo estaria pertinho de você, te abraçando bem forte, enchendo seu rostinho de beijinhos e dizendo baixinho o quanto eu amo você.

Eu sou completamente apaixonado pelo seu jeitinho. Gosto de te chamar pelos meus apelidos carinhosos, gosto de fazer graça só para arrancar um sorriso seu e gosto até de ficar com aquela saudade boba quando a gente acaba de se despedir.

Às vezes, tudo o que eu mais queria era poder te abraçar a qualquer momento. Queria estar aí para cuidar de você, fazer companhia, segurar sua mão e ficar juntinho, mesmo sem fazer absolutamente nada.

E olha, minha pequena, se eu pudesse escolher um lugar para ficar, escolheria seus braços. Porque é com você que eu quero dividir meus momentos, minhas alegrias, meus planos e até meus dias mais difíceis.

Prometo continuar te dando carinho, fazendo minhas brincadeiras, tendo meus ciúmes bobos e encontrando motivos para lembrar você todos os dias de que é muito amada.

Nunca se esqueça: você tem um menino que é completamente bobinho por você, que sente saudade, que quer seu abraço e que sonha com o dia em que poderá te chamar de esposa.

Eu te amo, minha pequena. Agora vem cá e me dá aquele abraço que está faltando! ❤️

Mil beijinhos da pessoa que mais ama você,

Seu menino. 💙🐰`;
cartas.forEach((carta, indice) => {
    carta.addEventListener("click", () => {

        if (indice === 0) {
            letterTitle.textContent = "Uma declaração para minha princesinha ❤️";
            letterText.textContent = declaracao;
                } else if (indice === 1) {
            letterTitle.textContent = "O quanto você é especial 💙";
            letterText.textContent = especial;
                } else {
            letterTitle.textContent = "Para minha pequena 🐰❤️";
            letterText.textContent = pequena;
        }

        letterModal.classList.add("active");
    });
});

closeLetter.addEventListener("click", () => {
    letterModal.classList.remove("active");
});

letterModal.addEventListener("click", (evento) => {
    if (evento.target === letterModal) {
        letterModal.classList.remove("active");
    }
});