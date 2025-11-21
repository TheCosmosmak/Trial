const API_KEY = "AIzaSyAIZrt4ZaWsj8PJPTSSCuf16qA8HWz9RJY";

// --- SHARED UTILS ---
async function makeApiCall(apiUrl, payload) {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const errorBody = await response.json();
            throw new Error(`API Error: ${errorBody.error.message}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API Call Failed:", error);
        throw error;
    }
}

async function callGemini(payload) {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
    return makeApiCall(apiUrl, payload);
}

async function generateImage(prompt) {
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent?key=${API_KEY}`;
    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] },
    };
    return makeApiCall(apiUrl, payload);
}

// --- MODAL UTILS (Shared) ---
function getModalElements() {
    return {
        modal: document.getElementById('ai-modal'),
        modalTitle: document.getElementById('modal-title'),
        modalBody: document.getElementById('modal-body'),
        modalCloseBtn: document.getElementById('modal-close')
    };
}

function showModal(title, content) {
    const { modal, modalTitle, modalBody } = getModalElements();
    if (!modal) return; // Guard clause if modal doesn't exist on page
    
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.remove('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.remove('scale-95');
}

function hideModal() {
    const { modal } = getModalElements();
    if (!modal) return;

    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.querySelector('.modal-content').classList.add('scale-95');
}

function initModal() {
    const { modal, modalCloseBtn } = getModalElements();
    if (!modal) return;

    modalCloseBtn.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
}


// --- MARKET PULSE AI (index.html) ---
function initMarketPulse() {
    const getAnalysisBtn = document.getElementById('get-analysis-btn');
    const stockTickerInput = document.getElementById('stock-ticker-prompt');

    if (!getAnalysisBtn || !stockTickerInput) return;

    getAnalysisBtn.addEventListener('click', async () => {
        const ticker = stockTickerInput.value.trim().toUpperCase();
        if (!ticker) {
            showModal('Error', 'You gotta give me a ticker, fam.');
            return;
        }
        showModal(`Analyzing ${ticker}...`, '<div class="loader mx-auto"></div>');
        const prompt = `You are an AI financial analyst with a Gen Z vibe. Give me a quick, no-BS rundown of the stock ticker "${ticker}". Keep it real, no jargon. Format it as clean HTML with simple p and b tags. Sections: **The Lowdown:** (what the company does), **The Vibe:** (recent performance/news), **The Numbers:** (key metrics like P/E), **The Bet:** (general outlook, risks/catalysts).`;
        try {
            const result = await callGemini({ contents: [{ parts: [{ text: prompt }] }] });
            const text = result.candidates[0].content.parts[0].text;
            showModal(`The Tea on ${ticker}`, text.replace(/\n/g, '<br>'));
        } catch (error) {
            showModal('API Error', `Couldn't fetch the data. ${error.message}`);
        }
    });
}

// --- MANGA STUDIO AI (index.html) ---
function initMangaStudio() {
    const generateImageBtn = document.getElementById('generate-image-btn');
    const imagePromptInput = document.getElementById('image-prompt');

    if (!generateImageBtn || !imagePromptInput) return;

    generateImageBtn.addEventListener('click', async () => {
        const userPrompt = imagePromptInput.value.trim();
        if (!userPrompt) {
            showModal('Error', 'Describe the masterpiece you want me to create.');
            return;
        }
        showModal('Generating Art...', '<div class="loader mx-auto"></div>');
        const fullPrompt = `Create an image in a striking black and white manga style, with heavy ink strokes and screentone patterns for shading. Use a single, vibrant accent color (#8A2BE2) for one key element. The scene is: "${userPrompt}"`;
        try {
            const result = await generateImage(fullPrompt);
            const base64Data = result?.candidates?.[0]?.content?.parts?.find(p => p.inlineData)?.inlineData?.data;
            if (base64Data) {
                showModal('Manga Studio AI', `<img src="data:image/png;base64,${base64Data}" class="w-full h-auto" alt="AI generated manga image">`);
            } else {
                throw new Error("Image data not found in response. The prompt might have been blocked.");
            }
        } catch (error) {
            showModal('API Error', `Couldn't generate the image. ${error.message}`);
        }
    });
}

// --- ORACLE AI (oracle.html) ---
function initOracle() {
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');

    if (!chatInput || !sendButton || !chatMessages) return;

    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'ai-message'}`;
        messageDiv.innerHTML = text; // Allow HTML for AI responses
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleChat() {
        const question = chatInput.value.trim();
        if (!question) return;

        addMessage(question, true);
        chatInput.value = '';
        
        // Show loading state
        const loadingId = 'loading-' + Date.now();
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message ai-message';
        loadingDiv.id = loadingId;
        loadingDiv.textContent = 'Consulting the digital spirits...';
        chatMessages.appendChild(loadingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        const prompt = `You are the AI Oracle, a wise and slightly cryptic digital entity. Answer the seeker's question with wisdom, using metaphors related to technology and nature. Keep it concise but profound. Question: "${question}"`;

        try {
            const result = await callGemini({ contents: [{ parts: [{ text: prompt }] }] });
            const text = result.candidates[0].content.parts[0].text;
            
            // Remove loading message
            const loadingMsg = document.getElementById(loadingId);
            if (loadingMsg) loadingMsg.remove();

            addMessage(text.replace(/\n/g, '<br>'), false);
        } catch (error) {
             // Remove loading message
             const loadingMsg = document.getElementById(loadingId);
             if (loadingMsg) loadingMsg.remove();

            addMessage(`The connection to the ether is disrupted. (Error: ${error.message})`, false);
        }
    }

    sendButton.addEventListener('click', handleChat);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleChat();
    });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initModal();
    initMarketPulse();
    initMangaStudio();
    initOracle();
});
