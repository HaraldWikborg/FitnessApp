function Exercise(name, muscleGroup, PR, equipment) {
  this.name = name;
  this.muscleGroup = muscleGroup;
  this.PR = PR;
  this.equipment = equipment;
}

const exerciseList = {
  benchPress: new Exercise(
    "Bench Press",
    ["chest", "tricep"],
    "150kg",
    "bench-press-bench"
  ),
  inclineBenchPress: new Exercise(
    "Incline Bench Press",
    ["chest", "tricep", "shoulder"],
    null,
    "incline-bench"
  ),
  dumbellPress: new Exercise(
    "Dumbell Press",
    ["chest", "tricep"],
    null,
    "flat-bench adjustable-bench"
  ),
  chestFlies: new Exercise(
    "Chest Flies",
    ["chest"],
    null,
    "flyMachine double-wire"
  ),
  pullDowns: new Exercise("Pull Downs", ["tricep"], null, "wire"),
  overHeadPulls: new Exercise("Over Head Pulls", ["tricep"], null, "wire"),
  barBellCurl: new Exercise("Bar Bell Curl", ["bicep"], null, "barbell"),
  dumbellCurl: new Exercise("Dumbell Curl", ["bicep"], null, "dumbell"),
  seatedRow: new Exercise("Seated Row", ["back", "bicep"], null, "wire"),
  latPullDown: new Exercise("Lat Pull Down", ["back", "bicep"], null, "wire"),
  shoulderPress: new Exercise("Shoulder Press", ["shoulder"], null, "barbell"),
  lateralRaise: new Exercise("Lateral Raise", ["shoulder"], null, "dumbell"),
  frontRaise: new Exercise("Front Raise", ["shoulder"], null, "dumbell"),
  shrugs: new Exercise("Shrugs", ["trap"], null, "barbell"),
  squats: new Exercise("Squats", ["legs"], null, "barbell"),
  legPress: new Exercise("Leg Press", ["legs"], null, "leg-press"),
  legCurls: new Exercise("Leg Curls", ["legs"], null, "leg-curl"),
  legExtensions: new Exercise(
    "Leg Extensions",
    ["legs"],
    null,
    "leg-extension"
  ),
  calfRaises: new Exercise("Calf Raises", ["legs"], null, "calf-raise"),
  crunches: new Exercise("Crunches", ["abs"], null, "body-weight"),
  legRaises: new Exercise("Leg Raises", ["abs"], null, "body-weight"),
  planks: new Exercise("Planks", ["abs"], null, "body-weight"),
  russianTwists: new Exercise("Russian Twists", ["abs"], null, "body-weight"),
};

export default exerciseList;
