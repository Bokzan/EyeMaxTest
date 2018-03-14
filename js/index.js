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

// $.ajax({
//     url: "http://gankeng.misney.net/users_list",
//     type: "GET",
//     data: {},
//     dataType: "json",
//
//     error: function (data) {
//         console.log("ajax error");
//     },
//     success: function (data, status) {
//         console.log(data);
//
//     }
// });