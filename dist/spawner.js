'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.spawn = spawn;

var _creep = require('creep.roles');

function spawn(role, spawn, memory) {
    if (!_creep.roles[role]) {
        console.log('role not found');
        return;
    }
    var _role = _creep.roles[role];

    var spawnPoint = spawn || Game.spawns['Spawn1'];
    var creepNames = Object.keys(Game.creeps).filter(function (name) {
        return name.includes(_role.name);
    });
    var name;
    var i = 0;
    do {
        name = _role.name + i++;
    } while (creepNames.includes(name));

    return spawnPoint.createCreep(_role.caste.body, name, {
        job: _role.job
    });
}
