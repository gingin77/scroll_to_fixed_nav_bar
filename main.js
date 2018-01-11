window.onscroll = function() {getScrollPosition()}

// var scrollObject = {}

    logo = document.getElementById('logo')
    home = document.getElementById('home')
    nav_list_ul = document.getElementById('nav_list_ul')
    // name = document.getElementById('name')
    // console.log(name)

    header = document.getElementById('header')
    console.log(header)

function getScrollPosition(){
  var scrollBarPosition = window.pageYOffset | document.body.scrollTop

  if (document.body.scrollTop > 214 || document.documentElement.scrollTop > 214) {
    document.getElementById("scroll_reporter").className = "test"
    document.getElementById('scroll_reporter').innerHTML = "Scroll position is greater than Y; Scroll position is: " + scrollBarPosition
    document.getElementById('nav_bar_div').classList.remove('scroll')
    document.getElementById('nav_bar_div').classList.add('fixed')

    logo.classList.remove('img_expanded')
    logo.classList.add('img_shrink')
    nav_list_ul.classList.remove('scroll')
    nav_list_ul.classList.add('fixed_list')
    home.insertAdjacentElement('beforebegin', logo)

  } else {
    document.getElementById("scroll_reporter").className = ""
    document.getElementById('scroll_reporter').innerHTML = "Scroll position is NOT greater than Y; Scroll position is: " + scrollBarPosition
    document.getElementById('nav_bar_div').classList.remove('fixed')
    document.getElementById('nav_bar_div').classList.add('scroll')

    logo.classList.remove('img_shrink')
    logo.classList.add('img_expanded')

    nav_list_ul.classList.remove('fixed_list')
    nav_list_ul.classList.add('scroll')

    header.insertAdjacentElement('afterbegin', logo)
}


}



//
// function getScrollPosition(){
//     scrollObject = {
//        x: window.pageXOffset,
//        y: window.pageYOffset
//     }
//
//     var scrollBarPosition = window.pageYOffset | document.body.scrollTop
//     // If you want to check distance
//     document.getElementById('grab_me').innerHTML = "Scroll position is: " + scrollBarPosition
// }
//
// var scrollObject = {}
//
// window.onscroll = getScrollPosition
//
// nav_bar = document.getElementById("navigation")
//
// function fixNavBar(){
//   scrollObject = {
//      x: window.pageXOffset,
//      y: window.pageYOffset
//   }
//
//   var scrollBarPosition = window.pageYOffset | document.body.scrollTop
//
//   if (scrollBarPosition > 100) {
//     nav_bar.classList.remove("main-nav")
//     nav_bar.classList.add("scroll-to-fixed-fixed")
//   }
// }
//
// window.onscroll = fixNavBar
