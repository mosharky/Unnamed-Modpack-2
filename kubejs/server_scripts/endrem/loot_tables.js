/** @param {$LootActionsBuilderJS_} all */
function lootRemovals_EndRem(all) {
    all.removeLoot(/enderem:.*/)
}


/** @param {$LootModificationEventJS_} e */
function lootTables_EndRem(e) {
    e.removeGlobalModifier('@endrem')

    // Black Eye
    e.addEntityModifier('alexscaves:hullbreaker').addLoot('endrem:black_eye')

    // Cold Eye (structure: mowziesmobs:frostmaw_spawn)
    e.addEntityModifier('mowziesmobs:frostmaw').addLoot('endrem:cold_eye')

    // Corrupted Eye (raids)
    e.addEntityModifier('scguns:blunderer').randomChance(0.5).addLoot('endrem:corrupted_eye')

    // Lost Eye (structure: goety:ominous_blacksmith)
    e.addLootTableModifier('goety:chests/blacksmith_treasure').addLoot('endrem:lost_eye')

    // Nether Eye (structure: cataclysm:burning_arena)
    e.addEntityModifier('cataclysm:ignis').addLoot('endrem:nether_eye')

    // Old Eye (structure: cataclysm:cursed_pyramid)
    e.addEntityModifier('cataclysm:ancient_remnant').addLoot('endrem:old_eye')

    // Rogue Eye (structure: minecraft:ancient_city)
    e.addEntityModifier('minecraft:warden').addLoot('endrem:rogue_eye')

    // Cursed Eye (structure: cataclysm:soul_forge)
    e.addEntityModifier('cataclysm:netherite_monstrosity').addLoot('endrem:cursed_eye')

    // Evil Eye (structure: )
    // e.addEntityModifier('').addLoot('endrem:evil_eye')

    // Guardian Eye (structure: )
    // e.addEntityModifier('').addLoot('endrem:guardian_eye')

    // Magical Eye (structure: )
    // e.addEntityModifier('').addLoot('endrem:magical_eye')

    // Wither Eye (structure: )
    e.addEntityModifier('minecraft:wither').addLoot('endrem:wither_eye')

    // Witch Eye (structure: )
    // e.addEntityModifier('').addLoot('endrem:witch_eye')

    // Undead Eye (structure: )
    e.addEntityModifier('cataclysm:aptrgangr').addLoot('endrem:undead_eye')

    // Exotic Eye (structure: )
    e.addEntityModifier('cataclysm:scylla').addLoot('endrem:exotic_eye')

    // Cryptic Eye (structure: )
    e.addEntityModifier('alexscaves:luxtructosaurus').addLoot('endrem:cryptic_eye')
}