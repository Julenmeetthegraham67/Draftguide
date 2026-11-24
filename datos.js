/* DATOS DE DRAFT HELPER
   Este es el único archivo que cambia tras cada parche de equilibrio.
   - tiers: tier list de cada categoría (S a F). El orden dentro de cada tier importa: los primeros son mejores.
   - catCounters: qué categorías frenan a cada categoría.
   - maps: modos y mapas del desplegable.
   - mapBonus: bonus por mapa (vacío hasta que haya tier lists por mapa).
   - roster: lista de brawlers.
   Última revisión de los datos: 24 de noviembre de 2026 */
var DATA={
 maps:{
  "Gem Grab":["Hard Rock Mine","Double Swoosh","Gem Fort","Undermine"],
  "Brawl Ball":["Center Stage","Pinball Dreams","Sneaky Fields","Triple Dribble"],
  "Heist":["Hot Potato","Bridge Too Far","Kaboom Canyon","Safe Zone"],
  "Hot Zone":["Dueling Beetles","Parallel Plays","Open Business","Ring of Fire"],
  "Bounty":["Dry Season","Hideout","Layer Cake","Shooting Star"],
  "Knockout":["Belle’s Rock","Out in the Open","Flaring Phoenix","Goldarm Gulch","New Horizons","Flowing Springs"]
 },
 mapBonus:{},
 tiers:{
  Tank:{A:["Draco", "Buzz", "Ash"],B:["Damian", "Rosa", "Bibi", "Ollie"],C:["Frank", "Buster", "Meg", "Hank"],D:["Trunk", "Darryl", "Bull", "El Primo", "Jacky"],F:["Bolt", "Sam"]},
  Assassin:{A:["Melodie", "Stu", "Nori", "Buzz", "Fang", "Mina", "Starr Nova"],B:["Shade", "Kaze", "Edgar", "Mortis", "Bibi", "Crow", "Alli", "Gigi", "Kit"],C:["Kenji", "Leon", "Lily"],D:["Mico"]},
  Sniper:{S:["Brock", "Mandy"],A:["Piper", "Najia", "Pierce", "Byron", "R-T", "Belle"],B:["Gus", "Angelo"],C:["Bea", "Nani"]},
  Thrower:{S:["Berry"],A:["Larry & Lawrie"],B:["Barley", "Willow", "Sprout", "Tick", "Ziggy"],C:["Juju", "Dynamike"],F:["Grom"]},
  "Anti-Tank":{S:["Gale", "Chester", "Rico"],A:["Spike", "Colette", "Emz", "Surge", "Cordelius", "Otis"],B:["Colt", "Maisie", "Griff", "Clancy", "Charlie", "Nita"],D:["Tara", "Shelly"]},
  Control:{S:["Lou", "Mr. P", "Amber", "Squeak"],A:["Max", "Vince", "8-Bit", "Sirius", "Ruffs", "Moe", "Lumi", "Finx", "Gene", "Janet", "Pearl"],B:["Meeple", "Eve", "Carl", "Cosmo", "Bo"],C:["Wendy", "Meg", "Lola", "Penny", "Chuck"],D:["Bonnie", "Jessie"]},
  Support:{S:["Berry"],A:["Max", "8-Bit", "Ruffs"],B:["Glowy", "Jae-Yong", "Gray", "Poco", "Pam"],C:["Doug", "Sandy"]}
 },
 roster:["8-Bit","Alli","Amber","Angelo","Ash","Barley","Bea","Belle","Berry","Bibi","Bo","Bolt","Bonnie","Brock","Bull","Buster","Buzz","Byron","Carl","Charlie","Chester","Chuck","Clancy","Colette","Colt","Cordelius","Cosmo","Crow","Damian","Darryl","Doug","Draco","Dynamike","Edgar","El Primo","Emz","Eve","Fang","Finx","Frank","Gale","Gene","Gigi","Glowy","Gray","Griff","Grom","Gus","Hank","Jacky","Jae-Yong","Janet","Jessie","Juju","Kaze","Kenji","Kit","Larry & Lawrie","Leon","Lily","Lola","Lou","Lumi","Maisie","Mandy","Max","Meeple","Meg","Melodie","Mico","Mina","Moe","Mortis","Mr. P","Najia","Nani","Nita","Nori","Ollie","Otis","Pam","Pearl","Penny","Pierce","Piper","Poco","R-T","Rico","Rosa","Ruffs","Sam","Sandy","Shade","Shelly","Sirius","Spike","Sprout","Squeak","Starr Nova","Stu","Surge","Tara","Tick","Trunk","Vince","Wendy","Willow","Ziggy"],
 catCounters:{Tank:["Anti-Tank","Control"],Assassin:["Tank","Anti-Tank"],Sniper:["Tank","Assassin"],Thrower:["Assassin"],"Anti-Tank":["Sniper","Thrower","Control"],Control:["Sniper","Thrower"],Support:[]}
};
