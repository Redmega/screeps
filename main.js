var role = require('role');
var roomConfig = require('roomConfig');

module.exports.loop = function () {

    var tower = Game.getObjectById('TOWER_ID');
    if(tower) {
        var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
            filter: (structure) => structure.hits < structure.hitsMax
        });
        if(closestDamagedStructure) {
            tower.repair(closestDamagedStructure);
        }

        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(closestHostile) {
            tower.attack(closestHostile);
        }
    }

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            role.harvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            role.upgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            role.builder.run(creep);
        }
    }
}
