﻿var prestigetree = [["pr"],
["bo", "ge"], ["en"]]
          
          addLayer("m", {
    name: "Meta-Prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "<p style='transform: scale(3, 3)'><alternate>M</alternate></p>",
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    row: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
        score: new Decimal(0),

        //Unlocks
		craftingunlock: new Decimal(0),

        //PATHLESS FACTORS
        scorefrombestpoints: new Decimal(0),
        scorefromtimeplayed: new Decimal(1),

        //STANDARD PATH FACTORS
        scorefrombestprestigeenergy: new Decimal(1),
        scorefrombestpureenergy: new Decimal(1),

        //STANDARD PATH FACTORS
        scorefrombestenhancepoints: new Decimal(1),

        //PT Factors
        scorefromincrementalpower: new Decimal(1),
        scorefromincrementalenergy: new Decimal(1),
        scorefrommetaprestigetime: new Decimal(1),

        incrementalenergy: new Decimal(0),
        incrementalenergytoget: new Decimal(0),
        incrementalenergyeffect: new Decimal(1),
    }
    },
    onPrestige()
    {
        player.bestpoints = new Decimal(0)
        player.m.incrementalenergy = player.m.incrementalenergy.add(player.m.incrementalenergytoget)

        player.c.scrapmetalcancel = new Decimal(1)
        player.c.wirescancel = new Decimal(1)
        player.c.enhancepowdercancel = new Decimal(1)

        player.c.scrapmetal = player.c.scrapmetal.add(player.c.scrapmetaltoget)
        player.c.wires = player.c.wires.add(player.c.wirestoget)
        player.c.enhancepowder = player.c.enhancepowder.add(player.c.enhancepowdertoget)
    },
    requires: new Decimal(2.25), // Can be a function that takes requirement increases into account
    resource: "Incremental Power", // Name of prestige currency
    baseResource: "score", // Name of resource prestige is based on
    baseAmount() {return player.m.score}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 2, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    automate() {
    },
    nodeStyle: {
        "background-origin": "border-box",
        'min-height': '150px',
        'min-width': '150px',
        background: 'linear-gradient(45deg, #8a00a9, #e52e71)',
        position: 'relative',
        overflow: 'hidden', 
        boxShadow: '0 0 50px 10px rgba(138, 0, 169, 0.7)',
        textShadow: '1px 1px 2px rgba(0.4, 0.4, 0.4, 0.4)', // Text shadow
        border: '4px solid rgba(255, 255, 255, 0.3)', // Glowing border
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    color: "#8a00a9",
    update(delta) {

        //SCORE CALC
        player.m.scorefrombestpoints = player.bestpoints.add(1).slog().pow(2)

        if (player.i.standardpath.eq(0)) player.m.scorefrombestprestigeenergy = new Decimal(1)
        if (player.i.standardpath.eq(1) && player.i.bestprestigeenergy.neq(0)) player.m.scorefrombestprestigeenergy = player.i.bestprestigeenergy.slog().div(5).add(1)

        if (player.i.standardpath.eq(0)) player.m.scorefrombestpureenergy = new Decimal(1)
        if (player.i.standardpath.eq(1) && player.i.bestpureenergy.neq(0)) player.m.scorefrombestpureenergy = player.i.bestpureenergy.slog().div(4).add(1)

        if (player.i.enhancepath.eq(0)) player.m.scorefrombestenhancepoints = new Decimal(1)
        if (player.i.enhancepath.eq(1) && player.i.bestenhancepoints.neq(0)) player.m.scorefrombestenhancepoints = player.i.bestenhancepoints.slog().div(5).add(1)

        if (!hasUpgrade("m", 14)) player.m.scorefromtimeplayed = new Decimal(1)
        if (hasUpgrade("m", 14)) player.m.scorefromtimeplayed = Math.log10(Math.cbrt(player.timePlayed))

        if (player.boosterlayer.eq(0)) player.m.scorefromincrementalpower = new Decimal(1)
        if (player.boosterlayer.eq(1)) player.m.scorefromincrementalpower = player.m.points.add(1).pow(0.03)

        if (player.generatorlayer.eq(0)) player.m.scorefromincrementalenergy = new Decimal(1)
        if (player.generatorlayer.eq(1)) player.m.scorefromincrementalenergy = player.m.incrementalenergy.add(1).pow(0.04)

        if (player.enhancelayer.eq(0)) player.m.scorefrommetaprestigetime = new Decimal(1)
        if (player.enhancelayer.eq(1)) player.m.scorefrommetaprestigetime = player.i.metaprestigetime.add(1).log10().cbrt().sqrt()

        player.m.score = player.m.scorefrombestpoints
        player.m.score = player.m.score.mul(player.m.scorefrombestprestigeenergy)
        player.m.score = player.m.score.mul(player.m.scorefrombestpureenergy)
        player.m.score = player.m.score.mul(buyableEffect("pr", 11))
        player.m.score = player.m.score.mul(player.m.scorefromtimeplayed)
        player.m.score = player.m.score.mul(player.m.scorefromincrementalpower)
        player.m.score = player.m.score.mul(player.m.scorefromincrementalenergy)
        player.m.score = player.m.score.mul(player.m.scorefrommetaprestigetime)
        player.m.score = player.m.score.mul(player.m.scorefrombestenhancepoints)

        player.m.incrementalenergytoget = player.i.prestigemachines.pow(0.3)
        player.m.incrementalenergytoget = player.m.incrementalenergytoget.mul(player.i.noenergyboost)

        player.m.incrementalenergyeffect = player.m.incrementalenergy.pow(0.8).add(1)
    },
    clickables: {
    },
    upgrades: {
        11:
        {
            title: "Standard Path Activator",
            unlocked() { return true },
            description: "Unlocks activation for the standard path.",
            cost: new Decimal(1),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            onPurchase() {
                if (player.yhvrcutscene1.eq(0))
                {
                alert("It's time to introduce myself.")
                alert("My name is Yhvr. The ranger of numbers.")
                alert("I am one of the four great nobles of incremental powers.")
                alert("You will know it's me becasue I am communication via alerts.")
                alert("I am in exile, as well as my other fellow nobles Jacorb and Aarex.")
                alert("However, I can still communicate with the outside world.")
                alert("My creation, galaxy.click is very useful as it lets me do this.")
                alert("Please. Help us get out of here!")
                alert("Jacorb and Aarex tried helping the other hero, but it was no use.")
                alert("The path of singularity was too weak to handle a single celestial.")
                alert("I want you to access galaxy.click, so you can be able to defeat celestials.")
                alert("Not even true singularities are capable of this power.")
                alert("Anyways, THE DEATH REALM will eventually catch on to this convo. Gotta go.")
                }
                player.yhvrcutscene1 = new Decimal(1)
            },
        },
        12:
        {
            title: "Boost I",
            unlocked() { return hasUpgrade("m", 11) },
            description: "Boosts points based on unspent incremental power.",
            cost: new Decimal(2),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].points.pow(0.6).add(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        13:
        {
            title: "Boost II",
            unlocked() { return hasUpgrade("m", 12) },
            description: "Boosts prestige points based on unspent incremental power.",
            cost: new Decimal(4),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].points.pow(0.5).add(2)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        14:
        {
            title: "Factor I",
            unlocked() { return hasUpgrade("m", 13) },
            description: "Unlocks a pathless factor.",
            cost: new Decimal(10),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        15:
        {
            title: "Pure Energy",
            unlocked() { return hasUpgrade("m", 14) },
            description: "Unlocks the pure energy layer.",
            cost: new Decimal(100),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        16:
        {
            title: "QoL I",
            unlocked() { return hasUpgrade("m", 15) },
            description: "Gives extra point producers based on incremental energy.",
            cost: new Decimal(250),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player[this.layer].incrementalenergy.pow(0.8)
            },
            effectDisplay() { return "+" + format(upgradeEffect(this.layer, this.id))}, // Add formatting to the effect
            onPurchase() {
                if (player.yhvrcutscene4.eq(0))
                {
                alert("Nice.")
                alert("Now your incremental power gain will skyrocket.")
                alert("Just remember.")
                alert("You must keep going farther in the path, or else you won't unlock new factors.")
                alert("Enjoy.")
            }
                player.yhvrcutscene4 = new Decimal(1)
            },
        },
        17:
        {
            title: "Boost III",
            unlocked() { return hasUpgrade("m", 16) && player.enhancelayer.eq(1) },
            description: "Boosts prestige points based on meta-prestige time.",
            cost: new Decimal(1500),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            effect() 
            {
                 return player.i.metaprestigetime.div(500).pow(0.7).add(1)
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect
        },
        18:
        {
            title: "Cool Upgrade I",
            unlocked() { return hasUpgrade("m", 17) && player.beaconcutscene.eq(0) },
            description: "Adds 10s to the meta-prestige timer when your beacon fills up.",
            cost: new Decimal(2500),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
        },
        19:
        {
            title: "Crafting",
            unlocked() { return hasUpgrade("m", 18) },
            description: "Unlocks the crafting layer.",
            cost: new Decimal(5000),
            currencyLocation() { return player.m },
            currencyDisplayName: "Incremental Power",
            currencyInternalName: "points",
            onPurchase() {
                if (player.yhvrcutscene6.eq(0))
                {
                alert("It's about time you unlocked this feature.")
                alert("It is run by a unique celestial, but this feature will be very helpful.")
                alert("You are close to the first celestial you will fight.")
                alert("But to summon it, you must craft a certain item.")
                alert("But there are requirements you will need to complete first.")
            }
                player.yhvrcutscene6 = new Decimal(1)
            },
        },
    },
    buyables: {
    },
    milestones: {

    },
    challenges: {
    },
    bars: {

    },
    infoboxes: {

    },
    microtabs: {
        stuff: {
            "Meta-Prestige": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
            ["microtabs", "metaprestige", { 'border-width': '0px' }],
        ]

            },
            "Score Breakdown": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
                           ["blank", "25px"],
                           ["raw-html", function () { return "<h3>Pathless Factors " }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return "<h3>Best points: " + format(player.bestpoints) + " -> " + format(player.m.scorefrombestpoints) + " base score" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return hasUpgrade("m", 14) ? "<h3>Time played: " + formatTime(player.timePlayed) + " -> x" + format(player.m.scorefromtimeplayed) : "" }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>Standard Path Factors " : "" }, { "color": "#ffffaa", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) ? "<h3>Best prestige energy: " + format(player.i.bestprestigeenergy) + " -> x" + format(player.m.scorefrombestprestigeenergy) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.standardpath.eq(1) && hasUpgrade("i", 14) ? "<h3>Best pure energy: " + format(player.i.bestpureenergy) + " -> x" + format(player.m.scorefrombestpureenergy) : "" }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>Enhance Path Factors " : "" }, { "color": "#b82fbd", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.i.enhancepath.eq(1) ? "<h3>Best enhance points: " + format(player.i.bestenhancepoints) + " -> x" + format(player.m.scorefrombestenhancepoints) : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return player.prestigelayer.eq(1) ? "<h3>Prestige Tree Factors " : "" }, { "color": "#31aeb0", "font-size": "24px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.prestigelayer.eq(1) && player.pr.buyables[11].gt(0) ? "<h3>Score amplifier: " + format(player.pr.buyables[11]) + " -> x" + format(buyableEffect("pr", 11)) : "" }, { "color": "#31aeb0", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.boosterlayer.eq(1) ? "<h3>Incremental Power: " + format(player.m.points) + " -> x" + format(player.m.scorefromincrementalpower) : "" }, { "color": "#6e64c4", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.generatorlayer.eq(1) ? "<h3>Incremental Energy: " + format(player.m.incrementalenergy) + " -> x" + format(player.m.scorefromincrementalenergy) : "" }, { "color": "#a3d9a5", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return player.enhancelayer.eq(1) ? "<h3>Time spent in meta-prestige: " + formatTime(player.i.metaprestigetime) + " -> x" + format(player.m.scorefrommetaprestigetime) : "" }, { "color": "#b82fbd", "font-size": "18px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           ["raw-html", function () { return "<h3>TOTAL SCORE: " + format(player.m.score) }, { "color": "white", "font-size": "24px", "font-family": "monospace" }],
                    ]

            },
            "Prestige Tree": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return player.prestigelayer.eq(1) },
                content:

                    [
                           ["blank", "25px"],
                           ["tree", prestigetree],
                    ]

            },
        },
        metaprestige: {
            "Main": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
                        ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + format(player.m.points) + " incremental power." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                           ["raw-html", function () { return "<h3>YOUR SCORE: " + format(player.m.score) }, { "color": "white", "font-size": "15px", "font-family": "monospace" }],
                           ["blank", "25px"],
                           "prestige-button",
                           ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + format(player.m.incrementalenergy) + " incremental energy." }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>Your incremental energy give a x" + format(player.m.incrementalenergyeffect) + " boost to points and prestige energy." }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],
            ["raw-html", function () { return "<h3>Your prestige machines will give you " + format(player.m.incrementalenergytoget) + " incremental energy on reset." }, { "color": "#ffffaa", "font-size": "18px", "font-family": "monospace" }],

                    ]

            },
            "Upgrades": {
                buttonStyle() { return { 'color': '#8a00a9' } },
                unlocked() { return true },
                content:

                    [
                        ["blank", "25px"],
            ["raw-html", function () { return "<h2>You have " + format(player.m.points) + " incremental power." }, { "color": "white", "font-size": "18px", "font-family": "monospace" }],
                        ["blank", "25px"],
                        ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15], ["upgrade", 16], ["upgrade", 17]]],
                        ["row", [["upgrade", 18], ["upgrade", 19]]],
        ]

            },
        },
    },

    tabFormat: [
            ["microtabs", "stuff", { 'border-width': '0px' }],
            //MUSIC
            ["raw-html", function () { return options.musicToggle ? "<audio controls autoplay loop hidden><source src=music/metaprestige.mp3 type<=audio/mp3>loop=true hidden=true autostart=true</audio>" : "" }],
    ],
    layerShown() { return player.unlockedmetaprestige.eq(1) }
})
