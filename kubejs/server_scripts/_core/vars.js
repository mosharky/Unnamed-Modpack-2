// priority: 100

/** @import {$TagKubeEvent} from "dev.latvian.mods.kubejs.server.tag.TagKubeEvent" */

const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')

let overworldBiomes
ServerEvents.tags('worldgen/biome', e => {
    overworldBiomes = e.get('minecraft:is_overworld').getObjectIds()
})

// Numismatic Overhaul stuff shortened
const SELL_STACK = 'numismaticoverhaul:sell_stack'
const SELL_TAG = 'numismaticoverhaul:sell_tag'
const BUY_STACK = 'numismaticoverhaul:buy_stack'
const SELL_ENCHANT_ITEM = 'numismaticoverhaul:enchant_item'
const SELL_SINGLE_ENCHANT_ITEM = 'numismaticoverhaul:sell_single_enchantment'
const PROCESS_ITEM = 'numismaticoverhaul:process_item'


/**
 * Returns coin equivalent ItemStack of given bronze number
 * 1 Gold = 100 Silver = 10,000 Bronze
 * 1 Silver = 100 Bronze
 * @param {Number} num number from 1 - 990,000
 * @returns {Item}
 */
function currencyItem(num) {
    if (num > 990000) console.error(`currencyItem returned a value too high: ${num}`)
    else if (num <= 99) return Item.of('numismaticoverhaul:bronze_coin', num)
    else if (num > 99 && num < 10000) return Item.of('numismaticoverhaul:silver_coin', Math.ceil(num / 100))
    else if (num >= 10000) return Item.of('numismaticoverhaul:gold_coin', Math.ceil(num / 10000))
}

/**
 * Get if a player has a specific advancement
 * @param {$MinecraftServer_} server 
 * @param {$Player_} player 
 * @param {string} advancement 
 */
function hasAdvancement(server, player, advancement) {
    const adv = server.advancements.allAdvancements.stream().filter(a => a.id == advancement).findFirst().orElse(null)
    return server.playerList.getPlayerAdvancements(player).getOrStartProgress(adv).isDone()
}


/**
 * Play a sound at the player
 * @param {$MinecraftServer_} server 
 * @param {$Player_} player 
 * @param {string} sound 
 * @param {number} volume 
 * @param {number} pitch 
 */
function playSound(server, player, sound, volume, pitch) {
    if (volume === undefined) volume = 1
    if (pitch === undefined) pitch = 1
    server.runCommandSilent(`execute at ${player.username} run playsound ${sound} player ${player.username} ~ ~ ~ ${volume} ${pitch}`)
}


/**
 * Prevent right-click if players aren't nearby
 * @param {$BlockRightClickedEventJS_} e 
 * @param {string} sound 
 * @param {string} activationItem 
 * @param {number} minPlayers
 * @param {Optional | string} advancement
 */
function antiLoser(e, activationItem, sound, minPlayers, advancement) {
    if (activationItem instanceof RegExp) {
        // e.player.mainHandItem.getId()
    }
    else if (e.player.mainHandItem.getId() != activationItem && e.player.offHandItem.getId() != activationItem) return

    let AABB = e.entity.boundingBox.inflate(150)
    let nearbyPlayers = []
    e.level.getEntitiesWithin(AABB).forEach(entity => {
        if (entity == null || !entity.player) return
        nearbyPlayers.push(entity.username)
    })

    if (nearbyPlayers.length < minPlayers || (advancement != undefined && !hasAdvancement(e.server, e.player, advancement))) {
        e.server.runCommandSilent(`immersivemessages sendcustom ${e.player.username} {anchor:0, background:1, obfuscate:1, size:2, color:"#FF2C00"} 10 You need to have atleast ${minPlayers} friends to summon this boss. loser`)
        playSound(e.server, e.player, sound)
        e.cancel()
    }
}


/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function autoImmersiveEnchanting(e, enchantment, levels) {
    const modId = enchantment.split(':')[0]
    const enchantmentId = enchantment.split(':')[1]

    const enchantmentObj = { levels: {} }
    if (levels == 1) {
        enchantmentObj.levels['1'] = { item: 'minecraft:diamond', amount: 16 }
    } else {
        for (let i = 1; i <= levels; i++) {
            enchantmentObj.levels[`${i}`] = { item: 'minecraft:diamond', amount: 4 * i }
        }
    }
    e.json(`immersiveenchanting:enchantment_costs/${modId}/${enchantmentId}`, enchantmentObj)
}