function confirm_delete() {
    return confirm("Bạn muốn xóa bản ghi này ?");
}

$(document).ready(function() {
    function default_GUI() {
        $("#find_type").show();
        $("#add_type").hide();
        $("#nav_find_type").addClass("active");
        $("#nav_add_type").removeClass("active");
    }
    default_GUI();
    $("#nav_find_type").click(default_GUI);

    $("#nav_add_type").click(function() {
        $("#add_type").show();
        $("#find_type").hide();
        $("#nav_add_type").addClass("active");
        $("#nav_find_type").removeClass("active");
    });
});