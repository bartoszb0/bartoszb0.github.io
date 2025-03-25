document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('button').forEach(element => {animate(element)})

    function animate(element) {
        const show_div = element.parentElement.parentElement.querySelector('.expanded')

        let isExpanded = false;

        element.addEventListener('click', function() {

            if (!isExpanded) {
                element.innerHTML = 'HIDE ▼'
                show_div.style.animation = 'expand 1s forwards';
            } else {
                element.innerHTML = 'READ MORE ▲'
                show_div.style.animation = 'collapse 1s forwards';
            }
            
            isExpanded = !isExpanded;
        })

    }

});