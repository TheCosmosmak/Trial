document.addEventListener('DOMContentLoaded', () => {
    // Globe
    const globeContainer = document.getElementById('globe-container');
    if (globeContainer) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, globeContainer.offsetWidth / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0xffffff);
    renderer.setSize(globeContainer.offsetWidth, 500);
    globeContainer.appendChild(renderer.domElement);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('https://raw.githubusercontent.com/jeromeetienne/threex.planets/master/images/earthspec1k.jpg', (texture) => {
        const material = new THREE.MeshPhongMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.z = 10;

        let isDragging = false;
        let previousMousePosition = {
            x: 0,
            y: 0
        };

        globeContainer.addEventListener('mousedown', e => {
            isDragging = true;
        });

        globeContainer.addEventListener('mouseup', e => {
            isDragging = false;
        });

        globeContainer.addEventListener('mousemove', e => {
            const deltaMove = {
                x: e.offsetX - previousMousePosition.x,
                y: e.offsetY - previousMousePosition.y
            };

            if (isDragging) {
                const deltaRotationQuaternion = new THREE.Quaternion()
                    .setFromEuler(new THREE.Euler(
                        toRadians(deltaMove.y * 1),
                        toRadians(deltaMove.x * 1),
                        0,
                        'XYZ'
                    ));

                sphere.quaternion.multiplyQuaternions(deltaRotationQuaternion, sphere.quaternion);
            }

            previousMousePosition = {
                x: e.offsetX,
                y: e.offsetY
            };
        });

        globeContainer.addEventListener('wheel', e => {
            camera.position.z += e.deltaY > 0 ? 1 : -1;
        });

        const resetButton = document.createElement('button');
        resetButton.innerText = 'Reset';
        resetButton.classList.add('btn-manga');
        resetButton.style.position = 'absolute';
        resetButton.style.top = '10px';
        resetButton.style.right = '10px';
        globeContainer.appendChild(resetButton);

        resetButton.addEventListener('click', () => {
            sphere.quaternion.set(0, 0, 0, 1);
            camera.position.z = 10;
        });

        window.addEventListener('resize', () => {
            camera.aspect = globeContainer.offsetWidth / 500;
            camera.updateProjectionMatrix();
            renderer.setSize(globeContainer.offsetWidth, 500);
        });

        const toRadians = (angle) => {
            return angle * (Math.PI / 180);
        }

        const animate = () => {
            if (!isDragging) {
                sphere.rotation.y += 0.001;
            }
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();
    });
    }

    // Quiz
    const quizContainer = document.getElementById('quiz');
    if (quizContainer) {
        const submitButton = document.getElementById('submit-quiz');
        const resultsContainer = document.getElementById('quiz-results');
        const nextButton = document.createElement('button');
        nextButton.classList.add('btn-manga');
        nextButton.innerText = 'Next';
        nextButton.classList.add('btn-manga');
        quizContainer.parentElement.appendChild(nextButton);

        let currentQuestions = [];

        function showQuestions() {
            const output = [];
            currentQuestions.forEach((currentQuestion, questionNumber) => {
                const answers = [];
                for (const letter in currentQuestion.answers) {
                    answers.push(
                        `<label>
                            <input type="radio" name="question${questionNumber}" value="${letter}">
                            ${letter} : ${currentQuestion.answers[letter]}
                        </label>`
                    );
                }
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join('')} </div>`
                );
            });
            quizContainer.innerHTML = output.join('');
        }

        function showNextQuestions() {
            const shuffled = allQuestions.sort(() => 0.5 - Math.random());
            currentQuestions = shuffled.slice(0, 3);
            showQuestions();
            resultsContainer.innerHTML = '';
        }

        submitButton.addEventListener('click', () => {
            const answerContainers = quizContainer.querySelectorAll('.answers');
            let numCorrect = 0;

            currentQuestions.forEach((currentQuestion, questionNumber) => {
                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {
                    numCorrect++;
                    answerContainers[questionNumber].style.color = 'lightgreen';
                } else {
                    answerContainers[questionNumber].style.color = 'red';
                }
            });

            resultsContainer.innerHTML = `${numCorrect} out of ${currentQuestions.length}`;
        });

        nextButton.addEventListener('click', showNextQuestions);

        showNextQuestions();
    }

});