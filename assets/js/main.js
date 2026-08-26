// Challenger Computers JS Logic

// PC Configurations Data with Dashboard spec formats
const pcData = {
    gaming: [
        {
            name: "Entry Gaming Rig",
            labelColor: "text-emerald-600 dark:text-emerald-400",
            borderColor: "hover:border-emerald-500",
            fpsBadge: "60+ FPS | 1080P",
            fpsColor: "text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30",
            specs: {
                cpu: "Ryzen 5 5500",
                gpu: "RTX 3060 8GB",
                ram: "16GB DDR4",
                ssd: "512GB NVMe"
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
            name: "Mid Gaming Rig",
            labelColor: "text-blue-600 dark:text-blue-400",
            borderColor: "hover:border-blue-500",
            fpsBadge: "100+ FPS | 1080P",
            fpsColor: "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-950/20 dark:border-blue-900/30",
            specs: {
                cpu: "i5 12400F",
                gpu: "RTX 4060 8GB",
                ram: "16GB DDR5",
                ssd: "1TB Gen4"
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
            name: "High Gaming Rig",
            labelColor: "text-orange-600 dark:text-orange-400",
            borderColor: "hover:border-orange-500",
            fpsBadge: "144+ FPS | 1440P",
            fpsColor: "text-orange-600 bg-orange-50 border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30",
            specs: {
                cpu: "Ryzen 7 7700X",
                gpu: "RTX 4070 Super",
                ram: "32GB DDR5",
                ssd: "1TB Gen4"
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
            name: "Extreme Gaming Rig",
            labelColor: "text-purple-600 dark:text-purple-400",
            borderColor: "hover:border-purple-500",
            fpsBadge: "200+ FPS | 4K",
            fpsColor: "text-purple-600 bg-purple-50 border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30",
            specs: {
                cpu: "i9 14900K",
                gpu: "RTX 4080 Super",
                ram: "32GB DDR5",
                ssd: "2TB Gen4"
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
            name: "Ultimate Gaming Rig",
            labelColor: "text-amber-600 dark:text-amber-400",
            borderColor: "hover:border-amber-500",
            fpsBadge: "MAX FPS | 4K+",
            fpsColor: "text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30",
            specs: {
                cpu: "Ryzen 9 7950X3D",
                gpu: "RTX 4090 24GB",
                ram: "64GB DDR5",
                ssd: "2TB Gen5"
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
            name: "Creator Starter Rig",
            labelColor: "text-emerald-600 dark:text-emerald-400",
            borderColor: "hover:border-emerald-500",
            fpsBadge: "4K Timeline",
            fpsColor: "text-emerald-600 bg-emerald-50 border-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-900/30",
            specs: {
                cpu: "i5 13400",
                gpu: "RTX 3060 12GB",
                ram: "32GB DDR5",
                ssd: "1TB Gen4"
            },
            benchmarks: [
                { game: "Premiere 4K Playback", fps: "Smooth", pct: "65%" },
                { game: "Resolve Color Grade", fps: "Render Ok", pct: "70%" },
                { game: "Blender Cycles Render", fps: "Medium", pct: "50%" }
            ],
            price: "₹79,999",
            rawPrice: 79999,
            image: "assets/images/pc_mid.jpg"
        },
        {
            name: "Premiere Pro Spec",
            labelColor: "text-orange-600 dark:text-orange-400",
            borderColor: "hover:border-orange-500",
            fpsBadge: "6K ProRES Smooth",
            fpsColor: "text-orange-600 bg-orange-50 border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30",
            specs: {
                cpu: "i7 14700K",
                gpu: "RTX 4070 12GB",
                ram: "64GB DDR5",
                ssd: "2TB Gen4"
            },
            benchmarks: [
                { game: "6K Red Raw Encoding", fps: "Fast", pct: "80%" },
                { game: "After Effects RAM Cache", fps: "Fast", pct: "85%" },
                { game: "Cinema 4D Viewport", fps: "Fluid", pct: "75%" }
            ],
            price: "₹1,54,999",
            rawPrice: 154999,
            image: "assets/images/pc_high.jpg"
        },
        {
            name: "DaVinci Studio Build",
            labelColor: "text-purple-600 dark:text-purple-400",
            borderColor: "hover:border-purple-500",
            fpsBadge: "8K Grading Ready",
            fpsColor: "text-purple-600 bg-purple-50 border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30",
            specs: {
                cpu: "i9 14900K",
                gpu: "RTX 4080 Super",
                ram: "64GB DDR5",
                ssd: "2TB Gen4"
            },
            benchmarks: [
                { game: "8K Grade playback", fps: "Realtime", pct: "90%" },
                { game: "Blender Render Time", fps: "90s / F", pct: "88%" },
                { game: "Unreal Engine 5.4 Cook", fps: "Fast", pct: "85%" }
            ],
            price: "₹2,24,999",
            rawPrice: 224999,
            image: "assets/images/pc_extreme.jpg"
        },
        {
            name: "Production Master Pro",
            labelColor: "text-amber-600 dark:text-amber-400",
            borderColor: "hover:border-amber-500",
            fpsBadge: "Dual GPU / Red Raw",
            fpsColor: "text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30",
            specs: {
                cpu: "Threadripper 7960X",
                gpu: "RTX 4090 24GB",
                ram: "128GB ECC",
                ssd: "4TB Array"
            },
            benchmarks: [
                { game: "8K Multicam Render", fps: "Instant", pct: "98%" },
                { game: "Octane Render Bench", fps: "Score Max", pct: "99%" },
                { game: "V-Ray GPU Speed", fps: "Ultimate", pct: "97%" }
            ],
            price: "₹4,89,999",
            rawPrice: 489999,
            image: "assets/images/pc_ultimate.jpg"
        }
    ],
    workstation: [
        {
            name: "AI Starter Rig",
            labelColor: "text-orange-600 dark:text-orange-400",
            borderColor: "hover:border-orange-500",
            fpsBadge: "16GB VRAM AI Model",
            fpsColor: "text-orange-600 bg-orange-50 border-orange-100 dark:bg-orange-950/20 dark:border-orange-900/30",
            specs: {
                cpu: "i7 14700K",
                gpu: "RTX 4070Ti Super",
                ram: "64GB DDR5",
                ssd: "2TB Gen4"
            },
            benchmarks: [
                { game: "SDXL Image Gen (1024)", fps: "1.2s / Img", pct: "75%" },
                { game: "LLaMA 3-8B Inference", fps: "45 Tok/s", pct: "70%" },
                { game: "TensorFlow Epoch", fps: "Fast", pct: "65%" }
            ],
            price: "₹1,89,999",
            rawPrice: 189999,
            image: "assets/images/pc_high.jpg"
        },
        {
            name: "Deep Learning Box",
            labelColor: "text-purple-600 dark:text-purple-400",
            borderColor: "hover:border-purple-500",
            fpsBadge: "32GB Combined VRAM",
            fpsColor: "text-purple-600 bg-purple-50 border-purple-100 dark:bg-purple-950/20 dark:border-purple-900/30",
            specs: {
                cpu: "i9 14900K",
                gpu: "Dual RTX 4070Ti",
                ram: "128GB DDR5",
                ssd: "2TB Array"
            },
            benchmarks: [
                { game: "PyTorch CNN Epoch", fps: "Very Fast", pct: "88%" },
                { game: "LLaMA 3-70B (Q4)", fps: "25 Tok/s", pct: "85%" },
                { game: "Stable Diffusion batch", fps: "15 Img / m", pct: "80%" }
            ],
            price: "₹3,69,999",
            rawPrice: 369999,
            image: "assets/images/pc_extreme.jpg"
        },
        {
            name: "ML Enterprise Server",
            labelColor: "text-amber-600 dark:text-amber-400",
            borderColor: "hover:border-amber-500",
            fpsBadge: "48GB VRAM Dual 4090",
            fpsColor: "text-amber-600 bg-amber-50 border-amber-100 dark:bg-amber-950/20 dark:border-amber-900/30",
            specs: {
                cpu: "Threadripper 7970X",
                gpu: "Dual RTX 4090",
                ram: "256GB ECC",
                ssd: "8TB Array"
            },
            benchmarks: [
                { game: "LLaMA 3-70B Full FP16", fps: "60 Tok/s", pct: "98%" },
                { game: "CNN Dataset Training", fps: "Max Accel", pct: "99%" },
                { game: "NeRF Reconstruction", fps: "Instant", pct: "96%" }
            ],
            price: "₹8,49,999",
            rawPrice: 849999,
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
    const grid = document.getElementById("pc-cards-grid");
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

        const card = document.createElement("div");
        card.className = "pc-grid-card-wrapper";
        card.innerHTML = `
            <div class="pc-grid-card bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-3xl p-5 hover:border-rose-500 dark:hover:border-rose-500/50 hover:shadow-2xl dark:hover:shadow-rose-950/20 transition-all duration-300 tilt-3d flex flex-col justify-between h-full relative group">
                
                <div class="tilt-child-3d">
                    <!-- Top Category & FPS Badge -->
                    <div class="flex justify-between items-center mb-3">
                        <span class="text-xs font-black uppercase tracking-wider ${pc.labelColor}">${pc.name}</span>
                        <span class="text-[9px] font-black px-2 py-0.5 rounded-full border ${pc.fpsColor}">${pc.fpsBadge}</span>
                    </div>

                    <!-- Visual PC Case Cover -->
                    <div class="h-48 w-full relative mb-4 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800/60 shadow-inner">
                        <img src="${pc.image}" alt="${pc.name}" class="object-contain h-40 w-auto transition-transform duration-700 group-hover:scale-105">
                        
                        <!-- Slide-up hover benchmarks projection -->
                        <div class="absolute inset-0 bg-slate-950/90 backdrop-blur-sm p-4 flex flex-col justify-between translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 rounded-2xl text-left border border-slate-800">
                            <div>
                                <p class="text-[10px] font-black uppercase text-rose-500 tracking-widest mb-2 border-b border-slate-800 pb-1 flex items-center">
                                    <i class="fa-solid fa-gamepad mr-1.5 text-xs text-amber-500"></i> LIVE BENCHMARKS
                                </p>
                                <div class="space-y-2">
                                    ${benchHtml}
                                </div>
                            </div>
                            <p class="text-[8px] text-slate-500 font-semibold">* Estimated performance stats at default settings</p>
                        </div>
                    </div>

                    <!-- Compact 2x2 Specs Dashboard -->
                    <div class="grid grid-cols-2 gap-2 text-[10px] text-slate-650 dark:text-slate-400 mb-4 border-b border-slate-100 dark:border-slate-800 pb-3 text-left">
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-microchip text-rose-600 dark:text-rose-500 text-xs w-4 flex-shrink-0"></i>
                            <span class="truncate font-medium">${pc.specs.cpu}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-bolt-lightning text-rose-600 dark:text-rose-500 text-xs w-4 flex-shrink-0"></i>
                            <span class="truncate font-medium">${pc.specs.gpu}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-memory text-rose-600 dark:text-rose-500 text-xs w-4 flex-shrink-0"></i>
                            <span class="truncate font-medium">${pc.specs.ram}</span>
                        </div>
                        <div class="flex items-center space-x-2">
                            <i class="fa-solid fa-database text-rose-600 dark:text-rose-500 text-xs w-4 flex-shrink-0"></i>
                            <span class="truncate font-medium">${pc.specs.ssd}</span>
                        </div>
                    </div>
                </div>

                <!-- Price Tags and Action Buttons -->
                <div class="tilt-child-3d mt-auto">
                    <span class="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none block text-left">Starting from</span>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-xl font-black text-slate-900 dark:text-white leading-none">${pc.price}</span>
                        <div class="flex space-x-1.5">
                            <button class="border border-rose-600 text-rose-600 dark:text-rose-455 font-bold px-3 py-1.5 rounded-xl text-[9px] hover:bg-rose-50 dark:hover:bg-slate-900 transition-colors uppercase tracking-wider customize-pc-btn" data-pc-name="${pc.name}">Customize</button>
                            <button class="bg-rose-600 hover:bg-rose-700 text-white font-bold px-3.5 py-1.5 rounded-xl text-[9px] transition-colors uppercase tracking-wider add-to-cart-btn-pc" data-pc-name="${pc.name}" data-pc-price="${pc.price}" data-pc-image="${pc.image}">Buy Now</button>
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

    // Scroll correct card in grid into view
    const cards = document.querySelectorAll("#pc-cards-grid > .pc-grid-card-wrapper");
    if (cards && cards[closestIndex]) {
        cards[closestIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        const cardInner = cards[closestIndex].querySelector(".pc-grid-card");
        if (cardInner) {
            cardInner.classList.add("ring-4", "ring-rose-500", "scale-105");
            setTimeout(() => {
                cardInner.classList.remove("ring-4", "ring-rose-500", "scale-105");
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
