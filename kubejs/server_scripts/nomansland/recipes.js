/** @param {$RecipesKubeEvent} e  */
function recipes_NoMansLand(e) {
    e.replaceInput({}, 'nomansland:walnuts', 'bountifulfares:walnut')

    // theres an error on this recipe bruh and i cant use kubejs create
    e.custom({
        type: 'farmersdelight:cooking',
        recipe_book_tab: 'misc',
        experience: 1,
        ingredients: [
            { tag: 'c:foods/dough' },
            { tag: 'c:crops/cabbage' },
            { tag: 'c:crops/onion' },
            {
                type: 'neoforge:compound',
                children: [
                    { tag: 'c:foods/raw_chicken' },
                    { tag: 'c:foods/raw_pork' },
                    { tag: 'c:foods/raw_beef' },
                    { tag: 'nomansland:edible_mushrooms' }
                ]
            }
        ],
        result: {
            count: 2,
            id: 'farmersdelight:dumplings'
        }
    }).id('farmersdelight:cooking/dumplings')
}
