ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).getBlock() != null) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }

    // Quark
    // rename('quark:rope', 'Rigid Rope')

    // Farmer's Delight
    rename('farmersdelight:rope', 'Netting')
    rename('farmersdelight:wheat_dough', 'Dough')

    // Nature's Spirit
    rename('natures_spirit:lavender', 'Lavender Bush')
    rename('natures_spirit:bluebell', 'Bluebell Bush')
    rename('natures_spirit:foxglove', 'Purple Foxglove')
    rename('natures_spirit:hibiscus', 'Lonely Hibiscus')
    rename('natures_spirit:lotus_flower', 'Aquatic Lotus Flower')
    rename('natures_spirit:lotus_stem', 'Aquatic Lotus Stem')

    // Even Better Nether
    // rename('evenbetternether:barrel_cactus', 'Warped Barrel Cactus')

    // Collector's Reap
    // e.add('collectorsreap', 'item.collectorsreap.dragon_fruit_seeds', 'Pink Dragon Fruit Seeds')

    // Darker Depths
    rename('darkerdepths:ash_block', 'Darkslate Ash Block')
    rename('darkerdepths:ash', 'Darkslate Ash')

    // Doom and Gloom missing lang
    // e.add('doom_and_gloom', 'entity.doom_and_gloom.holler', 'Holler')
    // e.add('doom_and_gloom', 'entity.minecraft.villager.gravetender', 'Gravetender')

    // AE2 missing lang
    e.add('ae2', 'entity.minecraft.villager.fluix_researcher', 'Fluix Researcher')

    // More Minecarts missing lang
    // rename('moreminecarts:maglev_hologram_rail', 'Maglev Holograph Rail')
    // rename('moreminecarts:wooden_hologram_rail', 'Wooden Holograph Rail')
    // rename('moreminecarts:hologram_rail', 'Holograph Rail')

    // Bountiful Fares
    rename('bountifulfares:plum_log', 'Fruitful Plum Log')
    rename('bountifulfares:plum_wood', 'Fruitful Plum Wood')
    rename('bountifulfares:stripped_plum_log', 'Stripped Fruitful Plum Log')
    rename('bountifulfares:stripped_plum_wood', 'Stripped Fruitful Plum Wood')
    rename('bountifulfares:plum_leaves', 'Fruitful Plum Leaves')
    rename('bountifulfares:plum_sapling', 'Fruitful Plum Sapling')
})