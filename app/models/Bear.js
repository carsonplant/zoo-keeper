export default class Bear {
  constructor(name, type, color, gender, height, weight, lifeStage, birthPlace) {
    this.name = name;
    this.type = type || "Grizzly";
    this.color = color || "Brown";
    this.gender = gender;
    this.height = height;
    this.weight = weight || 0;
    this.lifeStage = lifeStage;
    this.birthPlace = birthPlace || "Right here at the zoo!";
  }

}