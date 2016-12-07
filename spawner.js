const roles = require('roles');

module.exports = {
    spawn: (role, spawn, memory) => {
        if (!roles[role]) {
            console.log('role not found');
            return;
        }

        let spawnPoint = spawn || Game.spawns['Spawn1'];

        let creepNames = Object.keys(Game.creeps).filter((name) => name.includes(roles[role].name));
        let name;
        let i = 0;
        do {
            name = roles[role].name + i++;
        } while (creepNames.includes(name));
        return spawnPoint.createCreep(roles[role].parts, name, {
            role: role
        });
    }
}
