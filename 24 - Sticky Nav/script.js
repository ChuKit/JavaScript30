const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;


function fixNav() {
  if (window.scrollY >= topOfNav) {
    //We need to add padding top to body because 'fixed-nav' change nav element
    //to position:fixed. In css, element with position:fixed will not take up
    //space. So if we don't offset the padding, you will see the content 'jump' up.
    document.body.classList.add('fixed-nav');
    document.body.style.paddingTop = nav.offsetHeight + 'px';
  } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);
