//Determine which nav link is clicked
const navMenu = document.querySelector('nav > ul');
navMenu.addEventListener('click', function (e) {
    if (e.target.tagName !== 'UL') {
        const nextLi = e.target.tagName === "A" ? e.target.parentElement : e.target.parentElement.parentElement;
        navMenu.childNodes.forEach(elem => {
            if (elem.tagName === 'LI') {
                if (elem === nextLi) {
                    elem.children[0].className = "nav-active";
                } else {
                    elem.children[0].className = "";
                }
            }
        });
    } 
});