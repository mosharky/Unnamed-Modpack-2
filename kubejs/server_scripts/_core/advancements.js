/** @param {import("dev.latvian.mods.kubejs.generator.KubeDataGenerator").$KubeDataGenerator$$Original} e  */
function advancements_Core(e) {
    const removals = [
        'lootr:1barrel',
        'lootr:1cart',
        'lootr:1chest',
        'lootr:1shulker',
        'lootr:10loot',
        'lootr:25loot',
        'lootr:50loot',
        'lootr:100loot',
        'lootr:root',
        'lootr:social',
    ]

    e.json('kubejs:advancements/removed', {
        display: { hidden: true },
    })

    removals.forEach(advancement => {
        let advSplit = advancement.split(':')
        let advModId = advSplit[0]
        let advName = advSplit[1]

        e.json(`${advModId}:advancements/${advName}.json`, {
            parent: 'kubejs:advancements/removed',
            display: { hidden: true },
            criteria: {
                impossible: { trigger: 'minecraft:impossible' }
            },
            requirements: [['impossible']]
        })
    })
}