﻿let modInfo = {
	name: "Gods of Incremental",
	id: "godsofincremental",
	author: "Icecreamdude",
	pointsName: "points",
	modFiles: ["incremental.js", "metaprestige.js", "tree.js", "prestigetree.js", "crafting.js"],

	discordName: "Incremental God Tree Server",
	discordLink: "https://discord.gg/icecreamdude-s-incremental-games-850817562040467556",
	initialStartPoints: new Decimal(1), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "1.0b",
	name: "Beta Update 1 - Remember, you werent the first hero."
}

let changelog = `<h1>Changelog:</h1><br>
		- Added things.<br>
		Current Endgame: Idk`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything", "prestigereset", "pureenergyreset"]

function getStartPoints() {
	return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints() {
	return true
}

// Calculate points/sec!
function getPointGen() {
	if (!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(0)
	if (!hasUpgrade("m", 16)) gain = buyableEffect("i", 11)
	if (hasUpgrade("m", 16)) gain = buyableEffect("i", 11).add(upgradeEffect("m", 16))
	gain = gain.mul(buyableEffect("i", 12))
	gain = gain.mul(buyableEffect("i", 13))
	gain = gain.mul(buyableEffect("i", 14))
	if (player.i.standardpath.eq(1)) gain = gain.div(1.25)
	if (player.i.standardpath.eq(1)) gain = gain.div(player.i.prestigeenergyeffectonpoints)
	if (hasUpgrade("i", 11)) gain = gain.mul(upgradeEffect("i", 11))
	if (hasUpgrade("m", 12)) gain = gain.mul(upgradeEffect("m", 12))
	gain = gain.mul(player.m.incrementalenergyeffect)
	gain = gain.mul(player.i.boosterenergyeffect)
	if (player.i.currentenergizer.eq(3)) gain = gain.mul(100000)
	if (player.i.enhancepath.eq(1)) gain = gain.mul(player.i.enhancepointseffect)
	player.gain = gain
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() {
	return {
		gain: new Decimal(0),
		bestpoints: new Decimal(0),
		unlockedmetaprestige: new Decimal(0),

		//Cutscene Song Optimization
		inreddiamondcutscene: new Decimal(0),
		injacorbcutscene: new Decimal(0),
		inartiscutscene: new Decimal(0),

		//Cutscenes
		prestigecutscene: new Decimal(1),
        prestigescene: new Decimal(0),
		machinecutscene: new Decimal(1),
        machinescene: new Decimal(0),
		pureenergycutscene: new Decimal(1),
        pureenergyscene: new Decimal(0),
		energizercutscene: new Decimal(1),
		energizerscene: new Decimal(0),
		boostercutscene: new Decimal(1),
		boosterscene: new Decimal(0),
		enhancecutscene: new Decimal(1),
		enhancescene: new Decimal(0),
		beaconcutscene: new Decimal(1),
		beaconscene: new Decimal(0),
		craftingcutscene: new Decimal(1),
		craftingscene: new Decimal(0),
		crafting2cutscene: new Decimal(1),
		crafting2scene: new Decimal(0),

		//YHVR cutscenes
		yhvrcutscene1: new Decimal(0),
		yhvrcutscene2: new Decimal(0),
		yhvrcutscene3: new Decimal(0),
		yhvrcutscene4: new Decimal(0),
		yhvrcutscene5: new Decimal(0),
		yhvrcutscene6: new Decimal(0),

		//PT layers
		prestigelayer: new Decimal(0),
		boosterlayer: new Decimal(0),
		generatorlayer: new Decimal(0),
		enhancelayer: new Decimal(0),
	}
}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return false
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return (3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion) {
}