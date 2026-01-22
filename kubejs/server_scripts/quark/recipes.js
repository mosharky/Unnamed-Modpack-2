/** @param {import("dev.latvian.mods.kubejs.recipe.RecipesKubeEvent").$RecipesKubeEvent$$Original} e */
function recipes_Quark(e) {
    e.remove({id: 'quark:building/crafting/rope'})
    e.remove({id: 'quark:tweaks/crafting/utility/misc/charcoal_to_black_dye'})
    
    e.stonecutting('quark:rope', 'supplementaries:rope')
}