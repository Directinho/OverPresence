const Presence = new Presence ({
 clientid="856869173106704424",
 gameid="21640"
}),
  	pages: Record<string, PresenceData> = {
      Valorant:"valorant",
      Afk:"afk",
      MainMenu:"mainmenu",
      Triad:"heaven",
      Duality:"bind",
      Bonsai:"split",
      Port:"icebox",
      Foxtrot:"breeze",
      Canyon:"fracture",
      Range:"praticed",
      CharacterSelectPersistentLevel:"character",
      death:"death",
      Clay_PC_C:"raze",
      Pandemic_PC_C:"viper",
      Wraith_PC_C:"omen",
      Hunter_PC_C:"sova",
      Thorne_PC_C:"sage",
      Phoenix_PC_C:"Phoenix",
      Wushu_PC_C:"jett",
      Gumshoe_PC_C:"cypher",
      Sarge_PC_C:"brimstone",
      Breach_PC_C:"breach",
      Vampire_PC_C:"reyna",
      Killjoy_PC_C:"killjoy",
      Guide_PC_C:"skye",
      Stealth_PC_C:"yoru",
      Rift_PC_C:"astra",
      Grenadier_PC_C:"kayo",
      Deadeye_PC_C:"chamber",
      Sprinter_PC_C:"neon",
      BountyHunter_PC_C:"fade",
      Bomb:"bomb",
      Quick Bomb:"spikerush",
      Ranked:"ranked",
      Deathmatch:"deathmatch",
      Escalation:"escalation",
      Kills:"kills",
      assists:"assists",
      headshots:"headshots",
      attack:"attack",
      defense:"defense",
      won:"win",
      lost:"lost",
      score:"score",
      0:"unraked",
      3:"iron1",
      4:"iron2",
      5:"iron3",
      6:"bronze1",
      7:"bronze2",
      8:"bronze3",
      9:"silver1",
      10:"silver2",
      11:"silver3",
      12:"gold1",
      13:"gold2",
      14:"gold3",
      15:"platinum1",
      16:"platinum2",
      17:"platinum3",
      18:"diamond1",
      19:"diamond2",
      20:"diamond3",
      21:"immortal1",
      22:"immortal2",
      23:"immortal3",
      24:"radiant",
      match_end:"end",
      match_start:"start",
      event:"event"
    },
  	presenceTimestamp = Math.floor(Date.now() / 1000);

presence.on("UpdateData", async () => {
  	let presenceData: PresenceData = {		
  startTimestamp: presenceTimestamp
},
  else {
    switch (event);
      case (event = "MainMenu") {
        presence.largeimagekey = "valorant";
        presence.details = "Playing Valorant";
        presence.states = "In Main Menu";
         
    }
  }
