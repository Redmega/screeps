export function rally(creep) {
  creep.moveTo(Game.flags['rally_' + creep.memory.role]);
}
