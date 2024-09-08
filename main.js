function toggleDetail(e) {
    const target = $(e.target)
if($(target).hasClass("activeDetails")){
    $(target).html("More info").removeClass("activeDetails")
}else{
    $(target).html("Less Info").addClass("activeDetails")

}

    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()

}