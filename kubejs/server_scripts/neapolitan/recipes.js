/** @param {$RecipesKubeEvent} e */
function recipes_Neapolitan(e) {
    e.remove({id: 'collectorsreap:food/chocolate_arils'})

    e.replaceInput({}, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')

    // manually replacing 
    e.recipes.create.filling('neapolitan:chocolate_strawberries',
        ['neapolitan:strawberries', Fluid.of('create:chocolate', 250)]
    ).id('neapolitan:mixed/chocolate_strawberries')

    e.recipes.create.filling('neapolitan:vanilla_chocolate_fingers',
        ['neapolitan:dried_vanilla_pods', Fluid.of('create:chocolate', 250)]
    ).id('neapolitan:mixed/vanilla_chocolate_fingers')

    e.recipes.create.filling('neapolitan:chocolate_spider_eye',
        ['minecraft:spider_eye', Fluid.of('create:chocolate', 50)]
    ).id('neapolitan:chocolate/chocolate_spider_eye')

    // e.recipes.farmersdelight.cooking(
    //     ['create:bar_of_chocolate', 'minecraft:sugar', 'minecraft:honey_bottle', 'minecraft:kelp'],
    //     'collectorsreap:chocolate_gummy', 1.0, 200
    // ).id('collectorsreap:gummy/chocolate')

    /*
    e.custom({
        type: 'farmersrespite:brewing',
        base: { count: 1000, fluid: 'minecraft:milk' },
        cookingtime: 2400,
        experience: 0.35,
        ingredients: [
            { item: 'create:bar_of_chocolate' },
            { item: 'farmersrespite:coffee_beans' }
        ],
        result: { count: 1000, fluid: 'respiteful:mocha_coffee' }
    }).id('respiteful:brewing/mocha_coffee')
    */
}