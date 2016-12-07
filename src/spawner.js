import { roles } from "creep.roles";

export function spawn(desig, spawn, memory){
    if (!roles[desig]) {
        console.log('role not found');
        return;
    }
    var _role = roles[desig];

    var spawnPoint = spawn || Game.spawns['Spawn1'];
    var creepNames = Object.keys(Game.creeps).filter((name) => name.includes(_role.name));
    var name;
    var i = 0;
    do {
        name = _role.name + i++;
    } while (creepNames.includes(name));

    return spawnPoint.createCreep(_role.caste.body, name, {
        job: _role.job
    });
}
