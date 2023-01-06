function getMeals() {
  return fetch('https://themealdb.com/api/json/v1/1/search.php?f=c')
    .then((res) => res.json())
    .then((res) => res.meals);
}

function searchMeals(query) {
  return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`)
    .then((res) => res.json())
    .then((res) => res.meals);
}

export default { getMeals, searchMeals };
