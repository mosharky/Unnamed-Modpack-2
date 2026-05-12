# How 2 Yonder
Yonder is a WIP modpack!

## Getting Started
1. Use [Visual Studio Code](https://code.visualstudio.com/)! Here are some very helpful extensions:
    - [JSON to JS converter](https://marketplace.visualstudio.com/items?itemName=renatorodrigues.json-to-js) - Very handy for converting JSON data into a JS object
    - [ProbeJS](https://marketplace.visualstudio.com/items?itemName=Prunoideae.probejs) - Integrates VSCode with KubeJS/ProbeJS
2. Get access to the `mods` subrepo ([YonderMods](https://github.com/mosharky/YonderMods)) from momo
3. Clone this repo using:
```
git clone --recursive https://github.com/mosharky/Yonder
```

## Ground Rules
- **ALWAYS pull before you commit or push!**
- Non-optional assets (things that we don't want users to disable) should be in `kubejs/assets/`
- Optional assets should be in `resourcepacks/`
- Datapack stuff should be in `kubejs/data`
    - Ideally, I want as many things as possible to be done in KubeJS scripts for organization and cleanliness' sake, so try to avoid doing stuff in JSON!
- Configs that might be personalized by the player, like Sodium settings, shouldn't be in the repo and should be ignored by Git in `.gitignore`. There's definitely exceptions to this.


***


## Links
- [Yonder](https://github.com/mosharky/Yonder)
- [YonderMods](https://github.com/mosharky/YonderMods)
- [YonderCore](https://github.com/mosharky/YonderCore)
- [Design/Todo Doc]()