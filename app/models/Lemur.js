export default class Lemur {
  constructor(
    name = '',
    type = '',
    color = '',
    tail = true,
    gender = '',
    height = '',
    weight = 0,
    lifeStage = '',
    birthPlace = '',
  ) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.tail = tail;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.lifeStage = lifeStage;
    this.birthPlace = birthPlace;
  }

}