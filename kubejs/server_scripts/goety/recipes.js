/**@param {$RecipesKubeEvent} e  */
function recipes_Goety(e) {
    e.replaceInput({}, 'goety:jade_tiles', 'call_of_yucutan:jade_tiles')

    e.custom({
        type: 'goety:pulverize',
        ingredient: [{ item: 'minecraft:ice' }],
        item_result: {
            item: 'neapolitan:ice_cubes',
            count: 6
        }
    }).id('goety:pulverize/ice_cube_pulverize')

    e.custom({
        type: 'goety:pulverize',
        ingredient: [{ item: 'minecraft:packed_ice' }],
        item_result: {
            item: 'neapolitan:ice_cubes',
            count: 54
        }
    }).id('goety:pulverize/ice_cube2_pulverize')
}