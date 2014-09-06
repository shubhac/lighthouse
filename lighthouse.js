/**
 * Created by sbkloaner-sbktech on 8/2/14.
 */
var superBlinders = [ ["Firestorm", 4000], ["Solar Death Ray", 6000], ["Supernova", 12000] ];
var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 0
};

var rangerNames = ["Nick Walsh", "Drew Barontini", "Christine Wong"];
var skillz = ["magnification burn", "uppercut launch", "bomb defusing"];
var stations = [2,3,1];



function addRanger(location, name, skillz, station){

    alert("calling addRanger with\n location:" + location + "\nname:" + name + "\nskillz:" + skillz)
    for(var i = 0; i<= lighthouseRock.numRangers; i++){
        if(stations[i] == location){
            lighthouseRock["ranger"+i+1].name = name;
            lighthouseRock["ranger"+i+1].skillz = skillz;
            lighthouseRock["ranger"+i+1].station = station;
            return;
        }
    }
}

addRanger(2,rangerNames[0], skillz[0],2);
