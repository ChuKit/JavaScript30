const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);

  // e.stopPropagation(); //stopPropagation stops the event bubbling
}

document.body.addEventListener('click', logText);
divs.forEach(div => div.addEventListener(
    'click',
    logText,
    {
      capture: false,
      once: true //This will listen once then unbind the listener
    }
));

//How the browser works is when we click div3 the browser will capture the
//click event top-down i.e. from body->div1->div2->div3.
//Then the browser  will fire the event in the opposit direction i.e. bubble-up
//from div3->div2->div1->body

//And if we addEventListener we pass {capture:true} as a parameter.
//What does it do? This will fire the event in the same direction as
//the capturing direction! (of course the default is capture:false)

