class Alligator {
    constructor(
        name = '',
        color = '',
        gender = '',
        weight = 0,
        tailLengthInch = 0,
        teethSize = '',
        lifeStage = '',
        birthPlace = 'Right here at the Zoo',
    ) {
        this.id = 0,
            this.name = name;
        this.color = color;
        this.gender = gender;
        this.weight = weight;
        this.tailLengthInch = tailLengthInch;
        this.teethSize = teethSize;
        this.lifeStage = lifeStage;
        this.birthPlace = birthPlace;
    }
    eat(food) {
        console.log(`Chomp chomp all the ${food}ies.`)
    }
}

export default Alligator;
