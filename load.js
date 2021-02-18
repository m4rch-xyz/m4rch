$("head").first().append(`<link id=\"theme\" rel=\"stylesheet\" href=\"${window.origin}/${$.cookie.get("lightdark") || "lightmode"}.css\">`)

window.onload = function () {

	/* - HEADER - */
	$(".navigator-item, .footer-item").css("transition", "background 0.4s")
	$("#header").css("transition", "color 0.4s")


	/* - PROJECT - */
	$(".project, .category-name").css("transition", "background 0.6s")

	$(".category-name").off().on("click", el => toggleProjectCategory(el.target))


	/* - LIGHTDARK - */
	$("#lightdark").css("transition", "0.4s").on("click", toggleLightDark)


	/* - COOKIES - */
	if (window.location.pathname == "/cookies/") loadActiveCookies()

}
