// Challenger Computers JS Logic

// PC Configurations Data with Dashboard spec formats
const pcData = {
    gaming: [
        {
            name: "ENTRY GAMING",
            labelColor: "text-emerald-600 dark:text-emerald-400",
            borderColor: "hover:border-emerald-500",
            fpsBadge: "60+ FPS | 1080P",
            fpsColor: "text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30",
            specs: {
                cpu: "Ryzen 5 5600",
                gpu: "RTX 3060 8GB",
                ram: "16GB DDR4",
                ssd: "512GB NVMe SSD"
            },
            benchmarks: [
                { game: "Valorant (1080p High)", fps: "240 FPS", pct: "80%" },
                { game: "GTA V (1080p Ultra)", fps: "95 FPS", pct: "60%" },
                { game: "Cyberpunk 2077 (Med)", fps: "58 FPS", pct: "40%" }
            ],
            price: "₹54,999",
            rawPrice: 54999,
            image: "assets/images/pc_entry.jpg"
        },
        {
            name: "MID-GAMING",
            labelColor: "text-blue-600 dark:text-blue-400",
            borderColor: "hover:border-blue-500",
            fpsBadge: "100+ FPS | 1080P",
            fpsColor: "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30",
            specs: {
                cpu: "Intel i5 13400F",
                gpu: "RTX 4060 8GB",
                ram: "16GB DDR5",
                ssd: "1TB NVMe SSD"
            },
            benchmarks: [
                { game: "Cyberpunk (DLSS ON)", fps: "75 FPS", pct: "58%" },
                { game: "COD: MW3 (1080p High)", fps: "120 FPS", pct: "75%" },
                { game: "Forza Horizon 5", fps: "88 FPS", pct: "65%" }
            ],
            price: "₹84,999",
            rawPrice: 84999,
            image: "assets/images/pc_mid.jpg"
        },
        {
            name: "HIGH GAMING",
            labelColor: "text-orange-600 dark:text-orange-400",
            borderColor: "hover:border-orange-500",
            fpsBadge: "144+ FPS | 1440P",
            fpsColor: "text-orange-600 bg-orange-50 border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30",
            specs: {
                cpu: "Ryzen 7 7700X",
                gpu: "RTX 4070 Super 12GB",
                ram: "32GB DDR5",
                ssd: "1TB Gen4 SSD"
            },
            benchmarks: [
                { game: "Forza Horizon 5 (1440p)", fps: "140 FPS", pct: "85%" },
                { game: "Cyberpunk (Ultra RT)", fps: "95 FPS", pct: "70%" },
                { game: "Apex Legends (1440p)", fps: "185 FPS", pct: "90%" }
            ],
            price: "₹1,24,999",
            rawPrice: 124999,
            image: "assets/images/pc_high.jpg"
        },
        {
            name: "EXTREME GAMING",
            labelColor: "text-purple-600 dark:text-purple-400",
            borderColor: "hover:border-purple-500",
            fpsBadge: "200+ FPS | 4K",
            fpsColor: "text-purple-600 bg-purple-50 border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30",
            specs: {
                cpu: "Intel i9 14900K",
                gpu: "RTX 4080 Super 16GB",
                ram: "32GB DDR5",
                ssd: "2TB Gen4 SSD"
            },
            benchmarks: [
                { game: "Alan Wake 2 (4K DLSS)", fps: "80 FPS", pct: "82%" },
                { game: "Cyberpunk 4K RT", fps: "75 FPS", pct: "78%" },
                { game: "Hogwarts Legacy (4K)", fps: "92 FPS", pct: "85%" }
            ],
            price: "₹1,99,999",
            rawPrice: 199999,
            image: "assets/images/pc_extreme.jpg"
        },
        {
            name: "ULTIMATE GAMING",
            labelColor: "text-amber-600 dark:text-amber-400",
            borderColor: "hover:border-amber-500",
            fpsBadge: "MAX FPS | 4K+",
            fpsColor: "text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30",
            specs: {
                cpu: "Ryzen 9 7950X3D",
                gpu: "RTX 4090 24GB",
                ram: "64GB DDR5",
                ssd: "2TB Gen4 SSD"
            },
            benchmarks: [
                { game: "Cyberpunk 4K Max", fps: "145 FPS", pct: "98%" },
                { game: "Starfield (4K Ultra)", fps: "98 FPS", pct: "90%" },
                { game: "Flight Simulator (4K)", fps: "110 FPS", pct: "92%" }
            ],
            price: "₹3,49,999",
            rawPrice: 349999,
            image: "assets/images/pc_ultimate.jpg"
        }
    ],
    editing: [
        {
            name: "ENTRY EDITING",
            labelColor: "text-emerald-600 dark:text-emerald-400",
            borderColor: "hover:border-emerald-500",
            fpsBadge: "FHD | TIMELINE",
            fpsColor: "text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30",
            specs: {
                cpu: "Intel i5 13400",
                gpu: "RTX 3050 6GB",
                ram: "16GB DDR4",
                ssd: "512GB NVMe SSD"
            },
            benchmarks: [
                { game: "Premiere 1080p Playback", fps: "Fluid", pct: "75%" },
                { game: "Resolve Grade HD", fps: "Realtime", pct: "70%" },
                { game: "Photoshop Smart Filters", fps: "Instant", pct: "80%" }
            ],
            price: "₹64,999",
            rawPrice: 64999,
            image: "assets/images/pc_entry.jpg"
        },
        {
            name: "MID-EDITING",
            labelColor: "text-blue-600 dark:text-blue-400",
            borderColor: "hover:border-blue-500",
            fpsBadge: "4K | TIMELINE",
            fpsColor: "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30",
            specs: {
                cpu: "Intel i5 14500",
                gpu: "RTX 4060 8GB",
                ram: "32GB DDR5",
                ssd: "1TB NVMe SSD"
            },
            benchmarks: [
                { game: "Premiere 4K Playback", fps: "Smooth", pct: "80%" },
                { game: "Resolve Color Grade", fps: "Fast", pct: "75%" },
                { game: "Blender Cycles Render", fps: "Medium", pct: "60%" }
            ],
            price: "₹89,999",
            rawPrice: 89999,
            image: "assets/images/pc_mid.jpg"
        },
        {
            name: "PRO EDITING",
            labelColor: "text-orange-600 dark:text-orange-400",
            borderColor: "hover:border-orange-500",
            fpsBadge: "6K | TIMELINE",
            fpsColor: "text-orange-600 bg-orange-50 border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30",
            specs: {
                cpu: "Intel i7 14700K",
                gpu: "RTX 4070 12GB",
                ram: "32GB DDR5",
                ssd: "1TB Gen4 SSD"
            },
            benchmarks: [
                { game: "6K ProRES Encoding", fps: "Fast", pct: "85%" },
                { game: "After Effects Cache", fps: "Fast", pct: "85%" },
                { game: "Cinema 4D Viewport", fps: "Fluid", pct: "80%" }
            ],
            price: "₹1,49,999",
            rawPrice: 149999,
            image: "assets/images/pc_high.jpg"
        },
        {
            name: "EXTREME EDITING",
            labelColor: "text-purple-600 dark:text-purple-400",
            borderColor: "hover:border-purple-500",
            fpsBadge: "8K | TIMELINE",
            fpsColor: "text-purple-600 bg-purple-50 border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30",
            specs: {
                cpu: "Intel i9 14900K",
                gpu: "RTX 4070 Ti Super 16GB",
                ram: "64GB DDR5",
                ssd: "2TB Gen4 SSD"
            },
            benchmarks: [
                { game: "8K Grade Playback", fps: "Realtime", pct: "90%" },
                { game: "Blender Render Time", fps: "Fast", pct: "88%" },
                { game: "Unreal Engine 5.4 Cook", fps: "Fast", pct: "85%" }
            ],
            price: "₹2,19,999",
            rawPrice: 219999,
            image: "assets/images/pc_extreme.jpg"
        },
        {
            name: "ULTIMATE EDITING",
            labelColor: "text-amber-600 dark:text-amber-400",
            borderColor: "hover:border-amber-500",
            fpsBadge: "MAX | PRODUCTION",
            fpsColor: "text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30",
            specs: {
                cpu: "AMD Ryzen 9 7950X",
                gpu: "RTX 4090 24GB",
                ram: "64GB DDR5",
                ssd: "2TB Gen4 SSD"
            },
            benchmarks: [
                { game: "8K Multicam Render", fps: "Instant", pct: "98%" },
                { game: "Octane Render Bench", fps: "Max Score", pct: "99%" },
                { game: "V-Ray GPU Speed", fps: "Ultimate", pct: "97%" }
            ],
            price: "₹3,59,999",
            rawPrice: 359999,
            image: "assets/images/pc_ultimate.jpg"
        }
    ],
    workstation: [
        {
            name: "ENTRY WORKSTATION",
            labelColor: "text-emerald-600 dark:text-emerald-400",
            borderColor: "hover:border-emerald-500",
            fpsBadge: "OFFICE | WORK",
            fpsColor: "text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30",
            specs: {
                cpu: "Intel i5 13400",
                gpu: "Intel UHD Graphics",
                ram: "16GB DDR4",
                ssd: "512GB NVMe SSD"
            },
            benchmarks: [
                { game: "Excel Heavy Macro", fps: "Fast", pct: "75%" },
                { game: "Chrome 30+ Tabs", fps: "Smooth", pct: "80%" },
                { game: "VS Code Loading", fps: "Instant", pct: "85%" }
            ],
            price: "₹49,999",
            rawPrice: 49999,
            image: "assets/images/pc_entry.jpg"
        },
        {
            name: "MID-WORKSTATION",
            labelColor: "text-blue-600 dark:text-blue-400",
            borderColor: "hover:border-blue-500",
            fpsBadge: "PRO | WORK",
            fpsColor: "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30",
            specs: {
                cpu: "Intel i7 13700",
                gpu: "Intel UHD Graphics",
                ram: "32GB DDR5",
                ssd: "1TB NVMe SSD"
            },
            benchmarks: [
                { game: "Database Query Load", fps: "Very Fast", pct: "85%" },
                { game: "CAD Viewport Render", fps: "Fluid", pct: "75%" },
                { game: "Docker Container spin", fps: "4.5 sec", pct: "80%" }
            ],
            price: "₹79,999",
            rawPrice: 79999,
            image: "assets/images/pc_mid.jpg"
        },
        {
            name: "HIGH WORKSTATION",
            labelColor: "text-orange-600 dark:text-orange-400",
            borderColor: "hover:border-orange-500",
            fpsBadge: "AI | CODING",
            fpsColor: "text-orange-600 bg-orange-50 border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30",
            specs: {
                cpu: "Intel i7 14700K",
                gpu: "RTX 4070 Ti Super 16GB",
                ram: "64GB DDR5",
                ssd: "2TB Gen4 SSD"
            },
            benchmarks: [
                { game: "SDXL Image Gen (1024)", fps: "1.2s / Img", pct: "85%" },
                { game: "LLaMA 3-8B Inference", fps: "45 Tok/s", pct: "80%" },
                { game: "TensorFlow training", fps: "Fast", pct: "82%" }
            ],
            price: "₹1,79,999",
            rawPrice: 179999,
            image: "assets/images/pc_high.jpg"
        },
        {
            name: "EXTREME WORKSTATION",
            labelColor: "text-purple-600 dark:text-purple-400",
            borderColor: "hover:border-purple-500",
            fpsBadge: "DEEP | LEARNING",
            fpsColor: "text-purple-600 bg-purple-50 border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30",
            specs: {
                cpu: "Intel i9 14900K",
                gpu: "Dual RTX 4070Ti Super 16B",
                ram: "128GB DDR5",
                ssd: "2TB Gen4 SSD"
            },
            benchmarks: [
                { game: "PyTorch CNN Epoch", fps: "Max Speed", pct: "92%" },
                { game: "LLaMA 3-70B (Q4)", fps: "25 Tok/s", pct: "88%" },
                { game: "Dataset Load (10GB)", fps: "Instant", pct: "94%" }
            ],
            price: "₹3,19,999",
            rawPrice: 319999,
            image: "assets/images/pc_extreme.jpg"
        },
        {
            name: "ULTIMATE WORKSTATION",
            labelColor: "text-amber-600 dark:text-amber-400",
            borderColor: "hover:border-amber-500",
            fpsBadge: "ENTERPRISE | AI",
            fpsColor: "text-amber-650 bg-amber-50 border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30",
            specs: {
                cpu: "Threadripper 7960X",
                gpu: "Dual RTX 4090 24GB",
                ram: "256GB DDR5",
                ssd: "4TB Gen4 SSD"
            },
            benchmarks: [
                { game: "LLaMA 3-70B Full FP16", fps: "60 Tok/s", pct: "98%" },
                { game: "CNN Dataset Training", fps: "Max Accel", pct: "99%" },
                { game: "NeRF Reconstruction", fps: "Instant", pct: "96%" }
            ],
            price: "₹7,49,999",
            rawPrice: 749999,
            image: "assets/images/pc_ultimate.jpg"
        }
    ]
};

// State Variables
let currentTab = 'gaming';
let cartCount = parseInt(localStorage.getItem('cartCount')) || 2;
let wishlistCount = parseInt(localStorage.getItem('wishlistCount')) || 0;
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// DOM Elements waiting for load
document.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    updateHeaderBadges();
    init3DTilt();

    // Sticky Navigation
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenuCloseBtn = document.getElementById("mobile-menu-close");
    const mobileDrawer = document.getElementById("mobile-drawer");

    if (mobileMenuBtn && mobileDrawer) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileDrawer.classList.remove("translate-x-full");
        });
    }

    if (mobileMenuCloseBtn && mobileDrawer) {
        mobileMenuCloseBtn.addEventListener("click", () => {
            mobileDrawer.classList.add("translate-x-full");
        });
    }

    // Hero Hotspots Spec Hover Tooltips
    const hotspots = document.querySelectorAll(".hotspot");
    hotspots.forEach(hotspot => {
        const tooltip = hotspot.querySelector(".hotspot-tooltip");
        
        hotspot.addEventListener("click", (e) => {
            e.stopPropagation();
            hotspots.forEach(h => {
                if (h !== hotspot) {
                    const t = h.querySelector(".hotspot-tooltip");
                    if (t) t.classList.add("scale-0", "opacity-0");
                }
            });
            if (tooltip) {
                tooltip.classList.toggle("scale-0");
                tooltip.classList.toggle("opacity-0");
            }
        });
    });

    document.addEventListener("click", () => {
        hotspots.forEach(h => {
            const t = h.querySelector(".hotspot-tooltip");
            if (t) t.classList.add("scale-0", "opacity-0");
        });
    });

    // Render PC Cards initially
    renderPCList();

    // Carousel Arrows Scroll handlers
    const pcCarousel = document.getElementById("pc-cards-carousel");
    const pcPrevBtn = document.getElementById("pc-carousel-prev");
    const pcNextBtn = document.getElementById("pc-carousel-next");
    if (pcCarousel && pcPrevBtn && pcNextBtn) {
        pcPrevBtn.addEventListener("click", () => {
            pcCarousel.scrollBy({ left: -340, behavior: 'smooth' });
        });
        pcNextBtn.addEventListener("click", () => {
            pcCarousel.scrollBy({ left: 340, behavior: 'smooth' });
        });
    }

    // Budget bar scroll handler
    const budgetCarousel = document.getElementById("budget-carousel-container");
    const budgetNextBtn = document.getElementById("budget-carousel-next");
    if (budgetCarousel && budgetNextBtn) {
        budgetNextBtn.addEventListener("click", () => {
            if (budgetCarousel.scrollLeft + budgetCarousel.clientWidth >= budgetCarousel.scrollWidth - 10) {
                budgetCarousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                budgetCarousel.scrollBy({ left: 200, behavior: 'smooth' });
            }
        });
    }

    // Section 3 Tabs Switcher
    const tabs = document.querySelectorAll(".tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
            tabs.forEach(t => {
                t.classList.remove("bg-rose-600", "text-white", "border-rose-600");
                t.classList.add("bg-white", "dark:bg-slate-900", "text-slate-700", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
            });

            tab.classList.remove("bg-white", "dark:bg-slate-900", "text-slate-700", "dark:text-slate-300", "border-slate-200", "dark:border-slate-800");
            tab.classList.add("bg-rose-600", "text-white", "border-rose-600");

            currentTab = tab.dataset.tab;
            renderPCList();
        });
    });

    // Budget Buttons Listener (Section 4)
    const budgetBtns = document.querySelectorAll(".budget-btn");
    budgetBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            budgetBtns.forEach(b => {
                b.classList.remove("border-rose-600", "bg-rose-50", "dark:bg-rose-950/20", "text-rose-700", "dark:text-rose-455");
                b.classList.add("border-slate-200", "dark:border-slate-800", "bg-white", "dark:bg-slate-900", "text-slate-700", "dark:text-slate-300");
            });

            btn.classList.remove("border-slate-200", "dark:border-slate-800", "bg-white", "dark:bg-slate-900", "text-slate-700", "dark:text-slate-300");
            btn.classList.add("border-rose-600", "bg-rose-50", "dark:bg-rose-950/20", "text-rose-700", "dark:text-rose-455");

            const targetBudget = parseInt(btn.dataset.budget);
            findAndScrollToPC(targetBudget);
        });
    });

    setupEcommerceListeners();

    // Scroll handlers (Scroll Reveal & Morphing Floating 3D PC)
    const reveals = document.querySelectorAll(".reveal");
    const holoStages = document.querySelectorAll("[data-holo-stage]");
    const floatConnector = document.getElementById("floating-pc-connector");
    const floatRotator = document.getElementById("floating-pc-rotator");

    const onScrollHandlers = () => {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;
        const pageHeight = document.documentElement.scrollHeight;

        // 1. Reveal element logic
        reveals.forEach(r => {
            const elementTop = r.getBoundingClientRect().top;
            const elementVisible = 120;
            if (elementTop < windowHeight - elementVisible) {
                r.classList.add("active");
            }
        });

        // 2. Morphing 3D Floating PC visibility and spin/float transforms
        if (floatConnector && floatRotator) {
            // Hide on initial hero top and bottom footer overlap regions
            if (scrollY > 180 && scrollY < (pageHeight - windowHeight - 400)) {
                floatConnector.classList.remove("opacity-0", "translate-x-12");
                floatConnector.classList.add("opacity-100", "translate-x-0");
            } else {
                floatConnector.classList.remove("opacity-100", "translate-x-0");
                floatConnector.classList.add("opacity-0", "translate-x-12");
            }

            // Spin math (3D Y rotation based on scroll depth) + vertical sine wave hover float
            const spinY = (scrollY / 3) % 360;
            const floatY = Math.sin(scrollY / 150) * 8; // Float amplitude 8px
            floatRotator.style.transform = `perspective(1000px) rotateY(${spinY}deg) rotateX(15deg) translateY(${floatY}px)`;
        }

        // 3. Section Tracking to Swap active PC image stage
        let activeStage = 'hero';
        holoStages.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            // Trigger morph when section occupies center focus of viewport
            if (rect.top < windowHeight * 0.55 && rect.bottom > windowHeight * 0.3) {
                activeStage = sec.dataset.holoStage;
            }
        });

        morphFloatingPC(activeStage);
    };

    window.addEventListener("scroll", onScrollHandlers);
    onScrollHandlers(); // Trigger once initially
});

// Switch active PC image layers based on current active section stage
function morphFloatingPC(stage) {
    const heroPC = document.getElementById("float-stage-hero");
    const journeyPC = document.getElementById("float-stage-journey");
    const rigsPC = document.getElementById("float-stage-rigs");
    const offersPC = document.getElementById("float-stage-offers");
    const hudLabel = document.getElementById("floating-pc-label");

    if (!heroPC || !journeyPC || !rigsPC || !offersPC) return;

    // Reset scales & opacities
    const resetStyles = (el) => {
        el.classList.add("opacity-0", "scale-75");
        el.classList.remove("opacity-100", "scale-100");
    };
    const setStyles = (el) => {
        el.classList.remove("opacity-0", "scale-75");
        el.classList.add("opacity-100", "scale-100");
    };

    resetStyles(heroPC);
    resetStyles(journeyPC);
    resetStyles(rigsPC);
    resetStyles(offersPC);

    if (stage === 'hero') {
        setStyles(heroPC);
        if (hudLabel) hudLabel.textContent = "CORE: ULTIMATE CHASSIS";
    } else if (stage === 'journey') {
        setStyles(journeyPC);
        if (hudLabel) hudLabel.textContent = "CHASSIS: CONFIGURATOR";
    } else if (stage === 'rigs') {
        setStyles(rigsPC);
        if (hudLabel) hudLabel.textContent = "DECK: GAMING SERIES";
    } else if (stage === 'offers') {
        setStyles(offersPC);
        if (hudLabel) hudLabel.textContent = "GEAR: COMPONENT CATALOG";
    }
}

// Initialise Dark mode toggle settings
function initDarkMode() {
    const toggleBtn = document.getElementById("dark-mode-toggle");
    const html = document.documentElement;

    if (!toggleBtn) return;

    const savedMode = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedMode === "dark" || (!savedMode && systemPrefersDark)) {
        html.classList.add("dark");
    } else {
        html.classList.remove("dark");
    }

    toggleBtn.addEventListener("click", () => {
        if (html.classList.contains("dark")) {
            html.classList.remove("dark");
            localStorage.setItem("theme", "light");
            showToast("💡 System Lights Enabled (Light Mode)");
        } else {
            html.classList.add("dark");
            localStorage.setItem("theme", "dark");
            showToast("🌙 Cyber Night Glow Powered ON (Dark Mode)");
        }
    });
}

// Advanced 3D Parallax Tilt Interaction
function init3DTilt() {
    const tiltElements = document.querySelectorAll(".tilt-3d");
    tiltElements.forEach(el => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 7; 
            const rotateY = ((x - centerX) / centerX) * 7;
            
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        });
        
        el.addEventListener("mouseleave", () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
        });
        
        el.addEventListener("mouseenter", () => {
            el.style.transition = "none";
        });
    });
}

// Render the PCs inside the high-impact card grid
function renderPCList() {
    const grid = document.getElementById("pc-cards-carousel");
    if (!grid) return;

    const data = pcData[currentTab];
    grid.innerHTML = '';

    data.forEach((pc, idx) => {
        const benchHtml = pc.benchmarks.map(b => `
            <div class="space-y-0.5 text-left">
                <div class="flex justify-between text-[10px] font-black text-slate-300">
                    <span>${b.game}</span>
                    <span class="text-rose-500">${b.fps}</span>
                </div>
                <div class="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-rose-500 to-amber-500 rounded-full" style="width: ${b.pct}"></div>
                </div>
            </div>
        `).join('');

        const fpsParts = pc.fpsBadge.split('|').map(s => s.trim());
        const fpsTitle = fpsParts[0] || '';
        const fpsResolution = fpsParts[1] || '';

        const card = document.createElement("div");
        card.className = "w-[280px] sm:w-[320px] shrink-0 snap-start pc-grid-card-wrapper pb-2";
        card.innerHTML = `
            <div class="pc-grid-card bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 sm:p-5 hover:border-rose-500 dark:hover:border-rose-500/50 hover:shadow-xl dark:hover:shadow-rose-950/20 transition-all duration-300 tilt-3d flex flex-col justify-between h-full relative group">
                
                <div class="tilt-child-3d">
                    <!-- Top Category & FPS Badge -->
                    <div class="flex justify-between items-start mb-3">
                        <span class="text-[11px] font-black uppercase tracking-wider text-slate-900 dark:text-white">${pc.name}</span>
                        <div class="text-right">
                            <span class="block text-[11px] font-black tracking-wide leading-none ${pc.labelColor}">${fpsTitle}</span>
                            <span class="block text-[9px] text-slate-400 dark:text-slate-500 font-semibold mt-0.5 leading-none">${fpsResolution}</span>
                        </div>
                    </div>

                    <!-- Visual PC Case Cover -->
                    <div class="h-44 w-full relative mb-4 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-100 dark:border-slate-800/60 shadow-inner">
                        <img src="${pc.image}" alt="${pc.name}" class="object-contain h-36 w-auto transition-transform duration-700 group-hover:scale-105">
                        
                        <!-- Slide-up hover benchmarks projection -->
                        <div class="absolute inset-0 bg-slate-950/90 backdrop-blur-sm p-4 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 rounded-xl text-left border border-slate-800">
                            <div>
                                <p class="text-[10px] font-black uppercase text-rose-500 tracking-widest mb-2 border-b border-slate-800 pb-1 flex items-center">
                                    <i class="fa-solid fa-gamepad mr-1.5 text-xs text-amber-500"></i> LIVE BENCHMARKS
                                </p>
                                <div class="space-y-2">
                                    ${benchHtml}
                                </div>
                            </div>
                            <p class="text-[8px] text-slate-505 font-semibold">* Estimated performance stats</p>
                        </div>
                    </div>

                    <!-- Specs List (Centered Multi-line) -->
                    <div class="text-center space-y-1 text-xs text-slate-500 dark:text-slate-455 py-3 border-t border-slate-100 dark:border-slate-800/50 mb-3">
                        <div class="font-semibold text-slate-800 dark:text-slate-200">${pc.specs.cpu}</div>
                        <div>${pc.specs.gpu}</div>
                        <div>${pc.specs.ram}</div>
                        <div>${pc.specs.ssd}</div>
                    </div>
                </div>

                <!-- Price and Action Buttons -->
                <div class="tilt-child-3d mt-auto">
                    <div class="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/50 pt-4 mt-auto">
                        <div class="flex flex-col text-left">
                            <span class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-none">${pc.price}</span>
                            <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none mt-1">Starting from</span>
                        </div>
                        <div class="flex space-x-1.5">
                            <button class="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold uppercase tracking-wider hover:border-rose-500 hover:text-rose-500 transition-all customize-pc-btn" data-pc-name="${pc.name}">Customize</button>
                            <button class="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-[10px] font-bold uppercase tracking-wider transition-all add-to-cart-btn-pc" data-pc-name="${pc.name}" data-pc-price="${pc.price}" data-pc-image="${pc.image}">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
        `;
        grid.appendChild(card);
    });

    init3DTilt();
}

// Map clicked budget category to closest PC price tag and select it
function findAndScrollToPC(budgetAmount) {
    const gamingTabBtn = document.querySelector("[data-tab='gaming']");
    if (gamingTabBtn && currentTab !== 'gaming') {
        gamingTabBtn.click();
    }

    const data = pcData.gaming;
    
    // Find PC with rawPrice closest to budgetAmount
    let closestIndex = 0;
    let minDifference = Math.abs(data[0].rawPrice - budgetAmount);

    for (let i = 1; i < data.length; i++) {
        const diff = Math.abs(data[i].rawPrice - budgetAmount);
        if (diff < minDifference) {
            minDifference = diff;
            closestIndex = i;
        }
    }

    // Scroll correct card inside horizontal carousel into view
    const carousel = document.getElementById("pc-cards-carousel");
    const cards = document.querySelectorAll("#pc-cards-carousel > .pc-grid-card-wrapper");
    if (carousel && cards && cards[closestIndex]) {
        const card = cards[closestIndex];
        const scrollLeft = card.offsetLeft - carousel.offsetLeft - (carousel.clientWidth - card.clientWidth) / 2;
        carousel.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        
        const cardInner = card.querySelector(".pc-grid-card");
        if (cardInner) {
            cardInner.classList.add("ring-4", "ring-rose-500", "scale-[1.02]");
            setTimeout(() => {
                cardInner.classList.remove("ring-4", "ring-rose-500", "scale-[1.02]");
            }, 1500);
        }
    }
}

// E-commerce interactions setup
function setupEcommerceListeners() {
    document.addEventListener("click", (e) => {
        if (e.target && e.target.classList.contains("add-to-cart-btn")) {
            const name = e.target.dataset.productName;
            const price = e.target.dataset.productPrice;
            const img = e.target.dataset.productImage;
            
            addToCart(name, price, img);
        }

        if (e.target && e.target.classList.contains("add-to-cart-btn-pc")) {
            const name = e.target.dataset.pcName;
            const price = e.target.dataset.pcPrice;
            const img = e.target.dataset.pcImage;

            addToCart(name, price, img);
        }

        if (e.target && (e.target.closest(".wishlist-btn") || e.target.classList.contains("wishlist-btn"))) {
            e.preventDefault();
            toggleWishlist();
        }

        if (e.target && e.target.classList.contains("customize-pc-btn")) {
            const name = e.target.dataset.pcName;
            showToast(`Opening Custom PC Configurator for ${name}...`);
        }
    });
}

// Add item to cart counter
function addToCart(name, price, img) {
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    
    cartItems.push({ name, price, img });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    updateHeaderBadges();
    showToast(`🛒 ${name} added to cart!`);
}

// Add item to wishlist counter
function toggleWishlist() {
    wishlistCount++;
    localStorage.setItem('wishlistCount', wishlistCount);
    updateHeaderBadges();
    showToast(`❤️ Added to Wishlist!`);
}

function updateHeaderBadges() {
    const cartBadges = document.querySelectorAll(".cart-badge");
    const wishlistBadges = document.querySelectorAll(".wishlist-badge");

    cartBadges.forEach(b => {
        b.textContent = cartCount;
        if (cartCount > 0) b.classList.remove("hidden");
    });

    wishlistBadges.forEach(b => {
        b.textContent = wishlistCount;
        if (wishlistCount > 0) b.classList.remove("hidden");
    });
}

// Toast notification helper
function showToast(message) {
    const existing = document.querySelectorAll(".custom-toast");
    existing.forEach(t => t.remove());

    const toast = document.createElement("div");
    toast.className = "custom-toast fixed bottom-5 right-5 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 z-50 transition-all duration-300 transform translate-y-10 opacity-0 border border-slate-700";
    toast.innerHTML = `
        <span class="text-sm font-semibold">${message}</span>
        <button class="text-slate-400 hover:text-white font-bold" onclick="this.parentElement.remove()">×</button>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("translate-y-10", "opacity-0");
    }, 50);

    setTimeout(() => {
        toast.classList.add("translate-y-10", "opacity-0");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}
