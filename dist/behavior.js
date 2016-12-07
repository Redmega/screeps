'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reaper = reaper;
exports.rally = rally;

var _spawner = require('spawner');

var spawner = _interopRequireWildcard(_spawner);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function reaper(creep) {
  if (creep.ticksToLive < 150 && !creep.memory.replaced) {
    if (spawner.spawn(creep.memory.role) > 0) {
      creep.memory.replaced = true;
    }
  }
}

function rally(creep) {
  creep.moveTo(Game.flags['rally_' + creep.memory.role]);
}
