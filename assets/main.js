document.addEventListener('DOMContentLoaded', () => {
    
    const pageClass = document.body.className;

    // --- NEW HOMEPAGE SCRIPT V3 ---
    if (pageClass.includes('home-body-v2')) {
        
        const hero = document.querySelector('.hero-v3');
        const background = document.querySelector('.hero-background');
        const katanaContainer = document.querySelector('.katana-hero-container');
        const particlesContainer = document.getElementById('katana-particles');
        const content = document.querySelector('.hero-v3-content');

        // --- 1. Interactive Mouse Move Animation ---
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { offsetWidth, offsetHeight } = hero;
            
            // Calculate movement from center (-1 to 1)
            const xPos = (clientX / offsetWidth - 0.5) * 2;
            const yPos = (clientY / offsetHeight - 0.5) * 2;

            // Define max movement
            const maxTilt = 10; // degrees
            const maxShift = 20; // pixels

            // Apply transformations
            katanaContainer.style.transform = `
                translate(-50%, -50%) 
                rotateY(${xPos * maxTilt}deg) 
                rotateX(${-yPos * maxTilt}deg)
            `;
            
            background.style.transform = `
                translateX(${-xPos * maxShift}px) 
                translateY(${-yPos * maxShift}px)
            `;
        });

        // --- 2. Katana Particle Simulation ---
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            particlesContainer.appendChild(particle);
            
            const size = anime.random(1, 5);
            const color = Math.random() > 0.3 ? '#FFFFFF' : '#C084FC';
            
            // Particles emanate from the center where the katana is
            const x = window.innerWidth / 2;
            const y = window.innerHeight / 2;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.background = color;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            
            anime({
                targets: particle,
                translateX: anime.random(-250, 250),
                translateY: anime.random(-250, 250),
                scale: [1, 0],
                opacity: [1, 0],
                duration: anime.random(1000, 2500),
                easing: 'easeOutExpo',
                complete: () => particle.remove()
            });
        }
        setInterval(createParticle, 150);


        // --- 3. Content Fade-in Animation ---
        anime({
            targets: content,
            opacity: [0, 1],
            translateY: [-20, 0],
            duration: 1500,
            easing: 'easeOutCubic',
            delay: 500 // Wait a bit before showing text
        });
    }
    
    // --- AI ORACLE SCRIPT ---
    if (pageClass.includes('oracle-body')) {
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const sendButton = document.getElementById('send-button');

        // IMPORTANT: You must add your own Google AI API Key here
        const API_KEY = "AIzaSyDy3nwdxLhEQdFAp5I_ZV0NV1j3zOsb29w"; // <--- PASTE YOUR KEY HERE

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
             if (API_KEY === "YOUR_GOOGLE_AI_API_KEY") {
                return "Please configure your API Key in `assets/main.js` to enable the AI Oracle.";
            }
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
            const payload = { contents: [{ parts: [{ text: `You are the AI Oracle, a futuristic and wise AI. Answer concisely. User asks: "${prompt}"` }] }] };
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (!response.ok) throw new Error(`API Error: ${response.status}`);
                const result = await response.json();
                return result.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
            } catch (error) {
                console.error("AI Oracle Error:", error);
                return `Apologies, seeker. A cosmic interference has disrupted my connection. (${error.message})`;
            }
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
        
        // Initial message
        setTimeout(() => {
             addMessage("I am the Oracle. Speak, and I shall answer.", 'ai');
        }, 1000);
    }

    // --- KOI POND SCRIPT ---
    if (pageClass.includes('koi-body')) {
        const container = document.getElementById('webgl-koi-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        const mouse = new THREE.Vector2();
        const target = new THREE.Vector2();
        const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);

        document.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX - windowHalf.x);
            mouse.y = (event.clientY - windowHalf.y);
        });

        // Water plane
        const waterGeometry = new THREE.PlaneGeometry(50, 50, 50, 50);
        const waterMaterial = new THREE.MeshBasicMaterial({ color: 0x05030a });
        const water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -Math.PI / 2;
        scene.add(water);
        
        camera.position.set(0, 10, 0);
        camera.lookAt(scene.position);

        // Koi Fish
        class Koi {
            constructor() {
                const geometry = new THREE.SphereGeometry(0.1, 16, 8);
                geometry.scale(2.5, 0.7, 1);
                const material = new THREE.MeshBasicMaterial({ color: Math.random() > 0.5 ? 0xffffff : 0x9333ea });
                this.mesh = new THREE.Mesh(geometry, material);
                
                this.mesh.position.set(
                    (Math.random() - 0.5) * 20,
                    0,
                    (Math.random() - 0.5) * 20
                );

                this.velocity = new THREE.Vector3(
                    (Math.random() - 0.5) * 0.02,
                    0,
                    (Math.random() - 0.5) * 0.02
                );
                
                this.maxSpeed = 0.05;
                this.steeringForce = 0.001;

                scene.add(this.mesh);
            }

            update(target) {
                // Steer towards target (mouse)
                const desiredVelocity = new THREE.Vector3(target.x * 0.02, 0, target.y * 0.02)
                    .sub(this.mesh.position)
                    .normalize()
                    .multiplyScalar(this.maxSpeed);

                const steer = desiredVelocity.sub(this.velocity);
                this.velocity.add(steer.multiplyScalar(this.steeringForce));

                // Apply velocity
                this.mesh.position.add(this.velocity);
                
                // Keep within bounds
                if (this.mesh.position.x > 25 || this.mesh.position.x < -25 ||
                    this.mesh.position.z > 25 || this.mesh.position.z < -25) {
                    this.velocity.negate();
                }

                // Point in direction of movement
                this.mesh.rotation.y = Math.atan2(this.velocity.x, this.velocity.z);
            }
        }
        
        const koi_school = [];
        for(let i=0; i<20; i++) {
            koi_school.push(new Koi());
        }

        function animate() {
            requestAnimationFrame(animate);
            
            target.x += (mouse.x - target.x) * 0.02;
            target.y += (mouse.y - target.y) * 0.02;

            koi_school.forEach(koi => koi.update(target));
            renderer.render(scene, camera);
        }
        animate();
        
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    // --- MANGA PAGE SCRIPT (Unchanged) ---
    if (pageClass.includes('manga-body-v3')) {
        const panels = document.querySelectorAll('.manga-panel');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // THIS IS NOW CORRECTED from isInteracting to isIntersecting
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.2 });
        panels.forEach(panel => observer.observe(panel));
    }
    
    // --- MINDSET (MAC OS) SCRIPT (Unchanged) ---
    if (pageClass.includes('macos-body')) {
        const windows = document.querySelectorAll('.macos-window');
        windows.forEach(win => makeDraggable(win));
        function makeDraggable(element) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            const header = element.querySelector('.window-header');
            header.onmousedown = (e) => {
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = () => { document.onmouseup = null; document.onmousemove = null; };
                document.onmousemove = (e) => {
                    e.preventDefault();
                    pos1 = pos3 - e.clientX;
                    pos2 = pos4 - e.clientY;
                    pos3 = e.clientX;
                    pos4 = e.clientY;
                    element.style.top = (element.offsetTop - pos2) + "px";
                    element.style.left = (element.offsetLeft - pos1) + "px";
                };
                windows.forEach(w => w.style.zIndex = '10');
                element.style.zIndex = '20';
            };
        }
    }
});
