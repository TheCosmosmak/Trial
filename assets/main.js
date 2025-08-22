document.addEventListener('DOMContentLoaded', () => {
    
    const pageClass = document.body.className;

    // --- API Key Implemented as Requested ---
    // Security Warning: Exposing an API key in client-side code is a security risk.
    const API_KEY = 'AIzaSyB_nQXP8e31gIPRl_TWG9Vr31USM7QypgU';

    // --- RESPONSIVE NAVIGATION ---
    const navToggle = document.getElementById('nav-toggle');
    const mainNav = document.getElementById('main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }

    // --- SHARED API FETCH FUNCTION ---
    async function fetchWithBackoff(apiUrl, payload, retries = 3, delay = 1000) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (!response.ok) {
                if (response.status === 429 && retries > 0) {
                    await new Promise(res => setTimeout(res, delay));
                    return fetchWithBackoff(apiUrl, payload, retries - 1, delay * 2);
                }
                throw new Error(`API Error: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("API Fetch Error:", error);
            return null;
        }
    }

    // --- PAGE ROUTER ---
    if (pageClass.includes('home-body-v2')) initHomepageV2();
    if (pageClass.includes('oracle-body')) initOraclePage();
    if (pageClass.includes('manga-body')) initMangaPage();
    if (pageClass.includes('mindset-body')) initMindsetPage();
    if (pageClass.includes('insights-body')) initInsightsPage();
    if (pageClass.includes('geography-body')) initGeographyPage();
    if (pageClass.includes('timelapse-body')) initTimelapsePage();


    // ===================================================================
    //               PAGE-SPECIFIC INITIALIZATION FUNCTIONS
    // ===================================================================

    function initHomepageV2() {
        const hero = document.querySelector('.hero-v3');
        const background = document.querySelector('.hero-background');
        const katana = document.querySelector('.katana-hero-container');
        const content = document.querySelector('.hero-v3-content');
        const particlesContainer = document.getElementById('katana-particles');
        
        if (!hero || !window.anime) return;

        // 1. Parallax mouse move effect
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = hero;
            const xPos = (clientX / offsetWidth - 0.5);
            const yPos = (clientY / offsetHeight - 0.5);

            const bgX = -xPos * 30;
            const bgY = -yPos * 30;
            const katanaX = -xPos * 60;
            const katanaY = -yPos * 60;

            background.style.transform = `translateX(${bgX}px) translateY(${bgY}px)`;
            katana.style.transform = `translate(-50%, -50%) translateX(${katanaX}px) translateY(${katanaY}px)`;
        });

        // 2. Fade in content on load
        if (content) {
            anime({
                targets: content,
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 1200,
                easing: 'easeOutExpo',
                delay: 500
            });
        }
        
        // 3. Sparkling particle effect
        function createParticle() {
            if (!particlesContainer) return;
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particlesContainer.appendChild(particle);
            const size = anime.random(1, 4);
            const color = Math.random() > 0.3 ? '#FFFFFF' : '#C084FC';
            const x = window.innerWidth / 2;
            const y = window.innerHeight / 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            anime({
                targets: particle,
                translateX: anime.random(-400, 400),
                translateY: anime.random(-400, 400),
                scale: [1, 0],
                opacity: [1, 0],
                duration: anime.random(1500, 3000),
                easing: 'easeOutExpo',
                complete: () => particle.remove()
            });
        }
        setInterval(createParticle, 150);
    }

    function initOraclePage() {
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const sendButton = document.getElementById('send-button');
        if (!chatMessages || !chatInput || !sendButton) return;

        const addMessage = (content, sender) => {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${sender}-message`;
            messageDiv.innerHTML = `<div class="msg-content">${content}</div>`;
            chatMessages.appendChild(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        };
        
        const showTypingIndicator = () => {
             const typingDiv = document.createElement('div');
             typingDiv.className = 'message ai-message typing';
             typingDiv.innerHTML = `<div class="msg-content"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>`;
             chatMessages.appendChild(typingDiv);
             chatMessages.scrollTop = chatMessages.scrollHeight;
             return typingDiv;
        };

        const callGemini = async (prompt) => {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
            const payload = { contents: [{ parts: [{ text: `You are the AI Oracle, a futuristic and wise AI. Answer concisely. User asks: "${prompt}"` }] }] };
            const result = await fetchWithBackoff(apiUrl, payload);
            if (result && result.candidates && result.candidates[0].content.parts[0].text) {
                return result.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
            }
            return `Apologies, seeker. A cosmic interference has disrupted my connection.`;
        };

        const handleSend = async () => {
            const userInput = chatInput.value.trim();
            if (!userInput) return;
            addMessage(userInput, 'user');
            chatInput.value = '';
            const typingIndicator = showTypingIndicator();
            const aiResponse = await callGemini(userInput);
            typingIndicator.remove();
            addMessage(aiResponse, 'ai');
        };

        sendButton.addEventListener('click', handleSend);
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleSend();
        });
        
        setTimeout(() => addMessage("I am the Oracle. Speak, and I shall answer.", 'ai'), 1000);
    }

    function initMangaPage() {
        const panels = document.querySelectorAll('.manga-panel');
        if (panels.length === 0) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.2 });
        panels.forEach(panel => observer.observe(panel));
    }

    function initMindsetPage() {
        const windows = document.querySelectorAll('.macos-window');
        if (windows.length === 0) return;
        windows.forEach(win => makeDraggable(win));
        
        const clockElement = document.getElementById('os-clock');
        if (clockElement) {
            const updateClock = () => {
                const now = new Date();
                const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' };
                clockElement.textContent = now.toLocaleDateString('en-US', options).replace(',', '');
            };
            updateClock();
            setInterval(updateClock, 30000); 
        }

        function makeDraggable(element) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            const header = element.querySelector('.window-header');
            if (!header) return;
            const dragMouseDown = (e) => { e.preventDefault(); pos3 = e.clientX; pos4 = e.clientY; document.onmouseup = closeDragElement; document.onmousemove = elementDrag; setActiveWindow(); };
            const elementDrag = (e) => { e.preventDefault(); pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY; pos3 = e.clientX; pos4 = e.clientY; element.style.top = (element.offsetTop - pos2) + "px"; element.style.left = (element.offsetLeft - pos1) + "px"; };
            const closeDragElement = () => { document.onmouseup = null; document.onmousemove = null; };
            const setActiveWindow = () => { windows.forEach(w => w.style.zIndex = '10'); element.style.zIndex = '20'; };
            header.onmousedown = dragMouseDown;
        }
    }

    function initInsightsPage() {
        const buttons = document.querySelectorAll('.topic-btn');
        const articlesContainer = document.getElementById('articles-container');
        const loader = document.getElementById('loader');
        const canvas = document.getElementById('datastream-canvas');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let columns = Math.floor(canvas.width / 20);
        const drops = Array(columns).fill(1);
        const text = "01";

        function draw() {
            ctx.fillStyle = 'rgba(2, 4, 10, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = 'rgba(0, 255, 255, 0.5)';
            ctx.font = '15pt monospace';
            for (let i = 0; i < drops.length; i++) {
                const char = text[Math.floor(Math.random() * text.length)];
                ctx.fillText(char, i * 20, drops[i] * 20);
                if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }
        setInterval(draw, 33);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / 20);
            drops.length = 0;
            for(let i=0; i<columns; i++) drops.push(1);
        });

        buttons.forEach(button => {
            button.addEventListener('click', () => generateArticle(button.dataset.topic));
        });

        async function generateArticle(topic) {
            articlesContainer.innerHTML = '';
            loader.style.display = 'block';
            const prompt = `Write a concise and engaging article (about 150 words) for a tech enthusiast about the future of ${topic}. Format as plain text.`;
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
            const payload = { contents: [{ parts: [{ text: prompt }] }] };
            const result = await fetchWithBackoff(apiUrl, payload);
            loader.style.display = 'none';
            if (result && result.candidates) {
                const text = result.candidates[0].content.parts[0].text;
                const card = document.createElement('div');
                card.className = 'article-card';
                card.innerHTML = `<h2>${topic}</h2><p>${text.replace(/\n/g, '<br>')}</p>`;
                articlesContainer.appendChild(card);
            } else {
                articlesContainer.innerHTML = '<p class="error">Could not generate insights at this time.</p>';
            }
        }
        generateArticle("Quantum Computing");
    }

    function initGeographyPage() {
        const container = document.getElementById('globe-canvas-container');
        if (!container || !window.THREE) return;
        
        const modal = document.getElementById('fact-modal'), closeModalBtn = document.getElementById('close-modal'), factLocation = document.getElementById('fact-location'), factText = document.getElementById('fact-text'), factLoader = document.getElementById('fact-loader');
        let scene, camera, renderer, controls, earth, clouds, stars, atmosphere, raycaster, mouse, marker;

        function init() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
            scene.add(ambientLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
            directionalLight.position.set(5, 3, 5);
            scene.add(directionalLight);

            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.enablePan = false;
            controls.minDistance = 15;
            controls.maxDistance = 50;

            const textureLoader = new THREE.TextureLoader();
            const earthGeo = new THREE.SphereGeometry(10, 64, 64);

            // STABLE: Loading local texture files. Assumes you have created an assets/textures/ folder
            // and placed the files there as instructed previously.
            earth = new THREE.Mesh(earthGeo, new THREE.MeshStandardMaterial({
                map: textureLoader.load('assets/textures/earth_map.jpg'),
                bumpMap: textureLoader.load('assets/textures/earth_bump.jpg'),
                bumpScale: 0.1
            }));
            scene.add(earth);

            clouds = new THREE.Mesh(new THREE.SphereGeometry(10.1, 64, 64), new THREE.MeshStandardMaterial({
                alphaMap: textureLoader.load('assets/textures/earth_clouds.png'),
                transparent: true,
                opacity: 0.4
            }));
            scene.add(clouds);

            atmosphere = new THREE.Mesh(new THREE.SphereGeometry(10.4, 64, 64), new THREE.ShaderMaterial({
                vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
                fragmentShader: `varying vec3 vNormal; void main() { float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0); gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0) * intensity * 0.5; }`,
                blending: THREE.AdditiveBlending,
                side: THREE.BackSide
            }));
            scene.add(atmosphere);

            const starVertices = [];
            for (let i = 0; i < 20000; i++) {
                starVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, -Math.random() * 2000);
            }
            const starGeo = new THREE.BufferGeometry();
            starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
            stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.2 }));
            scene.add(stars);

            const markerGeo = new THREE.SphereGeometry(0.1, 16, 16);
            const markerMat = new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0 });
            marker = new THREE.Mesh(markerGeo, markerMat);
            scene.add(marker);

            raycaster = new THREE.Raycaster();
            mouse = new THREE.Vector2();

            window.addEventListener('resize', onWindowResize);
            container.addEventListener('click', onGlobeClick);
            closeModalBtn.addEventListener('click', () => modal.classList.remove('visible'));
            
            animate();
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        async function onGlobeClick(event) {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObject(earth);

            if (intersects.length > 0) {
                const { point } = intersects[0];
                marker.position.copy(point);
                marker.material.opacity = 1.0;
                
                const lat = 90 - (Math.acos(point.y / 10)) * 180 / Math.PI;
                const lon = ((270 + (Math.atan2(point.x, point.z)) * 180 / Math.PI) % 360) - 180;
                
                factLocation.textContent = `Lat: ${lat.toFixed(2)}, Lon: ${lon.toFixed(2)}`;
                factText.textContent = '';
                factLoader.style.display = 'block';
                modal.classList.add('visible');

                const prompt = `Tell me a brief, interesting geographical or historical fact about the location at latitude ${lat.toFixed(2)} and longitude ${lon.toFixed(2)}. If it's in the ocean, tell me about the ocean itself. Be concise and engaging.`;
                const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
                const payload = { contents: [{ parts: [{ text: prompt }] }] };
                
                const result = await fetchWithBackoff(apiUrl, payload);
                
                factLoader.style.display = 'none';
                if (result && result.candidates) {
                    factText.textContent = result.candidates[0].content.parts[0].text;
                } else {
                    factText.textContent = "Could not retrieve a fact for this location. Please try another spot.";
                }
            }
        }

        function animate() {
            requestAnimationFrame(animate);
            earth.rotation.y += 0.0005;
            clouds.rotation.y += 0.00055;
            if (marker.material.opacity > 0) marker.material.opacity -= 0.02;
            controls.update();
            renderer.render(scene, camera);
        }
        
        init();
    }

    function initTimelapsePage() {
        const events = document.querySelectorAll('.timeline-event');
        if (events.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.5 });

        events.forEach(event => observer.observe(event));
    }
});
