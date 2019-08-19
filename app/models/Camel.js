export default class Camel {
  constructor(name, humps, gender, height, weight, lifeStage, birthPlace) {
    this.name = name;
    this.humps = humps || 0;
    this.gender = gender;
    this.height = height || 0;
    this.weight = weight || 0;
    this.lifeStage = lifeStage;
    this.birthPlace = birthPlace || "Right here at the zoo!"
  }
}