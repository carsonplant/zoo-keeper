export default class Urial {
  constructor(
    name = '',
    color = '',
    gender = '',
    antlers = true,
    height = '',
    weight = 0,
    lifeStage = '',
    birthPlace = '',
  ) {
    this.name = name;
    this.color = color;
    this.gender = gender;
    this.antlers = antlers;
    this.height = height;
    this.weight = weight;
    this.lifeStage = lifeStage;
    this.birthPlace = birthPlace;
  }
}