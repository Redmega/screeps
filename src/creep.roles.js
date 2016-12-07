import {Worker, Transport} from "creep.castes";
import jobs from "creep.jobs";

export var roles = {
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
};
