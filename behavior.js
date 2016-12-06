var roles = require('role');
var spawner = require('spawner');
module.exports = {
  live: function(creep){
    if(creep.ticksToLive < 200 && !creep.memory.replaced) {
      spawner.spawn(creep.memory.role);
      creep.memory.replaced = true;
    }
    if(roles[creep.memory.role].run(creep) === 'idle'){
      this.rally(creep);
    }
  },
  rally: function(creep){
    creep.moveTo(Game.flags['rally_'+creep.memory.role]);
  }
};
