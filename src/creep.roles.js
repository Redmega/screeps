import {Worker, Transport} from "creep.castes";

export var roles = {
    builder: {
      name: 'builder',
      caste: new Worker(),
    },
    harvester: {
      name: 'harvester',
      caste: new Worker()
    },
    upgrader: {
      name: 'upgrader',
      caste: new Worker([MOVE])
    },
    scavenger: {
      name: 'scavenger',
      caste: new Transport()
    }
};
