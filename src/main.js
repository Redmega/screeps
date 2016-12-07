import * as Spawner from 'spawner';
import {Job} from 'creep.jobs';

module.exports.loop = function() {

  //Do the initial room config
  //Game.rooms.map((room) => roomConfig.configure(room));

/* TODO: verify tower logic
    var tower = Game.getObjectById('TOWER_ID');
    if (tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if (closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if (closestHostile) {
            tower.attack(closestHostile);
        }
    } */

    //set timer for garbage collector
    if (Game.time % 10 == 0) {
        for (var name in Memory.creeps) {
          let creep = Game.creeps[name];
          //TODO: add to spawn queue
          if(creep.memory.dying){
            Spawner.spawn(creep.memory.job.title)
          }
            if (!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing dead creep memory:', name);
            }
        }
    }

    //tell the creeps to do creep stuff
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        //run creep behavior
        Job.run(creep);
    }
}
