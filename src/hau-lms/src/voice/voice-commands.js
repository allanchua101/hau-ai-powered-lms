export function findSkill(comp, query) {
  let skills = [];

  skills.push({
    action: comp.next,
    queries: ["next", "nex", "next video", "play next", "go next"],
  });

  skills.push({
    action: comp.play,
    queries: ["play", "clay", "gray", "resume"],
  });

  skills.push({
    action: comp.pause,
    queries: [
      "pause",
      "pos",
      "course",
      "plus",
      "pulse",
      "horse",
      "force",
      "foss",
      "poss",
    ],
  });

  skills.push({
    action: comp.back,
    queries: [
      "back",
      "previous",
      "return",
      "black",
      "beck",
      "block",
      "go back",
    ],
  });

  skills.push({
    action: comp.stop,
    queries: ["stop", "stop", "stop video"],
  });

  return skills.find((skill) => {
    return skill.queries.some((q) => q === query || query.indexOf(q) > -1);
  });
}
