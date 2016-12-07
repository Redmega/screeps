export default {
  builder: function(creep) {
      if (creep.memory.building && creep.carry.energy == 0) {
          creep.memory.building = false;
          creep.say('harvesting');
      }
      if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
          creep.memory.building = true;
          creep.say('building');
      }

      if (creep.memory.building) {
          var targets;
          targets = creep
              .room
              .find(FIND_CONSTRUCTION_SITES);
          if (targets.length) {
              if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                  creep.moveTo(targets[0]);
              }
          } else {
              targets = creep.room.find(FIND_STRUCTURES, {
                  filter: function(structure){
                      return structure.hits < structure.hitsMax;
                  }
              });
              if(targets.length){

                  //TODO: possibly refactor using _.sortBy(targets))

                  //prioritize non-walls
                  if(targets.some((struct)=>struct.structureType !== STRUCTURE_WALL)){
                      while(targets[0].structureType === STRUCTURE_WALL){
                          targets.push(targets.shift());
                      }
                  }
                  if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                      creep.moveTo(targets[0]);
                  }
              } else {
                  return 'idle';
              }
          }
      } else {
          var sources = creep
              .room
              .find(FIND_SOURCES);
          if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
              creep.moveTo(sources[0]);
          }
      }
  },
  harvester: function(creep){
    if (creep.carry.energy < creep.carryCapacity) {
        var sources = creep
            .room
            .find(FIND_SOURCES);
        if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }
    } else {
        var targets = creep
            .room
            .find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN || structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
                }
            });
        if (targets.length > 0) {
            if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(targets[0]);
            }
        } else {
            return 'idle';
        }
    }
  },
  upgrader: function(creep){
    if (creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
      creep.say('harvesting');
  }
  if (!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
      creep.say('upgrading');
  }
  if (creep.memory.upgrading) {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(creep.room.controller);
      }
  } else {
      var sources = creep
          .room
          .find(FIND_SOURCES);
      if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
          creep.moveTo(sources[0]);
      }
  }
  },
  scavenger: function(creep){

  }
}
