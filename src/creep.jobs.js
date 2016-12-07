import * as Do from "creep.do"

export class Job {
  constructor(role){
    this.title = role;
  }
  static run(creep){
    if(this.isOld(creep) && !creep.memory.dying){
       creep.memory.dying = true;
    }
    Do.live(creep);
  }

  isOld(creep){
    return creep.ticksToLive < 200;
  }
}

export var jobs = {
  builder: new Job('builder'),
  harvester: new Job('harvester'),
  upgrader: new Job('upgrader'),
  scavenger: new Job('scavenger')
}
