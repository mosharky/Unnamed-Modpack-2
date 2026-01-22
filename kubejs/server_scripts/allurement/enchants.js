/** @param {$KubeDataGenerator} e  */
function enchants_Allurement(e) {
    e.json('immersiveenchanting:enchantment_costs/allurement/alleviating', {
        '1': { item: 'create:experience_nugget', amount: 64 },
    })

    e.json('immersiveenchanting:enchantment_costs/allurement/launch', {
        '1': { item: 'minecraft:soul_sand', amount: 1 },
        '2': { item: 'darkerdepths:geyser', amount: 1 },
    })

    e.json('immersiveenchanting:enchantment_costs/allurement/reeling', {
        '1': { item: 'minecraft:lead', amount: 1 },
        '2': { item: 'minecraft:chain', amount: 1 },
    })

    e.json('immersiveenchanting:enchantment_costs/allurement/reforming', {
        '1': { item: 'create:experience_block', amount: 8 },
    })

    e.json('immersiveenchanting:enchantment_costs/allurement/shockwave', {
        '1': { item: 'minecraft:tnt', amount: 1 },
        '2': { item: 'minecraft:iron_block', amount: 1 },
        '3': { item: 'oreganized:electrum_ingot', amount: 1 },
        '4': { item: 'unusualend:golem_orb', amount: 1 },
    })

    e.json('immersiveenchanting:enchantment_costs/allurement/spread_of_ailments', {
        '1': { item: 'minecraft:fermented_spider_eye', amount: 1 },
        '2': { item: 'oreganized:lead_ingot', amount: 8 },
        '3': { item: 'minecraft:dragon_breath', amount: 1 },
    })

    e.json('immersiveenchanting:enchantment_costs/allurement/vengeance', {
        '1': { item: 'create_new_age:overcharged_iron_sheet', amount: 1 },
        '2': { item: 'create_new_age:overcharged_golden_sheet', amount: 1 },
        '3': { item: 'create_new_age:overcharged_diamond', amount: 1 },
    })
}