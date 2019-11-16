var scaleAmount = $(window).height()/($("#page").height()+30)
console.log(scaleAmount)
$("#page").css({
	"transform":"scale("+scaleAmount+")"
})