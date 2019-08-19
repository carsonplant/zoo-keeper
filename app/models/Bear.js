export default class Bear {
  constructor(name, type, gender, height, weight, lifeStage, birthPlace) {
    this.name = name;
    this.type = type || "Grizzly";
    this.gender = gender;
    this.height = height;
    this.weight = weight || 0;
    this.lifeStage = lifeStage;
    this.birthPlace = birthPlace || "Right here at the zoo!";
  }

}