/** @param {$KubeDataGenerator} e  */
function enchants_ImmersiveEnchanting(e) {
    e.json('immersiveenchanting:enchantment_costs/lapis_cost', { item: 'minecraft:lapis_lazuli', amount: 3 })

    e.json('immersiveenchanting:enchantment_costs/minecraft/aqua_affinity', {
        levels: {
            '1': { item: 'minecraft:axolotl_bucket', amount: 1 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/efficiency', {
        levels: {
            '1': { item: 'minecraft:cake', amount: 1 },
            '2': { item: 'minecraft:gunpowder', amount: 16 },
            '3': { item: 'minersdelight:copper_carrot', amount: 8 },
            '4': { item: 'minecraft:rabbit_foot', amount: 1 },
            '5': { item: 'minecraft:end_stone', amount: 16 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/fire_aspect', {
        levels: {
            '1': { item: 'minecraft:magma_cream', amount: 8 },
            '2': { item: 'embers:ember_crystal', amount: 1 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/flame', {
        levels: {
            '1': { item: 'embers:ember_shard', amount: 8 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/fortune', {
        levels: {
            '1': { item: 'numismaticoverhaul:gold_coin', amount: 1 },
            '2': { item: 'minecraft:gold_ingot', amount: 32 },
            '3': { item: 'minecraft:diamond', amount: 32 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/looting', {
        levels: {
            '1': { item: 'numismaticoverhaul:gold_coin', amount: 1 },
            '2': { item: 'minecraft:gold_ingot', amount: 32 },
            '3': { item: 'minecraft:diamond', amount: 32 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/protection', {
        levels: {
            '1': { item: 'minecraft:nautilus_shell', amount: 2 },
            '2': { item: 'minecraft:scute', amount: 4 },
            '3': { item: 'minecraft:phantom_membrane', amount: 2 },
            '4': { item: 'minecraft:shulker_shell', amount: 2 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/respiration', {
        levels: {
            '1': { item: 'minecraft:nautilus_shell', amount: 2 },
            '2': { item: 'minecraft:prismarine_crystals', amount: 4 },
            '3': { item: 'minecraft:frogspawn', amount: 1 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/sharpness', {
        levels: {
            '1': { item: 'minecraft:cactus', amount: 1 },
            '2': { item: 'minecraft:amethyst_shard', amount: 1 },
            '3': { item: 'minecraft:quartz', amount: 64 },
            '4': { item: 'minecraft:echo_shard', amount: 1 },
            '5': { item: 'alexsmobs:cachalot_whale_tooth', amount: 4 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/silk_touch', {
        levels: {
            '1': { item: 'minecraft:netherite_scrap', amount: 1 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/smite', {
        levels: {
            '1': { item: 'galosphere:silver_ingot', amount: 1 },
            '2': { item: 'minecraft:lightning_rod', amount: 1 },
            '3': { item: 'minecraft:glistering_melon_slice', amount: 1 },
            '4': { item: 'minecraft:ghast_tear', amount: 1 },
            '5': { item: 'galosphere:silver_ingot', amount: 32 },
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/sweeping', {
        levels: {
            '1': { item: 'minecraft:bamboo', amount: 1 },
            '2': { item: 'minecraft:prismarine_crystal', amount: 1 },
            '3': { item: 'minecraft:lightning_rod', amount: 1 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/thorns', {
        levels: {
            '1': { item: 'alexsmobs:spiked_scute', amount: 4 },
            '2': { item: 'minecraft:cactus', amount: 64 },
            '3': { item: 'minecraft:sweet_berries', amount: 64 }
        }
    })

    e.json('immersiveenchanting:enchantment_costs/minecraft/unbreaking', {
        levels: {
            '1': { item: 'minecraft:iron_block', amount: 8 },
            '2': { item: 'create:brass_block', amount: 8 },
            '3': { item: 'minecraft:obsidian', amount: 12 }
        }
    })
}