const API_URL = "https://dummyjson.com";

class RecipesService {
  async getRecipes() {
    return await fetch(API_URL + "/recipes")
      .then(res => res.json())
      .then(data => data.recipes);
  }
}

export default new RecipesService();
