window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script37 = function()
{
  var player = GetPlayer();
var total = player.GetVar("AdultScenarioScore") + 
            player.GetVar("TeenScenarioScore") + 
            player.GetVar("AssessmentScore") + 
            player.GetVar("CPRessentialsScore");

player.SetVar("HealthProgress", total);

}

window.Script38 = function()
{
  var player = GetPlayer();
var total = player.GetVar("AdultScenarioScore") + 
            player.GetVar("TeenScenarioScore") + 
            player.GetVar("AssessmentScore") + 
            player.GetVar("CPRessentialsScore");

player.SetVar("HealthProgress", total);

}

window.Script39 = function()
{
  var player = GetPlayer();
var total = player.GetVar("AdultScenarioScore") + 
            player.GetVar("TeenScenarioScore") + 
            player.GetVar("AssessmentScore") + 
            player.GetVar("CPRessentialsScore");

player.SetVar("HealthProgress", total);

}

window.Script40 = function()
{
  var player = GetPlayer();
var total = player.GetVar("AdultScenarioScore") + 
            player.GetVar("TeenScenarioScore") + 
            player.GetVar("AssessmentScore") + 
            player.GetVar("CPRessentialsScore");

player.SetVar("HealthProgress", total);

}

window.Script41 = function()
{
  var player = GetPlayer();
var total = player.GetVar("AdultScenarioScore") + 
            player.GetVar("TeenScenarioScore") + 
            player.GetVar("AssessmentScore") + 
            player.GetVar("CPRessentialsScore");

player.SetVar("HealthProgress", total);

}

window.Script42 = function()
{
  // Get the current score for each scenario
var adultScore = GetPlayer().GetVar("AdultScenarioScore");
var childScore = GetPlayer().GetVar("TeenScenarioScore");
var assessmentScore = GetPlayer().GetVar("AssessmentScore");
var cprScore = GetPlayer().GetVar("CPRessentialsScore");

// Set the total possible score for each area
var totalScore = 25; // Total score for each scenario

// Calculate the percentages
var adultScorePercentage = (adultScore / totalScore) * 100;
var childScorePercentage = (childScore / totalScore) * 100;
var assessmentScorePercentage = (assessmentScore / totalScore) * 100;
var cprScorePercentage = (cprScore / totalScore) * 100;

// Set the calculated percentages to their respective variables in Storyline
GetPlayer().SetVar("AdultScenarioScorePercentage", adultScorePercentage);
GetPlayer().SetVar("TeenScenarioScorePercentage", childScorePercentage);
GetPlayer().SetVar("AssessmentScorePercentage", assessmentScorePercentage);
GetPlayer().SetVar("CPRessentialsScorePercentage", cprScorePercentage);
}

window.Script43 = function()
{
  // Get the current score for each scenario
var adultScore = GetPlayer().GetVar("AdultScenarioScore");

// Set the total possible score for each area
var totalScore = 25; // Total score for each scenario

// Calculate the percentages
var adultScorePercentage = (adultScore / totalScore) * 100;

// Set the calculated percentages to their respective variables in Storyline
GetPlayer().SetVar("AdultScenarioScorePercentage", adultScorePercentage);
}

window.Script44 = function()
{
  // Get the current score for each scenario
var assessmentScore = GetPlayer().GetVar("AssessmentScore");

// Set the total possible score for each area
var totalScore = 25; // Total score for each scenario

// Calculate the percentages
var assessmentScorePercentage = (assessmentScore / totalScore) * 100;

// Set the calculated percentages to their respective variables in Storyline
GetPlayer().SetVar("AssessmentScorePercentage", assessmentScorePercentage);
}

window.Script45 = function()
{
  // Get the current score for each scenario
var childScore = GetPlayer().GetVar("TeenScenarioScore");

// Set the total possible score for each area
var totalScore = 25; // Total score for each scenario

// Calculate the percentages
var childScorePercentage = (childScore / totalScore) * 100;

// Set the calculated percentages to their respective variables in Storyline
GetPlayer().SetVar("TeenScenarioScorePercentage", childScorePercentage);
}

window.Script46 = function()
{
  // Get the current score for each scenario
var cprScore = GetPlayer().GetVar("CPRessentialsScore");

// Set the total possible score for each area
var totalScore = 25; // Total score for each scenario

// Calculate the percentages
var cprScorePercentage = (cprScore / totalScore) * 100;

// Set the calculated percentages to their respective variables in Storyline
GetPlayer().SetVar("CPRessentialsScorePercentage", cprScorePercentage);
}

window.Script47 = function()
{
  // Retrieve values from Storyline variables
var player = GetPlayer();
var easyScore = player.GetVar("EasyModeScore");
var normalScore = player.GetVar("NormalModeScore");
var hardScore = player.GetVar("HardModeScore");

// Calculate the total mini-games score
var miniGamesTotal = easyScore + normalScore + hardScore;

// Set the combined score in Storyline as MiniGamesScore
player.SetVar("MiniGamesScore", miniGamesTotal);

}

window.Script48 = function()
{
  // Retrieve values from Storyline variables
var player = GetPlayer();
var easyScore = player.GetVar("EasyModeScore");
var normalScore = player.GetVar("NormalModeScore");
var hardScore = player.GetVar("HardModeScore");

// Calculate the total mini-games score
var miniGamesTotal = easyScore + normalScore + hardScore;

// Set the combined score in Storyline as MiniGamesScore
player.SetVar("MiniGamesScore", miniGamesTotal);

}

};
