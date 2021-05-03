/*
function fun_test()
{
   var userEmail = document.getElementById("userEmail").value;
    var at = userEmail.indexOf("@");
    var userName = userEmail.substring(0,at);
    document.getElementById("outName").value = userName;
    var domain = userEmail.substring(at + 1);
    document.getElementById("outEmail").value = domain;
}
*/
// let emp1 = new Map()
//     emp1.set("userName", "Islam");
//     emp1.set("userAge", 22);
//     emp1.set("userSalary",5000);
//     console.log(emp1);
//
// let emp2 = new Map()
// emp2.set("userName", "Ahmed");
// emp2.set("userAge", 25);
// emp2.set("userSalary",10000);

// for (let value of emp2.values()) {
//     console.log(value);
// }
// let array = ["islam","islam","ali","ali","islam"];
// let uniqueValues = new Set(array);
// console.log(uniqueValues);
//
// let users = new Set();
// users.add("islam");
// users.add("islam");
// users.add("ali");
// users.add("ali");
// console.log(users)

// $("button").click(function () {
//     // $("#demo").fadeTo(3000,0.5)
//     // $("#demo").fadeToggle(3000)
//
//     $('#demo').animate({width: "100%"});
//     $('#demo').animate({height: "500px"});
//
//     $('#demo').hide(2000, function () {
//         $('#demo').fadeIn(2000)
//     })
// })
//
// $(".img-text").click(function (e) {
//     let imgSrc = $(this).attr("src");
//     $("#imgMain").attr("src",imgSrc)
// })

// $('.btn').click(function () {
//     $('.test').slideDown(1000).fadeOut(1000).show(1000);
// })

$('#about').animate({width: "100%"} ,1000, function () {
    $('#about').animate({height: "100vh"},1000, function () {
        $('#about h1').fadeIn(1000,function () {
            $('#about .col-md-4').slideDown(1000)
        })
    })
});