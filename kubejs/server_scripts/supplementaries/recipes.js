/** @param {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent$$Original} e */
function recipes_Supplementaries(e) {
    e.remove('supplementaries:rope')

    e.stonecutting('supplementaries:rope', '#supplementaries:ropes')
}