EntityEvents.checkSpawn(global.ENTITY_REMOVALS, e => {
    console.log(`Preventing spawn of ${e.entity.type} at ${e.entity.x}, ${e.entity.y}, ${e.entity.z}`)
    e.success(false)
})
