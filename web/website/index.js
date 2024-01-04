 
 
/**
 * add event on elements
 */

const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  
  
  /**
   * navbar toogle
   */
  
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");
  
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
  
  addEventOnElem(navTogglers, "click", toggleNavbar);
  
  
  
  /**
   * active header & back top btn when window scroll down to 100px
   */
  
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  const activeElemOnScroll = function () {
    if (window.scrollY > 100) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  }
  
  addEventOnElem(window, "scroll", activeElemOnScroll);
  
  
  
  /**
   * filter functionality
   */
  
  const filterBtn = document.querySelectorAll("[data-filter-btn]");
  const filterItems = document.querySelectorAll("[data-filter]");
  
  let lastClickedBtn = filterBtn[0];
  
  const filter = function () {
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  
    for (let i = 0; i < filterItems.length; i++) {
      if (filterItems[i].dataset.filter === this.dataset.filterBtn) {
        filterItems[i].style.display = "block";
      } else {
        filterItems[i].style.display = "none";
      }
    }
  }
  
  addEventOnElem(filterBtn, "click", filter);



  
/*
window.onscroll =() =>{
    if(window.scrollY > 80){
        document.querySelector('.info').classList.add('active');
    
    } else{
        document.querySelector('.info').classList.remove('active');
    }
    
    }
    
    
    window.onload =() =>{
        if(window.scrollY > 80){
            document.querySelector('.info').classList.add('active');
        
        } else{
            document.querySelector('.info').classList.remove('active');
        }
        
    }


    let loginForm = document.querySelector('.login-form-container')


    document.querySelector('#login-btn').onclik =()=>{
        loginForm.classList.toggle('active'); 
    }
    
    document.querySelector('#close-login-btn').onclik =()=>{
        loginForm.classList.remove('active'); 
    }  */
    
    

/*
    let open=document.getElementById('open');
    let close=document.getElementById('close')
    let containerr=document.querySelector('.containerr');
    close.onclick=function(){
        containerr.classList.add('hide');
        this.classList.add('hide');
        open.classList.remove('hide');
    }
    
    open.onclick=function(){
        this.classList.add('hide');
       close.classList.remove('hide');
        containerr.classList.remove('hide');
    }      

*/


 /*

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}


document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}
*/



