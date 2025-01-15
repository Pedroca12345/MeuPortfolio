const skillsFrontend = document.querySelector('.habilidades-front-end');
const progressesArr = [
    createProgress(document.getElementById('html'), 65),
    createProgress(document.getElementById('css'), 50),
    createProgress(document.getElementById('bootstrap'), 35),
    createProgress(document.getElementById('js'), 30),
    createProgress(document.getElementById('react'), 25),
    createProgress(document.getElementById('ts'), 10),
    createProgress(document.getElementById('node'), 15),
    createProgress(document.getElementById('no-sql'), 5),
];
const allProgresses = document.querySelectorAll('.progresso');

function createProgress (skill, progress) {
    return {
        elementSkill: skill,
        progressPercentage: progress,
        insertProgress () {
            this.elementSkill.style.width = `${this.progressPercentage}%`;
        }
    };
}

function animateProgresses () {
    const windowTop = window.scrollY + (window.innerHeight * 0.75);
    const skillsOffsetTop = skillsFrontend.offsetTop;
    console.log(windowTop)

    progressesArr.forEach((skill) => {
        if((windowTop) > skillsOffsetTop) {
            skill.insertProgress();
        } else {
            allProgresses.forEach((element) => {
                element.style.width = 0;
            });
        }
    });
}

window.addEventListener('scroll', () => {
    animateProgresses();
});