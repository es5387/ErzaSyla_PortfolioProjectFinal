const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content')[0];


function PageTransitions(){
    // Click active class
    for (let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    // Sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            // to remove selected 
        sectBtns.forEach((btn) =>{
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
            // hide other sections
            sections.forEach((sections) =>{
                sections.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');


        }



    })
}




PageTransitions();



