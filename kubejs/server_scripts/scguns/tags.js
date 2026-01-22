function biomeeTags_ScGuns(e) {
    e.removeAll('scguns:asgharian_tower')
    e.add('scguns:asgharian_tower', [
        '#minecraft:has_structure/pillager_outpost'
    ])

    e.removeAll('scguns:osgood_lab')
    e.add('scguns:osgood_lab', [
        '#c:is_coniferous'
    ])
}