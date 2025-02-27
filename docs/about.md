# Achievement Randomizer

<!-- markdownlint-disable MD033 -->

Achievement Randomizer is a mod for [_The Binding of Isaac: Repentance_](https://store.steampowered.com/app/1426300/The_Binding_of_Isaac_Repentance/) that gives you the experience of playing through the game from scratch, unlocking each item one by one in a randomized way.

This page explains how it works.

<br>

## Table of Contents

1. [Summary](#summary-tldr)
1. [Design Principles](#design-principles)
1. [Objective List](#objective-list)
1. [Unlock List](#unlock-list)
1. [Modes](#modes)
1. [Other Features](#other-features)
1. [F.A.Q.](#faq-frequently-asked-questions)

<br>

## Summary (TL;DR)

- This mod **does not** simply randomize all of the vanilla achievements. Rather, it has custom objectives and custom unlocks.
- The custom objectives are designed to be challenging and non-arbitrary. There are only 4 types of objectives:
  - Kill each story boss (per character).
  - Finish each floor without taking a hit (per character).
  - Survive each boss for 2 minutes without taking a hit.
  - Complete each challenge.
- Unlike vanilla, almost everything you can imagine is locked from the start of the game. That means you will have to beat your the first run as Isaac with only Breakfast in the item pools.
- For more specific details about why we designed it this way and what exact things are locked, read on.

<br>

## Design Principles

We do not want to randomize the vanilla achievements. This is for several reasons:

1. [Other mods](https://steamcommunity.com/sharedfiles/filedetails/?id=2838967057) have already done that.
1. Some of the vanilla achievements do not make sense in the context of a player trying to "beat the game" in the least amount of death possible, like `The Scissors - Die 100 times` or `Mr. Resetter! - Reset 7 times in a row`. (This would make the minimum amount of deaths always be 100 and it is possible to complete the game in less than that.)
1. Some vanilla achievements do not make sense in the context of a player trying to "beat the game" in the fastest time possible, like `Dedication - Participate in 31 Daily Challenges`. (This would make the minimum amount of time always be 31 days and it is possible to complete the game in less than that.)
1. Some vanilla achievements are arbitrary conditions and are not very fun to play, like `They will charge you up... for a small fee - Donate to Battery Bums until they pay out with an item 5 times`. (If you are not lucky enough to get this achievement during your playthrough, the most consistent strategy is to reset as Tainted Keeper in Greed Mode until you see a Battery Bum in the shop. This is "busywork" and is not skill-based in any way.)
1. Many things are not gated behind vanilla achievements and it would be fun if they were (e.g. soul hearts, locked chests).

Thus, this mod takes a completely different approach. We want each objective to be non-arbitrary, difficult, skill-based, and represent a meaningful accomplishment inside of the game. And we want as many unlockable things are possible.

<br>

## Terminology

Before we get into the details of the mod, we should clarify the terminology used:

- An _objective_ is something that you perform in the game to unlock something. (For example, killing Mom as Isaac is an objective.) All objectives are listed below.
- An _unlock_ is something that you get after completing an objective. (For example, killing Mom as Isaac might unlock the Yum Heart collectible, allowing it to appear in item pools on subsequent runs.) All unlocks are listed below.
- An _achievement_ is the unique pair of an _objective_ and an _unlock_. In this mod, all achievements are randomized, although there is some basic logic to prevent unbeatable seeds and other miscellaneous things.

<br>

## Objective List

Note that all objectives must be completed on hard mode.

### Character-Based Objectives (1054)

Each character will unlock something upon defeating/completing the following:

1. Mom
2. It Lives
3. Isaac
4. Blue Baby
5. Satan
6. The Lamb
7. Mega Satan
8. Boss Rush
9. Hush
10. Ultra Greed
11. Delirium
12. Mother
13. The Beast

Additionally, each character will unlock something upon clearing the following floors without getting hit:

1. Basement 1 / Cellar 1 / Burning Basement 1
2. Basement 2 / Cellar 2 / Burning Basement 2
3. Caves 1 / Catacombs 1 / Flooded Caves 1
4. Caves 2 / Catacombs 2 / Flooded Caves 2
5. Depths 1 / Necropolis 1 / Dank Depths 1
6. Depths 2 / Necropolis 2 / Dank Depths 2
7. Womb 1 / Utero 1 / Scarred Womb 1
8. Womb 2 / Utero 2 / Scarred Womb 2
9. Cathedral / Sheol
10. The Chest / Dark Room
11. Downpour 1 / Dross 1
12. Downpour 2 / Dross 2
13. Mines 1 / Ashpit 1
14. Mines 2 / Ashpit 2
15. Mausoleum 1 / Gehenna 1
16. Mausoleum 2 / Gehenna 2
17. Corpse 1
18. Corpse 2

> Tip: A Crown of Light icon will appear next to the coin count UI when the "no hit" objective has not yet been accomplished for the particular character and floor combination.

### Boss-Based Objectives (99)

There is one unlock for surviving for 2 minutes without taking a hit for each boss.

However, the following bosses have custom timer lengths:

- Brownie (#58) - 1 minute (because he damages himself)
- Visage (#78) - 1 minute
- Siren (#79) - 1 minute
- Hornfel (#82) - 1 minute
- Baby Plum (#84) - 1 minute (because she flies away)
- Scourge (#85) - 1 minute
- Rotgut (#87) - 1 minute

Additionally, the following bosses are excluded entirely:

- Delirium (#70) (would be unfair since the boss is poorly designed)
- Ultra Greedier (#71) (not included since Ultra Greed is included)
- Raglich (#98) (unfinished boss)

> Tip: A timer will appear on the screen if a boss is in the room and the corresponding objective has not yet been accomplished.

### Challenge-Based Objectives (45)

There is one unlock for completing each challenge.

### Total Objectives

There are 1054 + 99 + 45 = 1198 objectives in total.

<br>

## Unlock List

### Characters (33)

- The first character unlocked will always be Isaac. All other characters start off locked.
- Each character is guaranteed to unlock another random character from the following objectives:
  - Mom
  - It Lives
  - Isaac
  - Blue Baby
  - Satan
  - The Lamb

### Paths (10)

- The following things start off locked and are inaccessible:
  - The Polaroid + The Chest
  - The Negative + The Dark Room
  - Key Piece 1 + Key Piece 2 + Mega Satan
  - Boss Rush
  - Blue Womb
  - The Void
  - Repentance floors
  - The Ascent
  - Greed Mode
  - Black Markets
- Isaac is guaranteed to unlock both The Chest & Dark Room from one of his easier objectives.
- The rest can be randomly unlocked from any objective.

### Alternate Floors (11)

- The following alternate floors start out locked:
  - Cellar
  - Burning Basement
  - Catacombs
  - Flooded Caves
  - Necropolis
  - Dank Depths
  - Utero
  - Scarred Womb
  - Dross
  - Ashpit
  - Gehenna

### Challenges (45)

All challenges start off locked.

### Collectibles (697)

Every collectible in the game is locked, with the following exceptions:

- 5 collectibles from the Boss Room pool for each stat (#2):
  - Breakfast (#25) (HP)
  - Wooden Spoon (#27) (speed)
  - Mom's Underwear (#29) (range)
  - Wire Coat Hanger (#32) (tears)
  - Cat-O-Nine-Tails (#165) (damage)
- Quest collectibles (except for The Polaroid and the Negative):
  - Key Piece 1 (#238)
  - Key Piece 2 (#239)
  - Broken Shovel (#550)
  - Broken Shovel (#551)
  - Mom's Shovel (#552)
  - Knife Piece 1 (#626)
  - Knife Piece 2 (#627)
  - Dogma (#633)
  - Dad's Note (#668)
- Special non-obtainable collectibles:
  - Book of Belial Birthright (#59)
  - Broken Glass Cannon (#474)
  - Damocles Passive (#656)
  - Recall (#714)
  - Hold (#715)
- Banned collectibles in this mod:
  - Plan C (#475) (would trivialize some difficult boss objectives)
  - Clicker (#482) (would break harder character objectives)
  - R Key (#636) (would trivialize some difficult objectives)

Also note that:

- Even if Ankh (#161) is unlocked, it is removed from pools until all of the Blue Baby objectives are completed.
- Even if Judas' Shadow (#311) is unlocked, it is removed from pools until all of the Judas objectives are completed.
- Even if Lazarus Rags (#332) is unlocked, it is removed from pools until all of the Lazarus objectives are completed.

### Trinkets (186)

Every trinket in the game is locked, with the following exceptions:

- Banned trinkets in this mod:
  - Karma (#85) (would be useless; see below)
  - 'M (#138) (would break collectible unlocks)

If no trinkets are unlocked, they will be converted to pennies.

Also note that:

- Even if Mysterious Paper (#21) or Missing Poster (#23) are unlocked, they are removed from pools until all of The Lost objectives are completed.
- Even if Broken Ankh (#28) is unlocked, it is removed from pools until all of the Blue Baby objectives are completed.

### Cards & Runes (96)

Every card/rune in the game is locked (except for Rune Shard, which will never spawn). If no cards/runes are unlocked, they will be converted to pennies.

### Pill Effects (50)

- Every pill effect in the game is locked. If no pill effects are unlocked, pills will be converted to pennies.

### Other Pickups (37)

- Only half red heart pickups start out unlocked. Every other heart pickup in the game is locked. (11)
- Only pennies start out unlocked. Every other coin in the game is locked. (6)
- Only normal bomb pickups start out unlocked. Every other bomb pickup in the game is locked. (2)
- Only normal key pickups start out unlocked. Every other key pickup in the game is locked. (3)
- Every battery type in the game is locked. Non-unlocked batteries are converted to pennies. (4)
- Every sack type in the game is locked. Non-unlocked sacks are converted to pennies. (2)
- Only normal chests start out unlocked. Every other chest type in the game is locked. (9)

### Slots (15)

- Every slot entity (e.g. machines and beggars) is locked behind a random objective. Non-unlocked slot entities are removed.

### Grid Entities (13)

- The following grid entities start out locked:
  - Tinted Rocks (4.0)
  - Urns (6.0)
  - Mushrooms (6.0)
  - Skulls (6.0)
  - Polyps (6.0)
  - Golden Poop (14.3)
  - Rainbow Poop (14.4)
  - Black Poop (14.5)
  - Charming Poop (14.11)
  - Crawlspaces (18.0)
  - Reward Plates (20.1)
  - Super Tinted Rocks (22.0)
  - Fool's Gold Rocks (27.0)

### Miscellaneous (5)

- The following other things start out locked:
  - Beds
  - Shopkeepers
  - Golden Trinkets
  - Gold Pills
  - Horse Pills

### Total Unlocks

There are 33 + 10 + 11 + 45 + 697 + 186 + 96 + 50 + 37 + 15 + 13 + 5 = 1198 unlocks in total.

<br>

## Modes

When starting a new seed, you can select between two modes:

### 1) Casual Mode (Full Random)

In casual mode, things will mostly unlock in a completely random order, with some small exceptions for items that would be completely useless otherwise. (For example, if you unlock Deck of Cards before you have any cards unlocked, you will unlock a Fool card instead, and the place where you were supposed to unlock the Fool card will instead unlock Deck of Cards.)

This mode can make a randomizer playthrough extremely easy, because if your first unlock is an extremely powerful item (e.g. Mom's Knife), then each subsequent run will be trivialized (until the item pool is sufficiently diluted). If you want a challenge, do not play on this mode.

### 2) Hardcore Mode (Logic)

In hardcore mode, we want to prevent the situation where you unlock powerful items early on in your playthrough.

- Collectibles, trinkets, cards, and pill effects will progressively unlock based on their quality classification. (75% of 0 quality items must unlock first before 1 quality items, and so on.)
  - Since trinkets and cards do not have a vanilla quality classification, a custom one is computed for this one.
- Hearts will unlock in the following order:
  - TODO
- Coins will unlock in the following order:
  - TODO
- Bombs will unlock in the following order:
  - TODO
- Keys will unlock in the following order:
  - TODO
- Batteries will unlock in the following order:
  - TODO
- Sacks will unlock in the following order:
  - TODO
- Chests will unlock in the following order:
  - TODO

<br>

## Other Features

### Dead Sea Scrolls Integration

The mod comes with an in-game menu called _Dead Sea Scrolls_. (This is the same menu that is used in other mods, like [_Fiend Folio_](https://steamcommunity.com/sharedfiles/filedetails/?id=2851063440).) You can open the menu by pressing `c` after starting a run.

The menu will show you how many objectives you have left in your playthrough and other information.

### Death Tracker

The mod includes a death tracker. If you are a streaker, try to complete the randomizer with as few deaths as possible! (Starting a new run without finishing the previous run counts as a death.)

### Timer

The mod includes an on-screen timer, similar to the [Racing+](https://isaacracing.net/) mod. The timer starts off hidden by default, but you can enable it in the Dead Sea Scrolls menu. If you are a speedrunner, try to complete the randomizer as fast as possible!

Unlike the timer in Racing+, the timer in this mod tracks in-game time. Thus, the timer will be paused when the game is paused or when you are in the main menu.

### Donation Machine Removal

- The mod removed all Donation Machines from the game in order to increase the difficulty and prevent individual runs from influencing each other.
- Greed Donation Machines are also removed because they serve no purpose in this mod.
- Additionally, the Karma trinket is removed from the game because it would serve no purpose.

### Eden TMTRAINER Handling

In this mod, Eden can never start with TMTRAINER. (This is a quality of life fix for a convention taken from the Isaac streaking community, because starting TMTRAINER is unfair for streaking purposes. For example, a TMTRAINER collectible could have the effect of `when enemy dies --> spawn another enemy`, making the run impossible to complete.)

### Pause Prevention

The mod prevents you from pausing the game in uncleared rooms in order to prevent pause abuse. (This is a rule taken from the Isaac streaking community.)

If you are allowed to pause in a room with enemies, then you can think about the best movement patterns to defeat the enemies, and mentally prepare exactly what to do. This kind of thing goes against the spirit of the competition; players are intended to have to react instantly to new situations.

### Save & Quit Prevention

The mod prevents you from using the save & quit feature of the game in order to prevent save & quit abuse. If you try to resume a game, the mod will restart you back at the beginning. (This is a rule taken from the Isaac streaking community.)

If you are allowed to save & quit, then you can do things like prevent incoming damage, exploit Restock Machines, and reset enemy patterns. All of these things go against the spirit of the competition; players are intended to have to complete a room in one attempt and they should not get "do-overs" when they make movement mistakes.

### Softlock Prevention

Since saving & quitting is prevented, the mod will attempt to fix as many vanilla softlocks as possible. The following situations are fixed:

#### Mega Mush + Lucky Pennies

Lucky Pennies are automatically converted to normal pennies while the Mega Mush effect is active.

### Victory Lap Prevention

Victory Laps and the "Rerun" feature on the main menu are banned for the same reason that R Key is. As a quality of life fix, the Victory Lap popup will no longer appear after defeating The Lamb.

### Void Portal Deletion

The mod deletes all Void Portals outside of the Blue Womb. This is both a balance change (since it slightly increases the difficulty of Delirium) and a quality of life fix (since players can no longer accidentally enter a Void Portal and lose their streak).

### Chill Room

The mod provides a custom challenge that simply locks you in the starting room of the run. You can use this challenge to review your achievements and plan for your next run. Runs started inside of the challenge will not count towards your randomizer stats or deaths.

### Other Miscellaneous Quality of Life Improvements

- <!-- "ui_hearts.png" --> The heart UI sprites have been slightly modified so that it is easier to see an empty heart container on a black background.
- <!-- SilenceMomDad --> The audio clips of mom and dad on the Ascent are silenced.
- <!-- ForceFadedConsoleDisplay --> The "faded console display" feature is automatically enabled in the "options.ini" file, which allows you to visually see when an error in the game happens. Please report bugs to the developers in [the Discord server](https://discord.gg/GwhUeQjHTF).

### Custom Console Commands

The mod provides several custom [console commands](https://bindingofisaacrebirth.fandom.com/wiki/Debug_Console):

- `achievementRandomizer [mode] [seed]` - Starts a new playthrough using the specified seed. For example: `achievementRandomizer hardcore 12345`
- `spoilerLog` - Writes out a spoiler log to the "log.txt" file. Note that the unlocks may not be accurate, since the mod swaps an unlock if it detects that you should not get it yet.

<br>

### F.A.Q. (Frequently Asked Questions)

#### Why don't special rooms (e.g. Planetariums, Libraries, etc.) start off locked?

The modding API does not allow for modifying floors or influencing the floor generation. Thus, this is a technical limitation that is difficult to overcome.

There are several workarounds to this problem, but we have decided to not implement them:

- Reseeding - If a floor has a locked special floor, it is possible for mods to reseed the floor (i.e. generate a new floor from scratch). With this solution, we would keep reseeding the floor over and over until we found one that had special rooms that satisfied our unlock conditions. However, reseeding in this way is very laggy. It also prevents Dream Catcher from working properly. There is also no guarantee that a valid floor would ever be created (depending on the constraints of which special rooms are chosen to be in the unlock pool).
- Door Removal & Minimap Removal - It is possible for mods to delete the doors to the room and delete the icon from the minimap, which gives the appearance of the special room not existing. However, it is still possible to teleport inside of the room with the Teleport collectible, Telepills, and so on. This could be handled by manually moving the player out of the room and then re-playing the appropriate teleport animation. The main problem with this approach is that the floor has less rooms than it is supposed to. In other words, in a hypothetical where a floor had 4 / 7 locked special rooms, then only 3 special rooms would appear on the map and the floor would feel empty.
- Data Replacement - It is possible for mods to replace the room data for certain rooms after the floor has already been generated. However, this requires either caching every special room layout in the game in code, or spending time at first boot to manually insert the data for every special room in the game into memory, which would be very laggy. Both solutions are fairly terrible and the benefits of the feature would not outweigh the enormous complexity required.

<br>
