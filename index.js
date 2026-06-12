
function openMenu() {
    document.getElementById("sidebar").style.right = "0";
    document.getElementById("overlay").style.display = "block";
}

function closeMenu() {
    document.getElementById("sidebar").style.right = "-320px";
    document.getElementById("overlay").style.display = "none";
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
});

function goToProducts(){

    closeMenu();

    const section = document.getElementById("products");

    section.scrollIntoView({
        behavior:"smooth"
    });

    section.classList.remove("animate-product");

    setTimeout(() => {
        section.classList.add("animate-product");
    }, 500);
}


function showModule(module, element){

    // Remove glow from all cards
    document.querySelectorAll('.module-card').forEach(card => {
        card.classList.remove('active');
    });

    // Add glow to clicked card
    element.classList.add('active');

    const content = document.getElementById("module-content");
    
    if(module === 1){
    
        content.innerHTML = `
        
        <div class="feature-label">
            FULLY CUSTOMIZABLE. COMPLETELY SECURE.
        </div>

        <h2>SMART EXAMS</h2>

        <p>
            Deploy MCQ-based assessments with configurable subject sets,
            adaptive difficulty, time constraints and randomized question delivery.
            Students operate in  controlled, distraction free environment - anti cheat 
            protocols enforce integrity while auto - submission and instant scoring 
            eliminate manual correction entirely
        </p>

        <div class="tags">
            <span>Adaptive difficulty engine</span>
            <span>Anti-cheat controls</span>
            <span>Randomized question banks</span>
            <span>Instant auto-scored results</span>
        </div>

        <a href="#" class="feature-btn">FEATURE BREAKDOWN ↗</a>

        <a href="#" class="docs-btn">⬇ TECHNICAL DOCS</a>
    `;
}

    if(module === 2){
        content.innerHTML = `   
        <div class="feature-label">
        DON'T JUST SEE MARKS. UNDERSTAND PERFORMANCE.
        </div>
        <h2>PERFORMANCE ANALYTICS</h2>
        <p>
            Go beyond aggregate scores with a granular diagnostic layer.
            Track accuracy rates, topic-wise strengths, gaps and progress trends.
            Every data point feeds a continuous improvement cycle - turning raw 
            attempt data into actionable intervention intelligence.
        </p>

        <div class="tags">
            <span>Subject-wise gap analysis</span>
            <span>Time-per-question tracking</span>
            <span>Longitudinal progress trends</span>
            <span>Readiness scoring dashboard</span>
        </div>

        <a href="#" class="feature-btn">FEATURE BREAKDOWN ↗</a>

        <a href="#" class="docs-btn">⬇ TECHNICAL DOCS</a>
    `;
}

if(module === 3){
    content.innerHTML = `
    
    <div class="feature-label">
        MANAGE EVERY STUDENT. EFFORTLESSLY.
    </div>

    <h2>STUDENT MANAGEMENT</h2>

    <p>
    Onboard students individually or through bulk Excel import with
    auto-generated login credentials. Organize cohorts into skill-level
    batches, monitor engagement across assessment cycles, and manage the
    full student lifecycle from a single administrative interface - built to 
    scale across large institutional populations.
    </p>

    <div class="tags">
        <span>Bulk Excel onboarding</span>
        <span>Auto-credential generation</span>
        <span>Batch & cohort grouping</span>
        <span>Retest request workflows</span>
    </div>

    <a href="#" class="feature-btn">
        FEATURE BREAKDOWN ↗
    </a>

    <a href="#" class="docs-btn">
        TECHNICAL DOCS
    </a>
    `;
}

if(module === 4){
    content.innerHTML = `
    <div class="feature-label">
        FULL CONTROL. ZERO COMPLEXITY.
    </div>

    <h2>ADMIN CONTROL</h2>

    <p>
    A centralized command center for placement officers and institutional
    administrators. Gain complete visibility across all student batches —
    participation rates, pending attempts, readiness benchmarks, and
    performance patterns — with multi-institute architecture that keeps
    each organization's data environment fully isolated.
    </p>

    <div class="tags">
        <span>Multi-institute architecture</span>
        <span>Pending & completion tracking</span>
        <span>Batch performance reports</span>
        <span>Secure isolated environments</span>
    </div>

    <a href="#" class="feature-btn">
        FEATURE BREAKDOWN ↗
    </a>

    <a href="#" class="docs-btn">
        TECHNICAL DOCS
    </a>
    `;
}
}

// ressponsive whatsapp


function openWhatsApp() {

    let message = `Hello Levrotec Team,

I am reaching out on behalf of our institution to request access to the Zaptude platform.

📌 Institution Name:
📌 Contact Person:
📌 Phone:
📌 Email:
📌 Location:
📌 Type (College/Coaching/Institute):
📌 No. of Students:

Please guide us on the next steps. Thank you!`;

    let phone = "9884661885";

    let url = `https://wa.me/${9884661885}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}


document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(
        "section, .ceo-card, .cto-card, .quote-card2, .quote-card3, .leader-card, .status-card, .stat-box"
    );

    elements.forEach(el => el.classList.add("reveal"));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(el => observer.observe(el));
});

