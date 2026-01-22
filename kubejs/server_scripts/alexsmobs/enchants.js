/** @param {$KubeDataGenerator} e  */
function enchants_AlexsMobs(e) {
    e.json('immersiveenchanting:enchantment_costs/alexsmobs/straddle_jump', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/alexsmobs/lavawax', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/alexsmobs/serpentfriend', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/alexsmobs/board_return', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
        }
    })
}