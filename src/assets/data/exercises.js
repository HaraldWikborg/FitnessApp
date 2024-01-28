class Exercise {
  constructor(name, muscleGroup, PR, equipment) {
    this.name = name;
    this.muscleGroup = muscleGroup;
    this.PR = PR;
    this.equipment = equipment;
  }
  setPR(PR) {
    this.PR = PR;
  }
  getPR() {
    return this.PR;
  }
  getEquipment() {
    return this.equipment;
  }
  getMuscleGroup() {
    return this.muscleGroup;
  }
  getName() {
    return this.name;
  }
}

const exerciseList = [];

exerciseList.push(
  new Exercise("Bench Press", ["chest", "tricep"], 220, "Bench")
);
exerciseList.push(
  new Exercise(
    "Dumbell Bench Press",
    ["chest", "tricep"],
    null,
    "Dumbell Bench"
  )
);
exerciseList.push(
  new Exercise("Dumbell Flies", ["chest"], null, "Dumbell Bench")
);
exerciseList.push(
  new Exercise(
    "Incline Dumbell Bench Press",
    ["chest", "tricep", "shoulder"],
    null,
    "Incline-Bench"
  )
);
exerciseList.push(
  new Exercise(
    "Decline Dumbell Bench Press",
    ["chest", "tricep"],
    null,
    "Decline-Bench"
  )
);
exerciseList.push(
  new Exercise("Incline Dumbell Flies", ["chest"], null, "Incline-Bench")
);
exerciseList.push(
  new Exercise(
    "Incline Bench Press",
    ["chest", "tricep", "shoulder"],
    null,
    "Incline-Bench"
  )
);
exerciseList.push(
  new Exercise(
    "Decline Bench Press",
    ["chest", "tricep"],
    null,
    "Decline-Bench"
  )
);
exerciseList.push(new Exercise("Chest Flies", ["chest"], null, "FlyMachine"));
exerciseList.push(new Exercise("Pull Downs", ["tricep"], null, "Cable"));
exerciseList.push(new Exercise("Over Head Pulls", ["tricep"], null, "Cable"));
exerciseList.push(new Exercise("Bar Bell Curl", ["bicep"], null, "Barbell"));
exerciseList.push(new Exercise("Dumbell Curl", ["bicep"], null, "Dumbell"));
exerciseList.push(new Exercise("Seated Row", ["back", "bicep"], null, "Cable"));
exerciseList.push(
  new Exercise("Lat Pull Down", ["back", "bicep"], null, "Cable")
);
exerciseList.push(new Exercise("Dead Lift", ["back", "legs"], null, "Barbell"));
exerciseList.push(
  new Exercise("Shoulder Press", ["shoulder"], null, "Barbell")
);
exerciseList.push(new Exercise("Lateral Raise", ["shoulder"], null, "Dumbell"));
exerciseList.push(new Exercise("Front Raise", ["shoulder"], null, "Dumbell"));
exerciseList.push(new Exercise("Shrugs", ["trap"], null, "Barbell"));
exerciseList.push(new Exercise("Squats", ["legs"], null, "Barbell"));
exerciseList.push(new Exercise("Leg Press", ["legs"], null, "Leg-Press"));
exerciseList.push(new Exercise("Leg Curls", ["legs"], null, "Leg-Curl"));
exerciseList.push(
  new Exercise("Leg Extensions", ["legs"], null, "Leg-Extension")
);
exerciseList.push(new Exercise("Calf Raises", ["legs"], null, "Calf-Raise"));
exerciseList.push(new Exercise("Crunches", ["abs"], null, "Body-Weight"));
exerciseList.push(new Exercise("Leg Raises", ["abs"], null, "Body-Weight"));
exerciseList.push(new Exercise("Planks", ["abs"], null, "Body-Weight"));
exerciseList.push(new Exercise("Russian Twists", ["abs"], null, "Body-Weight"));
exerciseList.push(
  new Exercise("Bicycle Crunches", ["abs"], null, "Body-Weight")
);
exerciseList.push(
  new Exercise("Hanging Leg Raises", ["abs"], null, "Body-Weight")
);
exerciseList.push(new Exercise("Cable Crunches", ["abs"], null, "Cable"));

export default exerciseList;
