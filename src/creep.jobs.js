import * as Do from "creep.do"

export class Job {
  constructor(role){
    this.title = role;
  }
}

module.exports = {
  builder: new Job('builder'),
  harvester: new Job('harvester'),
  upgrader: new Job('upgrader'),
  scavenger: new Job('scavenger')
}
