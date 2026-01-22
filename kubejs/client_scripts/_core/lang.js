ClientEvents.lang('en_us', e => {
    function rename(id, name) {
        if (Item.of(id).getBlock() != null) e.renameBlock(id, name)
        else e.renameItem(id, name)
    }

    // Rope unification
    rename('farmersdelight:rope', 'Fisherman\'s Rope')
    // rename('quark:rope', 'Rigid Rope')

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
})