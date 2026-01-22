/** @param {$KubeDataGenerator} e  */
function enchants_Create(e) {
    e.json('immersiveenchanting:enchantment_costs/create/potato_recovery', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 1 },
            '2': { item: 'minecraft:diamond', amount: 4 },
            '3': { item: 'minecraft:diamond', amount: 8 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/create/capacity', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 1 },
            '2': { item: 'minecraft:diamond', amount: 4 },
            '3': { item: 'minecraft:diamond', amount: 8 },
        }
    })
}