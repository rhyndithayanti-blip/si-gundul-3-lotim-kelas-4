/**
 * High-quality educational vector illustrations for Grade 4 IPAS questions
 * Clean illustrations WITHOUT any text, titles, or spoilers.
 * Covering:
 * - Bentang Alam (Daratan & Perairan)
 * - Kenampakan Alam vs Kenampakan Buatan
 * - Hubungan Bentang Alam & Kehidupan Masyarakat
 * - Adaptasi Bentuk Rumah & Pelestarian Lingkungan
 */

function svgToDataUri(svgString: string): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(svgString.trim())}`;
}

export const QUESTION_IMAGES: Record<string, string> = {
  // --- POS 1: BENTANG ALAM DARATAN ---
  q_pos_1_1: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="70%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
        <linearGradient id="plateau" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="100%" stop-color="#15803d"/>
        </linearGradient>
      </defs>
      <!-- Sky & Sun -->
      <rect width="600" height="360" fill="url(#sky1)"/>
      <circle cx="500" cy="70" r="35" fill="#fef08a" opacity="0.9"/>
      <!-- Soft Clouds -->
      <path d="M 80 80 Q 110 60 140 80 Q 170 60 200 80 Q 220 95 190 105 Q 100 110 80 80 Z" fill="#ffffff" opacity="0.85"/>
      <path d="M 380 60 Q 410 45 435 60 Q 460 45 480 60 Q 495 75 470 85 Q 400 90 380 60 Z" fill="#ffffff" opacity="0.8"/>
      <!-- Distant Mountain Peaks -->
      <polygon points="50,220 180,90 310,220" fill="#93c5fd" opacity="0.7"/>
      <polygon points="180,90 195,115 165,115" fill="#ffffff"/>
      <polygon points="260,230 380,110 500,230" fill="#60a5fa" opacity="0.6"/>
      <!-- Highland Plateau (Dataran Tinggi) -->
      <path d="M 0 260 L 80 190 L 480 190 L 600 250 L 600 360 L 0 360 Z" fill="url(#plateau)"/>
      <!-- Tea Plant Rows / Undakan Kebun Teh -->
      <path d="M 90 205 Q 280 200 470 205" stroke="#166534" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M 70 225 Q 280 220 490 225" stroke="#14532d" stroke-width="7" stroke-linecap="round" fill="none"/>
      <path d="M 50 248 Q 280 240 510 248" stroke="#166534" stroke-width="8" stroke-linecap="round" fill="none"/>
      <path d="M 30 275 Q 280 265 530 275" stroke="#14532d" stroke-width="9" stroke-linecap="round" fill="none"/>
      <!-- Cool Mist Overlay -->
      <ellipse cx="280" cy="185" rx="200" ry="12" fill="#ffffff" opacity="0.45"/>
    </svg>
  `),

  q_pos_1_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="sky2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#sky2)"/>
      <!-- Left Steep Mountain -->
      <path d="M -20 360 L -20 80 L 160 180 L 250 310 L 0 360 Z" fill="#15803d"/>
      <path d="M -20 80 L 80 140 L 40 220 Z" fill="#166534" opacity="0.4"/>
      <!-- Right Steep Mountain -->
      <path d="M 620 360 L 620 70 L 440 170 L 350 310 L 600 360 Z" fill="#15803d"/>
      <path d="M 620 70 L 520 140 L 560 230 Z" fill="#14532d" opacity="0.4"/>
      <!-- Low Valley in the Center (Lembah) -->
      <polygon points="160,180 440,170 350,310 250,310" fill="#86efac"/>
      <path d="M 230 360 L 250 310 L 350 310 L 370 360 Z" fill="#4ade80"/>
      <!-- Winding River inside the Valley -->
      <path d="M 300 175 Q 310 230 280 270 Q 320 310 300 360" stroke="#38bdf8" stroke-width="14" fill="none" stroke-linecap="round"/>
      <!-- Trees in Valley -->
      <circle cx="270" cy="290" r="10" fill="#166534"/>
      <circle cx="330" cy="285" r="12" fill="#14532d"/>
      <circle cx="285" cy="335" r="14" fill="#166534"/>
      <!-- Two Mountain Arrows pointing to the Valley -->
      <line x1="170" y1="130" x2="260" y2="210" stroke="#f59e0b" stroke-width="4" stroke-dasharray="6,4"/>
      <line x1="430" y1="120" x2="340" y2="210" stroke="#f59e0b" stroke-width="4" stroke-dasharray="6,4"/>
    </svg>
  `),

  q_pos_1_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="80%" stop-color="#fed7aa"/>
          <stop offset="100%" stop-color="#ffedd5"/>
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#sky3)"/>
      <circle cx="300" cy="110" r="45" fill="#f97316" opacity="0.8"/>
      <!-- Series of Interconnected Mountain Peaks (Pegunungan) -->
      <!-- Back row -->
      <polygon points="20,270 120,130 220,270" fill="#64748b"/>
      <polygon points="120,130 140,165 100,165" fill="#e2e8f0"/>
      <polygon points="180,270 300,100 420,270" fill="#475569"/>
      <polygon points="300,100 325,145 275,145" fill="#f8fafc"/>
      <polygon points="380,270 480,120 580,270" fill="#64748b"/>
      <polygon points="480,120 500,155 460,155" fill="#e2e8f0"/>
      <!-- Front connected chain -->
      <polygon points="-40,360 80,180 200,360" fill="#15803d"/>
      <polygon points="140,360 250,170 360,360" fill="#166534"/>
      <polygon points="300,360 410,160 520,360" fill="#15803d"/>
      <polygon points="460,360 550,190 640,360" fill="#166534"/>
      <!-- Connecting Ridge Line Highlight -->
      <path d="M 80 180 L 160 230 L 250 170 L 320 225 L 410 160 L 480 230 L 550 190" stroke="#facc15" stroke-width="4" stroke-dasharray="8,5" fill="none"/>
    </svg>
  `),

  q_pos_1_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="sky4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#dbeafe"/>
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#sky4)"/>
      <circle cx="80" cy="70" r="30" fill="#fde047"/>
      <!-- Distant Hills -->
      <path d="M 0 180 Q 200 140 400 180 Q 500 160 600 180 L 600 200 L 0 200 Z" fill="#93c5fd" opacity="0.5"/>
      <!-- Flat Lowland Fields (0 - 200 mdpl) -->
      <rect x="0" y="190" width="600" height="170" fill="#84cc16"/>
      <!-- Rice Field Patches -->
      <rect x="20" y="210" width="160" height="60" rx="6" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
      <rect x="200" y="210" width="180" height="60" rx="6" fill="#65a30d" stroke="#4d7c0f" stroke-width="2"/>
      <rect x="400" y="210" width="180" height="60" rx="6" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
      <!-- Flat Road & Houses (City / Settlement in Lowland) -->
      <polygon points="270,270 330,270 360,360 240,360" fill="#475569"/>
      <line x1="300" y1="270" x2="300" y2="360" stroke="#ffffff" stroke-width="3" stroke-dasharray="10,8"/>
      <!-- Left Village Houses -->
      <rect x="40" y="290" width="50" height="35" fill="#f87171"/>
      <polygon points="35,290 65,265 95,290" fill="#b91c1c"/>
      <rect x="110" y="285" width="55" height="40" fill="#fb923c"/>
      <polygon points="105,285 137,260 170,285" fill="#c2410c"/>
      <!-- Right City Building -->
      <rect x="440" y="260" width="50" height="70" fill="#cbd5e1" stroke="#475569" stroke-width="2"/>
      <rect x="510" y="240" width="60" height="90" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
    </svg>
  `),

  // --- POS 2: BENTANG ALAM PERAIRAN ---
  q_pos_2_1: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <!-- Sea background -->
      <rect width="600" height="360" fill="#0284c7"/>
      <!-- Coastline curving into a Bay (Teluk) -->
      <path d="M 0 0 L 220 0 C 160 120 180 240 60 270 C -10 290 0 360 0 360 Z" fill="#22c55e"/>
      <path d="M 600 0 L 380 0 C 440 120 420 240 540 270 C 610 290 600 360 600 360 Z" fill="#22c55e"/>
      <!-- Sandy Shore Line -->
      <path d="M 220 0 C 160 120 180 240 60 270" stroke="#fde047" stroke-width="12" fill="none"/>
      <path d="M 380 0 C 440 120 420 240 540 270" stroke="#fde047" stroke-width="12" fill="none"/>
      <!-- Bottom land connection -->
      <path d="M 0 320 Q 300 380 600 320 L 600 360 L 0 360 Z" fill="#15803d"/>
      <path d="M 0 320 Q 300 380 600 320" stroke="#fde047" stroke-width="14" fill="none"/>
      <!-- Safe calm water inside Bay -->
      <ellipse cx="300" cy="180" rx="110" ry="70" fill="#38bdf8" opacity="0.6"/>
      <!-- Anchored Ships -->
      <g transform="translate(260, 160)">
        <polygon points="0,15 50,15 40,28 10,28" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
        <line x1="25" y1="15" x2="25" y2="0" stroke="#0f172a" stroke-width="2"/>
        <polygon points="25,2 45,8 25,14" fill="#ef4444"/>
      </g>
      <!-- Arrow showing sea entering land -->
      <path d="M 300 40 L 300 130" stroke="#facc15" stroke-width="6" stroke-linecap="round"/>
      <polygon points="290,130 310,130 300,150" fill="#facc15"/>
    </svg>
  `),

  q_pos_2_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <!-- Sea between two islands -->
      <rect width="600" height="360" fill="#0284c7"/>
      <!-- Island A (Left Landmass) -->
      <path d="M 0 0 L 190 0 Q 150 180 200 360 L 0 360 Z" fill="#16a34a"/>
      <path d="M 190 0 Q 150 180 200 360" stroke="#fef08a" stroke-width="8" fill="none"/>
      <!-- Island B (Right Landmass) -->
      <path d="M 410 0 Q 450 180 400 360 L 600 360 L 600 0 Z" fill="#16a34a"/>
      <path d="M 410 0 Q 450 180 400 360" stroke="#fef08a" stroke-width="8" fill="none"/>
      <!-- Ferry crossing the strait -->
      <g transform="translate(250, 160)">
        <polygon points="0,20 100,20 85,40 15,40" fill="#f8fafc" stroke="#1e293b" stroke-width="3"/>
        <rect x="25" y="5" width="50" height="15" fill="#3b82f6"/>
        <line x1="10" y1="28" x2="85" y2="28" stroke="#ef4444" stroke-width="4"/>
      </g>
      <!-- Two-way crossing arrow -->
      <line x1="220" y1="230" x2="380" y2="230" stroke="#facc15" stroke-width="5" stroke-dasharray="8,4"/>
      <polygon points="220,230 235,222 235,238" fill="#facc15"/>
      <polygon points="380,230 365,222 365,238" fill="#facc15"/>
    </svg>
  `),

  q_pos_2_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <defs>
        <linearGradient id="skyLake" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#bae6fd"/>
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill="url(#skyLake)"/>
      <!-- Distant Hills surrounding Lake -->
      <polygon points="0,200 150,110 300,200" fill="#4ade80"/>
      <polygon points="220,200 370,90 520,200" fill="#22c55e"/>
      <polygon points="400,200 520,120 600,200" fill="#16a34a"/>
      <!-- Surrounding Land Ring -->
      <ellipse cx="300" cy="250" rx="270" ry="100" fill="#15803d"/>
      <ellipse cx="300" cy="250" rx="250" ry="85" fill="#fef08a"/>
      <!-- Enclosed Natural Lake Water Body -->
      <ellipse cx="300" cy="250" rx="230" ry="75" fill="#0284c7"/>
      <!-- Gentle Lake Ripples -->
      <path d="M 200 240 Q 230 235 260 240" stroke="#7dd3fc" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M 330 260 Q 360 255 390 260" stroke="#7dd3fc" stroke-width="3" stroke-linecap="round" fill="none"/>
      <path d="M 270 270 Q 300 265 330 270" stroke="#7dd3fc" stroke-width="3" stroke-linecap="round" fill="none"/>
      <!-- Small Boat on Lake -->
      <polygon points="280,240 310,240 305,248 285,248" fill="#f59e0b"/>
    </svg>
  `),

  q_pos_2_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#f0fdf4"/>
      <!-- Mountain upstream (Hulu) -->
      <polygon points="100,180 200,40 300,180" fill="#64748b"/>
      <polygon points="200,40 215,65 185,65" fill="#ffffff"/>
      <!-- Mountain Greenery -->
      <polygon points="0,220 180,80 340,220" fill="#15803d" opacity="0.6"/>
      <!-- Sea Downstream (Hilir di tepi laut) -->
      <rect x="0" y="290" width="600" height="70" fill="#0284c7"/>
      <!-- Winding River flowing from Mountain to Sea -->
      <path d="M 200 65 Q 230 110 200 150 Q 150 190 260 230 Q 380 270 300 320" stroke="#38bdf8" stroke-width="28" fill="none" stroke-linecap="round"/>
      <path d="M 200 65 Q 230 110 200 150 Q 150 190 260 230 Q 380 270 300 320" stroke="#0284c7" stroke-width="18" fill="none" stroke-linecap="round"/>
    </svg>
  `),

  // --- POS 3: KENAMPAKAN ALAM VS BUATAN ---
  q_pos_3_1: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#e0f2fe"/>
      <!-- Reservoir Lake Water behind Dam -->
      <path d="M 0 100 Q 300 60 600 100 L 600 240 L 0 240 Z" fill="#0284c7"/>
      <!-- Big Concrete Dam Wall (Waduk / Bendungan Buatan) -->
      <polygon points="120,130 480,130 520,330 80,330" fill="#64748b" stroke="#334155" stroke-width="4"/>
      <!-- Dam Spillway Gates -->
      <rect x="170" y="150" width="40" height="50" fill="#334155"/>
      <rect x="230" y="150" width="40" height="50" fill="#334155"/>
      <rect x="290" y="150" width="40" height="50" fill="#334155"/>
      <rect x="350" y="150" width="40" height="50" fill="#334155"/>
      <rect x="410" y="150" width="40" height="50" fill="#334155"/>
      <!-- Water Gushing from Sluice Gates (PLTA) -->
      <path d="M 230 200 L 230 330 L 270 330 L 270 200 Z" fill="#ffffff" opacity="0.8"/>
      <path d="M 350 200 L 350 330 L 390 330 L 390 200 Z" fill="#ffffff" opacity="0.8"/>
      <!-- Electric Power Lines (PLTA) -->
      <polygon points="530,220 545,150 560,220" stroke="#f59e0b" stroke-width="3" fill="none"/>
      <line x1="535" y1="180" x2="555" y2="180" stroke="#f59e0b" stroke-width="3"/>
    </svg>
  `),

  q_pos_3_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#f8fafc"/>
      <!-- Left Card: Nature (Mountain & Lake) -->
      <rect x="30" y="40" width="250" height="280" rx="20" fill="#ecfdf5" stroke="#10b981" stroke-width="3"/>
      <!-- Mountain and Lake in Left Card -->
      <polygon points="60,230 155,100 250,230" fill="#059669"/>
      <polygon points="155,100 170,125 140,125" fill="#ffffff"/>
      <ellipse cx="155" cy="270" rx="85" ry="26" fill="#38bdf8"/>
      <!-- Right Card: Man-made (Bridge & Dam) -->
      <rect x="320" y="40" width="250" height="280" rx="20" fill="#fffbeb" stroke="#f59e0b" stroke-width="3"/>
      <!-- Dam, Bridge, and Road in Right Card -->
      <rect x="350" y="90" width="190" height="45" rx="8" fill="#64748b"/>
      <line x1="375" y1="135" x2="375" y2="200" stroke="#475569" stroke-width="6"/>
      <line x1="515" y1="135" x2="515" y2="200" stroke="#475569" stroke-width="6"/>
      <rect x="350" y="220" width="190" height="75" rx="8" fill="#f97316"/>
      <circle cx="390" cy="255" r="16" fill="#ffffff" opacity="0.8"/>
      <circle cx="445" cy="255" r="16" fill="#ffffff" opacity="0.8"/>
      <circle cx="500" cy="255" r="16" fill="#ffffff" opacity="0.8"/>
    </svg>
  `),

  q_pos_3_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#38bdf8"/>
      <!-- Sea -->
      <rect x="0" y="180" width="600" height="180" fill="#0284c7"/>
      <!-- Concrete Pier / Dock (Dermaga Pelabuhan) -->
      <polygon points="0,210 320,210 280,360 0,360" fill="#94a3b8" stroke="#475569" stroke-width="3"/>
      <!-- Large Ship docked at the Pier -->
      <g transform="translate(300, 160)">
        <polygon points="0,30 220,30 190,90 20,90" fill="#f8fafc" stroke="#0f172a" stroke-width="3"/>
        <line x1="20" y1="50" x2="200" y2="50" stroke="#ef4444" stroke-width="8"/>
        <!-- Ship Cabin & Smoke Stack -->
        <rect x="60" y="0" width="70" height="30" fill="#38bdf8" stroke="#0f172a" stroke-width="2"/>
        <rect x="150" y="5" width="20" height="25" fill="#f59e0b"/>
      </g>
      <!-- Crane Loading Container -->
      <line x1="140" y1="210" x2="180" y2="120" stroke="#eab308" stroke-width="8"/>
      <line x1="180" y1="120" x2="260" y2="120" stroke="#eab308" stroke-width="6"/>
      <rect x="230" y="140" width="50" height="25" fill="#10b981"/>
      <!-- Lighthouse (Mercusuar) -->
      <polygon points="40,210 60,110 80,210" fill="#ef4444"/>
      <circle cx="70" cy="100" r="10" fill="#fef08a"/>
    </svg>
  `),

  q_pos_3_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#e0f2fe"/>
      <circle cx="500" cy="70" r="30" fill="#fde047"/>
      <!-- Stepped Terraced Rice Fields (Sawah Terasering) -->
      <!-- Tier 1 -->
      <path d="M 0 130 Q 300 110 600 130 L 600 180 L 0 180 Z" fill="#65a30d"/>
      <path d="M 0 180 Q 300 160 600 180" stroke="#a16207" stroke-width="10" fill="none"/>
      <!-- Tier 2 -->
      <path d="M 0 190 Q 300 170 600 190 L 600 240 L 0 240 Z" fill="#84cc16"/>
      <path d="M 0 240 Q 300 220 600 240" stroke="#a16207" stroke-width="12" fill="none"/>
      <!-- Tier 3 -->
      <path d="M 0 250 Q 300 230 600 250 L 600 300 L 0 300 Z" fill="#4ade80"/>
      <path d="M 0 300 Q 300 280 600 300" stroke="#a16207" stroke-width="14" fill="none"/>
      <!-- Tier 4 -->
      <path d="M 0 310 Q 300 290 600 310 L 600 360 L 0 360 Z" fill="#22c55e"/>
      <!-- Water Reflection in Paddy -->
      <ellipse cx="200" cy="155" rx="60" ry="8" fill="#bae6fd" opacity="0.6"/>
      <ellipse cx="400" cy="215" rx="70" ry="10" fill="#bae6fd" opacity="0.6"/>
      <ellipse cx="250" cy="275" rx="80" ry="12" fill="#bae6fd" opacity="0.6"/>
    </svg>
  `),

  // --- POS 4: BENTANG ALAM & MATA PENCAHARIAN ---
  q_pos_4_1: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#bae6fd"/>
      <circle cx="500" cy="80" r="35" fill="#facc15"/>
      <!-- Beach Sand & Ocean Waves -->
      <rect x="0" y="160" width="600" height="120" fill="#0284c7"/>
      <rect x="0" y="260" width="600" height="100" fill="#fef08a"/>
      <!-- Salt Pan Fields on Coastline -->
      <rect x="40" y="280" width="100" height="60" fill="#e0f2fe" stroke="#ca8a04" stroke-width="2"/>
      <rect x="160" y="280" width="100" height="60" fill="#ffffff" stroke="#ca8a04" stroke-width="2"/>
      <polygon points="210,290 230,320 190,320" fill="#f8fafc" stroke="#94a3b8"/>
      <!-- Fisherman in boat with Fishing Net -->
      <g transform="translate(360, 180)">
        <polygon points="0,25 90,25 75,45 15,45" fill="#ea580c"/>
        <line x1="45" y1="25" x2="45" y2="5" stroke="#0f172a" stroke-width="3"/>
        <polygon points="45,5 75,15 45,25" fill="#f8fafc"/>
        <!-- Net thrown into sea -->
        <path d="M 85 30 Q 150 40 160 80 Q 120 100 80 80 Z" fill="#93c5fd" opacity="0.5" stroke="#ffffff" stroke-dasharray="4,4"/>
      </g>
    </svg>
  `),

  q_pos_4_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#e0f2fe"/>
      <!-- Highland Mountain with Cool Mist -->
      <polygon points="40,240 220,80 400,240" fill="#15803d"/>
      <polygon points="260,240 430,90 600,240" fill="#166534"/>
      <!-- Tea Plant Bush Rows -->
      <path d="M 0 240 Q 300 210 600 240 L 600 360 L 0 360 Z" fill="#4ade80"/>
      <path d="M 40 260 Q 300 240 560 260" stroke="#14532d" stroke-width="12" stroke-linecap="round" fill="none"/>
      <path d="M 20 290 Q 300 270 580 290" stroke="#166534" stroke-width="14" stroke-linecap="round" fill="none"/>
      <path d="M 0 325 Q 300 300 600 325" stroke="#14532d" stroke-width="16" stroke-linecap="round" fill="none"/>
      <!-- Tea Picker Farmer Figure with Conical Hat (Caping) -->
      <g transform="translate(260, 210)">
        <polygon points="20,20 60,20 40,0" fill="#f59e0b"/>
        <circle cx="40" cy="25" r="10" fill="#fed7aa"/>
        <rect x="25" y="35" width="30" height="40" fill="#3b82f6"/>
        <!-- Basket on Back -->
        <rect x="10" y="35" width="18" height="30" fill="#ca8a04" stroke="#78350f" stroke-width="2"/>
      </g>
    </svg>
  `),

  q_pos_4_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#f0f9ff"/>
      <!-- Flat Lowland Geography: Rice Field next to City & Road -->
      <rect x="0" y="160" width="600" height="200" fill="#84cc16"/>
      <!-- Wide Highway Roads (Easy Transport in Lowland) -->
      <rect x="0" y="240" width="600" height="60" fill="#475569"/>
      <line x1="0" y1="270" x2="600" y2="270" stroke="#ffffff" stroke-width="4" stroke-dasharray="20,15"/>
      <!-- Cars / Trucks on Road -->
      <rect x="140" y="250" width="60" height="20" rx="4" fill="#ef4444"/>
      <rect x="360" y="255" width="80" height="25" rx="4" fill="#3b82f6"/>
      <!-- Industrial Factories & Office Towers -->
      <rect x="40" y="140" width="90" height="80" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <polygon points="50,140 60,110 70,140" fill="#64748b"/>
      <rect x="460" y="110" width="60" height="110" fill="#cbd5e1" stroke="#334155" stroke-width="2"/>
      <rect x="530" y="130" width="50" height="90" fill="#94a3b8" stroke="#334155" stroke-width="2"/>
      <!-- Rice Paddy on left -->
      <rect x="160" y="160" width="260" height="60" rx="8" fill="#eab308" stroke="#a16207" stroke-width="2"/>
    </svg>
  `),

  q_pos_4_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#38bdf8"/>
      <!-- Beautiful Tropical Coral Coast -->
      <rect x="0" y="180" width="600" height="180" fill="#0284c7"/>
      <!-- Sand Beach & Coconut Palm Trees -->
      <path d="M 0 360 L 0 240 Q 200 210 350 260 L 600 240 L 600 360 Z" fill="#fde047"/>
      <!-- Coconut Palm -->
      <path d="M 80 280 Q 90 200 60 160" stroke="#78350f" stroke-width="8" fill="none"/>
      <circle cx="60" cy="155" r="25" fill="#15803d"/>
      <circle cx="45" cy="160" r="15" fill="#166534"/>
      <circle cx="75" cy="160" r="15" fill="#166534"/>
      <!-- Tour Boat with Canopy -->
      <g transform="translate(320, 190)">
        <polygon points="0,20 120,20 100,45 20,45" fill="#f8fafc" stroke="#0f172a" stroke-width="2"/>
        <rect x="30" y="5" width="60" height="4" fill="#38bdf8"/>
        <line x1="30" y1="5" x2="30" y2="20" stroke="#0f172a" stroke-width="2"/>
        <line x1="90" y1="5" x2="90" y2="20" stroke="#0f172a" stroke-width="2"/>
        <polygon points="25,5 95,5 90,0 30,0" fill="#ef4444"/>
      </g>
      <!-- Snorkeling / Diving Tourist -->
      <circle cx="230" cy="235" r="10" fill="#fed7aa"/>
      <rect x="220" y="245" width="20" height="25" fill="#ec4899"/>
      <line x1="235" y1="230" x2="242" y2="220" stroke="#facc15" stroke-width="3"/>
    </svg>
  `),

  // --- POS 5: ADAPTASI, RUMAH ADAT & PELESTARIAN ALAM ---
  q_pos_5_1: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#e0f2fe"/>
      <!-- River / Floodwater below house -->
      <rect x="0" y="250" width="600" height="110" fill="#38bdf8"/>
      <!-- High Stilts / Tiang Pancang Rumah Panggung -->
      <line x1="160" y1="160" x2="160" y2="300" stroke="#78350f" stroke-width="12" stroke-linecap="round"/>
      <line x1="240" y1="160" x2="240" y2="300" stroke="#78350f" stroke-width="12" stroke-linecap="round"/>
      <line x1="360" y1="160" x2="360" y2="300" stroke="#78350f" stroke-width="12" stroke-linecap="round"/>
      <line x1="440" y1="160" x2="440" y2="300" stroke="#78350f" stroke-width="12" stroke-linecap="round"/>
      <!-- House Floor safely above water -->
      <rect x="130" y="150" width="340" height="20" rx="4" fill="#a16207"/>
      <!-- Walls and Windows -->
      <rect x="150" y="80" width="300" height="75" fill="#ca8a04"/>
      <rect x="190" y="95" width="40" height="40" fill="#fef08a" stroke="#78350f" stroke-width="3"/>
      <rect x="370" y="95" width="40" height="40" fill="#fef08a" stroke="#78350f" stroke-width="3"/>
      <!-- Roof (Atap Rumah Tradisional) -->
      <polygon points="120,80 300,10 480,80" fill="#991b1b"/>
    </svg>
  `),

  q_pos_5_2: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#38bdf8"/>
      <!-- Coastline Beach Sand -->
      <polygon points="0,360 250,360 200,180 0,180" fill="#fef08a"/>
      <!-- Big Blue Ocean Waves attempting to erode Coast -->
      <rect x="200" y="180" width="400" height="180" fill="#0284c7"/>
      <!-- Crashing waves -->
      <path d="M 380 240 Q 320 220 300 260 Q 350 280 380 240" fill="#ffffff" opacity="0.8"/>
      <path d="M 480 200 Q 420 180 400 220 Q 450 240 480 200" fill="#ffffff" opacity="0.8"/>
      <!-- Mangrove / Bakau Trees with Strong Stilt Roots (Akar Tunjang) -->
      <!-- Tree 1 -->
      <circle cx="210" cy="140" r="35" fill="#15803d"/>
      <circle cx="190" cy="150" r="25" fill="#166534"/>
      <line x1="210" y1="160" x2="210" y2="230" stroke="#78350f" stroke-width="8"/>
      <!-- Intertwined Roots stopping waves -->
      <line x1="210" y1="210" x2="160" y2="280" stroke="#78350f" stroke-width="5"/>
      <line x1="210" y1="210" x2="260" y2="280" stroke="#78350f" stroke-width="5"/>
      <line x1="210" y1="230" x2="220" y2="300" stroke="#78350f" stroke-width="5"/>
      <!-- Tree 2 -->
      <circle cx="290" cy="150" r="30" fill="#15803d"/>
      <line x1="290" y1="170" x2="290" y2="240" stroke="#78350f" stroke-width="7"/>
      <line x1="290" y1="220" x2="250" y2="290" stroke="#78350f" stroke-width="5"/>
      <line x1="290" y1="220" x2="330" y2="290" stroke="#78350f" stroke-width="5"/>
    </svg>
  `),

  q_pos_5_3: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#e0f2fe"/>
      <!-- Rain clouds -->
      <ellipse cx="200" cy="60" rx="90" ry="30" fill="#94a3b8"/>
      <ellipse cx="380" cy="60" rx="100" ry="35" fill="#64748b"/>
      <!-- Rain streaks -->
      <line x1="160" y1="95" x2="140" y2="140" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8,6"/>
      <line x1="220" y1="95" x2="200" y2="140" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8,6"/>
      <line x1="340" y1="100" x2="320" y2="150" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8,6"/>
      <line x1="420" y1="100" x2="400" y2="150" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8,6"/>
      <!-- Hill slope with Terracing Steps (Terasering Menahan Longsor) -->
      <polygon points="0,360 80,310 140,310 180,260 250,260 290,210 380,210 430,160 520,160 600,110 600,360" fill="#15803d"/>
      <!-- Soil retention walls (Tebing Sengkedan) -->
      <line x1="80" y1="310" x2="80" y2="360" stroke="#a16207" stroke-width="8"/>
      <line x1="180" y1="260" x2="180" y2="310" stroke="#a16207" stroke-width="8"/>
      <line x1="290" y1="210" x2="290" y2="260" stroke="#a16207" stroke-width="8"/>
      <line x1="430" y1="160" x2="430" y2="210" stroke="#a16207" stroke-width="8"/>
      <!-- Water slows down on steps (Water arrows) -->
      <path d="M 410 170 Q 360 205 310 215" stroke="#38bdf8" stroke-width="4" fill="none"/>
      <path d="M 270 220 Q 230 255 190 265" stroke="#38bdf8" stroke-width="4" fill="none"/>
    </svg>
  `),

  q_pos_5_4: svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 360" width="100%" height="100%">
      <rect width="600" height="360" fill="#e0f2fe"/>
      <circle cx="500" cy="70" r="30" fill="#fde047"/>
      <!-- Hill with Re-planted Green Trees (Reboisasi) -->
      <polygon points="0,320 250,140 550,320" fill="#a3e635"/>
      <polygon points="200,340 450,160 600,340" fill="#84cc16"/>
      <!-- Young Seedlings and Tall Trees -->
      <!-- Tree 1 -->
      <circle cx="160" cy="240" r="20" fill="#15803d"/>
      <rect x="157" y="250" width="6" height="25" fill="#78350f"/>
      <!-- Tree 2 -->
      <circle cx="250" cy="180" r="25" fill="#166534"/>
      <rect x="246" y="195" width="8" height="30" fill="#78350f"/>
      <!-- Tree 3 -->
      <circle cx="340" cy="220" r="22" fill="#15803d"/>
      <rect x="337" y="235" width="6" height="25" fill="#78350f"/>
      <!-- Students Planting Tree -->
      <circle cx="210" cy="285" r="10" fill="#fed7aa"/>
      <rect x="202" y="295" width="16" height="25" fill="#ef4444"/>
      <circle cx="240" cy="295" r="10" fill="#22c55e"/>
      <line x1="240" y1="305" x2="240" y2="320" stroke="#78350f" stroke-width="3"/>
      <!-- Ground Water Absorption Arrow -->
      <line x1="280" y1="280" x2="280" y2="330" stroke="#0284c7" stroke-width="4" stroke-linecap="round"/>
      <polygon points="275,330 285,330 280,340" fill="#0284c7"/>
    </svg>
  `),
};
