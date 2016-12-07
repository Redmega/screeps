class Caste {
  constructor(parts){
    this.body = [];
    this.body.push(MOVE);
    this.body.concat(parts);
  }
}

class Peon extends Caste {
  constructor(parts){
    super(parts);
    this.body.push(CARRY);
  }
}

class Worker extends Peon {
  constructor(parts){
    super(parts);
    this.body.push(WORK);
  }
}

class Transport extends Peon {
    constructor(parts){
      super(parts);
      this.body.concat([CARRY,MOVE])
    }
}
