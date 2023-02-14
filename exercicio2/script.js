let idade = prompt(`Qual sua idade?`);
let terminouEnsinoMedio = prompt(`Terminou o ensino medio? S pra sim, N para não.`).toUpperCase();
let cursandoFaculdade = prompt(`Não está cursando a faculdade? N para Não, S para sim`).toUpperCase();

// - Se a pessoa tem 18 anos ou mais;
// - Se a pessoa terminou o ensino médio;
// - Se a pessoa NÃO está cursando alguma faculdade;

if (idade >= 18) {
    console.log(`Maior de idade`)
} else {
    console.log(`Menor de idade`)
}

if (terminouEnsinoMedio === `S`) {
    terminouEnsinoMedio = true
    console.log(`Terminou o Ensino Médio`)
} else {
    terminouEnsinoMedio = false
    console.log(`Não termininou o Ensino Médio`)
}


if (cursandoFaculdade === `N`) {
    cursandoFaculdade = false
    console.log(`Não está cursando faculdade`)
} else {
    cursandoFaculdade = true
    console.log(`Está cursando a faculdade`)
}