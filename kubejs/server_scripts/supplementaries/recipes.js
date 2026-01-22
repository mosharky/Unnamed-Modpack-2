/** @param {$RecipesKubeEvent} e */
function recipes_Supplementaries(e) {
    e.remove('supplementaries:rope')

    e.stonecutting('supplementaries:rope', '#supplementaries:ropes')
}