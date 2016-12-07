const roles = require('creep.roles');

module.exports = {
    spawn: (role, spawn, memory) => {
        if (!roles[role]) {
            console.log('role not found');
            return;
        }
        var _role = roles[role];

        var spawnPoint = spawn || Game.spawns['Spawn1'];
        var creepNames = Object.keys(Game.creeps).filter((name) => name.includes(_role.name));
        let name;
        let i = 0;
        do {
            name = _role.name + i++;
        } while (creepNames.includes(name));

        return spawnPoint.createCreep(_role.caste.body, name, {
            job: _role.job
        });
    }
}
