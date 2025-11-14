const allQuestions = [
    {
        question: "What is the capital of Japan?",
        answers: {
            a: "Beijing",
            b: "Seoul",
            c: "Tokyo"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: {
            a: "China",
            b: "Japan",
            c: "South Korea"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest desert in the world?",
        answers: {
            a: "Sahara Desert",
            b: "Arabian Desert",
            c: "Antarctic Polar Desert"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the longest river in the world?",
        answers: {
            a: "Amazon River",
            b: "Nile River",
            c: "Yangtze River"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest continent?",
        answers: {
            a: "Asia",
            b: "Africa",
            c: "Europe"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Australia?",
        answers: {
            a: "Sydney",
            b: "Melbourne",
            c: "Canberra"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is home to the kangaroo?",
        answers: {
            a: "South Africa",
            b: "Australia",
            c: "New Zealand"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the highest mountain in the world?",
        answers: {
            a: "K2",
            b: "Mount Everest",
            c: "Kangchenjunga"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is known as the Great White North?",
        answers: {
            a: "Russia",
            b: "Canada",
            c: "United States"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Brazil?",
        answers: {
            a: "Rio de Janeiro",
            b: "São Paulo",
            c: "Brasília"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is famous for its tulips and windmills?",
        answers: {
            a: "Germany",
            b: "Netherlands",
            c: "Belgium"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the smallest country in the world?",
        answers: {
            a: "Monaco",
            b: "Vatican City",
            c: "San Marino"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the only continent to lie in all four hemispheres?",
        answers: {
            a: "Asia",
            b: "Africa",
            c: "Australia"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Canada?",
        answers: {
            a: "Toronto",
            b: "Vancouver",
            c: "Ottawa"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is known as the Land of Fire and Ice?",
        answers: {
            a: "Greenland",
            b: "Iceland",
            c: "Finland"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest ocean in the world?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Pacific Ocean"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is the most populous country in the world?",
        answers: {
            a: "India",
            b: "China",
            c: "United States"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Russia?",
        answers: {
            a: "Saint Petersburg",
            b: "Moscow",
            c: "Kazan"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is home to the Great Wall?",
        answers: {
            a: "Mongolia",
            b: "China",
            c: "India"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Argentina?",
        answers: {
            a: "Santiago",
            b: "Buenos Aires",
            c: "Lima"
        },
        correctAnswer: "b"
    },
    {
        question: "Which desert is the largest in North America?",
        answers: {
            a: "Mojave Desert",
            b: "Sonoran Desert",
            c: "Chihuahuan Desert"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Egypt?",
        answers: {
            a: "Alexandria",
            b: "Cairo",
            c: "Giza"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the longest mountain range in the world?",
        answers: {
            a: "The Himalayas",
            b: "The Andes",
            c: "The Rocky Mountains"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of South Korea?",
        answers: {
            a: "Busan",
            b: "Incheon",
            c: "Seoul"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is known as the Emerald Isle?",
        answers: {
            a: "Scotland",
            b: "Ireland",
            c: "Wales"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest lake in Africa?",
        answers: {
            a: "Lake Tanganyika",
            b: "Lake Victoria",
            c: "Lake Malawi"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Spain?",
        answers: {
            a: "Barcelona",
            b: "Madrid",
            c: "Seville"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest by land area?",
        answers: {
            a: "China",
            b: "United States",
            c: "Russia"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Italy?",
        answers: {
            a: "Milan",
            b: "Rome",
            c: "Naples"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the most spoken language in the world?",
        answers: {
            a: "Mandarin Chinese",
            b: "Spanish",
            c: "English"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Germany?",
        answers: {
            a: "Munich",
            b: "Hamburg",
            c: "Berlin"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is known as the Land of the Midnight Sun?",
        answers: {
            a: "Sweden",
            b: "Norway",
            c: "Finland"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest island in the world?",
        answers: {
            a: "New Guinea",
            b: "Borneo",
            c: "Greenland"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of India?",
        answers: {
            a: "Mumbai",
            b: "New Delhi",
            c: "Kolkata"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the smallest continent?",
        answers: {
            a: "Europe",
            b: "Australia",
            c: "South America"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Mexico?",
        answers: {
            a: "Guadalajara",
            b: "Mexico City",
            c: "Cancun"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is home to the Amazon rainforest?",
        answers: {
            a: "Peru",
            b: "Colombia",
            c: "Brazil"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of the United Kingdom?",
        answers: {
            a: "Manchester",
            b: "London",
            c: "Birmingham"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the highest waterfall in the world?",
        answers: {
            a: "Niagara Falls",
            b: "Angel Falls",
            c: "Victoria Falls"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of South Africa?",
        answers: {
            a: "Cape Town",
            b: "Johannesburg",
            c: "Pretoria"
        },
        correctAnswer: "c"
    },
    {
        question: "Which country is known as the Land of Smiles?",
        answers: {
            a: "Vietnam",
            b: "Thailand",
            c: "Malaysia"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the largest city in the world by population?",
        answers: {
            a: "Shanghai",
            b: "Tokyo",
            c: "Delhi"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of New Zealand?",
        answers: {
            a: "Auckland",
            b: "Wellington",
            c: "Christchurch"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest country in South America?",
        answers: {
            a: "Argentina",
            b: "Brazil",
            c: "Colombia"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Saudi Arabia?",
        answers: {
            a: "Jeddah",
            b: "Riyadh",
            c: "Mecca"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is home to the pyramids of Giza?",
        answers: {
            a: "Sudan",
            b: "Egypt",
            c: "Libya"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Turkey?",
        answers: {
            a: "Istanbul",
            b: "Ankara",
            c: "Izmir"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest lake in North America?",
        answers: {
            a: "Lake Superior",
            b: "Lake Huron",
            c: "Lake Michigan"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Sweden?",
        answers: {
            a: "Gothenburg",
            b: "Stockholm",
            c: "Malmo"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is known as the Land of the Pharaohs?",
        answers: {
            a: "Greece",
            b: "Egypt",
            c: "Rome"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Norway?",
        answers: {
            a: "Bergen",
            b: "Oslo",
            c: "Trondheim"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in the Mediterranean Sea?",
        answers: {
            a: "Sardinia",
            b: "Cyprus",
            c: "Sicily"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Peru?",
        answers: {
            a: "Cusco",
            b: "Lima",
            c: "Arequipa"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the most sparsely populated in the world?",
        answers: {
            a: "Mongolia",
            b: "Namibia",
            c: "Australia"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Thailand?",
        answers: {
            a: "Chiang Mai",
            b: "Bangkok",
            c: "Phuket"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in Canada?",
        answers: {
            a: "Montreal",
            b: "Toronto",
            c: "Vancouver"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Portugal?",
        answers: {
            a: "Porto",
            b: "Lisbon",
            c: "Faro"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is known as the Land of a Thousand Lakes?",
        answers: {
            a: "Sweden",
            b: "Finland",
            c: "Canada"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Colombia?",
        answers: {
            a: "Medellin",
            b: "Bogotá",
            c: "Cali"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest active volcano in the world?",
        answers: {
            a: "Mount Etna",
            b: "Mauna Loa",
            c: "Mount Fuji"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Belgium?",
        answers: {
            a: "Antwerp",
            b: "Brussels",
            c: "Bruges"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of coffee in the world?",
        answers: {
            a: "Colombia",
            b: "Vietnam",
            c: "Brazil"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Denmark?",
        answers: {
            a: "Aarhus",
            b: "Copenhagen",
            c: "Odense"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest country in Africa?",
        answers: {
            a: "Algeria",
            b: "Democratic Republic of Congo",
            c: "Sudan"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Finland?",
        answers: {
            a: "Tampere",
            b: "Helsinki",
            c: "Turku"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is known as the Land of the Long White Cloud?",
        answers: {
            a: "Australia",
            b: "New Zealand",
            c: "Fiji"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Greece?",
        answers: {
            a: "Thessaloniki",
            b: "Athens",
            c: "Patras"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in the United States by population?",
        answers: {
            a: "Los Angeles",
            b: "New York City",
            c: "Chicago"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Ireland?",
        answers: {
            a: "Cork",
            b: "Dublin",
            c: "Galway"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of tea in the world?",
        answers: {
            a: "India",
            b: "China",
            c: "Sri Lanka"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Switzerland?",
        answers: {
            a: "Zurich",
            b: "Geneva",
            c: "Bern"
        },
        correctAnswer: "c"
    },
    {
        question: "Which is the largest desert in Asia?",
        answers: {
            a: "Gobi Desert",
            b: "Thar Desert",
            c: "Arabian Desert"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Austria?",
        answers: {
            a: "Salzburg",
            b: "Vienna",
            c: "Innsbruck"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is known as the Land of Volcanoes?",
        answers: {
            a: "Indonesia",
            b: "El Salvador",
            c: "Iceland"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Poland?",
        answers: {
            a: "Krakow",
            b: "Warsaw",
            c: "Gdansk"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in the Caribbean Sea?",
        answers: {
            a: "Hispaniola",
            b: "Cuba",
            c: "Jamaica"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Hungary?",
        answers: {
            a: "Debrecen",
            b: "Budapest",
            c: "Szeged"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of silver in the world?",
        answers: {
            a: "Peru",
            b: "Mexico",
            c: "China"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of the Czech Republic?",
        answers: {
            a: "Brno",
            b: "Prague",
            c: "Ostrava"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in Australia?",
        answers: {
            a: "Melbourne",
            b: "Sydney",
            c: "Brisbane"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of the United Arab Emirates?",
        answers: {
            a: "Dubai",
            b: "Abu Dhabi",
            c: "Sharjah"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of copper in the world?",
        answers: {
            a: "Chile",
            b: "Peru",
            c: "China"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Romania?",
        answers: {
            a: "Cluj-Napoca",
            b: "Bucharest",
            c: "Timisoara"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in the world?",
        answers: {
            a: "New Guinea",
            b: "Borneo",
            c: "Greenland"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of the Philippines?",
        answers: {
            a: "Cebu City",
            b: "Manila",
            c: "Davao City"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: {
            a: "China",
            b: "Japan",
            c: "South Korea"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Vietnam?",
        answers: {
            a: "Ho Chi Minh City",
            b: "Hanoi",
            c: "Da Nang"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest country in the world by land area?",
        answers: {
            a: "China",
            b: "United States",
            c: "Russia"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the capital of Malaysia?",
        answers: {
            a: "Penang",
            b: "Kuala Lumpur",
            c: "Johor Bahru"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of gold in the world?",
        answers: {
            a: "Australia",
            b: "China",
            c: "Russia"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Indonesia?",
        answers: {
            a: "Bandung",
            b: "Jakarta",
            c: "Surabaya"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest desert in Australia?",
        answers: {
            a: "Great Sandy Desert",
            b: "Great Victoria Desert",
            c: "Tanami Desert"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Pakistan?",
        answers: {
            a: "Karachi",
            b: "Islamabad",
            c: "Lahore"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of diamonds in the world?",
        answers: {
            a: "Botswana",
            b: "Russia",
            c: "Canada"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Bangladesh?",
        answers: {
            a: "Chittagong",
            b: "Dhaka",
            c: "Khulna"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in Africa?",
        answers: {
            a: "Madagascar",
            b: "Seychelles",
            c: "Mauritius"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Nigeria?",
        answers: {
            a: "Lagos",
            b: "Abuja",
            c: "Kano"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of platinum in the world?",
        answers: {
            a: "Russia",
            b: "South Africa",
            c: "Zimbabwe"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Iran?",
        answers: {
            a: "Isfahan",
            b: "Tehran",
            c: "Shiraz"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in South America?",
        answers: {
            a: "Buenos Aires",
            b: "São Paulo",
            c: "Rio de Janeiro"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Iraq?",
        answers: {
            a: "Mosul",
            b: "Baghdad",
            c: "Basra"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of oil in the world?",
        answers: {
            a: "Saudi Arabia",
            b: "United States",
            c: "Russia"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Afghanistan?",
        answers: {
            a: "Kandahar",
            b: "Kabul",
            c: "Herat"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest desert in South America?",
        answers: {
            a: "Atacama Desert",
            b: "Patagonian Desert",
            c: "Sechura Desert"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Syria?",
        answers: {
            a: "Aleppo",
            b: "Damascus",
            c: "Homs"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of natural gas in the world?",
        answers: {
            a: "Russia",
            b: "United States",
            c: "Iran"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Yemen?",
        answers: {
            a: "Aden",
            b: "Sana'a",
            c: "Taiz"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in the Indian Ocean?",
        answers: {
            a: "Sri Lanka",
            b: "Madagascar",
            c: "Sumatra"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Jordan?",
        answers: {
            a: "Zarqa",
            b: "Amman",
            c: "Irbid"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of coal in the world?",
        answers: {
            a: "India",
            b: "China",
            c: "United States"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Lebanon?",
        answers: {
            a: "Tripoli",
            b: "Beirut",
            c: "Sidon"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in Africa?",
        answers: {
            a: "Cairo",
            b: "Lagos",
            c: "Kinshasa"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Israel?",
        answers: {
            a: "Tel Aviv",
            b: "Jerusalem",
            c: "Haifa"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of uranium in the world?",
        answers: {
            a: "Kazakhstan",
            b: "Canada",
            c: "Australia"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Palestine?",
        answers: {
            a: "Gaza City",
            b: "Ramallah",
            c: "Hebron"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in the Atlantic Ocean?",
        answers: {
            a: "Great Britain",
            b: "Greenland",
            c: "Iceland"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Kuwait?",
        answers: {
            a: "Hawalli",
            b: "Kuwait City",
            c: "Salmiya"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of bauxite in the world?",
        answers: {
            a: "Australia",
            b: "China",
            c: "Guinea"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Qatar?",
        answers: {
            a: "Al Wakrah",
            b: "Doha",
            c: "Al Rayyan"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in the Middle East?",
        answers: {
            a: "Riyadh",
            b: "Cairo",
            c: "Tehran"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Bahrain?",
        answers: {
            a: "Riffa",
            b: "Manama",
            c: "Muharraq"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of iron ore in the world?",
        answers: {
            a: "Australia",
            b: "Brazil",
            c: "China"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Oman?",
        answers: {
            a: "Seeb",
            b: "Muscat",
            c: "Salalah"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in the Pacific Ocean?",
        answers: {
            a: "New Guinea",
            b: "Honshu",
            c: "Borneo"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of the United States?",
        answers: {
            a: "New York City",
            b: "Washington, D.C.",
            c: "Los Angeles"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of wheat in the world?",
        answers: {
            a: "India",
            b: "China",
            c: "United States"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of the Democratic Republic of Congo?",
        answers: {
            a: "Lubumbashi",
            b: "Kinshasa",
            c: "Mbuji-Mayi"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in North America?",
        answers: {
            a: "Mexico City",
            b: "New York City",
            c: "Los Angeles"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Algeria?",
        answers: {
            a: "Oran",
            b: "Algiers",
            c: "Constantine"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of rice in the world?",
        answers: {
            a: "India",
            b: "China",
            c: "Indonesia"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Morocco?",
        answers: {
            a: "Casablanca",
            b: "Rabat",
            c: "Fes"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest city in Europe?",
        answers: {
            a: "London",
            b: "Istanbul",
            c: "Moscow"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the capital of Sudan?",
        answers: {
            a: "Omdurman",
            b: "Khartoum",
            c: "Port Sudan"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of corn in the world?",
        answers: {
            a: "United States",
            b: "China",
            c: "Brazil"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Libya?",
        answers: {
            a: "Benghazi",
            b: "Tripoli",
            c: "Misrata"
        },
        correctAnswer: "b"
    },
    {
        question: "Which is the largest island in Europe?",
        answers: {
            a: "Great Britain",
            b: "Iceland",
            c: "Ireland"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Tunisia?",
        answers: {
            a: "Sfax",
            b: "Tunis",
            c: "Sousse"
        },
        correctAnswer: "b"
    },
    {
        question: "Which country is the largest producer of sugar in the world?",
        answers: {
            a: "Brazil",
            b: "India",
            c: "China"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the capital of Mauritania?",
        answers: {
            a: "Nouadhibou",
            b: "Nouakchott",
            c: "Kiffa"
        },
        correctAnswer: "b"
    }
];