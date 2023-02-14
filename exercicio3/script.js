let nacionalidade = prompt(`Digite aqui sua nacionalidade`).toLowerCase()

// - brasileira;
// - argentina;
// - uruguaia;
// - chilena;
// - colombiana;

if (nacionalidade === `brasileira`) {
    console.log(`Você é do Brasil`)
} else if (nacionalidade === `argentina`) {
    console.log(`Você é da Argentina`)
} else if (nacionalidade === `chilena`) { 
    console.log(`Você é do Chile`)
} else if (nacionalidade === `uruguaia`) {
    console.log (`Você é do Uruguai`)
} else if (nacionalidade === `colombiana`) {
    console.log (`Você é da Colombia`)
} else {
    console.log (`Nacionalidade não encontrada`)
}