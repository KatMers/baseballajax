

var playerData;

$(document).ready(function() {
    console.log("Hello world.")
    getData();
});


var array = ["string1", "string2"];

var obj ={};

var obj2 = {
	"name" : "Katy",
	"things I like" : ["food", "some people"]
};

function getData() {
	$.getJSON("js/mersmann_baseballcard.json", function(data) {
		console.log(data);
		playerData = data;

		drawStuff();

});
}

function drawStuff() {

	$(".chart").html(playerData.name);

	$.each(playerData.stats, function(i, item) {
		$(".chart").append("<p>"+item.AVG+"</p>");
	});

}
