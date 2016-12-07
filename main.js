var behave = require('behavior');

module.exports.loop = function() {

    //Game.rooms.map((room) => roomConfig.configure(room));

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
    }

    //set timer for garbage collector
    if (Game.time % 10 == 0) {
        for (var name in Memory.creeps) {
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
        behave.live(creep);
    }
}
