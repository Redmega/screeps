var roles = require('roles');
var spawner = require('spawner');
module.exports = {
    live: function(creep) {
        if (creep.ticksToLive < 100 && !creep.memory.replaced) {
            if(spawner.spawn(creep.memory.role) > 0){
              creep.memory.replaced = true;
            }
        }
        if (roles[creep.memory.role].run(creep) === 'idle') {
            this.rally(creep);
        }
    },
    rally: function(creep) {
        creep.moveTo(Game.flags['rally_' + creep.memory.role]);
    }
};
