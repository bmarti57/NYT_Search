


$("#search-btn").click(function(){
	var searchIN = 	$("#search-term").val();
	console.log(searchIN);
	var startDate = $("#start").val();
	if(startDate==""){
		startDate =  "18510101";
	}
	else{
		startDate = startDate + ("0101");
	}

	console.log(startDate);
	var endDate = $("#end").val();
	if(endDate==""){
		endDate =  "20170101";
	}
	else{
		endDate = endDate + ("0101");
	}
	console.log(endDate);
	var numRecords = document.getElementById("records");
	var options = numRecords.options[numRecords.selectedIndex].value;
	console.log(options);

	var queryURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchIN+"&begin_date="+startDate+"&end_date="+endDate+"&api-key=f49604b2bc3c4d4ba58ce1b865c4248d";



		for (var i = 0; i < options; i++){

		$.ajax({
        url: queryURL,
        method: "GET"
     	}).done(function(data){
     		console.log(data.response);
		var article  = $("<div>");
		var strng = $("<strong>");
		var subHead = $("<h5>");
		var date = $("<h5>");
		var section = $("<h5>");
		var spaaaan = $("<span>");
		var linka = $("<a>");

		$(spaaaan).text(i);
		$(strng).text(data.response.title);
		$(subHead).text(data.response.author);






		})
	}
})