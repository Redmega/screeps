module.exports = {
    name: 'builder',
    parts: [MOVE, CARRY, WORK, WORK],
    /** @param {Creep} creep **/
    run: function(creep) {

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
    }
}
