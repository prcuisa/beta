const defaultData = {
    hero: {
        title: "Build Smarter Businesses with",
        subtitle: "We help businesses build digital systems, automate workflows with AI, and install smart technology for modern offices and homes.",
        typingWords: ["AI", "Automation", "Smart Systems", "IoT"],
    },
    stats: [
        { id: "projects", value: 150, label: "Projects Delivered", icon: "fas fa-chart-line" },
        { id: "satisfaction", value: 98, label: "Client Satisfaction", icon: "fas fa-smile" },
        { id: "support", value: 24, label: "Hour Support", icon: "fas fa-clock" },
        { id: "years", value: 5, label: "Years Excellence", icon: "fas fa-trophy" }
    ],
    projects: [
        {
            id: 1,
            title: "QR Code Generator System",
            description: "Self-service tool for menus, forms & links. Used by 5k+ small businesses.",
            tech: "React, Node.js, AWS",
            icon: "fas fa-qrcode",
            colorClass: "from-primary-400 to-accent-500"
        },
        {
            id: 2,
            title: "AI Sales Assistant",
            description: "WhatsApp & Telegram automation for retail. 65% faster lead response, auto follow-up.",
            tech: "n8n, openClaw, Telegram, WhatsApp",
            icon: "fas fa-comment-dots",
            colorClass: "from-accent-400 to-indigo-500"
        },
        {
            id: 3,
            title: "Smart Office Installation",
            description: "Automated lighting, climate, security for 20-person agency. 30% energy saving.",
            tech: "IoT, Ubiquiti, custom dashboard",
            icon: "fas fa-microchip",
            colorClass: "from-purple-400 to-pink-500"
        }
    ]
};

// Function to get current data (from localStorage if exists, otherwise default)
function getCMSData() {
    const stored = localStorage.getItem('prcuisa_cms_data');
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch(e) {
            console.error("Error parsing stored CMS data, using default.");
            return defaultData;
        }
    }
    return defaultData;
}

// Function to save data to CMS
function saveCMSData(data) {
    localStorage.setItem('prcuisa_cms_data', JSON.stringify(data));
}
