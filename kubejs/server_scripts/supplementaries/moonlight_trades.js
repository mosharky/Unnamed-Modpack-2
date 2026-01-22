/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function moonlightTrades_Supplementaries(e) {
    e.json('supplementaries:moonlight/villager_trade/red_merchant/blue_bomb', {
        global_conditions: [{ flag: 'bomb', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 3,
            price_multiplier: 0.2,
            price: { id: 'numismaticoverhaul:gold_coin', Count: 1 },
            price_secondary: { id: 'supplementaries:bomb', Count: 1 },
            offer: { id: 'supplementaries:bomb_blue', Count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/bomb', {
        global_conditions: [{ flag: 'bomb', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 3 },
            offer: { id: 'supplementaries:bomb', Count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/cannon', {
        global_conditions: [{ flag: 'cannon', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 6 },
            offer: { id: 'supplementaries:cannon', Count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/cannonball', {
        global_conditions: [{ flag: 'cannonball', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 5 },
            offer: { id: 'supplementaries:cannonball', Count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/copper_lantern', {
        global_conditions: [{ modid: 'suppsquared', type: 'neoforge:mod_loaded' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:bronze_coin', Count: 40 },
            offer: { id: 'suppsquared:copper_lantern', Count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/firework_star', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'supplementaries:random_firework_star',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 2 },
            amount: 1
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/gunpowder', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 8,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 2 },
            offer: { id: 'minecraft:gunpowder', Count: 2 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/lantern', {
        global_conditions: [{ type: 'neoforge:not', value: { modid: 'suppsquared', type: 'neoforge:mod_loaded' } }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:bronze_coin', Count: 60 },
            offer: { id: 'minecraft:lantern', Count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/rocket', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'supplementaries:random_firework',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 3 },
            price_secondary: { id: 'minecraft:paper', Count: 1 },
            amount: 3
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/rope', {
        global_conditions: [{ flag: 'rope', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 16,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 1 },
            offer: { id: 'supplementaries:rope', Count: 2 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/rope_arrow', {
        global_conditions: [{ flag: 'rope_arrow', type: 'supplementaries:flag' }],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 12,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 5 },
            offer: { id: 'supplementaries:rope_arrow', Count: 1, tag: { Damage: 16 } }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/spiky_bomb', {
        global_conditions: [
            { flag: 'bomb', type: 'supplementaries:flag' },
            { type: 'neoforge:mod_loaded', modid: 'oreganized' }
        ],
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 3,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 24 },
            offer: { id: 'supplementaries:bomb_spiky', Count: 1 }
        }
    })
    e.json('supplementaries:moonlight/villager_trade/red_merchant/tnt', {
        type: 'supplementaries:wrap_on_christmas',
        trade: {
            type: 'simple',
            max_trades: 8,
            price: { id: 'numismaticoverhaul:silver_coin', Count: 6 },
            offer: { id: 'minecraft:tnt', Count: 1 }
        }
    })
}