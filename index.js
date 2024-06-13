/* 
 *  2️⃣ Calculadora de partidas Rankeadas

    O Que deve ser utilizado

    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões
    - Funções

 *  Objetivo:

    Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
    depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

    Se vitórias for menor do que 10 = Ferro
    Se vitórias for entre 11 e 20 = Bronze
    Se vitórias for entre 21 e 50 = Prata
    Se vitórias for entre 51 e 80 = Ouro
    Se vitórias for entre 81 e 90 = Diamante
    Se vitórias for entre 91 e 100= Lendário
    Se vitórias for maior ou igual a 101 = Imortal

 *  Saída

    Ao final deve se exibir uma mensagem:
    "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"

*/

function calculateRank(wins, losses) {
	// Calcule o saldo de vitórias e derrotas
	let balance = wins - losses;

	// Determine a classificação com base no saldo
	if (balance < 10) {
		return 'Ferro';
	} else if (balance >= 10 && balance <= 20) {
		return 'Bronze';
	} else if (balance >= 21 && balance <= 50) {
		return 'Prata';
	} else if (balance >= 51 && balance <= 80) {
		return 'Ouro';
	} else if (balance >= 81 && balance <= 90) {
		return 'Diamante';
	} else if (balance >= 91 && balance <= 100) {
		return 'Lendário';
	} else {
		return 'Imortal';
	}
}

const wins = 78; // Número de vitórias
const losses = 27; // Número de perdas
const balance = wins - losses; // Calcular saldo

// Calcule a classificação com base em vitórias e derrotas
const rank = calculateRank(wins, losses);

// Produza o equilíbrio e a classificação do herói
console.log(`O Herói tem de saldo de ${balance} e está no nível de ${rank}.`);
