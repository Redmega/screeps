var castes = require('creep.castes');
var jobs = require('creep.jobs');

module.exports = {
    builder: {
      name: 'builder',
      caste: new Worker(),
      job: jobs.builder
    },
    harvester: {
      name: 'harvester',
      caste: new Worker(),
      job: jobs.harvester
    },
    upgrader: {
      name: 'upgrader',
      caste: new Worker([MOVE]),
      job: jobs.upgrader
    },
    scavenger: {
      name: 'scavenger',
      caste: new Transport(),
      job: jobs.scavenger
    }
}
