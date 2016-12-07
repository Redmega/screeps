module.exports = {
    reaper: function(creep) {
        if (creep.ticksToLive < 150 && !creep.memory.replaced) {
            if(Memory.spawner.spawn(creep.memory.role) > 0){
              creep.memory.replaced = true;
            }
        }
    },
    rally: function(creep) {
        creep.moveTo(Game.flags['rally_' + creep.memory.role]);
    }
};
