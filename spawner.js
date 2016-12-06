const roles = require('role');

module.exports = {
  spawn: function(role,memory){
    if(!roles[role]){
      console.log('role not found');
      return;
    }

    let spawnPoint = Game.spawns['Spawn1'];

    let creepNames = Object.keys(Game.creeps).filter((name)=>name.includes(roles[role].name));
    let name; let i=0;
    do {
      name = roles[role].name + i++;
    } while(creepNames.includes(name));
    console.log('creating creep with name ' + name + ' and parts ' + roles[role].parts)
    spawnPoint.createCreep(roles[role].parts,name, {role: role});
  }
}
