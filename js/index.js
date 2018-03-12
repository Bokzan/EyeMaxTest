$.ajax({
    url: "http://gankeng.misney.net/users_list",
    type: "GET",
    data: {},
    dataType: "json",

    error: function (data) {
        alert("加载失败，请刷新");
    },
    success: function (data, status) {
        console.log(data);

    }
});