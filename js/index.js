
$(".corpFormationTab, .nonprofitFormationTab").hide();
$(".llcBtn, .corpBtn, .nonprofitBtn").bind("click", function () {
    $(".corpFormationTab, .llcFormationTab, .nonprofitFormationTab").hide();
    $(".llcBtn, .corpBtn, .nonprofitBtn").removeClass("active");
    $(this).addClass("active");

    if ($(this).attr("id") == "show_llcFormationTab") {
        $(".llcFormationTab").show();
    } else if ($(this).attr("id") == "show_corpFormationTab") {
        $(".corpFormationTab").show();
    } else if ($(this).attr("id") == "show_nonprofitFormationTab") {
        $(".nonprofitFormationTab").show();
    }
});

$("#nonprofitCard, #corpCard").hide();
$(".llcCardLink, .corpCardLink, .nonprofitCardLink").bind(
    "click",
    function () {
        $("#nonprofitCard, #corpCard, #llcCard").hide();
        $(".llcCardLink, .corpCardLink, .nonprofitCardLink").removeClass(
            "active"
        );
        $(this).addClass("active");

        if ($(this).attr("id") == "llcLink") {
            $("#llcCard").show();
        } else if ($(this).attr("id") == "corpLink") {
            $("#corpCard").show();
        } else if ($(this).attr("id") == "nonprofitLink") {
            $("#nonprofitCard").show();
        }
    }
);