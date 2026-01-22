function recipes_MoreMinecarts(e) {
    e.replaceInput({}, 'moreminecarts:hard_light_lens', 'embers:tinker_lens')
    e.replaceInput({}, 'moreminecarts:levitation_powder', 'alexscaves:azure_neodymium_ingot')

    e.recipes.create.mixing('2x moreminecarts:silica_steel_mix', [
        '#c:ingots/iron',
        '#minecraft:coals',
        '#c:gems/quartz',
        '#c:gems/quartz',
        '#c:gems/quartz',
    ]).id('moreminecarts:silica_steel_mix')
}