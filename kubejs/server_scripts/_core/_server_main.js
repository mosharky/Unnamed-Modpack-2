// priority: -1
ServerEvents.tags('item', e => {
    itemTags_Core(e)
    // itemTags_AlexsMobs(e)
    // itemTags_CallOfYucutan(e)
    itemTags_Neapolitan(e)

    if (!global.DEBUG_MODE) {
        e.add('c:hidden_from_recipe_viewers', global.REMOVALS.arr.concat([
            /excavated_variants:.*/,
        ]))
    }
})

ServerEvents.tags('block', e => {
    blockTags_Core(e)
    // blockTags_AlexsCaves(e)
    // blockTags_AlexsMobs(e)
    blockTags_SnowRealMagic(e)
    blockTags_BountifulFares(e)
})

ServerEvents.tags('entity_type', e => {
    entityTags_Core(e)
    // entityTags_AlexsMobs(e)
    entityTags_Atmospheric(e)
    // entityTags_Biomancy(e)
    entityTags_Environmental(e)
    entityTags_Galosphere(e)
    entityTags_NumismaticOverhaul(e)
    entityTags_Supplementaries(e)
    // entityTags_FtbChunks(e)
})

ServerEvents.tags('worldgen/biome', e => {
    biomeTags_Core(e)
    biomeTags_Atmospheric(e)
    biomeTags_Autumnity(e)
    // biomeTags_CallOfYucutan(e)
    // biomeTags_CavernsAndChasms(e)
    // biomeTags_CollectorsReap(e)
    biomeTags_Environmental(e)
    biomeTags_Galosphere(e)
    // biomeTags_ImmersiveWeathering(e)
    biomeTags_Malum(e)
    biomeTags_MyNethersDelight(e)
    biomeTags_NaturesSpirit(e)
    biomeTags_Neapolitan(e)
    biomeTags_UpgradeAquatic(e)
    // biomeTags_Windswept(e)
    biomeTags_BountifulFares(e)

    // nml changes need to load way later
    biomeTags_NoMansLand(e)
})

ServerEvents.tags('worldgen/structure', e => {
    structureTags_Core(e)
})


ServerEvents.recipes(e => {
    recipes_Core(e)
    // recipes_Aetherworks(e)
    // recipes_AlexsMobs(e)
    recipes_Atmospheric(e)
    recipes_BrewinAndChewin(e)
    // recipes_Cataclysm(e)
    // recipes_CavernsAndChasms(e)
    recipes_CreateDeco(e)
    // recipes_Embers(e)
    // recipes_Everycomp(e)
    recipes_FarmersDelight(e)
    // recipes_Goety(e)
    // recipes_ImmersiveWeathering(e)
    // recipes_MoreMinecarts(e)
    recipes_Neapolitan(e)
    // recipes_Quark(e)
    // recipes_ScGuns(e)
    recipes_SootyChimneys(e)
    recipes_Supplementaries(e)
    // recipes_Windswept(e)
    recipes_Woodworks(e)
    recipes_BountifulFares(e)
    recipes_NaturesSpirit(e)
    recipes_Create(e)
    recipes_NoMansLand(e)
    recipes_Autumnity(e)

    // Fully removing any recipe tied to items in REMOVALS
    global.REMOVALS.set.forEach(removal => {
        e.remove({ input: removal })
        e.remove({ output: removal })
    })
})


ServerEvents.loaded(e => {
    // Default game rules
    if (e.server.persistentData.gameRules) return
    e.server.gameRules.set('playersSleepingPercentage', 1)
    e.server.gameRules.set('spawnRadius', 0)
    e.server.gameRules.set('disableElytraMovementCheck', true)
    e.server.gameRules.set('decorative_blocks:disableThatch', true)
    e.server.persistentData.gameRules = true
})

ServerEvents.generateData('after_mods', e => {
    // advancements_Core(e)

    numismaticTrades_Core(e)
    moonlightTrades_Supplementaries(e)
    moonlightTrades_Sawmill(e)

    // enchants_ImmersiveEnchanting(e)
    // enchants_AlexsMobs(e)
    // enchants_Allurement(e)
    // enchants_Backpacked(e)
    // enchants_Biomancy(e)
    // enchants_CallOfYucutan(e)
    // enchants_Create(e)
    // enchants_Galosphere(e)
    // enchants_Goety(e)
    // enchants_Malum(e)
    // enchants_ScGuns(e)
    // enchants_Supplementaries(e)
    // enchants_UnusualEnd(e)
    // enchants_VeinMining(e)
    // enchants_Soulbound(e)

    worldgen_Core(e)
    worldgen_Atmospheric(e)
    worldgen_Autumnity(e)
    // worldgen_CallOfYucutan(e)
    // worldgen_CavernsAndChasms(e)
    worldgen_Environmental(e)
    // worldgen_Embers(e)
    worldgen_Galosphere(e)
    // worldgen_Goety(e)
    // worldgen_Idas(e)
    // worldgen_ImmersiveWeathering(e)
    // worldgen_MoreMinecarts(e)
    worldgen_MyNethersDelight(e)
    worldgen_NaturesSpirit(e)
    worldgen_Oreganized(e)
    worldgen_SnowySpirit(e)
    // worldgen_Windswept(e)
    // worldgen_ScGuns(e)
    worldgen_FarmersDelight(e)
    worldgen_BountifulFares(e)
    worldgen_NoMansLand(e)

    structures_Core(e)
})

LootJS.modifiers(e => {
    // Replacements
    const noBlocks = e.addTableModifier(/(?!.*:blocks\/).*/)
    const all = e.addTableModifier(/.*/)
    lootReplacements_Core(noBlocks)
    // lootReplacements_ImmersiveEnchanting(all)
    lootRemovals_EndRem(all)
    lootRemovals_Environmental(all)
    lootRemovals_NoMansLand(all)

    lootTables_Core(e)
    // lootTables_EndRem(e)
    // lootTables_ImmersiveEnchanting(e)
    lootTables_SootyChimneys(e)
})


EntityEvents.spawned(e => {
    entitySpawned_Core(e)
})


MoreJS.villagerTrades(e => {
    villagerTrades_NumismaticOverhaul(e)
})