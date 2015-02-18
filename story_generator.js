$(document).ready(function(){
	function getStory(){
		$('.loading').show();
		$.ajax({
		  url: "http://story-generator.appspot.com/api/v1.0/story"
		})
		.done(function(html){
			var json = jQuery.parseJSON(html);
			var description = $('.description');
			var synopsis = $('.synopsis p');
			var title = $('.title');
			title[0].textContent = json["Name"];
			description[0].textContent = json["description"];
			if(json["storyline"])
				synopsis[0].textContent = json["storyline"];
			else
				synopsis[0].textContent = "Sorry, no synopsis available.";
			$('.loading').hide();
		});
	}
	getStory();

	$('#generate').on("click",function(e){
		getStory();
		$("#synopsis").removeClass("hidden");
		$(".synopsis").addClass("hidden");
	});
	$("#synopsis").on("click",function(e){
		$("#synopsis").toggleClass("hidden");
		$(".synopsis").toggleClass("hidden");

	})
});