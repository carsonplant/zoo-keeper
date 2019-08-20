export default class Rhino {
  constructor(
    name = '',
    type = '',
    horns = 0,
    color = '',
    gender = '',
    height = '',
    weight = 0,
    lifeStage = '',
    birthPlace = '',
  ) {
    this.name = name;
    this.type = type;
    this.horns = horns;
    this.color = color;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.lifeStage = lifeStage;
    this.birthPlace = birthPlace;
  }
}