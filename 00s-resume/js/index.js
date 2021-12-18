(function(window) {
    'use strict';

    window.onload = () => {
        getElement('intro-content').innerHTML = bio;
        generateCardsFor(sweExperience, getElement('swe-target'));
        generateCardsFor(mechanicalExperiences, getElement('mech-target'));
        generateCardsFor(teachingExperiences, getElement('teach-target'))
        generateCardsFor(educationExperiences, getElement('edu-target'))
    };

    function generateCardsFor(techExperience, targetEl) {
        for (let i in techExperience) {
            const exp = techExperience[i];
            const section = new ElementFactory(elements.SECTION, 'col-6');
            section.appendChild(new ElementFactory(elements.H3, '', exp.title));
            section.appendChild(new ElementFactory(elements.SPAN, '', exp.dates));
            section.appendChild(new ElementFactory(elements.HR));

            const list = new ElementFactory(elements.UL, 'hidden');
            const button = new ElementFactory(elements.BUTTON, 'see-more');
            button.appendChild(new ElementFactory(elements.IMG, 'img-flip', './assets/nana-rex.webp', 'Dancing dinosaur'))
            const span = new ElementFactory(elements.SPAN, '', 'See More');
            button.appendChild(span);
            button.appendChild(new ElementFactory(elements.IMG, '', './assets/nana-rex.webp', 'Dancing dinosaur'))
            button.addEventListener('click', () => {
                if (list.classList.contains('hidden')) {
                    button.querySelectorAll('img').forEach(img => img.classList.add('img-flipped'));
                    list.classList.remove('hidden');
                    span.innerText = 'See Less';
                } else {
                    button.querySelectorAll('img').forEach(img => img.classList.remove('img-flipped'));
                    list.classList.add('hidden');
                    span.innerText = 'See More';
                }
            });
            section.appendChild(button);

            for (let j in exp.bullets) {
                const li = createElement(elements.LI);
                li.innerText = exp.bullets[j];
                list.appendChild(li);
            }

            section.appendChild(list);
            targetEl.appendChild(section);
        }
    }
})(window);