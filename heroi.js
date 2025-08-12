class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo.toLowerCase() === "mago") {
            ataque = "magia";
        } else if (this.tipo.toLowerCase() === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo.toLowerCase() === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo.toLowerCase() === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "um ataque desconhecido";
        }

        console.log(`O ${this.tipo} ${this.nome}, ${this.idade} anos, atacou usando ${ataque}.`);
    }
}

// Criando o herói do tipo Mago
const heroi1 = new Heroi("Merlin", 150, "mago");

// Executando o ataque
heroi1.atacar();