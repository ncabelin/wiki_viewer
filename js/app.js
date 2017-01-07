$(document).ready(function() {
  $("#search").submit(function(e) {
    e.preventDefault();
    $("#results").empty();
    var s = document.getElementById("searchWord").value;
    var u = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + s + "&limit=20&namespace=0&format=jsonfm";
    console.log(s);
    $.ajax({
        url: u,
        type: 'GET',
        dataType: 'jsonp',
				data: {
						format:"json"
				},
    }).success(function(data) {
      console.log(data);
			for (var i = 0; i < data[1].length; i++) {
					$("#results").append("<div class='well positioned'><h3>"+data[1][i]+"</h3><p>"+data[2][i]+"</p><p><a href='"+data[3][i]+"'>more...</a></p>");	
			};
    });
  });
 });