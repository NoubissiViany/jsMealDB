const state = {
  meals: [],
};

function getMeals() {
  return state.meals;
}

function setMeals(meals) {
  state.meals = meals;
}

export default {
  getMeals,
  setMeals,
};
