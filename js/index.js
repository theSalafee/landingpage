$(function () {
    $(".corpFormationTab, .nonprofitFormationTab").hide();

    $(".llcBtn, .corpBtn, .nonprofitBtn").bind("click", function () {
        $(".corpFormationTab, .llcFormationTab, .nonprofitFormationTab").hide();

        if ($(this).attr("class") == "llcBtn") {
            $(".llcFormationTab").show();
        } else if ($(this).attr("class") == "corpBtn") {
            $(".corpFormationTab").show();
        } else if ($(this).attr("class") == "nonprofitBtn") {
            $(".nonprofitFormationTab").show();
        }
    });
});


