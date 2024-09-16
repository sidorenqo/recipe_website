const API_URL = 'https://dummyjson.com';

class RecipesService {
  async getOneRecipe(recipeId) {
    // return await fetch(API_URL + `/recipes?limit=0`, {})
    //   .then(res => res.json())
    //   .then(data => data.recipes);
  }
  async getAllRecipes() {
    return await fetch(API_URL + `/recipes?limit=0`, {})
      .then(res => res.json())
      .then(data => data.recipes);
  }
  async getRecipesLimited(limit = 30, skip = 0) {
    return await fetch(API_URL + `/recipes?limit=${limit}&skip=${skip}`)
      .then(res => res.json())
      .then(data => data.recipes);
  }
}

export default new RecipesService();
