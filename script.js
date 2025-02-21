//////////////////성진//////////////////
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginIcon = document.querySelector('.loginIcon')
let loginModal = document.querySelector('.loginModal')
let body = document.querySelector('body')
let lgModal = document.querySelector('.lgModal')
let xmark = document.querySelector('.fa-xmark')

window.onload = () => {
    loadingPage();
}

function loadingFadeout(){
    loading.classList.add('fadeOut')
}
function loadingPage(){
    setTimeout(loadingFadeout,50) // 테스트할 때 로딩화면 기다리기 싫어서 0.05초로 만들어 둠
}

loginIcon.addEventListener('click',function(){
    if(loginModal.style.display == 'none'){
        loginModal.style.display = 'flex'
    }
})

xmark.addEventListener('click',function(){
    loginModal.style.display = 'none'
})

loginModal.addEventListener('click', function(){
    if(event.target.className == 'loginModal'){
        loginModal.style.display = 'none'
    }
})


footerScroll.addEventListener('click',function(e){
    if(e.target.innerText=='HOME'){
        header.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '신간도서'){
        newBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '장르별 도서'){
        genreBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '리뷰'){
        reviewBook.scrollIntoView({
            behavior: "smooth"}) 
    }
})
///////////////////////////////////////

//슬라이드이벤트 셀렉터
let btnR = document.querySelector("#btnR");
let btnL = document.querySelector("#btnL");
let item = document.querySelectorAll(".slideItem")
let slider = document.querySelector(".bestSeller-sell-move")

let itemlength =item.length
let itemIndex = 0

let firstChild = slider.firstElementChild;
let firstclone = firstChild.cloneNode(true);

console.log(slider)


btnL.addEventListener("click",function(){
    if(itemIndex <= item.length){
        slider.style.transform = "translate(" + 100 * (itemIndex + 1)+"px)"
    }
    console.log(itemIndex)
    item[++itemIndex]
    
    if(itemIndex === item.length -1){
    setTimeout(function(){
        
            slider.style.transition = "0ms"
            slider.style.transform = "translate(" + 100 * (itemIndex + 1)+"px)"
        },300);
        itemIndex = -1;
    }
    item[++itemIndex]
        
    
    
})
btnR.addEventListener("click",function(){
    if(itemIndex <= item.length - 1){
        slider.style.transform = "translate(-" + 100 * (itemIndex + 1)+"px)"
    }
    item[++itemIndex]
})


//네비바 픽스트 이벤트
let scrollNav_bar = document.querySelector(".nav-bar"); 

window.addEventListener("scroll",function(){
    console.log(window.pageYOffset)
    if(window.pageYOffset > 30){
        scrollNav_bar.className = "nav-bar-fixed"
    }
    else if(window.pageYOffset < 30){
        scrollNav_bar.className = "nav-bar"
    }

    
})


//네비바 스크롤 이동 이벤트 
let scrollele = document.querySelectorAll(".scroll-ele");
let scrollpotint = document.querySelectorAll(".scroll");
let first = scrollpotint[0].offsetTop; 
let second = scrollpotint[1].offsetTop;
let third = scrollpotint[2].offsetTop;
console.log(scrollele[1])

scrollele[0].addEventListener("click",function(){
    window.scroll({top:first,behavior:"smooth"});
})
scrollele[1].addEventListener("click",function(){
    window.scroll({top:second,behavior:"smooth"});
})
scrollele[2].addEventListener("click",function(){
    window.scroll({top:third,behavior:"smooth"});
})



//////////////////상호//////////////////
                                     
///////////////////////////////////////
//////////////////수근//////////////////

///////////////////////////////////////
//////////////////진주//////////////////

///////////////////////////////////////
//////////////////양희//////////////////

///////////////////////////////////////