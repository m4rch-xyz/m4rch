$("head").first().append(`<link rel=\"stylesheet\" href=\"${window.origin}/lightmode.css\">`)

window.onload = function () {

	/* - HEADER - */
	$(".navigator-item").css("transition", "background 0.4s")
	$("#header").css("transition", "color 0.4s")

	/* - PROJECT - */
	$(".project, .category-name").css("transition", "background 0.6s")
	
	$(".category-name").off().on("click", el => toggleProjectCategory(el.target))
}
