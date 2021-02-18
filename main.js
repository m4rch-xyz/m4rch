function toggleProjectCategory (el) {
	let $el = $(el).parent().children(".project-list")
	
	$(el).css("background", $el.css("display") == "none" ? "var(--category-name-background-selected)" : "var(--category-name-background)")
	$el.css("display", $el.css("display") == "none" ? "grid" : "none")
}

function toggleLightDark () {
	let lightdark = $.cookie.get("lightdark") == "darkmode" ? "lightmode" : "darkmode"
	$.cookie.set("lightdark", lightdark, { path: "/", expires: 365 })

	$("#theme").attr("href", `${window.origin}/${lightdark}.css`)
	if (window.location.pathname == "/cookies/") setTimeout(loadActiveCookies, 200)
}
