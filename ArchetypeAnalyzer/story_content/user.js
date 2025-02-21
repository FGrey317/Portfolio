window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script85 = function()
{
  var player = GetPlayer();

// Create an array of numbers from 1 to 21 (the 21 states for each card)
var states = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

// Shuffle the array of states
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the states array
shuffle(states);

// Assign each card a random number (state) from the shuffled array
player.SetVar("Card1", states[0]);
player.SetVar("Card2", states[1]);
player.SetVar("Card3", states[2]);
player.SetVar("Card4", states[3]);
player.SetVar("Card5", states[4]);
player.SetVar("Card6", states[5]);
player.SetVar("Card7", states[6]);
player.SetVar("Card8", states[7]);
player.SetVar("Card9", states[8]);
player.SetVar("Card10", states[9]);
player.SetVar("Card11", states[10]);
player.SetVar("Card12", states[11]);
player.SetVar("Card13", states[12]);
player.SetVar("Card14", states[13]);
player.SetVar("Card15", states[14]);
player.SetVar("Card16", states[15]);
player.SetVar("Card17", states[16]);
player.SetVar("Card18", states[17]);
player.SetVar("Card19", states[18]);
player.SetVar("Card20", states[19]);
player.SetVar("Card21", states[20]);

}

};
