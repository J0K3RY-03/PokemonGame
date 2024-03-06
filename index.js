class Pokemon{
    constructor(name, emoji, health, attacks) {
        this.name = name;
        this.emoji = emoji;
        this.health = health;
        this.attacks = attacks;
        this.maximumHealth = this.health;
    }

    randomAttack(){
        const randomAttack = Math.floor(Math.random() * this.attacks.length);
        return this.attacks[randomAttack];
    }

    logAttacks(){
        this.attacks.forEach((elem) => elem.logAttack())
    }

    logPokemon(){
        console.log(
            `Pokemon: ${this.name} ${this.emoji}
            Health: ${this.health}
            Attacks: `)
            this.logAttacks()
    }

    getHealth(){
        let health = '';
        let copyHealth = this.health;

        for (let i = 0; i < 10; i++) {
            health += copyHealth > 0 ? '🟩' : '🟥';
            copyHealth -= this.maximumHealth / 10;
        }

        return health;
    }
}

class Attack{
    constructor(name, power, stability) {
        this.name = name;
        this.power = power;
        this.stability = stability;
    }

    performAttack(){
        const damage = Math.floor(Math.random() * this.power) * this.stability;
        return console.log(this.power - damage);
    }

    logAttack(){
        console.log(`${this.name} - Power ⚡️: ${this.power} - Stability: ${this.stability}`);
    }
}

class Game{

}

const pikachu = new Pokemon('Pikachu', '⚡️', 100, [
    new Attack('Thunderbolt', 30, 0.2),
    new Attack('Electro Ball', 20, 0.4),
    new Attack('Quick Attack', 10, 0.8),
]);

const bulbasaur = new Pokemon('Bulbasaur', '🍃', 110, [
    new Attack('Vine Whip', 25, 0.3),
    new Attack('Seed Bomb', 20, 0.5),
    new Attack('Tackle', 10, 0.8),
]);

const charmander = new Pokemon('Charmander', '🔥', 90, [
    new Attack('Flamethrower', 35, 0.2),
    new Attack('Ember', 25, 0.3),
    new Attack('Scratch', 15, 0.75),
]);
