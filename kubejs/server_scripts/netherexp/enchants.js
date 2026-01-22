/** @param {$KubeDataGenerator} e  */
function enchants_NetherExp(e) {
    e.json('immersiveenchanting:enchantment_costs/netherexp/phantasm_hull', {
        levels: {
            '1': { item: 'minecraft:phantom_membrane', amount: 4 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/netherexp/cartridge', {
        levels: {
            '1': { item: 'createarmory:shotgun_shell', amount: 1 },
            '2': { item: 'minecraft:ender_pearl', amount: 8 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/netherexp/recoil', {
        levels: {
            '1': { item: 'createarmory:shotgun_shell', amount: 1 },
            '2': { item: 'minecraft:tnt', amount: 1 },
            '3': { item: 'minecraft:piston', amount: 8 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/netherexp/barrage', {
        levels: {
            '1': { item: 'createarmory:shotgun_shell', amount: 8 },
            '2': { item: 'minecraft:gunpowder', amount: 16 },
            '2': { item: 'minecraft:tnt', amount: 4 },
            '3': { item: 'alexsmobs:mimicream', amount: 1 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/netherexp/artemis', {
        levels: {
            '1': { item: 'goety:marble', amount: 1 },
            '2': { item: 'call_of_yucutan:ancient_gold_ingot', amount: 1 },
        }
    })
}