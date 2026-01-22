/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function enchants_CallOfYucutan(e) {
    e.json('immersiveenchanting:enchantment_costs/call_of_yucutan/toxic_blade', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/call_of_yucutan/double_edged', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/call_of_yucutan/ritual_slaught', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 8 },
            '2': { item: 'minecraft:diamond', amount: 16 },
            '3': { item: 'minecraft:diamond', amount: 32 },
        }
    })
}