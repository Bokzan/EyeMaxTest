$(document).ready(function () {
    $('.homeButton').click(function () {
        $('.innerContent').scrollTop(0);
    })
    // var scale1=self.setInterval(function () {
    //     $('.innerContainer').toggleClass('scale1');
    // },1000)
    var scale1 = self.setTimeout(function () {
        $('.innerContainer').addClass('scale1');
    }, 400)

});

$.ajax({
    url: "https://api.github.com/users/octocat/gists",
    type: "POST",
    data: {},
    dataType: "json",

    error: function (data) {
        console.log("ajax error");
    },
    success: function (data, status) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var newchild = document.createElement("div");

            var child =
                ' <div class="item">' +
                i + '.' + data.created_at +
                '</div>';

            newchild.innerHTML = child;
            document.getElementById("innerContent").appendChild(newchild);
        }
    }
});