/** @param {$KubeDataGenerator} e  */
function enchants_UnusualEnd(e) {
    e.json('immersiveenchanting:enchantment_costs/unusualend/everlasting', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 1 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/unusualend/boloks_fury', {
        levels: {
            '1': { item: 'minecraft:quartz', amount: 64 },
            '2': { item: 'minecraft:echo_shard', amount: 1 },
            '3': { item: 'alexsmobs:cachalot_whale_tooth', amount: 4 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/unusualend/boloks_wings', {
        levels: {
            '1': { item: 'alexsmobs:spiked_scute', amount: 1 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/unusualend/boloks_head', {
        levels: {
            '1': { item: 'minecraft:turtle_shell', amount: 1 },
            '2': { item: 'alexsmobs:spiked_turtle_shell', amount: 1 },
            '3': { item: 'minecraft:netherite_ingot', amount: 1 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/unusualend/joust', {
        levels: {
            '1': { item: 'minecraft:blaze_powder', amount: 4 },
            '2': { item: 'alexsmobs:roadrunner_feather', amount: 1 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/unusualend/arcane_recovery', {
        levels: {
            '1': { item: 'minecraft:diamond', amount: 4 },
            '2': { item: 'minecraft:diamond', amount: 8 },
            '3': { item: 'minecraft:diamond', amount: 16 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/unusualend/bonding', {
        levels: {
            '1': { item: 'alexsmobs:bloodsac', amount: 1 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/unusualend/benevolence', {
        levels: {
            '1': { item: 'minecraft:ghast_tear', amount: 1 },
        }
    })
}