import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Heart, Activity, AlertTriangle, ChevronRight, Droplet, 
  Zap, ShieldAlert, BookOpen, Stethoscope, User,
  TrendingUp, ArrowRight, Brain, Syringe,
  Thermometer, Wind, FileText, Menu, X, Microscope, Library, Anchor,
  PlusCircle, RefreshCw, Sliders, PlayCircle, Save, CheckCircle, XCircle, AlertOctagon,
  Gauge, Waves, ActivitySquare, GraduationCap, LayoutGrid, ZoomIn, Search,
  ArrowDown, ArrowUp, Lightbulb, ChevronDown, Play, Pause, Volume2, Maximize,
  Cpu, Layout, Pill, Calculator, Layers, Book, Compass, Clock, Medal, Target, FastForward
} from 'lucide-react';

// ====================================================================================
// 1. DATA: DEEP DIVE LEARNING MODULES (FULL CONTENT INTEGRATION)
// ====================================================================================

const LEARNING_MODULES = [
  // --- CURRICULUM META (DENSITY ADDED) ---
  {
    id: 'CURRICULUM_META',
    category: 'CURRICULUM',
    title: 'CVICU Mastery: The Roadmap',
    subtitle: '50+ Hour Comprehensive System',
    description: 'The complete roadmap to mastering cardiovascular critical care. Physiology-first, clinically integrated, and active learning.',
    visualId: 'BOOK',
    key_metrics: [{label: 'Total Time', normal: '50+', critical: 'Hrs', unit: ''}, {label: 'Modules', normal: '7', critical: '', unit: ''}],
    physiology: 'Understanding WHY before WHAT.',
    clinical_pearl: 'Depth over breadth.',
    visual_analogy: 'Map.',
    courseContent: {
       level: 'overview',
       estimated_hours: 1,
       objectives: ["Navigate the platform", "Understand learning paths", "Master core competencies", "Achieve clinical excellence"],
       chapters: [
          {
            id: "00",
            title: "Course Density & Time Targets",
            duration_min: 30,
            sections: [
               {
                 title: "How to Spend Your 50 Hours",
                 content: "**This curriculum is designed for deep work, not speed reading.**\n\n**1. Echocardiography Track (18 Hours):**\n- **Reading (6 hrs):** Physics, Views, Quantitation methods.\n- **Simulation (8 hrs):** Practice measuring EF/TAPSE on 50+ cases.\n- **Assessment (4 hrs):** Identifying pathology in unknown clips.\n\n**2. Hemodynamics Track (14 Hours):**\n- **Reading (5 hrs):** Pressure physiology, waveforms, shock profiles.\n- **Simulation (6 hrs):** Managing dynamic shock states (vasoplegia vs cardiogenic).\n- **Calculations (3 hrs):** Deriving SVR/PVR/CO/DO2 manually until intuitive.\n\n**3. Mechanical Support Track (18 Hours):**\n- **Reading (6 hrs):** ECMO/Impella/LVAD physiology.\n- **Simulation (8 hrs):** Troubleshooting alarms (suction vs thrombosis) and weaning trials.\n- **Drills (4 hrs):** Emergency response protocols (Code Blue on ECMO).\n\n**4. Surgery & Labs (12 Hours):**\n- **Reading (6 hrs):** Anatomy, CPB effects, Coagulation cascades.\n- **Case Review (6 hrs):** 'Golden Hour' management of post-op complications.",
                 clinical_pearl: "Schedule your learning in 90-minute focused blocks with 15-minute breaks. The curriculum is designed for spaced repetition - revisit core concepts weekly."
               },
               {
                 title: "Learning Philosophy",
                 content: "**Depth over breadth:** Master core concepts thoroughly.\n**Clinical integration:** Every concept tied to bedside practice.\n**Active learning:** Practice problems, cases, mnemonics.\n**Spaced repetition:** Key concepts reinforced throughout.\n**Mastery-based progression:** Don't advance until comfortable with fundamentals."
               }
            ]
          }
       ]
    }
  },

  // --- SURGERY TRACK (FULLY EXPANDED) ---
  {
    id: 'SURG_FUND_001',
    category: 'CV_SURGERY',
    title: 'CV Surgery Fundamentals',
    subtitle: 'OR to ICU',
    description: 'Anatomy, CPB Physiology, and Post-Op Complications.',
    visualId: 'HEART_3D',
    key_metrics: [],
    physiology: 'Sternotomy alters chest mechanics. CPB causes SIRS.',
    clinical_pearl: 'Redo sternotomy = 30% risk of tamponade.',
    visual_analogy: 'Opening the hood.',
    courseContent: {
      level: 'fundamentals',
      estimated_hours: 6,
      objectives: ["Understand sternotomy", "Master CPB", "Manage CABG", "Recognize post-op complications", "Apply evidence-based protocols"],
      chapters: [
        {
          id: "01",
          title: "Surgical Anatomy",
          duration_min: 60,
          sections: [
            {
              title: "Median Sternotomy",
              content: "**The Incision:**\nVertical midline incision from sternal notch to xiphoid process.\n\n**Procedure:**\n1. Skin incision\n2. Electrocautery through subcutaneous tissue\n3. Sternum divided with oscillating saw\n4. Sternal retractor placed (significant force)\n5. Thymus retracted or resected\n6. Pericardium opened longitudinally\n7. Pericardial cradle created with sutures\n\n**Structures at Risk:**\n- **Pleura**: Can be opened → pneumothorax, pleural effusion\n- **Innominate vein**: Crosses behind sternum → can be injured in redo cases\n- **Internal mammary arteries**: Run along lateral sternum → harvested for CABG or at risk in reentry\n- **Phrenic nerves**: Run along pericardium → paralyzed if injured (elevated hemidiaphragm)\n- **Right ventricle**: Immediately behind sternum in redo cases → catastrophic reentry injury\n\n**Closure:**\n- Pericardium often left open (prevents tamponade but allows effusion)\n- Sternal wires (typically 6-8)\n- Subcutaneous and skin closure\n- Chest tubes (mediastinal, often pleural)"
            },
            {
              title: "Redo Sternotomy",
              content: "**Why Redo is Different:**\n\n**Adhesions:**\n- Heart adherent to posterior sternum\n- RV, aorta, grafts stuck to chest wall\n- Pericardium obliterated\n- Can't see structures before cutting\n\n**Risk of Catastrophic Injury:**\n- RV laceration: 2-5% incidence\n  - Massive hemorrhage\n  - Crash CPB cannulation\n  - High mortality\n\n- Patent graft injury:\n  - LIMA, vein grafts can be injured\n  - Massive bleeding\n\n**Surgical Strategy:**\n- Femoral vessels exposed BEFORE sternal reentry (safety net)\n- Oscillating saw used very carefully\n- CT imaging pre-op to map anatomy\n- Perfusionist ready with primed CPB circuit\n- Blood products in room\n\n**ICU Implications:**\n- Longer operative times → more coagulopathy\n- Higher transfusion requirements\n- Increased risk of AKI\n- Prolonged ventilation common",
              clinical_pearl: "In redo cases, anticipate coagulopathy. Check TEG/ROTEM early and treat deficits aggressively. Don't wait for clinical bleeding."
            },
            {
              title: "Minimally Invasive Approaches",
              content: "**Right Anterior Thoracotomy (Minimally Invasive AVR/MVR):**\n- Right 4th-5th intercostal space.\n- Avoids sternotomy.\n- **Advantages:** Faster recovery, less pain, better cosmesis.\n- **Disadvantages:** Limited exposure, Phrenic nerve risk, Lung isolation required.\n- **Patient Selection:** Young, non-obese, no prior right chest surgery.\n\n**Left Thoracotomy:**\n- Descending Aorta, LVAD.\n- Significant pain (intercostal nerve injury).\n- **ICU Pearl:** These patients need aggressive pain control - consider epidural or paravertebral blocks.\n\n**Robotic-Assisted Surgery:**\n- Increasingly common for MVR\n- Tiny incisions, 3D visualization\n- Longer operative times initially\n- Excellent outcomes in experienced centers",
              clinical_pearl: "Minimally invasive doesn't mean minimal risk. These patients still need full ICU monitoring - cardiac function is what matters, not incision size."
            },
             {
              title: "Cannulation Sites",
              content: "**Arterial Cannulation (Return Oxygenated Blood):**\n1. **Ascending Aorta:** Standard. Risk of dissection/stroke. Surgeon palpates aorta for atheroma.\n2. **Femoral Artery:** Redo/Emergency. Risk of limb ischemia, retroperitoneal bleed. May cause differential hypoxia.\n3. **Axillary:** Better cerebral protection. Allows ambulation on ECMO. Preferred for ECMO.\n4. **Innominate/Carotid:** Rare, used in arch surgery.\n\n**Venous Cannulation (Drain Deoxygenated Blood):**\n1. **Right Atrium:** Two-stage (SVC/IVC) or Bicaval (separate SVC/IVC cannulas for better drainage).\n2. **Femoral Vein:** Peripheral CPB. May need additional SVC cannula for complete drainage.\n3. **Percutaneous:** Can be done at bedside for ECMO.\n\n**ICU Considerations:**\n- Femoral cannulas → check distal perfusion (compartment syndrome risk)\n- Axillary → check hand perfusion, brachial plexus function\n- Any cannula → infection risk, bleeding risk at removal",
              clinical_pearl: "Always examine distal perfusion in patients with femoral arterial cannulation. Use Doppler if pulses not palpable. Early compartment syndrome is easier to treat."
            },
            {
              title: "Pre-Operative Risk Assessment",
              content: "**STS Risk Score:**\n- Predicts mortality and morbidity\n- Incorporates: Age, EF, creatinine, emergency status, redo surgery\n- Low risk: <1% mortality\n- Medium risk: 1-3%\n- High risk: >3%\n\n**EuroSCORE II:**\n- European alternative to STS\n- Similar variables, different weighting\n- Useful for international comparisons\n\n**Frailty Assessment:**\n- Increasingly recognized as independent risk factor\n- Not captured in traditional scores\n- Consider: Grip strength, gait speed, nutrition status\n\n**ICU Planning:**\n- High-risk patients → prolonged ventilation expected\n- Arrange dialysis if high creatinine\n- Discuss goals of care pre-op\n- Family expectations management",
              clinical_pearl: "The patient who 'looked terrible' pre-op will look terrible post-op. Don't be surprised. Use risk scores to set realistic expectations with families."
            }
          ]
        },
        {
          id: "02",
          title: "Cardiopulmonary Bypass",
          duration_min: 90,
          sections: [
            {
              title: "Physiology",
              content: "**Systemic Inflammatory Response Syndrome (SIRS):**\n- Blood contacts artificial surfaces → Complement activation → Cytokine release → Vasoplegia/Capillary Leak.\n- **Timeline:** Peaks 6-24 hours post-CPB\n- **Clinical Manifestations:**\n  - Fever/hypothermia\n  - Leukocytosis\n  - Tachycardia\n  - Tachypnea\n  - Increased oxygen requirements\n  - Third-spacing of fluid\n\n**Vasoplegia (Post-CPB Vasodilatory Shock):**\n- Incidence: 5-25% (higher with long CPB times, emergency surgery, pre-op ACEI/ARB use).\n- Mechanism: Cytokine-mediated vasodilation, nitric oxide upregulation, vasopressin deficiency.\n- Presentation: Low SVR (<800), High CO, Hypotension, warm extremities.\n- Treatment: \n  - First-line: Vasopressin 0.03-0.04 units/min (restores physiologic levels)\n  - Second-line: Norepinephrine 0.05-0.2 mcg/kg/min\n  - Refractory: Methylene blue 2mg/kg over 30min (inhibits guanylate cyclase)\n  - Experimental: Hydroxocobalamin, Angiotensin II",
              clinical_pearl: "Vasopressin is nearly always deficient post-CPB. Don't wait for refractory shock to start it - use early in vasoplegia. Target SVR 800-1000, not supranormal values."
            },
            {
              title: "Coagulopathy",
              content: "**Mechanisms:**\n1. **Hemodilution:** Crystalloid/colloid prime dilutes factors\n2. **Platelet dysfunction:** CPB activation, hypothermia, shear stress\n3. **Factor consumption:** Activation of coagulation cascade\n4. **Fibrinolysis:** Plasmin activation\n5. **Hypothermia:** Enzyme dysfunction below 35°C\n6. **Heparin rebound:** Residual heparin from tissue stores\n\n**Labs:** \n- Low platelets (typical drop 30-50%)\n- Prolonged PT/PTT\n- Low fibrinogen (<150 mg/dL common)\n- Elevated D-dimer\n\n**Treatment Algorithm:**\n1. **Temperature:** Rewarm to >36°C\n2. **Heparin:** Protamine (1mg per 100 units heparin), check ACT\n3. **Platelets:** If <50K and bleeding, or <100K with high-risk surgery\n4. **Fibrinogen:** Cryoprecipitate (10 units) or fibrinogen concentrate if <150 and bleeding\n5. **Factors:** FFP 10-15 mL/kg if PT/PTT elevated\n6. **Antifibrinolytics:** TXA if hyperfibrinolysis on TEG\n\n**TEG/ROTEM-Guided:**\n- More precise than empiric therapy\n- R-time prolonged → FFP\n- MA decreased → Platelets/Fibrinogen\n- LY30 increased → TXA",
              clinical_pearl: "Fibrinogen is the most commonly deficient factor post-CPB and the most commonly missed. Check it early, replace early. Cryo works faster than FFP."
            },
            {
              title: "Myocardial Protection",
              content: "**Cardioplegia:** High-K+ solution to arrest heart. Reduces O2 demand to ~1% of beating heart.\n\n**Types:**\n- **Blood vs Crystalloid:** Blood is superior (oxygen carrying, buffering, oncotic pressure).\n- **Antegrade vs Retrograde:** \n  - Antegrade: Via aortic root → coronary arteries. Standard.\n  - Retrograde: Via coronary sinus → retrograde perfusion. Used when aorta clamped or severe AS.\n  - Combined: Best protection, especially in redo surgery.\n\n**Stunning:** Reversible contractile dysfunction despite restored perfusion.\n- **Mechanism:** Calcium overload, free radicals, microvascular injury\n- **Duration:** Hours to days\n- **Treatment:** Time, inotropes, mechanical support if severe\n- **Prevention:** Optimal cardioplegia, minimize ischemia time",
              clinical_pearl: "Don't panic about low EF immediately post-CPB. Stunning is expected. Give inotropes, volume, and TIME. Most recover within 24-48 hours."
            },
            {
               title: "Separation from CPB",
               content: "**Process:**\n1. **Rewarm:** Core temp >36°C\n2. **Ventilate:** Resume ventilation, recruit lungs\n3. **Rhythm:** Restore sinus rhythm (cardioversion if needed)\n4. **De-air:** TEE to visualize and remove air from cardiac chambers\n5. **Wean:** Gradually reduce CPB flow while monitoring hemodynamics\n6. **Remove Cross-clamp:** Allow coronary perfusion\n7. **Support:** Adjust inotropes/vasopressors\n8. **Separation:** Off CPB, on native circulation\n\n**Difficulty Weaning:**\n- **Causes:** \n  - **Stunning:** Most common, usually reversible\n  - **Hypovolemia:** Check filling pressures, TEE\n  - **Air:** Check TEE, de-air techniques\n  - **Tamponade:** Pericardial clot\n  - **Graft failure:** CABG technical issue\n  - **Valve dysfunction:** Repair/replacement technical issue\n  - **RV failure:** Often overlooked cause\n\n- **Treatment:** \n  - **Inotropes:** Epinephrine most commonly used (alpha+beta)\n  - **Volume:** Guided by TEE\n  - **IABP:** 1:1 augmentation, reduces afterload, increases coronary perfusion\n  - **ECMO:** VA-ECMO for severe failure\n  - **Impella:** Active LV unloading\n\n**Post-CPB Checklist:**\n- Hemodynamics stable\n- Rhythm controlled\n- No significant bleeding\n- TEE shows no residual air, good function\n- ACT <140 (heparin reversed)\n- Temperature >36°C",
              clinical_pearl: "The hardest part of CPB is coming off it. Have a LOW threshold for mechanical support. IABP is easy and helps. Don't wait until the patient is in extremis."
            },
            {
              title: "CPB Complications",
              content: "**Neurologic:**\n- **Stroke:** 1-5% incidence. Embolic (atheroma, air) or hypoperfusion.\n- **Cognitive Dysfunction:** 'Pump head.' May improve over months.\n- **Seizures:** Hypothermia, hypoxia, emboli.\n\n**Renal:**\n- **AKI:** 5-30% incidence. Risk factors: pre-existing CKD, long CPB time, hypotension.\n- **Dialysis:** 1-5% require post-op dialysis.\n\n**Pulmonary:**\n- **ARDS:** Inflammatory response, transfusions, hypothermia.\n- **Pleural Effusions:** Common, usually resolve.\n- **Phrenic Nerve Injury:** Topical hypothermia during surgery.\n\n**GI:**\n- **Ischemia:** Hypoperfusion during CPB. Rare but high mortality.\n- **Pancreatitis:** Hypoperfusion, calcium shifts.\n\n**Hematologic:**\n- **Coagulopathy:** Discussed above.\n- **HIT:** Heparin-induced thrombocytopenia. Paradoxical thrombosis.\n\n**Metabolic:**\n- **Hyperglycemia:** Stress response. Target <180 mg/dL.\n- **Electrolyte Shifts:** K, Mg, Ca all commonly abnormal.\n- **Acidosis:** Lactic acidosis from hypoperfusion or increased metabolic demand.",
              clinical_pearl: "Long CPB time is the enemy. Every additional 30 minutes increases risk of complications. Encourage the surgical team to be efficient."
            }
          ]
        },
        {
           id: "03",
           title: "CABG Surgery",
           duration_min: 75,
           sections: [
              {
                title: "Conduits",
                content: "**LIMA (Left Internal Mammary Artery):**\n- Gold standard for LAD grafting\n- 95% 10-year patency\n- Superior to all other conduits\n- Almost never develops atherosclerosis\n- Downside: Longer operative time to harvest\n\n**RIMA (Right Internal Mammary Artery):**\n- Can be used for RCA or Cx territories\n- Bilateral IMA (BIMA) has best long-term outcomes\n- Increased risk of sternal wound infection (decreased blood flow to sternum)\n- Avoid BIMA in diabetics, obese, elderly\n\n**Radial Artery:**\n- Arterial conduit with good patency (70-80% at 10 years)\n- Prone to spasm → need CCB (diltiazem or amlodipine) for life\n- Contraindicated if abnormal Allen test\n- Best for high-grade lesions (>70%)\n\n**Saphenous Vein Graft (SVG):**\n- Easiest to harvest, most commonly used\n- 50% 10-year patency (much worse than arteries)\n- Prone to atherosclerosis and degeneration\n- Used for RCA, Cx, sometimes LAD if LIMA not available\n\n**Configurations:**\n- **Single:** One conduit to one target\n- **Sequential:** One conduit to multiple targets (LIMA to diagonal then LAD)\n- **Y-Grafts:** LIMA to LAD, radial off LIMA to other targets\n- **Composite Grafts:** All arterial grafting off single aortic anastomosis",
                clinical_pearl: "LIMA to LAD is non-negotiable if anatomically feasible. This single graft improves survival. Everything else is secondary."
              },
              {
                title: "Post-Operative Care",
                content: "**First 24 Hours:**\n- **Hemodynamics:** Maintain MAP >65, CI >2.2\n- **Bleeding:** Monitor chest tube output. >200mL/hr x 2hr → consider re-exploration\n- **Rhythm:** Continuous telemetry. Treat VT/VF aggressively. Afib common POD 2-4.\n- **Sedation:** Wean and extubate when stable (usually 4-8 hours post-op)\n- **Pain:** Adequate analgesia (opioids, NSAIDs, gabapentin)\n- **Antiplatelet:** ASA 81mg daily (start within 6 hours post-op)\n- **Glucose:** Tight control (<180 mg/dL)\n\n**Days 2-5:**\n- **Mobilization:** Out of bed POD 1, ambulate POD 2\n- **Afib:** Peak incidence POD 2-4. Beta-blocker prophylaxis. Anticoagulate if sustained.\n- **Diuresis:** Most patients fluid overloaded from CPB. Target even to negative 500-1000 mL/day.\n- **Chest Tubes:** Remove when <200 mL/24hr\n- **Pacing Wires:** Can remove around POD 5 if no arrhythmias\n- **Rehab:** Cardiac rehab consultation before discharge\n\n**Discharge Planning:**\n- **Medications:** ASA, statin (high-intensity), beta-blocker, ACEI (if EF <40%)\n- **INR Goals:** If afib developed, start warfarin (target 2-3)\n- **Follow-up:** Surgeon in 2 weeks, Cardiologist in 4 weeks\n- **Education:** Sternal precautions x 6 weeks, wound care, activity restrictions",
                clinical_pearl: "The first 24 hours are about avoiding catastrophe. Days 2-5 are about preventing afib and managing volume. Discharge is about secondary prevention."
              },
              {
                title: "Complications",
                content: "**Graft Failure:**\n- **Acute (<24hr):** Technical issue, graft kinking, anastomotic problem\n- **Presentation:** Acute MI pattern on ECG, hemodynamic instability\n- **Diagnosis:** Emergent cardiac cath\n- **Treatment:** Percutaneous intervention or return to OR for revision\n\n**Atrial Fibrillation:**\n- **Incidence:** 30-40%\n- **Peak:** POD 2-4\n- **Mechanism:** Atrial inflammation, pericarditis, sympathetic surge\n- **Prophylaxis:** Beta-blockers (metoprolol or carvedilol), amiodarone if high risk\n- **Treatment:** Rate control (beta-blocker, diltiazem), cardioversion if unstable, anticoagulation\n- **Prognosis:** Usually self-limited, most convert to sinus by 6 weeks\n\n**Pericarditis (Dressler's Syndrome):**\n- **Incidence:** 10-40%\n- **Timing:** POD 7-14 (post-op) or weeks to months later\n- **Presentation:** Pleuritic chest pain, friction rub, fever, pericardial effusion\n- **Diagnosis:** Clinical + echo (effusion) + elevated ESR/CRP\n- **Treatment:** NSAIDs (ibuprofen 600mg TID) + colchicine 0.6mg BID x 3 months\n- **Avoid:** Steroids (increase recurrence risk)\n\n**Sternal Wound Infection:**\n- **Incidence:** 1-3%\n- **Risk Factors:** Diabetes, obesity, bilateral IMA harvest, prolonged operative time, re-exploration\n- **Types:**\n  - **Superficial:** Skin/subcu only. Antibiotics + local wound care.\n  - **Deep (Mediastinitis):** Involves sternum/mediastinum. Life-threatening.\n- **Diagnosis:** Fever, sternal instability, purulent drainage, positive cultures\n- **Treatment:** \n  - **Superficial:** PO antibiotics, wound care\n  - **Deep:** IV antibiotics, surgical debridement, muscle flap closure, VAC therapy\n- **Organisms:** Staph aureus most common (MRSA concern), gram negatives, fungi in immunosuppressed\n\n**Other Complications:**\n- **Stroke:** 1-5%, embolic or hypoperfusion\n- **AKI:** 5-30%, may require dialysis\n- **GI Bleeding:** Stress ulcers, ischemia\n- **Delirium:** Very common in elderly, prevent with early mobility, minimize sedation\n- **Depression:** Common, screen and treat",
                clinical_pearl: "Mediastinitis is a disaster. Prevent it: glucose control, minimize operative time, prophylactic antibiotics, avoid bilateral IMA in high-risk patients."
              },
              {
                title: "Special Populations",
                content: "**Diabetics:**\n- Higher risk of: wound infection, AKI, stroke\n- Tight glucose control (<180) reduces complications\n- Consider avoiding bilateral IMA (increased sternal infection risk)\n- Aggressive statin therapy\n\n**Chronic Kidney Disease:**\n- Higher risk of: post-op dialysis, bleeding, volume overload\n- Minimize nephrotoxins (NSAIDs, contrast)\n- Consider pre-op dialysis if volume overloaded\n- Post-op: strict fluid balance, early diuresis\n\n**Elderly (>75 years):**\n- Higher risk of: delirium, stroke, prolonged ventilation, mortality\n- Benefits of surgery still outweigh risks in most\n- Early mobilization critical\n- Geriatric co-management improves outcomes\n\n**Emergency/Salvage CABG:**\n- Failed PCI, ongoing ischemia\n- Very high risk (10-30% mortality)\n- May require IABP or ECMO support\n- Often on antiplatelet/anticoagulation → bleeding risk\n- Family should understand risks",
                clinical_pearl: "Risk stratify carefully. The 85-year-old diabetic with CKD having emergency CABG has 30%+ mortality. Make sure the family understands this."
              }
           ]
        },
        {
          id: "04",
          title: "Valve Surgery Essentials",
          duration_min: 90,
          sections: [
            {
              title: "Aortic Valve Replacement",
              content: "**Indications:**\n- **Severe AS:** AVA <1.0 cm² with symptoms or EF <50%\n- **Severe AR:** Symptomatic or EF <50% or LV dilation\n\n**Types:**\n- **Mechanical:** Durable (lasts lifetime), requires lifelong anticoagulation (INR 2-3)\n  - St. Jude, On-X (newer, lower INR target)\n  - Choose in: Young patients (<60), no contraindication to anticoagulation\n- **Bioprosthetic:** Limited durability (10-15 years), no anticoagulation (just ASA)\n  - Porcine (Hancock, Carpentier-Edwards) or bovine pericardial (Perimount)\n  - Choose in: Elderly (>65), contraindication to anticoagulation, patient preference\n- **Ross Procedure:** Autograft (pulmonary valve to aortic position), homograft to pulmonary\n  - Young patients, avoids anticoagulation\n  - Complex, limited centers\n\n**Complications:**\n- **Paravalvular Leak:** Incomplete sealing → regurgitation, hemolysis\n- **Prosthetic Valve Endocarditis:** 1-3% risk, catastrophic\n- **Thrombosis:** Mechanical valves, presents as obstruction or embolism\n- **Structural Degeneration:** Bioprosthetic valves, eventually need redo or TAVR\n- **Patient-Prosthesis Mismatch:** Valve too small for patient size → persistent gradient",
              clinical_pearl: "The choice of mechanical vs bio is a SHARED decision. Explain the tradeoffs clearly: anticoagulation forever vs. future reintervention."
            },
            {
              title: "Mitral Valve Surgery",
              content: "**Repair vs Replacement:**\n- **Repair Preferred:** Lower mortality, better LV function preservation, no anticoagulation\n- **Techniques:** Annuloplasty ring, chordal transfer, leaflet resection, neochordae\n- **Repair Success:** >95% in degenerative MR, lower in functional MR\n\n**Replacement Indications:**\n- Repair not feasible (rheumatic, endocarditis, heavy calcification)\n- Failed repair\n\n**Types:**\n- Same mechanical vs bioprosthetic considerations as AVR\n- Mitral position has higher gradients → patient-prosthesis mismatch more common\n\n**Complications:**\n- **SAM (Systolic Anterior Motion):** Leaflet obstructs LVOT → dynamic obstruction\n  - Treat: Volume, beta-blockers, reduce inotropes\n- **LV Rupture:** Rare but catastrophic, occurs if too much myocardium removed\n- **AV Block:** Proximity to conduction system",
              clinical_pearl: "Mitral repair > replacement whenever possible. If the surgeon can't repair it, consider referring to a high-volume center."
            },
            {
              title: "Tricuspid Valve Surgery",
              content: "**Usually Repaired, Rarely Replaced:**\n- Annuloplasty ring most common\n- Indications: Severe TR with RV dysfunction, TR during left-sided valve surgery\n\n**Complications:**\n- **Heart Block:** Very common (proximity to AV node)\n- **Persistent TR:** Repair may not hold if severe RV dysfunction\n- **RV Failure:** Sudden increase in afterload post-repair",
              clinical_pearl: "Tricuspid surgery is often done 'while we're in there' during other valve surgery. Make sure temporary pacing is ready - heart block is common."
            }
          ]
        }
      ]
    }
  },

  // --- LABS TRACK (FULLY EXPANDED) ---
  {
    id: 'LABS_FUND_001',
    category: 'LABS_METABOLICS',
    title: 'Labs & Monitoring',
    subtitle: 'Critical Values',
    description: 'Interpretation of CBC, Coags, and Electrolytes in CVICU.',
    visualId: 'CLEARANCE_CURVE',
    key_metrics: [],
    physiology: 'Post-CPB derangements are expected. Know when to treat.',
    clinical_pearl: 'Fibrinogen < 150 is #1 missed bleeding cause.',
    visual_analogy: 'Dipstick.',
    courseContent: {
      level: 'fundamentals',
      estimated_hours: 5,
      objectives: ["Interpret CBC", "Manage Coags", "Electrolyte protocols", "Recognize critical values", "Trend and respond to lab changes"],
      chapters: [
        {
          id: "01",
          title: "Complete Blood Count",
          duration_min: 60,
          sections: [
             {
               title: "Hemoglobin",
               content: "**Expected:** Drop 3-5g (Dilution).\n**Transfusion:** Restrictive (7-8g). Liberal (>10) harmful.\n**Worry:** Drop >2g in 6h.\n**Adjuncts:** Iron, EPO, B12/Folate.",
               clinical_pearl: "Every unit of blood increases infection risk. Transfuse for symptoms or specific indications, not a number."
             },
             {
               title: "Platelets & HIT",
               content: "**Expected:** Drop 30-50% POD1. \n**Transfusion:** <50K + bleed. \n**HIT:** Day 5-14 drop >50% + Thrombosis. Paradoxical clotting. Stop Heparin. 4T Score. \n**Tx:** Argatroban/Fondaparinux. Do NOT give platelets.",
               clinical_pearl: "HIT is a clinical diagnosis. If you suspect it, ACT first, test second. Stopping heparin is not enough - must anticoagulate."
             },
             {
               title: "WBC",
               content: "**Expected:** 15-20k (Stress). \n**Infection:** Rising after POD3, Left shift, Leukopenia. \n**Differential:** Neutrophils (Bacterial), Lymphocytes (Viral), Eosinophils (Allergy).",
               clinical_pearl: "Post-op leukocytosis is expected. But if the WBC is RISING on POD 3-4, that's infection until proven otherwise."
             },
             {
               title: "Complete Metabolic Panel",
               content: "**Sodium:** Hypo (dilutional) vs Hyper (free water deficit).\n**Chloride:** Hyperchloremic acidosis (NS use).\n**Bicarb:** Low (acidosis) vs High (alkalosis).\n**Glucose:** Target <180 mg/dL.",
               clinical_pearl: "Don't chase every single lab abnormality. Look at trends and clinical context."
             }
          ]
        },
        {
          id: "02",
          title: "Coagulation Panel",
          duration_min: 75,
          sections: [
             {
               title: "Basic Panel",
               content: "**PT/INR:** Factors VII, X, V, II, I. Post-CPB mild elevation normal. Tx: FFP/PCC.\n**PTT:** Intrinsic pathway. Heparin rebound? Tx: Protamine.\n**Fibrinogen:** <150 mg/dL critical. Tx: Cryo/Fibrinogen conc.\n**Thrombin Time:** Fibrinogen to fibrin conversion.",
               clinical_pearl: "If you're giving FFP but fibrinogen is low, you're wasting time. Fibrinogen is in cryo, not FFP."
             },
             {
               title: "TEG / ROTEM",
               content: "**Concept:** Viscoelastic testing (whole process).\n**R-Time:** Clot initiation. Tx: FFP.\n**K-Time/Alpha:** Clot speed. Tx: Cryo.\n**MA:** Clot strength. Tx: Platelets.\n**LY30:** Fibrinolysis. Tx: TXA.",
               clinical_pearl: "TEG/ROTEM is a game-changer. It tells you WHAT to give, not just that something is wrong."
             },
             {
               title: "DIC",
               content: "**Pathophys:** Widespread activation + consumption.\n**Dx:** Low Plt, Prolonged PT/PTT, Low Fib, High D-dimer, Schistocytes.\n**Tx:** Treat cause (sepsis), replace consumables.",
               clinical_pearl: "DIC is a syndrome, not a diagnosis. Fix the underlying problem."
             },
             {
               title: "Anticoagulation Reversal",
               content: "**Warfarin:** Vitamin K + PCC/FFP.\n**Heparin:** Protamine.\n**DOACs:** Idarucizumab (Dabigatran), Andexanet alfa (Xa inhibitors) or PCC.",
               clinical_pearl: "In a bleeding emergency, don't waste time. Warfarin? Give PCC."
             }
          ]
        },
        {
          id: "03",
          title: "Electrolytes",
          duration_min: 60,
          sections: [
             {
               title: "Potassium",
               content: "**Target:** >4.0 (Arrhythmia prevention).\n**Hypo:** Diuretics/Insulin. Tx: KCl.\n**Hyper:** Renal/Hemolysis. Tx: Calcium (stabilize), Insulin/D50 (shift), Lasix/Dialysis (remove).",
               clinical_pearl: "Hypokalemia kills via arrhythmias. Hyperkalemia kills via cardiac arrest. Check K daily."
             },
             {
               title: "Magnesium",
               content: "**Target:** >2.0. Essential for K+ retention. Anti-arrhythmic.\n**Hypo:** Diuretics. Tx: MgSO4.\n**Hyper:** Renal failure. Tx: Calcium.",
               clinical_pearl: "Mg and K are best friends. If K won't come up, check Mg."
             },
             {
               title: "Calcium",
               content: "**Target:** iCa >1.1. Essential for contractility.\n**Hypo:** Citrate (transfusion). Tx: Calcium gluconate.\n**Hyper:** Malignancy. Tx: Fluids.",
               clinical_pearl: "Ionized calcium matters for cardiac function. Hypotensive? Check iCa."
             },
             {
               title: "Phosphorus",
               content: "**Hypo:** Refeeding, respiratory muscle weakness. Tx: K-Phos/Na-Phos.\n**Hyper:** Renal failure. Tx: Binders.",
               clinical_pearl: "Severe hypophosphatemia can cause respiratory failure."
             }
          ]
        },
        {
          id: "04",
          title: "Arterial Blood Gas (ABG)",
          duration_min: 60,
          sections: [
            {
              title: "Interpretation Framework",
              content: "**1. Oxygenation:** PaO2 <60 (Hypoxemia).\n**2. pH:** Acidemia vs Alkalemia.\n**3. Primary Process:** Respiratory vs Metabolic.\n**4. Compensation:** Appropriate?\n**5. Anion Gap:** Metabolic acidosis (MUDPILES).\n**6. Delta Gap:** Mixed disorders.",
              clinical_pearl: "Always calculate the anion gap in acidemia."
            },
            {
              title: "Common Scenarios",
              content: "**Resp Acidosis:** Hypoventilation. Tx: Ventilation.\n**Resp Alkalosis:** Hyperventilation. Tx: Cause.\n**Met Acidosis:** Lactic (Shock), DKA, Uremia. Tx: Perfusion.\n**Met Alkalosis:** Volume depletion, Diuretics. Tx: Fluids/Acetazolamide.",
              clinical_pearl: "Lactic acidosis is a sign of shock. Treat the shock, not the pH."
            },
            {
              title: "Lactate",
              content: "**Normal:** <2.0.\n**Elevated:** Tissue hypoxia (Type A) or other (Type B).\n**Clearance:** Predicts survival.\n**Critical:** >4.0 (Severe).",
              clinical_pearl: "Lactate is your best friend in shock. Trend it."
            },
            {
              title: "Base Deficit",
              content: "**Definition:** Acid/base to normalize pH.\n**Use:** Mortality predictor in trauma, resuscitation guide.",
              clinical_pearl: "Base deficit tells you how bad the shock is."
            }
          ]
        },
        {
          id: "05",
          title: "Renal Function & AKI",
          duration_min: 75,
          sections: [
            {
              title: "Acute Kidney Injury",
              content: "**KDIGO Criteria:** Cr rise >=0.3 or 1.5x baseline, or low UOP.\n**Etiology:** Pre-renal (Hypoperfusion), Intra-renal (ATN/Toxins), Post-renal (Obstruction).\n**FeNa:** <1% (Pre-renal), >2% (ATN).",
              clinical_pearl: "Most post-op AKI is pre-renal. Fix hemodynamics."
            },
            {
              title: "Dialysis Indications",
              content: "**AEIOU:** Acidosis, Electrolytes (K), Ingestion, Overload, Uremia.\n**Modalities:** HD (Stable), CRRT (Unstable/Shock), SLED (Hybrid).",
              clinical_pearl: "Don't wait for extremis to start dialysis in shock."
            },
            {
              title: "Nephrotoxin Avoidance",
              content: "**Common:** NSAIDs, Aminoglycosides, Vancomycin, Contrast, ACEI/ARB.\n**Prevention:** Hydration, dosing.",
              clinical_pearl: "An ounce of prevention is worth a pound of dialysis."
            }
          ]
        }
      ]
    }
  },
  // --- HEMODYNAMICS (FULLY EXPANDED) ---
  {
    id: 'HEMO_FUND_001',
    category: 'HEMODYNAMICS',
    title: 'Hemodynamic Mastery',
    subtitle: 'From Pressures to Physiology',
    description: 'Deep dive into waveforms, derived parameters, and shock profiles.',
    visualId: 'FLOW_STREAM',
    key_metrics: [],
    physiology: 'Pressure gradients drive flow. Resistance impedes it.',
    clinical_pearl: 'CVP does not predict fluid responsiveness. Use dynamic indices.',
    visual_analogy: 'Plumbing schematics.',
    courseContent: {
      level: 'fundamentals',
      estimated_hours: 5,
      objectives: ["Interpret waveforms", "Calculate derived params", "Diagnose shock", "Apply hemodynamic principles", "Master invasive monitoring"],
      chapters: [
        {
          id: "01",
          title: "Pressure Monitoring",
          duration_min: 60,
          sections: [
            {
              title: "The Pressure Gradient",
              content: "**Flow = ΔPressure / Resistance.**\n\n**Fundamental Concepts:**\n- Blood flows from high pressure to low pressure\n- The GRADIENT (difference) drives flow, not absolute pressure\n- Resistance opposes flow (like friction in a pipe)\n\n**Systemic Circulation:**\n- High pressure system (MAP ~90 mmHg)\n- High resistance (SVR 800-1200 dynes·sec·cm⁻⁵)\n- Designed to perfuse entire body against gravity\n\n**Pulmonary Circulation:**\n- Low pressure system (mean PA ~15 mmHg)\n- Low resistance (PVR 100-200 dynes·sec·cm⁻⁵)\n- Designed for gas exchange, not fighting gravity\n- **Clinical Pearl:** RV is a volume pump, not a pressure pump. It fails when forced to pump against pressure (PE, PH).\n\n**Normal Values:**\n- **Aorta:** 120/80 mmHg (mean ~90-100)\n- **PA:** 25/10 mmHg (mean ~15)\n- **CVP (RA):** 2-8 mmHg\n- **PCWP (LA):** 8-12 mmHg\n- **LV:** 120/0-5 mmHg (LVEDP = preload)\n- **RV:** 25/0-5 mmHg (RVEDP = preload)",
              clinical_pearl: "The pulmonary circulation is 1/10th the resistance of systemic. RV failure is common with small pressure increases."
            },
            {
              title: "The Pressure Cascade (Normal Values)",
              content: "| Location | Systolic/Diastolic | Mean | Clinical Note |\n|----------|-------------------|------|---------------|\n| **Left Ventricle** | 120/0-5 mmHg | — | LV end-diastolic pressure (LVEDP) = preload |\n| **Aorta** | 120/80 mmHg | 90-100 mmHg | Driving pressure for systemic circulation |\n| **Arterial System** | 120/80 mmHg | 90-100 mmHg | Should match aortic pressure |\n| **Arterioles** | 60-40 mmHg | 50 mmHg | Major resistance site |\n| **Capillaries** | 30-20 mmHg | 25 mmHg | Site of exchange |\n| **Venules** | 15-10 mmHg | 12 mmHg | Start of venous return |\n| **Vena Cava** | — | 2-8 mmHg | = CVP in steady state |\n| **Right Atrium** | — | 2-8 mmHg | = CVP |\n| **Right Ventricle** | 25/0-5 mmHg | — | RVEDP = RV preload |\n| **Pulmonary Artery** | 25/10 mmHg | 15 mmHg | Much lower than systemic! |\n| **Pulmonary Capillaries** | 12-8 mmHg | 10 mmHg | Very delicate |\n| **Left Atrium** | — | 8-12 mmHg | = PCWP in steady state |",
              clinical_pearl: "Memorize this cascade. Walk through it to find the problem."
            },
            {
              title: "River Analogy",
              content: "**Think of blood flow like a river:**\n- Altitude difference = Pressure Gradient\n- River width = Resistance\n- Water flow = Cardiac Output\n\nSteep stream (high gradient) = Fast flow. Flat delta (low gradient) = Slow flow.",
              clinical_pearl: "Use this analogy to teach hemodynamics intuitively."
            },
            {
              title: "Waveform Analysis",
              content: "**Arterial Waveform:**\n- **Normal:** Rapid upstroke, dicrotic notch, gradual downslope\n- **Pulsus Paradoxus:** Inspiratory drop >10 mmHg (Tamponade)\n- **Pulsus Alternans:** Beat-to-beat variation (Severe LV Failure)\n- **Bisferiens Pulse:** Double peak (Severe AR/HOCM)\n\n**CVP Waveform:**\n- **a wave:** Atrial contraction\n- **c wave:** Tricuspid closure\n- **x descent:** Atrial relaxation\n- **v wave:** Atrial filling\n- **y descent:** Tricuspid opening\n- **Pathology:** Giant a (Stenosis/Cannon), Giant v (TR), Loss of y (Tamponade)\n\n**PCWP Waveform:**\n- Similar to CVP but reflects LA. Large v-waves (>2x mean) = Severe MR.",
              clinical_pearl: "Waveforms tell stories. Look at them. A giant v-wave on PCWP trace screams MR even if the mean PCWP looks 'normal.'"
            },
             {
              title: "Troubleshooting Invasive Lines",
              content: "**Overdamping:** Air/clot/kink. Low SBP, High DBP.\n**Underdamping:** Stiff tubing/catheter whip. High SBP, Low DBP.\n**PA Catheter:**\n- Won't wedge: Advance, check balloon\n- Persistent wedge: Pull back immediately (infarction risk)\n- Position: Zone 3 is required for accurate PCWP",
              clinical_pearl: "The PA catheter is a dying art, but useful. Use it right."
            }
          ]
        },
        {
          id: "02",
          title: "Shock Profiles & Forrester",
          duration_min: 45,
          sections: [
            {
              title: "Forrester Classification",
              content: "**I (Warm/Dry):** Normal. Monitor.\n**II (Warm/Wet):** Congestion. Diuretics.\n**III (Cold/Dry):** Hypoperfusion. Fluids.\n**IV (Cold/Wet):** Cardiogenic Shock. Inotropes/MCS. 50% Mortality.",
              clinical_pearl: "Forrester IV is the sickest. Get help early."
            },
            {
              title: "Shock Types",
              content: "**Cardiogenic:** Low CI, High SVR, High PCWP, High CVP.\n**Vasoplegic:** High CI, Low SVR (<800).\n**Hypovolemic:** Low CI, High SVR, Low PCWP.\n**Obstructive (Tamponade):** Equalization (CVP~PCWP). Low CI.\n**RV Failure:** CVP >> PCWP.",
              clinical_pearl: "CVP >> PCWP distinguishes RV failure from cardiogenic shock."
            },
            {
              title: "SCAI Shock Classification",
              content: "**A (At Risk):** High risk history, normal hemodynamics.\n**B (Beginning):** Hypotension/Tachycardia, no hypoperfusion.\n**C (Classic):** Hypoperfusion (Lactate >2, oliguria), requires support.\n**D (Deteriorating):** Failing initial support, rising lactate.\n**E (Extremis):** Cardiac arrest, pH <7.2, max support.",
              clinical_pearl: "SCAI shock is the standard. Stage C needs inotropes. Stage D needs MCS."
            },
            {
              title: "Mixed Shock States",
              content: "**Cardiogenic + Vasoplegic:** Post-CPB heart failure. Inotrope + Pressor.\n**Cardiogenic + Hypovolemic:** MI + Bleeding. Fluids + Inotrope.\n**Septic + Cardiogenic:** Sepsis + HF. Pressor + Inotrope.",
              clinical_pearl: "Mixed shock is the rule. Treat what you see."
            }
          ]
        },
        {
          id: "03",
          title: "Practice Problems",
          duration_min: 30,
          sections: [
            {
              title: "Problem 1: Low CVP",
              content: "CVP 3, PCWP 8, CI 1.8, MAP 64. -> Hypovolemia. Give fluids.",
              clinical_pearl: "Low filling pressures + low output = give fluid first."
            },
            {
              title: "Problem 2: Equalization",
              content: "CVP 18, PCWP 19, PAD 18, Low CI. -> Tamponade. Drainage.",
              clinical_pearl: "Equalization + drop in chest tube output = tamponade."
            },
            {
              title: "Problem 3: RV vs LV",
              content: "CVP 20, PCWP 10, Elevated PA. -> RV Failure. RV support.",
              clinical_pearl: "RV failure is CVP >> PCWP."
            },
            {
               title: "Problem 4: Post-CPB Vasoplegia",
               content: "High CI (4.8), Low SVR (420), Hypotension. -> Vasoplegia. Vasopressin.",
               clinical_pearl: "Vasopressin early for post-CPB vasoplegia."
            },
            {
               title: "Problem 5: Cardiogenic Shock",
               content: "Low CI (1.7), High PCWP (24), High SVR. -> Cardiogenic. Dobutamine/MCS.",
               clinical_pearl: "Cardiogenic shock is an emergency. Get help."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'HEMO_FUND_002',
    category: 'HEMODYNAMICS',
    title: 'Flow Dynamics',
    subtitle: 'Cardiac Output & Oxygen',
    description: 'Mastering Cardiac Output, Fick Principle, Thermodilution, and Oxygen Delivery.',
    visualId: 'FLOW_STREAM',
    key_metrics: [],
    physiology: 'CO = HR x SV. The heart exists to deliver oxygen (DO2).',
    clinical_pearl: 'SvO2 is the balance between delivery and consumption.',
    visual_analogy: 'Fuel line.',
    courseContent: {
      level: 'fundamentals',
      estimated_hours: 4,
      objectives: ["Measure CO", "Understand SvO2", "Use SVV", "Master oxygen delivery", "Apply hemodynamic monitoring"],
      chapters: [
        {
          id: "01",
          title: "Cardiac Output Measurement",
          duration_min: 60,
          sections: [
            {
              title: "Fick Principle",
              content: "**Gold Standard:** CO = VO2 / (CaO2 - CvO2).\n**Concept:** If you know how much O2 the body uses, and how much O2 is taken out of each liter of blood, you can calculate how many liters flowed.\n**Utility:** Best for Low CO states and TR.",
              clinical_pearl: "Fick is gold standard, use when thermodilution is suspect."
            },
            {
              title: "Thermodilution",
              content: "**Method:** Cold saline injection. Area under curve inversely related to CO.\n**Limitations:** Inaccurate in severe TR (recirculation) or Shunts.",
              clinical_pearl: "Thermodilution is the workhorse. Check clinical correlation."
            },
            {
              title: "Determinants",
              content: "1. Preload (Stretch)\n2. Afterload (Resistance)\n3. Contractility (Squeeze)\n4. Heart Rate\n**Memory Aid:** 'The CO Determinants Song': Preload stretches, Afterload resists...",
              clinical_pearl: "Manipulate these 4 to optimize CO."
            },
             {
               title: "Frank-Starling Curve",
               content: "Preload vs Stroke Volume. Steep part (responsive) vs Plateau (optimal) vs Descending (failure).",
               clinical_pearl: "More fluid isn't always the answer."
             },
             {
               title: "Direct Measurement",
               content: "Electromagnetic flow probes - Research/OR only. Doppler methods (Esophageal, Echo).",
               clinical_pearl: "Echo is winning, PA catheters still useful."
            }
          ]
        },
        {
          id: "02",
          title: "Dynamic Indices",
          duration_min: 45,
          sections: [
            {
              title: "Why Static Pressures Fail",
              content: "CVP/PCWP do not predict fluid responsiveness. Use dynamic assessment.",
              clinical_pearl: "Stop using CVP to guide fluids."
            },
            {
              title: "SVV Decision Tree",
              content: "Is patient on mechanical ventilation?\n- **NO:** Can't use SVV.\n- **YES:** Measure SVV.\n  - >12-15%: Give fluids (Responder).\n  - <10%: Hold fluids (Non-responder).\n**Requirements:** Sinus, Controlled vent (8ml/kg), Closed chest.",
              clinical_pearl: "SVV is excellent IF criteria met."
            },
            {
               title: "Passive Leg Raise (PLR)",
               content: "Auto-transfuse ~300mL. Measure CO change. Reversible.",
               clinical_pearl: "PLR works in spontaneous breathing."
            },
            {
               title: "Fluid Challenge Protocol",
               content: "Give small bolus, assess response. Stop if no improvement.",
               clinical_pearl: "Measure response."
            }
          ]
        },
        {
          id: "03",
          title: "Oxygen Transport",
          duration_min: 45,
          sections: [
            {
              title: "DO2 & VO2",
              content: "**DO2:** Delivery = CO x CaO2. (Normal ~1000)\n**VO2:** Consumption. (Normal ~250)\n**OER:** Extraction Ratio 20-30%.",
              clinical_pearl: "DO2 matters. Look at the whole picture."
            },
            {
              title: "Mixed Venous Oxygen Saturation (SvO2)",
              content: "**High (>75%):** Sepsis, Shunting. \n**Normal (65-75%):** Balanced.\n**Low (<65%):** Shock, Anemia, Hypoxia, Demand.\n**Critical (<50%):** Lactic acidosis risk.",
              clinical_pearl: "SvO2 is the report card of delivery."
            },
            {
              title: "ScvO2 vs SvO2",
              content: "ScvO2 (Central venous) is usually 2-3% > SvO2 (PA). ScvO2 > 70% is sepsis goal.",
              clinical_pearl: "ScvO2 is a reasonable surrogate."
            },
            {
               title: "Supply-Dependency",
               content: "When DO2 falls below critical level, VO2 falls -> Anaerobic metabolism.",
               clinical_pearl: "Stay above critical DO2."
            },
            {
               title: "Lactate",
               content: "Marker of inadequate delivery. Trend it.",
               clinical_pearl: "Lactate is the poor man's SvO2."
            }
          ]
        },
         {
          id: "04",
          title: "Advanced CO Methods",
          duration_min: 45,
          sections: [
             {
               title: "Pulse Contour Analysis (FloTrac/PiCCO)",
               content: "Uses arterial waveform area to estimate SV. \n**Calibrated:** Uses thermodilution to calibrate (PiCCO). More accurate.\n**Uncalibrated:** Uses population algorithms (FloTrac). Less accurate in vasodilation.",
               clinical_pearl: "Trend it."
             },
             {
               title: "Bioreactance (NICOM)",
               content: "Non-invasive. Measures electrical phase shift across thorax. Good for trends, less accurate in arrhythmias/fluid overload.",
               clinical_pearl: "Great for low acuity, less for shock."
             },
             {
                title: "Echocardiography (LVOT)",
                content: "CO = CSA x VTI x HR.",
                clinical_pearl: "Operator dependent."
             },
             {
                title: "Choosing a Method",
                content: "Match invasiveness to complexity.",
                clinical_pearl: "Best monitor is the one you can interpret."
             }
          ]
        },
        {
          id: "05",
          title: "Practice Problems",
          duration_min: 30,
          sections: [
            {
              title: "Problem 1: Stroke Volume",
              content: "HR 75, CO 4.5. SV = 60 mL.",
              clinical_pearl: "Optimize SV."
            },
            {
              title: "Problem 2: LVOT Method",
              content: "LVOT D 2.2, VTI 22, HR 80. CO = 6.7 L/min.",
              clinical_pearl: "Small errors magnified."
            },
            {
              title: "Problem 3: SVR Calculation",
              content: "CO 5, MAP 80, CVP 8. SVR = 1152 dynes.",
              clinical_pearl: "SVR is afterload."
            },
            {
               title: "Problem 4: DO2 Calculation",
               content: "CO 5, Hgb 10, SaO2 95%. DO2 = 658 (Low).",
               clinical_pearl: "Transfusion increases DO2."
            },
            {
               title: "Problem 5: SvO2 Interpretation",
               content: "SvO2 55% (Low - demand/supply mismatch). SvO2 85% (High - Sepsis/Shunt).",
               clinical_pearl: "Goldilocks parameter."
            },
            {
               title: "Problem 6: SVV Troubleshooting",
               content: "SVV 8% but hypotensive. Fluid not answer. Check criteria.",
               clinical_pearl: "Check criteria first."
            }
          ]
        }
      ]
    }
  },
  // --- MCS (FULLY EXPANDED) ---
  {
    id: 'MCS_FUND_001',
    category: 'MECHANICAL_SUPPORT',
    title: 'MCS Principles',
    subtitle: 'ECMO & LVADs',
    description: 'Comprehensive guide to device selection, management, and troubleshooting.',
    visualId: 'ECMO_CIRCUIT',
    key_metrics: [],
    physiology: 'Restoring flow and unloading the heart.',
    clinical_pearl: 'ECMO is a bridge, not a destination.',
    visual_analogy: 'Auxiliary power unit.',
    courseContent: {
      level: 'fundamentals',
      estimated_hours: 8,
      objectives: ["Manage ECMO", "Troubleshoot LVADs", "Select Device", "Recognize complications", "Weaning"],
      chapters: [
        {
          id: "01",
          title: "ECMO Physiology",
          duration_min: 120,
          sections: [
            {
              title: "ECMO Configurations",
              content: "**VA:** Cardiac + Resp. Bypasses heart/lungs. Increases Afterload.\n**VV:** Resp only. Bypasses lungs. Needs native heart.\n**Cannulation:** Peripheral (Fem-Fem) vs Central.\n**VAV:** Hybrid for Harlequin.",
              clinical_pearl: "VA for heart, VV for lungs. If you need both, start VA and add V later (VAV)."
            },
            {
              title: "Harlequin Syndrome",
              content: "**North-South Syndrome:** Peripheral VA ECMO + Native Heart Recovery + Lung Failure.\n**Pathophys:** Native heart pumps hypoxic blood to brain. ECMO pumps oxygenated blood to feet.\n**Tx:** V-AV ECMO, Vent recruitment, Central cannulation.",
              clinical_pearl: "Monitor RIGHT radial arterial line in peripheral VA ECMO. If sat is low but feet are pink, it's Harlequin."
            },
            {
              title: "LV Distension",
              content: "**Mechanism:** Retrograde aortic flow from ECMO increases afterload. If LV can't open AV, blood accumulates → Pulmonary Edema, Thrombosis.\n**Diagnosis:** Echo (Smoke, closed AV), Pink frothy sputum, High PCWP.\n**Management:**\n1. Inotropes (Dobutamine/Epi)\n2. Reduce ECMO flow\n3. Venting (Impella, IABP, Septostomy, Surgical vent)",
              clinical_pearl: "LV distension is the Achilles heel of VA ECMO. Vent early to save the lungs and heart."
            },
            {
              title: "Weaning VA ECMO",
              content: "**Criteria:** LVEF >25%, Pulsatile arterial line, AV opening consistently.\n**Protocol:**\n1. Reduce flow incrementally (e.g. to 1.5 L/min)\n2. 'Clamp Trial': Clamp lines (bridge open) to test native heart fully\n3. Assess Echo and Hemodynamics\n4. If stable, decannulate",
              clinical_pearl: "Go slow. A failed wean that requires emergent re-cannulation is a disaster."
            },
            {
               title: "ECMO Complications",
               content: "**Bleeding:** Anticoagulation/Coagulopathy.\n**Thrombosis:** Circuit or Patient.\n**Limb Ischemia:** Femoral cannulation. Use Distal Perfusion Cannula (DPC).\n**Neurologic:** Stroke, Seizures.\n**Renal:** AKI common.",
               clinical_pearl: "Stay vigilant. Daily checks of circuit and patient."
            }
          ]
        },
        {
          id: "02",
          title: "LVAD Management",
          duration_min: 90,
          sections: [
            {
              title: "LVAD Types & Physiology",
               content: "**Continuous Flow:** Axial (HMII) or Centrifugal (HM3/HVAD).\n- **HM3:** Magnetically levitated, artificial pulse.\n- **Physiology:** Preload dependent, Afterload sensitive.\n- **Native Heart:** RV must function to fill LVAD.",
               clinical_pearl: "Think in terms of flows, not EF. And the RV is critical."
            },
            {
               title: "Parameters",
               content: "**Speed (RPM):** Set by clinician.\n**Flow (L/min):** Estimated. Depends on speed/power.\n**Power (Watts):** Measured. Correlates with flow/resistance.\n**PI (Pulsatility Index):** Flow variation. High = Good filling. Low = Empty/Suction.",
               clinical_pearl: "Power is your friend. High power = Thrombus. Low power = Suction."
            },
            {
              title: "Pump Thrombosis",
              content: "**Classic Triad:**\n1. High Power\n2. Low Flow\n3. Hemolysis (LDH > 1000)\n**Treatment:** Anticoagulation (Heparin), Pump Exchange.",
              clinical_pearl: "LDH > 1000 is thrombosis until proven otherwise."
            },
            {
              title: "Suction Events",
              content: "**Definition:** Pump speed > LV filling → Septum sucks into inlet.\n**Signs:** Low Flow, Low Power, Low PI.\n**Causes:** Hypovolemia, RV Failure, Tamponade.\n**Treatment:** Volume, Reduce Speed.",
              clinical_pearl: "Reduce speed first to break suction, then assess volume."
            },
             {
              title: "RV Failure Post-LVAD",
              content: "**Mechanism:** LV unloading shifts septum → RV geometry distortion. Increased venous return overloads RV.\n**Signs:** Low LVAD flow, High CVP (>15), Low PCWP (<12).\n**Treatment:** Milrinone, iNO, RVAD.",
              clinical_pearl: "CVP >> PCWP is the hallmark of RV failure."
            },
             {
               title: "BP Management",
               content: "Use Doppler. Measure MAP. Goal 70-80 mmHg. Hypertension reduces flow and increases stroke risk.",
               clinical_pearl: "Standard cuffs often fail. Trust the Doppler."
             },
             {
               title: "Ramp Study",
               content: "Adjust speed in steps while monitoring Echo/Hemodynamics to find optimal RPM (AV opening, midline septum).",
               clinical_pearl: "Use to optimize speed or diagnose thrombosis."
             }
          ]
        },
        {
           id: "03",
           title: "Impella Overview",
           duration_min: 90,
           sections: [
             {
               title: "Device Types",
               content: "**CP:** Percutaneous, 3.7 L/min.\n**5.0/5.5:** Surgical, 5.0-6.0 L/min. 5.5 is for longer duration.",
               clinical_pearl: "Use 5.5 for bridge to transplant/LVAD."
             },
             {
               title: "Mechanism",
               content: "Microaxial pump across AV. Draws from LV, ejects to Aorta. \n**Effects:** Unloads LV (↓MVO2, ↓Wall Stress). Increases CO/MAP. Independent of rhythm.",
               clinical_pearl: "Unloading is the magic of Impella (unlike ECMO)."
             },
             {
               title: "Applications",
               content: "High-risk PCI, Cardiogenic Shock (Stage C), Bridge to Recovery/Decision.",
               clinical_pearl: "Use early (Stage C), not as a hail mary (Stage E)."
             },
             {
               title: "Positioning",
               content: "Inlet 3.5cm below valve. Outlet above valve. Monitor with Echo/Fluoro.",
               clinical_pearl: "Position is everything. Malposition = Hemolysis."
             },
             {
               title: "Complications",
               content: "Hemolysis (watch LDH), Bleeding, Limb Ischemia, Migration.",
               clinical_pearl: "Hemolysis is expected, but watch for spikes."
             },
             {
                title: "ECPELLA",
                content: "ECMO + Impella. ECMO for flow/oxygenation, Impella for LV venting. Maximum support.",
                clinical_pearl: "For the sickest patients who need LV protection."
             }
           ]
        }
      ]
    }
  },
  // --- ECHOCARDIOGRAPHY MODULES (RETAINED FROM v7.4) ---
  {
    id: 'ECHO_FUND_001',
    category: 'ECHOCARDIOGRAPHY',
    title: 'Echo Fundamentals',
    subtitle: 'Physics to Application',
    description: 'Comprehensive course on ultrasound physics, image generation, standard views, and measurement techniques.',
    visualId: 'PULSE_WAVE',
    key_metrics: [],
    physiology: 'Sound waves (2-10MHz) create images via reflection. Higher freq = better res/lower penetration.',
    clinical_pearl: 'Always optimize depth and focus. Physics dictates image quality.',
    visual_analogy: 'Sonar.',
    courseContent: {
      level: 'fundamentals',
      estimated_hours: 4,
      objectives: ["Understand ultrasound physics", "Master standard views", "Learn basic measurements"],
      chapters: [
        {
          id: "01",
          title: "The Physics of Ultrasound",
          duration_min: 45,
          sections: [
            {
              title: "Sound Wave Fundamentals",
              content: "**Why does frequency matter?**\n- Higher frequency = Better resolution (detail)\n- Higher frequency = Less penetration (can't see deep)\n- Lower frequency = Worse resolution but better penetration\n\n**Clinical Application:**\n- Adult TTE: 2-4 MHz (need to penetrate chest wall)\n- Pediatric/TEE: 5-7 MHz (less distance, want detail)\n- Vascular: 7-10 MHz (superficial, want detail)\n\n**Interactive Challenge:** A morbidly obese patient needs an echo. Should you use 2 MHz or 5 MHz? Why?\nAnswer: 2 MHz. Higher frequency won't penetrate the thick chest wall. You sacrifice resolution for penetration."
            },
            {
              title: "Image Modes",
              content: "**M-Mode (Motion Mode):**\n- Single ultrasound beam over time\n- Creates a graph: Depth on Y-axis, Time on X-axis\n- Excellent temporal resolution (1000+ frames/sec)\n- Uses: Measuring wall thickness, chamber dimensions, valve motion\n- Limitation: One-dimensional view\n\n**2D Mode (B-Mode):**\n- Multiple beams swept across a sector\n- Creates real-time 2D image\n- Frame rate: 30-100 fps\n- Uses: Structure visualization\n\n**Doppler:**\n- Uses Doppler shift to measure blood flow\n- Red = toward probe, Blue = away from probe\n- **PW (Pulse Wave):** Specific location velocity (aliases at Nyquist limit)\n- **CW (Continuous Wave):** Highest velocity along beam (no aliasing)\n- **Color:** Flow direction/velocity map"
            },
            {
              title: "Artifacts",
              content: "**Reverberation:**\n- Sound bounces multiple times between reflectors\n- Appearance: Multiple parallel lines at regular intervals\n- Example: Pacemaker wires, prosthetic valves\n\n**Shadowing:**\n- Dense structures (calcium, prosthetic) block sound\n- Appearance: Dark region behind bright structure\n\n**Mirror Image:**\n- Strong reflector (diaphragm) acts as mirror\n- Appearance: Duplicate image on wrong side (e.g. liver in chest)\n\n**Side Lobe:**\n- Weak off-axis beams\n- Appearance: 'Smoke' or noise in anechoic structures\n\n**How to Recognize:**\n1. See it in multiple views → Likely real\n2. Only in one view → Suspect artifact\n3. Static regardless of cardiac motion → Likely artifact"
            }
          ]
        },
        {
          id: "02",
          title: "Standard Views",
          duration_min: 60,
          sections: [
            {
              title: "Parasternal Long Axis (PLAX)",
              content: "**Probe Position:** Left sternal border, 3rd-4th intercostal space, marker to right shoulder.\n**Structures Visualized:**\n- LV: Anterior wall, inferolateral wall, cavity\n- RV: Anterior to LV (small sliver)\n- LA: Posterior to LV\n- Aortic valve: In cross-section (opens like a door)\n- Mitral valve: Anterior and posterior leaflets\n- Descending aorta\n\n**Measurements:**\n- LV dimensions (LVIDd/s)\n- Wall thickness (IVS/PW)\n- LA size (AP diameter)\n- Aortic root\n\n**Key:** Never measure apex here (foreshortened)."
            },
            {
              title: "Parasternal Short Axis (PSAX)",
              content: "**Three Critical Levels:**\n\n**1. Base (AV Level):**\n- Mercedes Benz sign (AV)\n- RVOT wrapping around\n- LA, RA, IAS\n\n**2. Mid (Papillary Level):**\n- Best for regional wall motion\n- LV is circular\n- Papillary muscles visible\n\n**3. Apex:**\n- No cavity seen in true apex\n\n**Regional Wall Motion:**\n- Anterior: LAD\n- Inferolateral: RCA or Cx\n- Septal: LAD"
            },
            {
              title: "Apical 4-Chamber (A4C)",
              content: "**Probe Position:** Apex, marker to left.\n**Structures:**\n- LV (Septum/Lateral)\n- RV (Free wall)\n- LA, RA\n- MV, TV\n\n**Key:** Only view to compare RV vs LV size accurately. Best for TAPSE and Mitral/Tricuspid inflow.\n**Color Doppler:** Evaluate MR/TR jets."
            },
            {
              title: "Apical 2-Chamber (A2C)",
              content: "**Probe:** Rotate 60 deg counter-clockwise from A4C.\n**Structures:** LV (Anterior/Inferior), LA, MV.\n**Why:** Completes Biplane EF. Sees Inferior wall (RCA)."
            },
            {
              title: "Apical 5-Chamber / 3-Chamber",
              content: "**A5C:** Tilt A4C anteriorly. Sees LVOT/AV. Best for VTI.\n**A3C:** Rotate from A2C. Similar to PLAX. Sees Anteroseptal/Inferolateral."
            },
            {
              title: "Subcostal View",
              content: "**Probe:** Below xiphoid. \n**Uses:** IVC size/collapse (Volume status), Pericardial effusion (dependent portion), RV wall thickness."
            }
          ]
        },
        {
          id: "03",
          title: "Normal Echo",
          duration_min: 40,
          sections: [
             {
               title: "Left Ventricle",
               content: "**Dimensions:**\n- LVEDD: 4.2-5.9 cm (men), 3.9-5.3 cm (women)\n- LVESD: 2.5-4.0 cm (men), 2.2-3.5 cm (women)\n- Wall Thickness: 0.6-1.0 cm (>1.1 = Hypertrophy)\n\n**Function:**\n- LVEF: 55-70% (Normal)\n- Mild: 45-54%\n- Moderate: 30-44%\n- Severe: <30%\n- LVOT VTI: 18-22 cm\n- Stroke Volume: 60-100 mL"
             },
             {
               title: "Right Ventricle",
               content: "**Size:**\n- Basal diameter <4.2 cm\n- RV should be ≤2/3 size of LV\n\n**Function:**\n- TAPSE: >16 mm\n- S' velocity: >9.5 cm/s\n- FAC: >35%"
             },
             {
               title: "Valves & Atria",
               content: "**Aortic:** Peak velocity < 2.0 m/s. Mean gradient < 10 mmHg.\n**Mitral:** E/A ratio 0.8-2.0.\n**LA Volume Index:** <34 mL/m2.\n**IVC:** <2.1 cm with >50% collapse (RAP 3mmHg). Dilated/Fixed = High RAP (>15mmHg)."
             }
          ]
        }
      ]
    }
  },
  {
    id: 'ECHO_INT_001',
    category: 'ECHOCARDIOGRAPHY',
    title: 'Quantitative Echo',
    subtitle: 'Intermediate Course',
    description: 'Mastering LV/RV quantification, diastolic function, and valvular assessment.',
    visualId: 'PISTON_MOTION',
    key_metrics: [],
    physiology: 'Quantification reduces subjectivity.',
    clinical_pearl: 'Visual estimation fails in regional dysfunction. Simpson\'s method is gold standard.',
    visual_analogy: 'Measuring vs Guessing.',
    courseContent: {
      level: 'intermediate',
      estimated_hours: 6,
      objectives: ["Master Simpson's Biplane", "Assess Diastology", "Grade Valve Disease"],
      chapters: [
        {
          id: "01",
          title: "LV Systolic Function",
          duration_min: 75,
          sections: [
            {
              title: "Simpson's Biplane Method",
              content: "**Concept:** Divide LV into 20 discs.\n**Technique:**\n1. Trace endocardium at ED and ES in A4C and A2C\n2. Exclude papillary muscles\n3. Machine calculates volumes\n4. EF = (EDV-ESV)/EDV\n**Pitfalls:** Foreshortening causes overestimation of EF."
            },
            {
              title: "Stroke Volume & Cardiac Output",
              content: "**Why SV/CO matters:** Small hyperdynamic heart (EF 70%) can have low stroke volume.\n**Calculation:**\n1. LVOT Diameter (PLAX)\n2. LVOT Area = 0.785 * D^2\n3. LVOT VTI (A5C)\n4. SV = Area * VTI\n5. CO = SV * HR\n**Normal CI:** 2.5-4.0. Shock < 1.8-2.2."
            },
            {
              title: "Regional Wall Motion",
              content: "**17-Segment Model:**\n- Anterior/Septal/Apex: LAD\n- Inferior/Basal Septum: RCA\n- Lateral: Cx\n**Scoring:** 1=Normal, 2=Hypo, 3=Akinetic, 4=Dyskinetic, 5=Aneurysmal\n**WMSI:** Wall Motion Score Index correlates with outcomes better than EF in MI."
            },
            {
              title: "LV Mass & Geometry",
              content: "**Calculations:** Devereux formula using LVEDD, PWT, IVST.\n**Patterns:**\n- **Normal:** Normal mass, RWT <0.42\n- **Concentric Remodeling:** Normal mass, RWT >0.42 (HTN)\n- **Concentric Hypertrophy:** High mass, High RWT (Pressure overload/AS)\n- **Eccentric Hypertrophy:** High mass, Low RWT (Volume overload/MR)"
            },
            {
              title: "Strain Imaging (GLS)",
              content: "**Concept:** Measures deformation (shortening). More sensitive than EF.\n**Normal:** More negative than -20%.\n**Clinical:** Detects dysfunction before EF drops (Cardio-oncology). Apical Sparing = Amyloid."
            }
          ]
        },
        {
          id: "02",
          title: "Diastolic Function",
          duration_min: 90,
          sections: [
            {
              title: "Physiology of Diastole",
              content: "**Phases:**\n1. Isovolumic Relaxation (Active, ATP dependent)\n2. Early Rapid Filling (E-wave, passive)\n3. Diastasis\n4. Atrial Contraction (A-wave, active)\n**Impaired Relaxation:** LV is 'stiff', relaxation takes longer. E goes down, A goes up."
            },
            {
              title: "Grading Dysfunction",
              content: "**Grade I (Impaired Relaxation):** E < A. e' low. Normal filling pressure.\n**Grade II (Pseudonormal):** E > A (looks normal). e' low. Elevated pressure (E/e' > 14).\n**Grade III (Restrictive):** E >> A (>2:1). Short decel time (<160ms). Very high pressure.\n**L-wave:** Mid-diastolic flow = severe dysfunction."
            },
            {
              title: "Tissue Doppler (TDI)",
              content: "Measures myocardial velocity (e') at annulus. Less load dependent than blood flow.\n**Septal e':** < 7 cm/s is abnormal.\n**Lateral e':** < 10 cm/s is abnormal.\n**E/e' Ratio:** Estimates LA Pressure. >14 = High LAP."
            }
          ]
        }
      ]
    }
  },
  {
    id: 'ECHO_RV_MASTER',
    category: 'ECHOCARDIOGRAPHY',
    title: 'RV Master Class',
    subtitle: 'The Forgotten Chamber',
    description: 'Complete guide to Right Ventricular anatomy, function, and failure modes.',
    visualId: 'HEART_3D',
    key_metrics: [{ label: 'TAPSE', normal: '> 17', critical: '< 10', unit: 'mm' }],
    physiology: 'RV is a volume pump. Thin walled. Fails acutely against pressure.',
    clinical_pearl: 'TAPSE < 10mm post-cardiotomy is high risk. Watch for septal shift.',
    visual_analogy: 'Bellows.',
    courseContent: {
      level: 'advanced',
      estimated_hours: 5,
      objectives: ["Quantify RV function", "Recognize septal shift", "Manage RV failure"],
      chapters: [
        {
          id: "01",
          title: "RV Anatomy & Views",
          duration_min: 45,
          sections: [
            {
              title: "The Crescent Chamber",
              content: "**Anatomy:** Thin walled (2-5mm), crescent shape, heavy trabeculations.\n**Physiology:** Volume pump. Highly dependent on preload and afterload. Limited reserve for acute pressure."
            },
            {
              title: "Best Views",
              content: "**A4C:** TAPSE, FAC, Size.\n**PLAX:** RVOT diameter.\n**PSAX:** Septal motion (D-shape), wall thickness.\n**Subcostal:** Wall thickness, IVC."
            }
          ]
        },
        {
          id: "02",
          title: "Quantitative Assessment",
          duration_min: 60,
          sections: [
            {
              title: "TAPSE",
              content: "**Tricuspid Annular Plane Systolic Excursion**\n- M-mode of lateral annulus.\n- Measures longitudinal shortening.\n- Normal > 16mm. Severe dysfunction < 10mm. **Mnemonic: 'Sweet 16' (Normal > 16mm).**"
            },
            {
              title: "FAC (Fractional Area Change)",
              content: "**(EDA-ESA)/EDA**\n- Measures radial + longitudinal.\n- Normal > 35%.\n- Better correlation with MRI."
            },
            {
              title: "S' Wave",
              content: "Tissue Doppler of tricuspid annulus. Normal > 9.5 cm/s."
            },
            {
              title: "RIMP (Tei Index)",
              content: "(IVCT + IVRT) / ET. Normal < 0.40. Higher = Worse."
            }
          ]
        },
        {
          id: "03",
          title: "Septal Motion & Hemodynamics",
          duration_min: 60,
          sections: [
            {
              title: "Septal Shift (D-Sign)",
              content: "**Systolic Flattening:** Pressure Overload (PE, PH).\n**Diastolic Flattening:** Volume Overload (TR, Shunt).\n**Paradoxical:** Post-op, LBBB."
            },
            {
              title: "RVSP Estimation",
              content: "Bernoulli: 4(V_TR)^2 + RAP.\nExample: 3.0m/s jet + 10 RAP = 36 + 10 = 46 mmHg."
            },
            {
              title: "McConnell's Sign",
              content: "Akinesis of free wall with spared apex. Specific for Acute PE. **Mnemonic: 'Apex Spares the Massive PE'**"
            },
            {
              title: "5 D's of RV Failure",
              content: "1. **D**ilated\n2. **D**ysfunctional (Low TAPSE)\n3. **D**-shaped Septum\n4. **D**istended IVC\n5. **D**iminished LVOT VTI (Low CO)"
            }
          ]
        },
        {
          id: "04",
          title: "Specific Failure Patterns",
          duration_min: 45,
          sections: [
             {
               title: "Post-MVR",
               content: "Mitral valve fixed -> Acute RV afterload increase. RV cannot compensate -> Dilation -> TR. \n**Physical Exam: 'Neck Cannon' (Elevated JVP, Cannon A-waves).**"
             },
             {
               title: "Post-LVAD",
               content: "LVAD unloads LV -> Septum shifts left -> RV loses septal kick -> Increased venous return -> RV Failure. CVP >> PCWP."
             }
          ]
        }
      ]
    }
  },
  // --- QUICK REF CARDS (Preserved) ---
  {
    id: 'ECHO_PHYSICS_QUICK',
    category: 'ECHOCARDIOGRAPHY',
    title: 'Quick Ref: Echo Physics',
    subtitle: 'Frequency & Artifacts',
    description: 'Key concepts in ultrasound generation.',
    visualId: 'PULSE_WAVE',
    key_metrics: [{ label: 'Adult TTE', normal: '2-4', critical: 'MHz', unit: '' }, { label: 'Speed', normal: '1540', critical: 'm/s', unit: '' }],
    physiology: 'Sound reflects at tissue interfaces. Greater impedance mismatch = stronger reflection.',
    clinical_pearl: 'Obese patient? Drop frequency to 2MHz to penetrate.',
    visual_analogy: 'Flashlight in fog.',
  },
  {
    id: 'ECHO_VIEWS_QUICK',
    category: 'ECHOCARDIOGRAPHY',
    title: 'Quick Ref: Standard Views',
    subtitle: 'Anatomy',
    description: 'PLAX, PSAX, A4C. The systematic exam.',
    visualId: 'HEART_3D',
    key_metrics: [],
    physiology: 'PLAX: Bisects LV. PSAX: Doughnut. A4C: Apex to base.',
    clinical_pearl: 'Never measure the apex in PLAX (foreshortened).',
    visual_analogy: 'Slicing bread.',
  },
  {
    id: 'ECHO_LVEF_QUICK',
    category: 'ECHOCARDIOGRAPHY',
    title: 'Quick Ref: LVEF',
    subtitle: 'Simpson\'s Biplane',
    description: 'Quantitative assessment of systolic function.',
    visualId: 'PISTON_MOTION',
    key_metrics: [{ label: 'Normal', normal: '55-70', critical: '< 30', unit: '%' }],
    physiology: 'EF = (EDV-ESV)/EDV. Depends on preload/afterload.',
    clinical_pearl: 'Avoid foreshortening!',
    visual_analogy: 'Squeezing an orange.',
    interactive: {
      label: 'EF Simulator', min: 10, max: 80, step: 5, default: 55, unit: '%',
      thresholds: [{value: 30, label: "SEVERE", color: "text-red-600", direction: "less"}, {value: 50, label: "Low Normal", color: "text-green-600", direction: "greater"}]
    }
  },
  {
    id: 'ECHO_LV_VTI_QUICK',
    category: 'ECHOCARDIOGRAPHY',
    title: 'Quick Ref: LVOT VTI',
    subtitle: 'Stroke Distance',
    description: 'The most robust measure of forward flow.',
    visualId: 'FLOW_STREAM',
    key_metrics: [{ label: 'Normal', normal: '18-22', critical: '< 15', unit: 'cm' }],
    physiology: 'SV = Area x VTI. VTI correlates linearly with SV.',
    clinical_pearl: 'EF 10% with VTI 20cm is BETTER perfusion than EF 60% with VTI 8cm.',
    visual_analogy: 'Hose stream length.',
    interactive: {
      label: 'VTI Simulator', min: 5, max: 30, step: 1, default: 20, unit: 'cm',
      thresholds: [{ value: 12, label: "LOW FLOW SHOCK", color: "text-red-600", direction: "less" }, { value: 18, label: "Normal", color: "text-green-600", direction: "greater" }]
    }
  },
  {
    id: 'ECHO_RV_TAPSE_QUICK',
    category: 'ECHOCARDIOGRAPHY',
    title: 'Quick Ref: TAPSE',
    subtitle: 'RV Function',
    description: 'Measuring RV base-to-apex shortening.',
    visualId: 'PISTON_MOTION',
    key_metrics: [{ label: 'Normal', normal: '> 17', critical: '< 10', unit: 'mm' }],
    physiology: 'RV is longitudinal. TAPSE < 10mm is severe.',
    clinical_pearl: 'McConnell\'s Sign: Apical sparing = PE.',
    interactive: {
      label: 'TAPSE', min: 5, max: 30, step: 1, default: 22, unit: 'mm',
      thresholds: [{ value: 10, label: "SEVERE", color: "text-red-600", direction: "less" }]
    }
  },
  {
    id: 'HEMO_DERIVED_QUICK',
    category: 'HEMODYNAMICS',
    title: 'Quick Ref: Derived Params',
    subtitle: 'SVR, PVR, CO',
    description: 'The math of shock.',
    visualId: 'CALCULATOR',
    key_metrics: [{ label: 'SVR', normal: '800-1200', critical: '< 800', unit: 'dynes' }],
    physiology: 'SVR = (MAP-CVP)/CO * 80.',
    clinical_pearl: 'Low SVR + High CI = Vasoplegia.',
  },
  {
    id: 'MCS_IMPELLA_QUICK',
    category: 'MECHANICAL_SUPPORT',
    title: 'Quick Ref: Impella',
    subtitle: 'Active Unloading',
    description: 'Micro-axial pump. Unloads LV.',
    visualId: 'AXIAL_PUMP',
    key_metrics: [{ label: 'Flow', normal: '2.5-5.5', critical: 'Suction', unit: 'L/min' }],
    physiology: 'Reduces Wall Stress. Increases MAP.',
    interactive: {
      label: 'P-Level', min: 0, max: 9, step: 1, default: 6, unit: '',
      thresholds: [{ value: 2, label: "Wean", color: "text-yellow-600", direction: "less" }, { value: 8, label: "Max", color: "text-green-600", direction: "greater" }]
    }
  },
  {
    id: 'LAB_LACTATE_QUICK',
    category: 'LABS_METABOLICS',
    title: 'Quick Ref: Lactate',
    subtitle: 'Perfusion Marker',
    description: 'Anaerobic threshold indicators.',
    visualId: 'CLEARANCE_CURVE',
    key_metrics: [{ label: 'Lactate', normal: '< 2.0', critical: '> 4.0', unit: 'mmol/L' }],
    physiology: 'Clearance predicts survival.',
    interactive: {
      label: 'Lactate', min: 0.5, max: 15, step: 0.5, default: 1.0, unit: 'mmol/L',
      thresholds: [{ value: 4.0, label: "Hypoperfusion", color: "text-orange-600", direction: "greater" }]
    }
  }
];

// ====================================================================================
// 2. DATA: SIMULATION CASES (FROM LIBRARY)
// ====================================================================================

const SIMULATION_CASES = [
  {
    id: "MCS_001",
    title: "Harlequin Syndrome (North-South)",
    module: "MCS",
    difficulty: "Fellowship",
    description: "VA-ECMO patient with differential hypoxia",
    history: "50M with fulminant myocarditis. Peripheral VA-ECMO via fem-fem cannulation day 4. Native LV function improving (EF 30% from 10%).",
    physical_exam: "Alert, following commands. Right radial SpO2 85%, left radial SpO2 87%, femoral arterial line SpO2 98%. Cyanotic upper body, pink lower body.",
    vitals: { hr: 88, map: 82, cvp: 10, temp: 37.2 },
    labs: [
      { time: "08:00", lactate: 1.8, creatinine: 1.1, hgb: 9.2 }
    ],
    echo: {
      lv_ef: 30,
      lv_size: "dilated",
      av_opening: "intermittent",
      lvot_vti: 12
    },
    ecmo_params: {
      flow: "4.5 L/min",
      rpm: "3200",
      sweep: "4 L/min",
      fio2: "100%"
    },
    trap: "Assuming SpO2 discrepancy is measurement error or lung disease. Increasing ECMO FiO2 won't help.",
    physiology: "As native LV recovers, it ejects deoxygenated blood (lungs still failed) into ascending aorta → supplies brain/coronaries/upper body with hypoxic blood. ECMO returns oxygenated blood to descending aorta via femoral cannula → supplies lower body. Creates differential hypoxia (Harlequin/North-South syndrome).",
    correct_action: "Convert to V-AV ECMO (add venous return cannula) OR recruit lungs aggressively OR convert to central ECMO",
    teaching_points: [
      "Monitor differential SpO2: Right radial (pre-ductal) vs lower extremity (post-ductal)",
      "Harlequin occurs when: LV function recovers + lungs still failing",
      "Brain getting hypoxic blood despite 'good' ECMO support",
      "V-AV hybrid: Combines VV (respiratory support) + VA (hemodynamic)",
      "Prevention: Daily echo to assess LV ejection, anticipate this complication"
    ],
    differential_diagnosis: [
      "Oxygenator failure (but lower body SpO2 would also be low)",
      "Measurement artifact (check ABG from right radial - will confirm hypoxemia)",
      "Lung disease (already known, but ECMO flow adequate)"
    ],
    management_algorithm: [
      "1. Recognize pattern: Low pre-ductal SpO2, normal post-ductal SpO2",
      "2. Confirm with ABG from right radial artery",
      "3. Assess LV function (echo - is it ejecting?)",
      "4. Options: (A) V-AV configuration, (B) Lung recruitment, (C) Central cannulation",
      "5. If V-AV: Add drainage cannula to IJ, creates hybrid VV/VA support"
    ],
    // Mapping for App compatibility
    targets: { map: 65, ci: 2.5 },
    initialPhysio: { hr: 88, preload: 10, contractility: 0.3, svr: 1000, pap: 25 }
  },

  {
    id: "MCS_002",
    title: "LVAD Pump Thrombosis",
    module: "MCS",
    difficulty: "Attending",
    description: "HeartMate 3 patient with rising power and hemolysis",
    history: "58M with ischemic cardiomyopathy, HeartMate 3 LVAD 6 months ago. Presented with dark urine, fatigue, and dyspnea.",
    vitals: { hr: 95, map: 72, cvp: 12, temp: 37.5 },
    lvad_params: {
      speed: "5800 RPM",
      power: "8.2 watts",
      flow: "3.8 L/min (estimated)",
      pi: "2.1"
    },
    labs: [
      { time: "admission", lactate: 2.1, ldh: 1450, haptoglobin: "<10", tbili: 2.8, pfhgb: 42 },
      { time: "+6hrs", lactate: 2.4, ldh: 1520, pfhgb: 48 }
    ],
    echo: {
      lv_size: "dilated",
      lv_function: "severely reduced",
      aortic_valve: "opens intermittently",
      inflow_cannula: "Difficult to assess",
      other: "Color Doppler shows turbulent flow at inflow"
    },
    trap: "Attributing hemolysis to 'normal LVAD wear' or delaying CT angiogram",
    physiology: "Thrombus in pump creates turbulence and shear stress → mechanical hemolysis → ↑LDH, ↑free Hgb, ↓haptoglobin. Thrombus creates friction → ↑power requirement. Flow estimate decreases (pump working harder for less flow).",
    correct_action: "Urgent CT angiogram to confirm thrombosis, then pump exchange vs medical management (high-dose heparin + GPIIb/IIIa) depending on severity",
    teaching_points: [
      "Pump thrombosis triad: High power + Low flow + Hemolysis",
      "Power is most sensitive parameter (normal HM3: 4-6 watts)",
      "Dark urine = free hemoglobin (hallmark)",
      "CT angio with delayed phase shows 'filling defect' in pump",
      "Medical management rarely works - usually needs pump exchange",
      "Check anticoagulation compliance (most common cause)"
    ],
    differential_diagnosis: [
      "GI bleeding (common in LVAD, but wouldn't cause high power)",
      "Infection (fever, elevated WBC)",
      "Pump malfunction without thrombus (rare)"
    ],
    management_algorithm: [
      "1. Recognize triad: ↑Power, ↓Flow, Hemolysis",
      "2. Labs: LDH, haptoglobin, plasma-free Hgb, lactate",
      "3. CT angiogram (CTA) with delayed phase",
      "4. If confirmed: Pump exchange (OR) vs medical (heparin + GPIIb/IIIa)",
      "5. Medical only if: Partial thrombosis, high surgical risk",
      "6. Pump exchange: Most definitive treatment"
    ],
    targets: { map: 70, ci: 2.2 },
    initialPhysio: { hr: 95, preload: 15, contractility: 0.2, svr: 1100, pap: 35 }
  },

  // ===== POST-CARDIAC SURGERY CASES =====
  {
    id: "SURG_001",
    title: "Post-MVR RV Failure",
    module: "VALVULAR",
    difficulty: "Fellowship",
    description: "Acute RV failure after mitral valve replacement",
    history: "68F with severe MR, EF 55%. Underwent MVR (mechanical valve) 18 hours ago. Stable initially, now hypotensive.",
    vitals: { hr: 105, map: 54, cvp: 19, temp: 36.8 },
    hemodynamics: {
      rap: 19,
      pcwp: 11,
      pap: "55/30 (40)",
      ci: 1.8,
      svr: 1800,
      pvr: 420
    },
    echo: {
      lv_ef: 58,
      lv_size: "normal",
      rv_function: "severely reduced",
      tapse: 7,
      rv_size: "moderately dilated",
      septal_motion: "paradoxical (D-sign in systole)",
      tr: "moderate-severe",
      prosthetic_mv: "well-seated, trace regurgitation"
    },
    labs: [
      { time: "POD1 AM", lactate: 3.2, creatinine: 1.4, trop: 2.5 }
    ],
    trap: "Giving fluids for hypotension. RV is already failing - fluid makes it worse.",
    physiology: "MR creates low-resistance pop-off into LA. Post-MVR, this pop-off eliminated → Acute ↑ in RV afterload → RV fails acutely. RV dilates → septum shifts left → impairs LV filling (ventricular interdependence) → ↓CO despite normal LV function.",
    correct_action: "Milrinone (↓PVR + inotropy) ± small dose vasopressor. Avoid fluids. Consider inhaled NO if refractory.",
    teaching_points: [
      "Post-MVR RV failure is predictable and common",
      "High CVP + Low PCWP = Isolated RV failure",
      "Fluids are DANGEROUS (worsen RV dilation and septal shift)",
      "Milrinone ideal: ↓PVR (afterload reduction) + ↑inotropy",
      "Phenylephrine BAD (↑PVR, worsens RV afterload)",
      "May need mechanical RV support if refractory"
    ],
    why_fluids_fail: "RV already volume overloaded (high CVP). More volume → more dilation → worse septal shift → worse LV filling → paradoxical ↓ in CO",
    management_algorithm: [
      "1. Recognize: High CVP, Low PCWP, Low CI, Dilated RV on echo",
      "2. Start milrinone 0.375 mcg/kg/min (skip load if BP low)",
      "3. If hypotensive: Add low-dose NE or vasopressin",
      "4. Avoid: Fluids, phenylephrine, high-dose NE",
      "5. Consider: Inhaled NO (↓PVR), dobutamine (inotropy)",
      "6. If refractory: RVAD, VA-ECMO"
    ],
    targets: { map: 65, ci: 2.2 },
    initialPhysio: { hr: 105, preload: 19, contractility: 0.6, svr: 1800, pap: 40 }
  },

  {
    id: "SURG_002",
    title: "Tamponade vs Restrictive Physiology",
    module: "CORONARY",
    difficulty: "Attending",
    description: "Elevated and equalized pressures post-CABG",
    history: "72M POD 3 CABG. Chest tubes removed POD2. Now hypotensive with elevated CVP.",
    vitals: { hr: 110, map: 62, cvp: 16, temp: 37.0 },
    hemodynamics: {
      rap: 16,
      pcwp: 18,
      pap: "35/18 (24)",
      ci: 2.0,
      svr: 1400
    },
    physical_exam: "Distant heart sounds, pulsus paradoxus 18mmHg, JVP elevated with blunted y-descent",
    echo: {
      pericardial_effusion: "Moderate, loculated posterior to LA",
      ra_collapse: "Present in systole",
      rv_collapse: "Present in early diastole",
      iva_collapse: "Not well visualized",
      respiratory_variation: "Mitral inflow E wave varies >25% with respiration"
    },
    labs: [
      { time: "POD3", lactate: 2.8, cr: 1.2 }
    ],
    trap: "Accepting 'equalized pressures post-op' as constrictive physiology when it's actually loculated tamponade",
    physiology: "Loculated pericardial effusion (common post-surgery) compresses chambers regionally. Elevated and equalized diastolic pressures. Unlike classic tamponade, fluid isn't circumferential, so echo may not show all classic signs.",
    correct_action: "Urgent pericardial drainage (surgical vs percutaneous). Sterile tap has low risk; untreated tamponade has high mortality.",
    teaching_points: [
      "Post-surgical tamponade often LOCULATED (not circumferential)",
      "May not have all classic echo signs",
      "Clinical features: ↑JVP, pulsus paradoxus, hypotension, low CO",
      "Hemodynamics: Equalized diastolic pressures (RA≈PCWP≈PAD)",
      "'Blunted y-descent' suggests tamponade vs constriction ('prominent y-descent')",
      "Surgical drainage safer post-op (avoid percutaneous - risk of injury)"
    ],
    tamponade_vs_constriction: {
      y_descent: "Tamponade: Blunted/absent. Constriction: Prominent ('square root sign')",
      respiratory_variation: "Tamponade: Exaggerated (>25%). Constriction: Present but less",
      pericardial_thickness: "Tamponade: Fluid. Constriction: Thickened pericardium",
      response_to_drainage: "Tamponade: Immediate improvement. Constriction: No change"
    },
    targets: { map: 70, ci: 2.5 },
    initialPhysio: { hr: 110, preload: 16, contractility: 0.4, svr: 1400, pap: 24 }
  },

  // ===== SHOCK STATE CASES =====
  {
    id: "SHOCK_001",
    title: "Vasoplegia vs Hypovolemia",
    module: "CORONARY",
    difficulty: "Residency",
    description: "Hypotension POD0 CABG - fluids or pressors?",
    history: "65M POD0 CABG x3. CPB time 98 min. Initially stable, now hypotensive 3 hours post-op.",
    vitals: { hr: 108, map: 58, cvp: 4, temp: 37.5 },
    hemodynamics: {
      rap: 4,
      pcwp: 8,
      pap: "28/12 (18)",
      co: 7.2,
      ci: 4.0,
      svr: 580,
      svo2: 78
    },
    output: {
      chest_tubes: "50 mL/hr (serosanguinous)",
      urine: "80 mL/hr"
    },
    labs: [
      { time: "POD0", lactate: 1.2, hgb: 9.8, k: 3.8, mg: 1.9 }
    ],
    trap: "Chasing blood pressure with fluids when problem is low SVR (distributive shock)",
    physiology: "Post-CPB vasoplegia: Inflammatory cytokines cause vasodilation. High/normal CO + Low SVR + Hypotension = Distributive shock, NOT hypovolemia. Fluids third-space and worsen edema.",
    correct_action: "Vasopressin 0.04 units/min + Norepinephrine. Small fluid bolus (250-500mL) acceptable but vasopressors are primary therapy.",
    teaching_points: [
      "Vasoplegia: High CI + Low SVR + Hypotension",
      "Hypovolemia: Low CI + High SVR + Low CVP",
      "Post-CPB vasoplegia common (5-25% of cases)",
      "Vasopressin first-line (catecholamine receptors downregulated)",
      "Don't reflexively give liters of fluid - look at SVR!",
      "ACE inhibitor use increases risk (depletes angiotensin)"
    ],
    hemodynamic_patterns: {
      vasoplegia: "↑CI, ↓SVR, →CVP, ↓MAP",
      hypovolemia: "↓CI, ↑SVR, ↓CVP, ↓MAP",
      cardiogenic: "↓CI, ↑SVR, ↑CVP, ↓MAP",
      tamponade: "↓CI, ↑SVR, ↑CVP (equalized), ↓MAP"
    },
    targets: { map: 65, ci: 2.5 },
    initialPhysio: { hr: 108, preload: 4, contractility: 0.6, svr: 580, pap: 18 }
  }
];

// ====================================================================================
// 2. DATA: PROTOCOL LIBRARY (QUICK REF)
// ====================================================================================

const PROTOCOL_LIBRARY = [
  {
    id: 'scai-shock',
    title: 'SCAI 2022 Shock Classification',
    category: 'HEMODYNAMICS',
    content: `
      **Stage A (At Risk):** Not hypotensive; no signs of hypoperfusion. Large MI or acute ADHF history.
      **Stage B (Beginning):** Hypotension (SBP < 90) or Tachycardia (HR > 100) WITHOUT hypoperfusion. 
      **Stage C (Classic):** Hypotension + Hypoperfusion (Lactate > 2, cool skin, oliguria). Requires inotropes/MCS.
      **Stage D (Deteriorating):** Failing Stage C support. Rising lactate, increasing pressor requirements.
      **Stage E (Extremis):** Refractory arrest, pH < 7.2, profound collapse requiring VA-ECMO or CPR.
      
      *Clinical Pearl:* Stage C mortality is ~10-20%; Stage E mortality exceeds 60-80%.
    `,
    citations: ['SCAI Shock 2.0 Consensus Statement, 2022']
  },
  {
    id: 'rv-failure-bundle',
    title: 'RV Failure: The 5-Pillar Approach',
    category: 'VENTRICULAR',
    content: `
      1. **Preload:** Maintain CVP 12-16. Avoid over-distension (interventricular dependence).
      2. **Afterload:** Pulmonary vasodilators (iNO/Epo). Targeted MAP > 65 to ensure RV perfusion.
      3. **Purity (Rhythm):** Sinus rhythm is critical; atrial kick contributes 30% of RV stroke volume.
      4. **Power (Inotropy):** Milrinone (if SBP permits) or Dobutamine. 
      5. **Plug (MCS):** Early ProtekDuo or Impella RP if medical therapy fails.
    `,
    citations: ['AHA Scientific Statement on RV Failure, 2018']
  },
  {
    id: 'harlequin-syndrome',
    title: 'Harlequin (North-South) Syndrome',
    category: 'MECHANICAL SUPPORT',
    content: `
      Occurs in VA-ECMO with peripheral cannulation when native LV function recovers but pulmonary gas exchange is poor.
      
      **Pathophysiology:** Oxygenated blood from ECMO (Lower Body) meets deoxygenated blood from recovered LV (Upper Body).
      **Diagnosis:** Monitor Pre-ductal (Right Radial) vs Post-ductal saturations.
      **Treatment:** Transition to V-A-V ECMO or upgrade to central cannulation/ventilator adjustments.
    `,
    citations: ['ELSO Red Book, 6th Edition']
  },
  {
    id: 'diastology-cvicu',
    title: 'Diastology for the Intensivist',
    category: 'ECHOCARDIOGRAPHY',
    content: `
      Key metrics for LVEDP estimation:
      - **E/A Ratio:** > 2.0 suggestive of high LAP (restrictive filling).
      - **Septal e':** < 7cm/s suggests impaired relaxation.
      - **Average E/e':** > 14 correlates strongly with PCWP > 15 mmHg.
      - **LA Volume Index:** > 34 mL/m² indicates chronic pressure/volume overload.
    `,
    citations: ['ASE Diastolic Function Guidelines, 2016']
  }
];

// ====================================================================================
// 3. DATA: SCENARIOS & TEMPLATES
// ====================================================================================

const EXAM_SCENARIOS = [
  {
    id: 'cert-1',
    title: 'Tier 1: Distributive vs. Cardiogenic',
    difficulty: 'Basic',
    requiredXP: 0,
    timeLimit: 120,
    targets: { map: 65, ci: 2.2 },
    initialPhysio: { hr: 125, preload: 6, contractility: 0.55, svr: 450, pap: 22 },
    trap: 'septal-shift',
    prompt: 'Post-op Day 0 patient with SBP 82. Wide pulse pressure. Diagnose and stabilize MAP.'
  },
  {
    id: 'cert-2',
    title: 'Tier 2: Acute RV Infarct',
    difficulty: 'Intermediate',
    requiredXP: 500,
    timeLimit: 180,
    targets: { map: 65, papi: 1.0, ci: 2.0 },
    initialPhysio: { hr: 95, preload: 22, contractility: 0.35, svr: 1400, pap: 35 },
    trap: 'volume-overload',
    prompt: 'Inferior MI with hypotension. CVP is 20. Optimize the RV-PA unit.'
  },
  {
    id: 'cert-3',
    title: 'Tier 3: LVAD Post-Op Tamponade',
    difficulty: 'Advanced',
    requiredXP: 1500,
    timeLimit: 240,
    targets: { map: 75, ci: 2.4, cpo: 0.6 },
    initialPhysio: { hr: 120, preload: 25, contractility: 0.1, svr: 2200, pap: 45 },
    trap: 'device-fixation',
    prompt: 'HeartMate 3 patient. Declining flows, rising CVP, MAP 60. Identify the surgical emergency.'
  }
];

const CASE_TEMPLATES = [
  {
    type: 'Fulminant Myocarditis',
    module: 'MYOCARDIAL',
    basePhysio: { hr: 135, preload: 28, contractility: 0.08, svr: 2400, pap: 50 },
    history: "24F previously healthy. Viral prodrome 1 week ago. Now in SCAI Stage D shock with LBBB.",
    trap: "Avoid high-dose catecholamines; move early to temporary MCS (ECMO/Impella).",
    goal: "Target Cardiac Power Output (CPO) > 0.6 and stabilize lactate.",
    goldStandard: { inotrope: true, mcs: 'VA-ECMO' }
  },
  {
    type: 'Post-Cardiotomy Vasoplegia',
    module: 'SURGICAL',
    basePhysio: { hr: 110, preload: 4, contractility: 0.45, svr: 350, pap: 20 },
    history: "72M s/p Complex Valve/CABG. Cross-clamp time 240 min. Profound vasoplegia despite 0.5 mcg Norepi.",
    trap: "Refractory vasoplegia may require Methylene Blue or Angiotensin II.",
    goal: "Restore SVR to 800-1200 dynes.",
    goldStandard: { vasopressor: true, fluid: true, adjuncts: 'Vaso/AngII' }
  },
  {
    type: 'Harlequin Syndrome (North-South)',
    module: 'MCS',
    basePhysio: { hr: 88, preload: 10, contractility: 0.3, svr: 1000, pap: 30 },
    history: "50M with fulminant myocarditis. Peripheral VA-ECMO day 4. Native LV function improving (EF 30%). Right radial SpO2 85%, femoral arterial line SpO2 98%. Cyanotic upper body, pink lower body.",
    trap: "Assuming SpO2 discrepancy is measurement error or lung disease. Increasing ECMO FiO2 won't help.",
    goal: "Convert to V-AV ECMO or recruit lungs aggressively.",
    goldStandard: { mcs_config: 'V-AV' }
  },
  {
    type: 'LVAD Pump Thrombosis',
    module: 'MCS',
    basePhysio: { hr: 95, preload: 12, contractility: 0.2, svr: 1100, pap: 35 },
    history: "58M with ischemic cardiomyopathy, HeartMate 3 LVAD 6 months ago. Dark urine, fatigue, dyspnea. Power 8.2W (high), Flow 3.8L (low), LDH 1450.",
    trap: "Attributing hemolysis to 'normal LVAD wear' or delaying CT angiogram.",
    goal: "Urgent CT angiogram to confirm thrombosis, then pump exchange vs medical management.",
    goldStandard: { imaging: 'CT Angio', treatment: 'Anticoagulation/Exchange' }
  },
  {
    type: 'Post-MVR RV Failure',
    module: 'VALVULAR',
    basePhysio: { hr: 105, preload: 19, contractility: 0.6, svr: 1800, pap: 40 }, // High CVP, Normal LV
    history: "68F POD1 MVR. Hypotensive (MAP 55), CVP 19, PCWP 11, CI 1.8. RVSP 55 mmHg. Echo: Severely reduced RV function, paradoxical septal motion.",
    trap: "Giving fluids for hypotension (worsens RV failure).",
    goal: "Milrinone (↓PVR + inotropy) ± small dose vasopressor. Avoid fluids.",
    goldStandard: { inotrope: 'Milrinone', fluid: false }
  },
  {
    type: 'Tamponade vs Restrictive Physiology',
    module: 'CORONARY',
    basePhysio: { hr: 110, preload: 16, contractility: 0.4, svr: 1400, pap: 24 }, // Equalized pressures
    history: "72M POD 3 CABG. Chest tubes removed. Hypotensive, elevated CVP. Distant heart sounds, pulsus paradoxus 18mmHg. CVP 16, PCWP 18.",
    trap: "Accepting 'equalized pressures post-op' as constrictive physiology when it's actually loculated tamponade.",
    goal: "Urgent pericardial drainage (surgical vs percutaneous).",
    goldStandard: { procedure: 'Drainage' }
  },
  {
    type: 'Vasoplegia vs Hypovolemia',
    module: 'CORONARY',
    basePhysio: { hr: 108, preload: 4, contractility: 0.6, svr: 580, pap: 18 }, // Low SVR, High CO
    history: "65M POD0 CABG x3. MAP 58, HR 110, CVP 4, CI 4.2, SVR 600. Chest tubes 50mL/hr.",
    trap: "Chasing blood pressure with fluids when problem is low SVR (distributive shock).",
    goal: "Vasopressin 0.04 units/min + Norepinephrine.",
    goldStandard: { vasopressor: true }
  }
];

// ====================================================================================
// 4. HELPER UI COMPONENTS
// ====================================================================================

const Badge = ({ children, color = "bg-slate-700" }: {children: React.ReactNode, color?: string}) => (
  <span className={`px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-white ${color}`}>
    {children}
  </span>
);

const MetricCard = ({ label, value, unit, status, description }: any) => (
  <div className="bg-black/60 border border-slate-800 p-4 rounded-xl flex flex-col justify-between hover:border-slate-600 transition-all group">
    <div className="flex justify-between items-center">
      <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</span>
      {status === 'critical' && <AlertTriangle size={12} className="text-red-500 animate-pulse" />}
    </div>
    <div className="flex items-baseline gap-1 mt-2">
      <span className={`text-3xl font-mono font-black ${status === 'critical' ? 'text-red-500' : 'text-slate-200'}`}>
        {value}
      </span>
      <span className="text-[10px] text-slate-500 font-bold uppercase">{unit}</span>
    </div>
    <div className="mt-2 text-[9px] text-slate-600 font-bold uppercase leading-tight group-hover:text-slate-400 transition-colors">
      {description}
    </div>
  </div>
);

const CourseReader = ({ course }: { course: NonNullable<LearningTopic['courseContent']> }) => {
  const [activeChapter, setActiveChapter] = useState(course.chapters[0]);

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**')) return <h4 key={i} className="font-bold text-slate-200 mt-4 mb-2 text-sm">{line.replace(/\*\*/g, '')}</h4>;
      if (line.trim().startsWith('-')) return <li key={i} className="ml-4 text-slate-400 text-xs mb-1">{line.replace('-', '').trim()}</li>;
      return <p key={i} className="text-slate-400 text-xs mb-2 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="flex h-[600px] border border-slate-800 rounded-xl overflow-hidden bg-slate-900">
      <div className="w-1/4 bg-slate-950 border-r border-slate-800 p-4 overflow-y-auto">
        <h4 className="text-xs font-black text-slate-500 uppercase mb-4">Course Content</h4>
        <div className="space-y-1">
          {course.chapters.map(chap => (
            <button
              key={chap.id}
              onClick={() => setActiveChapter(chap)}
              className={`w-full text-left p-3 rounded-lg text-xs font-bold transition-all ${activeChapter.id === chap.id ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:bg-slate-800'}`}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 text-[10px] ${activeChapter.id === chap.id ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-500'}`}>{chap.id}</div>
                {chap.title}
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 p-8 overflow-y-auto bg-slate-900">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-black text-white mb-2">{activeChapter.title}</h2>
          <div className="flex items-center text-xs text-slate-500 mb-8"><Clock className="w-3 h-3 mr-1"/> {activeChapter.duration_min} mins read</div>
          <div className="space-y-8">
            {activeChapter.sections.map((sec, i) => (
              <div key={i} className="animate-in fade-in slide-in-from-bottom-2">
                <h3 className="text-lg font-bold text-blue-400 mb-3 border-b border-slate-800 pb-2">{sec.title}</h3>
                <div className="prose prose-sm prose-invert max-w-none">
                  {formatText(sec.content)}
                </div>
                {sec.clinical_pearl && (
                  <div className="mt-4 bg-yellow-900/10 border border-yellow-700/30 p-4 rounded-lg flex items-start">
                    <Lightbulb className="w-5 h-5 text-yellow-500 mr-3 shrink-0 mt-0.5"/>
                    <div>
                      <div className="text-xs font-bold text-yellow-500 uppercase mb-1">Clinical Pearl</div>
                      <p className="text-xs text-yellow-200/80 italic">{sec.clinical_pearl}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ====================================================================================
// 5. THE PHYSIOLOGY & WAVEFORM ENGINES
// ====================================================================================

const WaveformVisualizer = ({ type, physio, metrics, color, height = 90 }: any) => {
  const [points, setPoints] = useState(new Array(100).fill(height / 2));
  const requestRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const animate = () => {
      const hrFactor = physio.hr / 60;
      timeRef.current += 0.05 * hrFactor;
      const t = timeRef.current;
      
      let val = 0;
      const cycle = t % (2 * Math.PI);
      
      if (type === 'art') {
        const sysLevel = metrics.map + (metrics.map * 0.35);
        const diaLevel = metrics.map - (metrics.map * 0.25);
        if (cycle < 1.2) {
          val = diaLevel + Math.sin(cycle * 1.3) * (sysLevel - diaLevel);
        } else if (cycle < 1.6) {
          val = diaLevel + (sysLevel - diaLevel) * 0.45;
        } else {
          val = diaLevel + Math.exp(-(cycle - 1.6)) * 12;
        }
      } else if (type === 'pa') {
        val = metrics.pap + Math.sin(cycle) * 10;
      } else {
        const waves = Math.sin(cycle * 3) * 2 + Math.sin(cycle * 6) * 1;
        val = physio.preload + waves;
      }

      setPoints(prev => [...prev.slice(-99), val]);
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [type, physio, metrics, height]);

  const pathData = points.map((p, i) => `${i * 4},${height - (p * (height/200))}`).join(' L ');

  return (
    <div className="relative w-full bg-black/40 rounded-lg border border-slate-800 p-2 overflow-hidden" style={{ height }}>
      <div className="absolute top-2 left-2 text-[8px] font-black uppercase text-slate-500 tracking-widest flex items-center gap-2">
         <Activity size={10} className={color.replace('stroke-', 'text-')} /> {type}
      </div>
      <svg className="w-full h-full" viewBox={`0 0 400 ${height}`}>
        <path d={`M 0,${height - points[0]} L ${pathData}`} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

const EchoViewer = ({ physio, view = 'PLAX' }: any) => {
  const [frame, setFrame] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(f => (f + 1) % 60);
    }, 16);
    return () => clearInterval(interval);
  }, []);

  const contractilityFactor = physio.contractility * 1.5;
  const pulse = Math.sin(frame * 0.2) * contractilityFactor;
  
  return (
    <div className="relative w-full aspect-video bg-black rounded-2xl border-4 border-slate-800 overflow-hidden group">
      <svg viewBox="0 0 400 225" className="w-full h-full">
        <path d="M 200,10 L 40,215 A 180,180 0 0 0 360,215 Z" fill="#0a0a0a" stroke="#1e293b" strokeWidth="1" />
        <g transform={`translate(200, 110) scale(${1 + pulse * 0.1})`}>
          <ellipse cx="-40" cy="20" rx={60 - pulse * 10} ry={40 - pulse * 5} fill="none" stroke="#475569" strokeWidth="3" opacity="0.6" />
          <path d="M -80,-20 Q -40,-40 0,-20" fill="none" stroke="#475569" strokeWidth="2" />
        </g>
        <defs>
          <linearGradient id="scanline" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <rect width="400" height="225" fill="url(#scanline)" />
      </svg>
      <div className="absolute top-4 left-4 font-mono text-[10px] text-green-500/80 uppercase">
        <div>ID: P_99382_CV</div>
        <div>FR: 52Hz</div>
        <div>DR: 60dB</div>
      </div>
      <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded border border-slate-700 font-mono text-[10px] text-slate-400 uppercase">
        VIEW: {view}
      </div>
    </div>
  );
};

// ====================================================================================
// 6. MAIN APPLICATION COMPONENT
// ====================================================================================

export default function App() {
  const [view, setView] = useState('dashboard');
  const [score, setScore] = useState(820);
  const [activeCase, setActiveCase] = useState<any>(null);
  const [showLogic, setShowLogic] = useState(false);
  const [examMode, setExamMode] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const [physio, setPhysio] = useState({
    hr: 85,
    preload: 12,
    contractility: 0.5,
    svr: 1200,
    pap: 25,
    temp: 37.1
  });

  const metrics = useMemo(() => {
    const safePreload = Math.max(1, physio.preload);
    const septalShiftPenalty = Math.max(0, (safePreload - 18) * 0.03);
    const effectiveContractility = Math.max(0.04, physio.contractility - septalShiftPenalty);
    
    const sv = (safePreload * 6.8) * effectiveContractility;
    const co = (sv * physio.hr) / 1000;
    const ci = co / 1.9;
    const map = (co * (physio.svr / 80)) + (safePreload * 0.4);
    const cpo = (map * co) / 451;
    const papi = ((physio.pap - safePreload) / safePreload);
    const myocardialWork = (map * physio.hr) / 100;

    return {
      co: co.toFixed(1),
      ci: ci.toFixed(2),
      map: Math.round(map),
      svr: Math.round(physio.svr),
      pap: Math.round(physio.pap),
      cvp: Math.round(safePreload),
      cpo: cpo.toFixed(2),
      papi: papi.toFixed(2),
      mvo2: Math.round(myocardialWork)
    };
  }, [physio]);

  useEffect(() => {
    if (examMode && activeCase) {
      const targets = activeCase.targets;
      const metMap = metrics.map >= targets.map;
      const metCi = metrics.ci >= (targets.ci || 0);
      const metPapi = targets.papi ? metrics.papi >= targets.papi : true;

      if (metMap && metCi && metPapi) {
        setScore(s => s + 250);
        alert("GOAL REACHED: You have successfully stabilized the patient. Case documented. +250 XP");
        setExamMode(null);
        setView('cert');
      }
    }
  }, [metrics, examMode, activeCase]);

  const generateCase = () => {
    const template = SIMULATION_CASES[Math.floor(Math.random() * SIMULATION_CASES.length)];
    setActiveCase(template);
    setPhysio({ 
      hr: template.initialPhysio?.hr || 90, 
      preload: template.initialPhysio?.preload || 12,
      contractility: template.initialPhysio?.contractility || 0.5,
      svr: template.initialPhysio?.svr || 1200,
      pap: template.initialPhysio?.pap || 25,
      temp: 37.2 
    });
    setExamMode(null);
    setView('simulator');
    setShowLogic(false);
  };

  const startExam = (exam: any) => {
    setActiveCase({
      ...exam,
      history: exam.prompt,
      trap: `Focus on stabilization targets: MAP > ${exam.targets.map}${exam.targets.ci ? `, CI > ${exam.targets.ci}` : ''}`
    });
    setPhysio(exam.initialPhysio);
    setExamMode({ scenarioId: exam.id, startTime: Date.now() });
    setView('simulator');
  };

  const SidebarItem = ({ icon: Icon, label, id }: any) => (
    <button
      onClick={() => setView(id)}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
        view === id ? 'bg-blue-600 text-white shadow-xl' : 'text-slate-400 hover:bg-slate-800'
      }`}
    >
      <Icon size={18} />
      <span className="font-bold text-xs tracking-widest">{label}</span>
    </button>
  );

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 overflow-hidden font-sans selection:bg-blue-500/30">
      <aside className="w-64 border-r border-slate-800 p-4 flex flex-col bg-slate-950/80 backdrop-blur-xl z-20">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-900/40">
            <Activity size={20} strokeWidth={3} />
          </div>
          <h1 className="font-black text-lg tracking-tighter italic uppercase">CVICU<span className="text-blue-500 font-black">MASTER</span></h1>
        </div>

        <nav className="space-y-1 flex-1">
          <SidebarItem icon={LayoutGrid} label="DASHBOARD" id="dashboard" />
          <SidebarItem icon={PlayCircle} label="SIMULATOR" id="simulator" />
          <SidebarItem icon={Microscope} label="ECHO LAB" id="echo" />
          <SidebarItem icon={GraduationCap} label="CERTIFICATION" id="cert" />
          <SidebarItem icon={Library} label="GUIDELINES" id="library" />
        </nav>

        <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 mt-auto">
          <div className="text-[10px] font-black text-slate-500 uppercase mb-2 tracking-widest">Mastery Status</div>
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-blue-400">XP</span>
            <span>{score}</span>
          </div>
          <div className="h-1.5 bg-slate-800 rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-blue-500 transition-all duration-1000" style={{ width: `${Math.min(100, (score/3000)*100)}%` }}></div>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto relative p-8">
        
        {view === 'dashboard' && (
          <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex justify-between items-end">
              <div className="space-y-1">
                <h2 className="text-4xl font-black tracking-tighter uppercase">Clinical Console</h2>
                <p className="text-slate-500 font-bold text-sm tracking-tight uppercase">Academic Year 2025-26 | Senior Fellow Track</p>
              </div>
              <button onClick={generateCase} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-black text-white shadow-xl shadow-blue-900/40 flex items-center gap-2 transform active:scale-95 transition-all">
                <PlusCircle size={20} /> GENERATE CASE
              </button>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, val: Math.floor(score/100), lab: "Mastery Level", col: "blue" },
                { icon: Heart, val: "94%", lab: "Stabilization Rate", col: "red" },
                { icon: Activity, val: "12", lab: "Protocol Compliance", col: "green" },
                { icon: Medal, val: "2", lab: "Active Credentials", col: "purple" }
              ].map((m, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-xl hover:border-slate-600 transition-colors">
                   <div className={`text-${m.col}-500 mb-4`}><m.icon size={28}/></div>
                   <div className="text-3xl font-black font-mono tracking-tighter">{m.val}</div>
                   <div className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">{m.lab}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-8">
               <div className="col-span-8 space-y-6">
                  <h3 className="text-xl font-black flex items-center gap-2 uppercase tracking-tighter">
                    <Target size={20} className="text-blue-500"/> Procedural Scenarios
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                      {SIMULATION_CASES.slice(0, 4).map((c, i) => (
                        <button key={i} onClick={() => { setActiveCase(c); setPhysio(c.initialPhysio || {hr: 90, preload: 12, contractility: 0.5, svr: 1200, pap: 25}); setView('simulator'); }} className="p-5 bg-slate-900 border border-slate-800 rounded-3xl text-left hover:border-blue-500 transition-all group relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 group-hover:text-blue-500 transition-opacity">
                            <FastForward size={32} />
                          </div>
                          <div className="text-[10px] font-black text-blue-500 uppercase mb-1 tracking-widest">{c.module}</div>
                          <div className="font-black text-lg mb-2 leading-tight uppercase tracking-tight">{c.title}</div>
                          <div className="flex items-center gap-3 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                             <span className="flex items-center gap-1"><Clock size={10}/> 15M</span>
                             <span className="flex items-center gap-1 text-yellow-500"><ShieldAlert size={10}/> ADHANCED</span>
                          </div>
                        </button>
                      ))}
                  </div>
               </div>
               <div className="col-span-4 bg-blue-600/5 border border-blue-500/10 rounded-3xl p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-widest mb-4">Daily Physiology</h3>
                    <div className="bg-slate-950 p-6 rounded-2xl mb-6 border border-slate-800 shadow-inner">
                       <p className="text-sm text-slate-400 font-medium italic leading-relaxed">
                         "A patient on VA-ECMO develops LV distension and pink frothy secretions. What is the immediate SCAI E management strategy?"
                       </p>
                    </div>
                  </div>
                  <button className="w-full py-4 bg-blue-600 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-blue-500 shadow-xl shadow-blue-900/40 transition-all">Start Daily Quiz</button>
               </div>
            </div>
          </div>
        )}

        {view === 'simulator' && (
          <div className="max-w-7xl mx-auto flex flex-col h-full animate-in fade-in duration-300">
            <header className="flex justify-between items-start mb-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-3">
                  <h2 className="text-3xl font-black uppercase tracking-tighter">Hemodynamic Console</h2>
                  {examMode ? (
                    <Badge color="bg-yellow-600/20 text-yellow-500 border border-yellow-500/30 animate-pulse">EXAM IN PROGRESS</Badge>
                  ) : (
                    <Badge color="bg-red-600/20 text-red-500 border border-red-500/30">SIMULATION ACTIVE</Badge>
                  )}
                </div>
                <p className="text-slate-400 text-sm font-bold leading-relaxed italic border-l-4 border-slate-800 pl-4 tracking-tight">
                  "{activeCase?.history || "Please select a scenario or generate a case."}"
                </p>
              </div>
              <div className="flex gap-2">
                 <button onClick={() => setShowLogic(!showLogic)} className="px-6 py-3 rounded-xl bg-slate-800 text-[10px] font-black uppercase tracking-widest hover:bg-slate-700 border border-slate-700 flex items-center gap-2 transition-all">
                    <Lightbulb size={16} className="text-yellow-500" /> Clinical Pearl
                 </button>
                 <button onClick={generateCase} className="px-6 py-3 rounded-xl bg-blue-600 text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 shadow-lg shadow-blue-900/40 flex items-center gap-2 transition-all">
                    Generate New <ArrowRight size={16} />
                 </button>
              </div>
            </header>

            {showLogic && (
              <div className="mb-8 p-6 bg-blue-500/5 border border-blue-500/20 rounded-3xl animate-in zoom-in-95 duration-500">
                 <div className="flex gap-6 items-center">
                    <div className="p-5 bg-blue-600/10 rounded-2xl text-blue-500 shadow-inner"><Brain size={36}/></div>
                    <div className="flex-1">
                       <h4 className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">Teaching Physiology</h4>
                       <p className="text-base font-black text-slate-200 uppercase tracking-tight">
                         {activeCase?.physiology}
                       </p>
                       <p className="text-xs text-slate-500 mt-2 italic font-bold tracking-tight">COGNITIVE TRAP: {activeCase?.trap}</p>
                    </div>
                 </div>
              </div>
            )}

            <div className="grid grid-cols-12 gap-8 flex-1">
              <div className="col-span-8 space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <MetricCard label="Arterial MAP" value={metrics.map} unit="mmHg" status={metrics.map < 65 ? 'critical' : 'normal'} description="Perfusion Pressure" />
                  <MetricCard label="Cardiac Index" value={metrics.ci} unit="L/min/m²" status={metrics.ci < 2.2 ? 'critical' : 'normal'} description="Global Delivery" />
                  <MetricCard label="Cardiac Power" value={metrics.cpo} unit="Watts" status={metrics.cpo < 0.6 ? 'critical' : 'normal'} description="Shock Severity" />
                  <MetricCard label="Myo-O2 Demand" value={metrics.mvo2} unit="U" status={metrics.mvo2 > 120 ? 'critical' : 'normal'} description="Afterload Work" />
                </div>

                <div className="bg-black/90 rounded-[40px] p-10 border-4 border-slate-900 min-h-[450px] flex flex-col justify-between shadow-2xl relative overflow-hidden">
                  <div className="absolute top-6 right-10 flex gap-6 text-[10px] font-black uppercase text-slate-600 tracking-widest">
                    <span className="flex items-center gap-2"><Activity size={12} className="text-red-500"/> ART</span>
                    <span className="flex items-center gap-2"><Activity size={12} className="text-yellow-500"/> PA</span>
                    <span className="flex items-center gap-2"><Activity size={12} className="text-blue-500"/> CVP</span>
                  </div>
                  <div className="space-y-10">
                    <WaveformVisualizer type="art" physio={physio} metrics={metrics} color="#ef4444" height={100} />
                    <WaveformVisualizer type="pa" physio={physio} metrics={metrics} color="#eab308" height={100} />
                    <WaveformVisualizer type="cvp" physio={physio} metrics={metrics} color="#3b82f6" height={100} />
                  </div>
                </div>
              </div>

              <div className="col-span-4 flex flex-col gap-4">
                <div className="bg-slate-900 border-2 border-slate-800 rounded-[32px] p-8 flex-1 flex flex-col shadow-2xl">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-10 flex items-center gap-3">
                    <Sliders size={18} className="text-blue-500"/> Clinical Controls
                  </h3>

                  <div className="space-y-12 flex-1">
                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                        <label className="text-slate-400">Preload (CVP)</label>
                        <span className="text-blue-400 font-mono text-base">{physio.preload}</span>
                      </div>
                      <input type="range" min="0" max="30" step="1" value={physio.preload} onChange={(e) => setPhysio({...physio, preload: parseInt(e.target.value)})} className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                    </div>

                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                        <label className="text-slate-400">Inotropy (EF)</label>
                        <span className="text-red-400 font-mono text-base">{Math.round(physio.contractility * 100)}%</span>
                      </div>
                      <input type="range" min="0.05" max="0.8" step="0.01" value={physio.contractility} onChange={(e) => setPhysio({...physio, contractility: parseFloat(e.target.value)})} className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-500" />
                    </div>

                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest">
                        <label className="text-slate-400">Vascular Tone (SVR)</label>
                        <span className="text-yellow-400 font-mono text-base">{physio.svr}</span>
                      </div>
                      <input type="range" min="300" max="2800" step="50" value={physio.svr} onChange={(e) => setPhysio({...physio, svr: parseInt(e.target.value)})} className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-yellow-500" />
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 gap-3">
                    <button onClick={() => setPhysio(p => ({...p, svr: p.svr + 400, contractility: p.contractility + 0.04}))} className="p-4 bg-slate-800 hover:bg-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Norepi Push</button>
                    <button onClick={() => setPhysio(p => ({...p, contractility: p.contractility + 0.15, hr: p.hr + 10}))} className="p-4 bg-slate-800 hover:bg-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Dobutamine Up</button>
                    <button onClick={() => setPhysio(p => ({...p, preload: p.preload + 5}))} className="p-4 bg-slate-800 hover:bg-slate-700 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Bolus 500cc</button>
                    <button className="p-4 bg-red-600/10 hover:bg-red-600/20 text-red-400 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">Lytics/MTP</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'cert' && (
          <div className="max-w-4xl mx-auto space-y-16 animate-in slide-in-from-right-8 duration-700">
             <header className="text-center space-y-2">
                <h2 className="text-5xl font-black uppercase tracking-tighter">Certification Engine</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Accredited Bedside Performance Tracking</p>
             </header>

             <div className="space-y-6">
                {EXAM_SCENARIOS.map((exam, i) => (
                  <div key={i} className="bg-slate-900 border-2 border-slate-800 rounded-[32px] p-10 flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl relative overflow-hidden">
                      {score >= exam.requiredXP && (
                        <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-500/10 blur-3xl group-hover:bg-blue-500/20 transition-all" />
                      )}
                      <div className="flex items-center gap-8 z-10">
                         <div className={`p-6 rounded-[24px] shadow-inner ${score >= exam.requiredXP ? 'bg-blue-600/10 text-blue-500' : 'bg-slate-800 text-slate-600'}`}>
                            <ShieldAlert size={40}/>
                         </div>
                         <div>
                            <div className="flex items-center gap-4">
                               <h3 className="text-2xl font-black uppercase tracking-tight">{exam.title}</h3>
                               <Badge color={exam.difficulty === 'Basic' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}>{exam.difficulty}</Badge>
                            </div>
                            <p className="text-slate-400 font-bold mt-2 leading-relaxed tracking-tight">{exam.prompt}</p>
                            <div className="flex gap-6 mt-6 text-[11px] font-black text-slate-500 uppercase tracking-widest">
                               <span className="flex items-center gap-2"><Clock size={14} className="text-blue-500"/> {exam.timeLimit}s</span>
                               <span className="flex items-center gap-2"><Medal size={14} className="text-yellow-500"/> +250 XP</span>
                               <span className="flex items-center gap-2"><Zap size={14} className="text-purple-500"/> Verified</span>
                            </div>
                         </div>
                      </div>
                      {score >= exam.requiredXP ? (
                        <button onClick={() => startExam(exam)} className="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-blue-900/60 transform active:scale-95 transition-all">Begin Assessment</button>
                      ) : (
                        <div className="text-right">
                           <div className="text-[10px] font-black text-slate-700 uppercase mb-2 tracking-[0.3em]">Locked Path</div>
                           <Badge color="bg-slate-800 text-slate-600 italic">Requires {exam.requiredXP} XP</Badge>
                        </div>
                      )}
                  </div>
                ))}
             </div>
          </div>
        )}

        {view === 'library' && (
          <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in duration-500">
             <header className="flex justify-between items-center">
                <div className="space-y-1">
                   <h2 className="text-3xl font-black uppercase tracking-tighter">Clinical Protocols</h2>
                   <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Evidence-Based Reference Library</p>
                </div>
                <div className="relative w-80">
                   <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                   <input 
                     type="text" 
                     placeholder="Search SCAI, ELSO, ASE..." 
                     className="w-full bg-slate-900 border-2 border-slate-800 pl-12 pr-6 py-3 rounded-2xl text-sm font-bold outline-none focus:ring-2 ring-blue-500 transition-all"
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                   />
                </div>
             </header>

             <div className="space-y-12">
                {/* QUICK PROTOCOLS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {PROTOCOL_LIBRARY.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase())).map((p, i) => (
                    <div key={i} className="bg-slate-900 border-2 border-slate-800 rounded-[32px] p-10 flex flex-col hover:border-slate-500 transition-all shadow-xl">
                        <div className="flex justify-between items-start mb-8">
                           <Badge color="bg-blue-600/10 text-blue-500 tracking-widest">{p.category}</Badge>
                           <button className="text-slate-600 hover:text-white transition-all"><Book size={24}/></button>
                        </div>
                        <h3 className="text-2xl font-black mb-6 leading-tight uppercase tracking-tight">{p.title}</h3>
                        <div className="text-slate-400 text-sm whitespace-pre-line leading-relaxed flex-1 font-bold">
                           {p.content}
                        </div>
                        <div className="mt-10 pt-6 border-t border-slate-800">
                           <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-2">Primary Literature</div>
                           <p className="text-[11px] text-slate-500 italic font-bold">{p.citations.join(', ')}</p>
                        </div>
                    </div>
                  ))}
                </div>

                {/* DEEP DIVE MODULES */}
                <div>
                   <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                     <Layers className="text-blue-500"/> Deep Dive Curriculum
                   </h3>
                   <div className="space-y-6">
                      {LEARNING_MODULES.filter(m => m.title.toLowerCase().includes(searchQuery.toLowerCase()) || m.category.toLowerCase().includes(searchQuery.toLowerCase())).map((module) => (
                        <div key={module.id} className="bg-slate-900 border border-slate-800 p-8 rounded-[32px] hover:border-blue-500 transition-all">
                           <div className="flex justify-between items-start mb-6">
                              <div>
                                 <h4 className="text-xl font-black text-white">{module.title}</h4>
                                 <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{module.subtitle}</p>
                              </div>
                              <Badge color="bg-emerald-600/10 text-emerald-500">{module.category}</Badge>
                           </div>
                           
                           {module.courseContent && (
                             <CourseReader course={module.courseContent} />
                           )}
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        )}

        {view === 'echo' && (
          <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in duration-500">
             <header className="mb-10 space-y-2">
                <h2 className="text-4xl font-black uppercase tracking-tighter">Echo Lab Console</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">ASE-Aligned Transthoracic Assessment</p>
             </header>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                   <EchoViewer physio={physio} />
                   <div className="grid grid-cols-3 gap-3">
                      {['Parasternal Long', 'Apical 4 Chamber', 'Subcostal IVC'].map((v) => (
                        <button key={v} className="p-4 bg-slate-900 border-2 border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                          {v}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="bg-slate-900/50 border-2 border-slate-800 rounded-[40px] p-10 flex flex-col shadow-2xl">
                   <h3 className="text-xl font-black mb-10 flex items-center gap-3 tracking-tighter uppercase">
                      <FileText className="text-blue-500" size={24}/> Bedside Reporting
                   </h3>
                   <div className="space-y-10 flex-1">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Global LV Function (EF)</label>
                        <select className="w-full bg-slate-950 border-2 border-slate-800 p-4 rounded-2xl text-sm font-black focus:ring-2 ring-blue-500 outline-none transition-all cursor-pointer">
                           <option>Assess Filling/Contractility...</option>
                           <option>Stage A (Normal {">"} 55%)</option>
                           <option>Mildly Impaired (45-54%)</option>
                           <option>Severely Impaired {"(< 30%)"}</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">RV Morphology (TAPSE)</label>
                        <select className="w-full bg-slate-950 border-2 border-slate-800 p-4 rounded-2xl text-sm font-black focus:ring-2 ring-blue-500 outline-none transition-all cursor-pointer">
                           <option>Assess Tricuspid Annulus...</option>
                           <option>Normal TAPSE ({">"} 17mm)</option>
                           <option>RV Dilation (RV:LV {">"} 1.0)</option>
                           <option>McConnell's Sign Present</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Cardiac Output (LVOT VTI)</label>
                        <div className="flex gap-4">
                           <input type="number" placeholder="Enter Trace (cm)" className="flex-1 bg-slate-950 border-2 border-slate-800 p-4 rounded-2xl text-sm font-black outline-none focus:ring-2 ring-blue-500" />
                           <button className="p-4 bg-blue-600 rounded-2xl text-white hover:bg-blue-500 shadow-lg shadow-blue-900/40"><Calculator size={24}/></button>
                        </div>
                      </div>
                   </div>
                   <button className="w-full py-5 bg-green-600 hover:bg-green-500 rounded-2xl font-black uppercase tracking-[0.3em] text-xs text-white shadow-2xl shadow-green-900/40 mt-12 transform active:scale-95 transition-all">
                      Finalize & Verify
                   </button>
                </div>
             </div>
          </div>
        )}

      </main>
    </div>
  );
}
