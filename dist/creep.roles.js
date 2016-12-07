"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roles = undefined;

var _creep = require("creep.castes");

var _creep2 = require("creep.jobs");

var _creep3 = _interopRequireDefault(_creep2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var roles = exports.roles = {
  builder: {
    name: 'builder',
    caste: new _creep.Worker(),
    job: _creep3.default.builder
  },
  harvester: {
    name: 'harvester',
    caste: new _creep.Worker(),
    job: _creep3.default.harvester
  },
  upgrader: {
    name: 'upgrader',
    caste: new _creep.Worker([MOVE]),
    job: _creep3.default.upgrader
  },
  scavenger: {
    name: 'scavenger',
    caste: new _creep.Transport(),
    job: _creep3.default.scavenger
  }
};
