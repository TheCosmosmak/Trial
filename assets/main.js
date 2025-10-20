document.addEventListener('DOMContentLoaded', () => {
    
    const pageClass = document.body.className;

    // --- MOBILE NAVIGATION ---
    const mobileNavToggle = document.getElementById('mobile-nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileNavToggle && mobileMenu) {
        mobileNavToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
        });
    }

    // --- API Key ---
    // Security Warning: Best practice is to handle API keys on a server, not client-side.
    const API_KEY = 'AIzaSyB_nQXP8e31gIPRl_TWG9Vr31USM7QypgU';

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

    // --- PAGE-SPECIFIC INITIALIZATION ---
    if (document.querySelector('.chat-container')) initOraclePage();
    if (document.querySelector('.manga-grid, .timeline-grid')) initScrollAnimations();
    if (document.querySelector('.topic-btn')) initInsightsPage();

    // ===================================================================
    //               PAGE LOGIC
    // ===================================================================

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

        const callGemini = async (prompt) => {
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-latest:generateContent?key=${API_KEY}`;
            const payload = { contents: [{ parts: [{ text: `You are an AI oracle with a modern, Gen-Z vibe. Answer concisely and directly. User asks: "${prompt}"` }] }] };
            const result = await fetchWithBackoff(apiUrl, payload);
            if (result && result.candidates && result.candidates[0].content.parts[0].text) {
                return result.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
            }
            return `Connection's fuzzy. Ask again later.`;
        };

        const handleSend = async () => {
            const userInput = chatInput.value.trim();
            if (!userInput) return;
            addMessage(userInput, 'user');
            chatInput.value = '';
            const aiResponse = await callGemini(userInput);
            addMessage(aiResponse, 'ai');
        };

        sendButton.addEventListener('click', handleSend);
        chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') handleSend();
        });
        
        setTimeout(() => addMessage("Ask and you shall receive.", 'ai'), 1000);
    }

    function initScrollAnimations() {
        const panels = document.querySelectorAll('.panel');
        if (panels.length === 0) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });
        panels.forEach(panel => observer.observe(panel));
    }

    function initInsightsPage() {
        const buttons = document.querySelectorAll('.topic-btn');
        const articlesContainer = document.getElementById('articles-container');
        const loader = document.getElementById('loader');

        buttons.forEach(button => {
            button.addEventListener('click', () => generateArticle(button.dataset.topic));
        });

        async function generateArticle(topic) {
            articlesContainer.innerHTML = '';
            loader.style.display = 'block';
            const prompt = `Write a concise and engaging article (about 100 words) for a tech enthusiast about the future of ${topic}. Format as clean HTML with simple p and b tags.`;
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
            const payload = { contents: [{ parts: [{ text: prompt }] }] };
            const result = await fetchWithBackoff(apiUrl, payload);
            loader.style.display = 'none';
            if (result && result.candidates) {
                const text = result.candidates[0].content.parts[0].text;
                articlesContainer.innerHTML = `<div class="panel"><h2>${topic}</h2><p>${text}</p></div>`;
            } else {
                articlesContainer.innerHTML = '<div class="panel"><p class="error">Could not generate insights at this time.</p></div>';
            }
        }
        // Load the first topic by default
        generateArticle("Quantum Computing");
    }
});

