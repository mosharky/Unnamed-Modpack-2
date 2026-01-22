function recipes_Aetherworks(e) {
    // Removing Embers' raw ores as inputs
    e.custom({
        type: 'aetherworks:aetherium_anvil',
        difficulty: 1,
        emberPerHit: 10,
        input: { item: 'aetherworks:geode_cold' },
        numberOfHits: 1,
        result: [
            { chance: 10, count: 1, item: 'minecraft:raw_gold' },
            { chance: 10, count: 1, item: 'galosphere:raw_silver' },
            { chance: 10, count: 1, item: 'minecraft:ice' },
            { chance: 10, count: 1, item: 'minecraft:packed_ice' },
            { chance: 10, count: 1, item: 'minecraft:snow_block' },
            { chance: 10, count: 1, item: 'minecraft:diorite' },
            { chance: 5, count: 1, item: 'aetherworks:aether_shard' },
            { chance: 5, count: 1, item: 'minecraft:raw_iron_block' },
            { chance: 5, count: 1, item: 'minecraft:blue_ice' },
            { chance: 3, count: 1, item: 'minecraft:emerald' },
            { chance: 1, count: 1, item: 'aetherworks:block_shards_raw' }
        ],
        temperatureMax: 2100,
        temperatureMin: 700
    }).id('aetherworks:aetherium_anvil/geode_cold')

    e.custom({
        type: 'aetherworks:aetherium_anvil',
        difficulty: 1,
        emberPerHit: 10,
        input: { item: 'aetherworks:geode_hot' },
        numberOfHits: 1,
        result: [
            { chance: 10, count: 1, item: 'oreganized:raw_lead' },
            { chance: 10, count: 1, item: 'galosphere:raw_silver' },
            { chance: 10, count: 1, item: 'minecraft:sand' },
            { chance: 10, count: 1, item: 'minecraft:red_sand' },
            { chance: 10, count: 1, item: 'minecraft:clay' },
            { chance: 10, count: 1, item: 'minecraft:granite' },
            { chance: 7.5, count: 4, item: 'minecraft:redstone' },
            { chance: 5, count: 1, item: 'aetherworks:aether_shard' },
            { chance: 5, count: 1, item: 'minecraft:raw_gold_block' },
            { chance: 1, count: 1, item: 'aetherworks:block_shards_raw' }
        ],
        temperatureMax: 2100,
        temperatureMin: 700
    }).id('aetherworks:aetherium_anvil/geode_hot')

    e.custom({
        type: 'aetherworks:aetherium_anvil',
        difficulty: 1,
        emberPerHit: 10,
        input: { item: 'aetherworks:geode_deep' },
        numberOfHits: 1,
        result: [
            { chance: 10, count: 1, item: 'embers:ember_crystal' },
            { chance: 10, count: 1, item: 'embers:ember_shard' },
            { chance: 10, count: 1, item: 'embers:ember_grit' },
            { chance: 10, count: 1, item: 'minecraft:deepslate' },
            { chance: 7.5, count: 1, item: 'minecraft:sculk' },
            { chance: 7.5, count: 1, item: 'minecraft:dripstone_block' },
            { chance: 5, count: 1, item: 'aetherworks:aether_shard' },
            { chance: 5, count: 4, item: 'minecraft:lapis_lazuli' },
            { chance: 5, count: 1, item: 'minecraft:pointed_dripstone' },
            { chance: 5, count: 4, item: 'minecraft:redstone' },
            { chance: 5, count: 1, item: 'minecraft:raw_iron' },
            { chance: 5, count: 1, item: 'minecraft:raw_copper' },
            { chance: 5, count: 1, item: 'minecraft:raw_gold' },
            { chance: 5, count: 1, item: 'oreganized:raw_lead' },
            { chance: 5, count: 1, item: 'galosphere:raw_silver' },
            { chance: 1.5, count: 1, item: 'minecraft:diamond' },
            { chance: 0.5, count: 1, item: 'minecraft:echo_shard' }
        ],
        temperatureMax: 2100,
        temperatureMin: 700
    }).id('aetherworks:aetherium_anvil/geode_deep')

    e.custom({
        type: 'aetherworks:aetherium_anvil',
        difficulty: 1,
        emberPerHit: 10,
        input: { item: 'aetherworks:geode_basic' },
        numberOfHits: 1,
        result: [
            { chance: 10, count: 1, item: 'minecraft:stone' },
            { chance: 10, count: 1, item: 'minecraft:calcite' },
            { chance: 10, count: 1, item: 'minecraft:tuff' },
            { chance: 10, count: 1, item: 'minecraft:andesite' },
            { chance: 10, count: 1, item: 'minecraft:diorite' },
            { chance: 10, count: 1, item: 'minecraft:granite' },
            { chance: 10, count: 1, item: 'aetherworks:suevite' },
            { chance: 5, count: 1, item: 'aetherworks:aether_shard' },
            { chance: 5, count: 1, item: 'minecraft:coal' },
            { chance: 5, count: 1, item: 'minecraft:amethyst_shard' },
            { chance: 5, count: 1, item: 'minecraft:raw_iron' },
            { chance: 5, count: 1, item: 'minecraft:raw_copper' },
            { chance: 5, count: 1, item: 'minecraft:raw_gold' },
            { chance: 5, count: 1, item: 'oreganized:raw_lead' },
            { chance: 5, count: 1, item: 'galosphere:raw_silver' },
            { chance: 5, count: 1, item: 'minecraft:moss_block' },
            { chance: 0.5, count: 1, item: 'minecraft:emerald' },
            { chance: 0.5, count: 1, item: 'minecraft:diamond' },
            { chance: 0.25, count: 1, item: 'minecraft:budding_amethyst' }
        ],
        temperatureMax: 2100,
        temperatureMin: 700
    }).id('aetherworks:aetherium_anvil/geode_basic')

    e.custom({
        type: 'aetherworks:aetherium_anvil',
        difficulty: 1,
        emberPerHit: 10,
        input: { item: 'aetherworks:geode_end' },
        numberOfHits: 1,
        result: [
            { chance: 10, count: 1, item: 'minecraft:end_stone' },
            { chance: 10, count: 1, item: 'minecraft:obsidian' },
            { chance: 10, count: 1, item: 'minecraft:chorus_fruit' },
            { chance: 10, count: 1, item: 'minecraft:ender_pearl' },
            { chance: 5, count: 1, item: 'minecraft:crying_obsidian' },
            { chance: 5, count: 1, item: 'minecraft:shulker_shell' },
            { chance: 2.5, count: 1, item: 'minecraft:chorus_flower' }
        ],
        temperatureMax: 2100,
        temperatureMin: 700
    }).id('aetherworks:aetherium_anvil/geode_end')

    e.custom({
        type: 'aetherworks:aetherium_anvil',
        difficulty: 1,
        emberPerHit: 10,
        input: { item: 'aetherworks:geode_magical' },
        numberOfHits: 1,
        result: [
            { chance: 10, count: 1, item: 'oreganized:raw_lead' },
            { chance: 10, count: 1, item: 'minecraft:raw_iron' },
            { chance: 5, count: 1, item: 'aetherworks:aether_shard' },
            { chance: 2.5, count: 2, item: 'aetherworks:aether_shard' },
            { chance: 2.5, count: 3, item: 'aetherworks:aether_shard' },
            { chance: 5, count: 1, item: 'galosphere:raw_silver_block' },
            { chance: 5, count: 2, item: 'embers:dawnstone_nugget' },
            { chance: 5, count: 3, item: 'embers:dawnstone_nugget' },
            { chance: 5, count: 4, item: 'embers:dawnstone_nugget' },
            { chance: 1, count: 1, item: 'aetherworks:block_shards_raw' }
        ],
        temperatureMax: 2100,
        temperatureMin: 700
    }).id('aetherworks:aetherium_anvil/geode_magical')

    e.custom({
        type: 'aetherworks:aetherium_anvil',
        difficulty: 1,
        emberPerHit: 10,
        input: {
            item: 'aetherworks:geode_ocean'
        },
        numberOfHits: 1,
        result: [
            { chance: 10, count: 1, item: 'minecraft:prismarine_shard' },
            { chance: 10, count: 1, item: 'minecraft:prismarine_crystals' },
            { chance: 10, count: 1, item: 'minecraft:raw_iron' },
            { chance: 10, count: 1, item: 'minecraft:raw_copper' },
            { chance: 10, count: 1, item: 'minecraft:clay' },
            { chance: 10, count: 1, item: 'minecraft:andesite' },
            { chance: 10, count: 1, item: 'minecraft:mud' },
            { chance: 5, count: 1, item: 'aetherworks:aether_shard' },
            { chance: 5, count: 1, item: 'oreganized:raw_lead_block' },
            { chance: 5, count: 1, item: 'minecraft:prismarine' },
            { chance: 5, count: 1, item: 'minecraft:sea_lantern' },
            { chance: 5, count: 1, item: 'minecraft:wet_sponge' },
            { chance: 5, count: 1, item: 'minecraft:nautilus_shell' },
            { chance: 1, count: 1, item: 'minecraft:heart_of_the_sea' },
            { chance: 1, count: 1, item: 'minecraft:sniffer_egg' },
            { chance: 1, count: 1, item: 'aetherworks:block_shards_raw' }
        ],
        temperatureMax: 2100,
        temperatureMin: 700
    }).id('aetherworks:aetherium_anvil/geode_ocean')
}