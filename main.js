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

function onFormSubmit(e){
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const message = $("#inp_message")

if(!$(email).val() && !$(subject).val() && !$(message).val() ){
        alert("Fill the form")
    }else if(!$(email).val()){
        alert("Email is requiered")
    }else if(!$(subject).val()){
        alert("Subject is requiered")
    }else if(!$(message).val()){
        alert("Message is requiered")
    }else{
        alert("Form Submitted")
        $(email).val("")
        $(subject).val("")
        $(message).val("")
    }

}