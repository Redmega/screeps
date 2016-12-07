export class Caste {
  constructor(parts){
    this.body = [];
    this.body.push(MOVE);
    this.body.concat(parts);
  }
}

export class Peon extends Caste {
  constructor(parts){
    super(parts);
    this.body.push(CARRY);
  }
}

export class Worker extends Peon {
  constructor(parts){
    super(parts);
    this.body.push(WORK);
  }
}

export class Transport extends Peon {
    constructor(parts){
      super(parts);
      this.body.concat([CARRY,MOVE])
    }
}
