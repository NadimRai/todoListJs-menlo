// $('li').click(function(){
// 	alert("Clicked li");
// })

// // turns list red
// $('li').click(function(){
// 	$(this).css("color","red");
// });

// // strike line-through
// $('li').click(function(){
// 	$(this).css("color","red");
// 	$(this).css("text-decoration", "line-through");
// });

// // strike line-through in single line -- watch out for text-decoration
// $('li').click(function(){
// 	$(this).css({
// 		color: "red",
// 		textDecoration: "line-through"
// 	});
// });

// // strike line-through 
// $('li').click(function(){
// 	console.log($(this).css("color"));
// 	if($(this).css("color") === "rgb(255, 0, 0)"){
// 		console.log("it is currently red");
// 	}
// 	$(this).css({
// 		color: "red",
// 		textDecoration: "line-through"
// 	});
// });

// strike line-through toggle color
// $('li').click(function(){
// 	console.log($(this).css("color"));
// 	if($(this).css("color") === "rgb(255, 0, 0)"){
// 		$(this).css({
// 			color: "black",
// 			textDecoration: "none"
// 		});
// 	}else{
// 		$(this).css({
// 			color: "red",
// 			textDecoration: "line-through"
// 		});
// 	}
// });

//strike line-through toggle with class
$('li').click(function(){
	$(this).toggleClass("completed");
});