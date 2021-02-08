function toggleProjectCategory (el) {
	let $el = $(el).parent().children(".project-list")
	$el.css("display", $el.css("display") == "none" ? "grid" : "none")
}
