var o1 = document.getElementById('o1')
var o2 = document.getElementById('o2')
var t1 = document.getElementById('t1')
var t2 = document.getElementById('t2')
var th1 = document.getElementById('th1')
var th2 = document.getElementById('th2')





function showUp() {
    document.getElementById("options").classList.remove("ml-[-20rem]")
    document.getElementById("first").classList.add("hidden")
    document.getElementById("second").classList.remove("hidden")
    t2.classList.add("hidden")
    o2.classList.add("rotate-45")
    th2.classList.add("rotate-[135deg]")
    th2.classList.add("-mt-[4.5px]")
    th2.classList.add("rounded-full")
    o2.classList.add("rounded-full")
    document.getElementById("content").classList.add("blur-sm")
}
function Down() {
    document.getElementById("options").classList.add("ml-[-20rem]")
    document.getElementById("first").classList.remove("hidden")
    document.getElementById("second").classList.add("hidden")
    document.getElementById("content").classList.remove("blur-sm")
}
function searchBar() {
    document.getElementById("searchBar").classList.remove('right-[-50rem]')
    document.getElementById("searchBar").classList.add('right-2')
    document.getElementById("btn2").classList.remove("hidden")
    document.getElementById("btn1").classList.add("hidden")
    document.getElementById("opco").classList.add("blur-sm")
}
function searchBarHide() {
    document.getElementById("searchBar").classList.add('right-[-50rem]')
    document.getElementById("searchBar").classList.remove('right-2')
    document.getElementById("btn1").classList.remove("hidden")
    document.getElementById("btn2").classList.add("hidden")
    document.getElementById("opco").classList.remove("blur-sm")
}
var abt = document.getElementById("abt")
var sbc = document.getElementById("sbc")
var ext = document.getElementById("ext")
var fbk = document.getElementById("fbk")
var li1 = document.getElementById("li1")
var li2 = document.getElementById("li2")
var li3 = document.getElementById("li3")
var li4 = document.getElementById("li4")
function about() {
    li1.classList.add("border-b-2")
    li2.classList.remove("border-b-2")
    li3.classList.remove("border-b-2")
    li4.classList.remove("border-b-2")
    abt.classList.remove("hidden")
    sbc.classList.add("hidden")
    ext.classList.add("hidden")
    fbk.classList.add("hidden")
}
function subscribe() {
    li1.classList.remove("border-b-2")
    li2.classList.add("border-b-2")
    li3.classList.remove("border-b-2")
    li4.classList.remove("border-b-2")
    sbc.classList.remove("hidden")
    ext.classList.add("hidden")
    abt.classList.add("hidden")
    fbk.classList.add("hidden")
}
function external() {
    li1.classList.remove("border-b-2")
    li2.classList.remove("border-b-2")
    li3.classList.add("border-b-2")
    li4.classList.remove("border-b-2")
    sbc.classList.add("hidden")
    ext.classList.remove("hidden")
    abt.classList.add("hidden")
    fbk.classList.add("hidden")
}
function feedback() {
    li1.classList.remove("border-b-2")
    li2.classList.remove("border-b-2")
    li3.classList.remove("border-b-2")
    li4.classList.add("border-b-2")
    sbc.classList.add("hidden")
    ext.classList.add("hidden")
    abt.classList.add("hidden")
    fbk.classList.remove("hidden")
}

function abtcomp() {
    document.getElementById("abtcomp").classList.remove("-mt-[20rem]")
}
function abtcompblur() {
    document.getElementById("abtcomp").classList.add("-mt-[20rem]")
}
function extcomp() {
    document.getElementById("extcomp").classList.remove("mt-[-20rem]")
}
function extcompblur() {
    document.getElementById("extcomp").classList.add("mt-[-20rem]")
}


function mess(){
    var email = document.getElementById("email").value
    alert("We added "+email +" to our new Subscriber!!! Thank You!!!")
}

function messs(){
    var email = document.getElementById("mail").value
    alert("We added "+email +" to our new Subscriber!!! Thank You!!!")
}