/* ==========================================================================
   JewelSoft & Shyam Software Brochure Script Helper
   - Print trigger
   - Multi-language i18n system (English / Hindi / Gujarati)
   ========================================================================== */

/* -----------------------------------------------------------------------
   TRANSLATIONS DICTIONARY
   ----------------------------------------------------------------------- */
const translations = {
    en: {
        /* Controls */
        back_home: 'Back to Homepage',
        brochure_preview: 'Printable A4 Brochure Preview',
        print_save: 'Print / Save PDF',

        /* Shared */
        brand_tagline: 'Improve your better life...',
        proposal_title: 'SYSTEM PROPOSAL',
        proposal_subtitle: 'Product Specification Sheet',
        footer_proposal: 'Shyam Software System Proposal',
        footer_p1: 'Page 1 of 2',
        footer_p2: 'Page 2 of 2',
        tbl_module: 'Module',
        p1_tbl_cap: 'Features & Capability',
        tbl_desc: 'Description',

        /* PAGE 1 - JewelSoft ERP */
        p1_tagline: 'Easy Jewelry Management & ERP Solution',
        p1_features_title: 'Core System Features',
        p1_f1: 'Billing or Inventory Software',
        p1_f2: 'Use for Wholesale, Retailers & Manufacturers',
        p1_f3: 'Weight Machine Software Integrating',
        p1_f4: 'Complete Advance Barcode Solution',
        p1_f5: 'Stock & Production Maintenance with Barcode',
        p1_f6: 'Job work / Labour Management System',
        p1_f7: 'Customization built as per customer requirements',
        p1_why_title: 'Why Choose JewelSoft?',
        p1_w1: 'Advance Stock Management and Account System',
        p1_w2: 'Smart Billing with Barcode System',
        p1_w3: 'One Screen Software Solution',
        p1_w4: 'Complete Barcode Solution',
        p1_w5: 'Fine & Old Metal Sale & Purchase',
        p1_w6: 'Easy Rs to Fine and Fine to Rs Conversion',
        p1_w7: 'Images Upload on Items, Party, etc.',
        p1_w8: 'Advance Job work & Production Planning',
        p1_w9: 'Individual Stores and Department Management',
        p1_w10: 'Outward & Inward Full controlling with Production',
        p1_w11: 'Easy MIS Reports and Products Analysis',
        p1_w12: 'Very Easy for Operating software',
        p1_w13: 'Easy Report Generation',
        p1_w14: 'Export Any Report & Print in Excel, Word, PDF, etc.',
        p1_w15: 'Direct Mail or SMS system to Party.',
        p1_modules_title: 'System Modules',
        mod_billing: 'Billing',
        mod_billing_desc: 'Quick checkout, GST invoice printing, and B2B wholesale billing.',
        mod_barcode: 'Barcode',
        mod_barcode_desc: 'Print and scan custom tags for individual ornaments and trays.',
        mod_finance: 'Finance',
        mod_finance_desc: 'Dual ledger reporting for cash/bank and fine metal accounts.',
        mod_fineinout: 'Fine In-Out',
        mod_fineinout_desc: 'Track karigar balances, gold melting, and labor charges.',
        mod_stock: 'Stock/Reports',
        mod_stock_desc: 'Tray-wise physical audit controls and real-time MIS reports.',
        mod_crm: 'CRM',
        mod_crm_desc: 'Manage customer schemes, credit limits, and promotional SMS.',

        /* PAGE 2 - Weight Machine Software */
        p2_badge: 'Weight Machine Software',
        p2_tagline: 'Weighing Scale Integration & Barcoding',
        p2_title: 'Weight Machine Software',
        p2_features_title: 'Barcode & Label Printing',
        p2_f1: 'Barcode/Label Printing Software',
        p2_f2: 'Weighing Balance Serial Port Data Integration',
        p2_f3: 'Complete Advance Barcode Solution',
        p2_f4: 'Stock & Production Maintenance with Barcode',
        p2_f5: 'Custom labels as per client hardware models',
        p2_why_title: 'Why Weight Scale Software?',
        p2_w1: 'Direct scale connectivity via USB/COM port to prevent human error',
        p2_w2: 'Fast barcode label printing for necklaces, rings, bangles, etc.',
        p2_w3: 'Real-time weight logs synced directly with the inventory database',
        p2_w4: 'Flexible label size support (multiple thermal sticker models)',
        p2_w5: 'Extremely simple interfaces for non-technical retail users',
        p2_industries_title: 'Target Industries',
        ind1_label: 'Jewelry Businesses:',
        ind1_desc: 'Silver, Gold, & Platinum Retailers/Wholesalers',
        ind2_label: 'Manufacturing:',
        ind2_desc: 'Wire packaging, textiles, and auto parts labeling',
        ind3_label: 'General Packing:',
        ind3_desc: 'Custom packing and label printing for any business sector',
        ind4_label: 'Retail Stores:',
        ind4_desc: 'Medicines, optical products, and polymer commodities',
        p2_modules_title: 'Integration Modules',
        wmod_scale: 'Scale Interface',
        wmod_scale_desc: 'Parse serial weights (COM/USB) instantly into active billing screens.',
        wmod_label: 'Label Design',
        wmod_label_desc: 'Configure thermal layout margins, fonts, fields, and barcodes.',
        wmod_stock: 'Stock Sync',
        wmod_stock_desc: 'Instantly update counter logs on each barcode sticker print.',
        wmod_print: 'Multi-Size Print',
        wmod_print_desc: 'Compatible with standard tag printers (Zebra, TSC, Honeywell).',
    },

    hi: {
        /* Controls */
        back_home: '← होमपेज पर वापस',
        brochure_preview: 'A4 ब्रोशर प्रीव्यू',
        print_save: '🖨️ प्रिंट / PDF सेव करें',

        /* Shared */
        brand_tagline: 'आपका जीवन बेहतर बनाएं...',
        proposal_title: 'सिस्टम प्रस्ताव',
        proposal_subtitle: 'उत्पाद विशिष्टता पत्रक',
        footer_proposal: 'श्याम सॉफ्टवेयर सिस्टम प्रस्ताव',
        footer_p1: 'पृष्ठ 1 / 2',
        footer_p2: 'पृष्ठ 2 / 2',
        tbl_module: 'मॉड्यूल',
        p1_tbl_cap: 'विशेषताएँ और क्षमता',
        tbl_desc: 'विवरण',

        /* PAGE 1 */
        p1_tagline: 'आसान ज्वेलरी प्रबंधन और ERP समाधान',
        p1_features_title: 'मुख्य सिस्टम विशेषताएँ',
        p1_f1: 'बिलिंग या इन्वेंट्री सॉफ्टवेयर',
        p1_f2: 'थोक, खुदरा और निर्माताओं के लिए उपयोगी',
        p1_f3: 'वजन मशीन सॉफ्टवेयर एकीकरण',
        p1_f4: 'उन्नत बारकोड समाधान',
        p1_f5: 'बारकोड के साथ स्टॉक और उत्पादन रखरखाव',
        p1_f6: 'जॉब वर्क / लेबर प्रबंधन प्रणाली',
        p1_f7: 'ग्राहक की आवश्यकता अनुसार कस्टमाइज़ेशन',
        p1_why_title: 'JewelSoft क्यों चुनें?',
        p1_w1: 'उन्नत स्टॉक प्रबंधन और अकाउंट सिस्टम',
        p1_w2: 'बारकोड सिस्टम के साथ स्मार्ट बिलिंग',
        p1_w3: 'एक स्क्रीन सॉफ्टवेयर समाधान',
        p1_w4: 'संपूर्ण बारकोड समाधान',
        p1_w5: 'सोना-चांदी की खरीद और बिक्री',
        p1_w6: 'रुपये से फाइन और फाइन से रुपये रूपांतरण',
        p1_w7: 'आइटम और पार्टी पर इमेज अपलोड',
        p1_w8: 'उन्नत जॉब वर्क और उत्पादन योजना',
        p1_w9: 'व्यक्तिगत स्टोर और विभाग प्रबंधन',
        p1_w10: 'उत्पादन के साथ आवक-जावक नियंत्रण',
        p1_w11: 'आसान MIS रिपोर्ट और उत्पाद विश्लेषण',
        p1_w12: 'संचालन में बहुत आसान',
        p1_w13: 'आसान रिपोर्ट निर्माण',
        p1_w14: 'Excel, Word, PDF में रिपोर्ट निर्यात और प्रिंट',
        p1_w15: 'पार्टी को सीधे मेल या SMS सिस्टम',
        p1_modules_title: 'सिस्टम मॉड्यूल',
        mod_billing: 'बिलिंग',
        mod_billing_desc: 'त्वरित चेकआउट, GST चालान प्रिंटिंग, और B2B थोक बिलिंग।',
        mod_barcode: 'बारकोड',
        mod_barcode_desc: 'आभूषणों और ट्रे के लिए कस्टम टैग प्रिंट और स्कैन।',
        mod_finance: 'वित्त',
        mod_finance_desc: 'नकद/बैंक और सोने के खातों के लिए दोहरी खाता बही।',
        mod_fineinout: 'फाइन इन-आउट',
        mod_fineinout_desc: 'कारीगर बकाया, सोना पिघलाना और मजदूरी शुल्क।',
        mod_stock: 'स्टॉक/रिपोर्ट',
        mod_stock_desc: 'ट्रे-वार भौतिक ऑडिट नियंत्रण और रियल-टाइम MIS।',
        mod_crm: 'CRM',
        mod_crm_desc: 'ग्राहक योजनाएं, क्रेडिट सीमा और प्रचार SMS प्रबंधन।',

        /* PAGE 2 */
        p2_badge: 'Weight Machine Software',
        p2_tagline: 'Weighing Scale Integration & Barcoding',
        p2_title: 'Weight Machine Software',
        p2_features_title: 'बारकोड और लेबल प्रिंटिंग',
        p2_f1: 'बारकोड / लेबल प्रिंटिंग सॉफ्टवेयर',
        p2_f2: 'वजन तराजू सीरियल पोर्ट डेटा एकीकरण',
        p2_f3: 'उन्नत बारकोड समाधान',
        p2_f4: 'बारकोड के साथ स्टॉक और उत्पादन रखरखाव',
        p2_f5: 'ग्राहक हार्डवेयर मॉडल के अनुसार कस्टम लेबल',
        p2_why_title: 'वजन तराजू सॉफ्टवेयर क्यों?',
        p2_w1: 'मानवीय त्रुटि रोकने के लिए USB/COM पोर्ट कनेक्टिविटी',
        p2_w2: 'हार, अंगूठी, चूड़ी के लिए तेज बारकोड लेबल प्रिंटिंग',
        p2_w3: 'रियल-टाइम वजन लॉग सीधे इन्वेंट्री से सिंक',
        p2_w4: 'कई थर्मल स्टिकर मॉडल के लिए लचीला लेबल आकार',
        p2_w5: 'गैर-तकनीकी खुदरा उपयोगकर्ताओं के लिए अति सरल',
        p2_industries_title: 'लक्षित उद्योग',
        ind1_label: 'ज्वेलरी व्यवसाय:',
        ind1_desc: 'सोना, चांदी और प्लेटिनम खुदरा/थोक विक्रेता',
        ind2_label: 'निर्माण:',
        ind2_desc: 'तार पैकेजिंग, वस्त्र और ऑटो पार्ट्स लेबलिंग',
        ind3_label: 'सामान्य पैकिंग:',
        ind3_desc: 'किसी भी व्यवसाय के लिए कस्टम पैकिंग और लेबल प्रिंटिंग',
        ind4_label: 'खुदरा दुकानें:',
        ind4_desc: 'दवाइयाँ, ऑप्टिकल उत्पाद और पॉलिमर वस्तुएँ',
        p2_modules_title: 'एकीकरण मॉड्यूल',
        wmod_scale: 'स्केल इंटरफ़ेस',
        wmod_scale_desc: 'बिलिंग स्क्रीन में COM/USB वजन तुरंत पार्स करें।',
        wmod_label: 'लेबल डिज़ाइन',
        wmod_label_desc: 'थर्मल लेआउट मार्जिन, फ़ॉन्ट और बारकोड कॉन्फ़िगर करें।',
        wmod_stock: 'स्टॉक सिंक',
        wmod_stock_desc: 'प्रत्येक बारकोड स्टिकर प्रिंट पर काउंटर लॉग अपडेट।',
        wmod_print: 'मल्टी-साइज प्रिंट',
        wmod_print_desc: 'Zebra, TSC, Honeywell प्रिंटर के साथ संगत।',
    },

    gu: {
        /* Controls */
        back_home: '← હોમપેજ પર પાછા',
        brochure_preview: 'A4 બ્રોશર પ્રીવ્યૂ',
        print_save: '🖨️ પ્રિન્ટ / PDF સેવ કરો',

        /* Shared */
        brand_tagline: 'તમારું જીવન સારું બનાવો...',
        proposal_title: 'સિસ્ટમ પ્રસ્તાવ',
        proposal_subtitle: 'ઉત્પાદ વિશિષ્ટ પત્રક',
        footer_proposal: 'શ્યામ સૉફ્ટવેર સિસ્ટમ પ્રસ્તાવ',
        footer_p1: 'પૃષ્ઠ 1 / 2',
        footer_p2: 'પૃષ્ઠ 2 / 2',
        tbl_module: 'મૉડ્યૂલ',
        p1_tbl_cap: 'વિશેષતા અને ક્ષમતા',
        tbl_desc: 'વિગત',

        /* PAGE 1 */
        p1_tagline: 'સરળ ઘરેણાં વ્યવસ્થાપન અને ERP સોલ્યુશન',
        p1_features_title: 'મુખ્ય સિસ્ટમ વિશેષતા',
        p1_f1: 'બિલિંગ અથવા ઇન્વેન્ટ્રી સૉફ્ટવેર',
        p1_f2: 'જથ્થાબંધ, છૂટક અને ઉત્પાદકો માટે ઉપયોગ',
        p1_f3: 'વજન મશીન સૉફ્ટવેર ઇન્ટિગ્રેશન',
        p1_f4: 'સંપૂર્ણ અત્યાધુનિક બારકોડ સોલ્યુશન',
        p1_f5: 'બારકોડ સાથે સ્ટૉક અને ઉત્પાદન જાળવણી',
        p1_f6: 'જૉબ વર્ક / મજૂર વ્યવસ્થાપન સિસ્ટમ',
        p1_f7: 'ગ્રાહકની જરૂરિયાત મુજબ કસ્ટમ સૉફ્ટવેર',
        p1_why_title: 'JewelSoft શા માટે પસંદ કરો?',
        p1_w1: 'ઉન્નત સ્ટૉક વ્યવસ્થાપન અને ખાતા સિસ્ટમ',
        p1_w2: 'બારકોડ સિસ્ટમ સાથે સ્માર્ટ બિલિંગ',
        p1_w3: 'એક સ્ક્રીન સૉફ્ટવેર સોલ્યુશન',
        p1_w4: 'સંપૂર્ણ બારકોડ સોલ્યુશન',
        p1_w5: 'જૂની-નવી ધાતુ ખરીદ-વેચ',
        p1_w6: 'રૂ. થી ફાઇન અને ફાઇન થી રૂ. કન્વર્ઝન',
        p1_w7: 'આઇટમ, પાર્ટી પર ઇમેજ અપલોડ',
        p1_w8: 'ઉન્નત જૉબ વર્ક અને ઉત્પાદન આયોજન',
        p1_w9: 'વ્યક્તિગત સ્ટોર અને ડિપાર્ટમેન્ટ વ્યવસ્થાપન',
        p1_w10: 'ઉત્પાદન સાથે ઇનવર્ડ-આઉટવર્ડ નિયંત્રણ',
        p1_w11: 'સરળ MIS રિપોર્ટ અને ઉત્પાદ વિશ્લેષણ',
        p1_w12: 'સૉફ્ટવેર ઑપરેટ કરવા ખૂબ સરળ',
        p1_w13: 'સરળ રિપોર્ટ નિર્માણ',
        p1_w14: 'Excel, Word, PDF માં રિપોર્ટ નિકાસ અને પ્રિન્ટ',
        p1_w15: 'પાર્ટીને સીધો મેઇલ અથવા SMS સિસ્ટમ',
        p1_modules_title: 'સિસ્ટમ મૉડ્યૂલ',
        mod_billing: 'બિલિંગ',
        mod_billing_desc: 'ઝડપી ચેકઔટ, GST ઇન્વૉઇસ પ્રિન્ટ અને B2B જથ્થાબંધ બિલ.',
        mod_barcode: 'બારકોડ',
        mod_barcode_desc: 'ઘરેણાં અને ટ્રે માટે કસ્ટમ ટૅગ પ્રિન્ટ અને સ્કૅન.',
        mod_finance: 'ફાઇનાન્સ',
        mod_finance_desc: 'રોકડ/બૅન્ક અને ઝવેરાત ખાતા માટે ડ્યૂઅલ ચોપડો.',
        mod_fineinout: 'ફાઇન ઇન-આઉટ',
        mod_fineinout_desc: 'કારીગર બૅલેન્સ, સોનું ઓગાળવું અને મહેનતાણું.',
        mod_stock: 'સ્ટૉક/રિપોર્ટ',
        mod_stock_desc: 'ટ્રે-વાઇઝ ઑડિટ અને રિઅલ-ટાઇમ MIS રિપોર્ટ.',
        mod_crm: 'CRM',
        mod_crm_desc: 'ગ્રાહક યોજના, ક્રેડિટ મર્યાદા અને SMS વ્યવસ્થાપન.',

        /* PAGE 2 */
        p2_badge: 'Weight Machine Software',
        p2_tagline: 'Weighing Scale Integration & Barcoding',
        p2_title: 'Weight Machine Software',
        p2_features_title: 'બારકોડ અને લેબલ પ્રિન્ટિંગ',
        p2_f1: 'બારકોડ/લેબલ પ્રિન્ટિંગ સૉફ્ટવેર',
        p2_f2: 'ત્રાજવા સિરિઅલ પૉર્ટ ડેટા ઇન્ટિગ્રેશન',
        p2_f3: 'સંપૂર્ણ અત્યાધુનિક બારકોડ સોલ્યુશન',
        p2_f4: 'બારકોડ સાથે સ્ટૉક અને ઉત્પાદન જાળવણી',
        p2_f5: 'ગ્રાહક હાર્ડવેર અનુસાર કસ્ટમ લેબલ',
        p2_why_title: 'વજન ત્રાજવા સૉફ્ટવેર શા માટે?',
        p2_w1: 'ભૂલ નિવારવા USB/COM પૉર્ટ દ્વારા ત્રાજવા કનેક્ટ',
        p2_w2: 'હાર, વીંટી, બંગડી માટે ઝડપી બારકોડ લેબલ',
        p2_w3: 'ઇન્વેન્ટ્રી સાથે સ્વ-ચાલિત વજન લૉગ સિંક',
        p2_w4: 'અનેક થર્મલ સ્ટિકર મૉડલ માટે લવચીક લેબલ',
        p2_w5: 'ઑટો-ટેક ઉપયોગ ન જાણતા માટે અતિ સરળ',
        p2_industries_title: 'લક્ષ્ય ઉદ્યોગ',
        ind1_label: 'ઝવેરાત વ્યવસાય:',
        ind1_desc: 'સોનું, ચાંદી અને પ્લૅટિનમ છૂટક/જથ્થાબંધ વિક્રેતા',
        ind2_label: 'ઉત્પાદન:',
        ind2_desc: 'તાર પૅકેજિંગ, કાપડ અને ઑટો પૅન્ટ્સ લેબલ',
        ind3_label: 'સામાન્ય પૅકિંગ:',
        ind3_desc: 'કોઈ પણ વ્યવસાય માટે કસ્ટમ પૅકિંગ અને લેબલ',
        ind4_label: 'છૂટક દુકાનો:',
        ind4_desc: 'દવા, ઑપ્ટિકલ ઉત્પાદ અને પૉલિમર ચીજો',
        p2_modules_title: 'ઇન્ટિગ્રેશન મૉડ્યૂલ',
        wmod_scale: 'સ્કેલ ઇન્ટરફેસ',
        wmod_scale_desc: 'COM/USB દ્વારા વજન તરત બિલિંગ સ્ક્રીનમાં.',
        wmod_label: 'લેબલ ડિઝાઇન',
        wmod_label_desc: 'થર્મલ લેઆઉટ, ફૉન્ટ, ફીલ્ડ અને બારકોડ ગોઠવો.',
        wmod_stock: 'સ્ટૉક સિંક',
        wmod_stock_desc: 'દરેક સ્ટિકર પ્રિન્ટ પર કાઉન્ટર લૉગ ઑટો-અપ્ડેટ.',
        wmod_print: 'મલ્ટી-સાઇઝ પ્રિન્ટ',
        wmod_print_desc: 'Zebra, TSC, Honeywell પ્રિન્ટર સાથે સુસંગત.',
    }
};

/* -----------------------------------------------------------------------
   ACTIVE LANGUAGE STATE
   ----------------------------------------------------------------------- */
let currentLang = localStorage.getItem('brochure_lang') || 'en';

/* -----------------------------------------------------------------------
   APPLY TRANSLATIONS TO ALL [data-i18n] ELEMENTS
   ----------------------------------------------------------------------- */
function applyTranslations(lang) {
    const dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            // Use textContent to safely set text (no HTML injection risk)
            // This correctly handles elements with only text children
            el.textContent = dict[key];
        }
    });

    /* Update <html lang> attribute */
    document.documentElement.lang = lang === 'hi' ? 'hi' : lang === 'gu' ? 'gu' : 'en';

    /* Apply locale-specific body font family */
    if (lang === 'hi') {
        document.body.style.fontFamily = "'Noto Sans Devanagari', 'Outfit', sans-serif";
    } else if (lang === 'gu') {
        document.body.style.fontFamily = "'Noto Sans Gujarati', 'Outfit', sans-serif";
    } else {
        document.body.style.fontFamily = "'Plus Jakarta Sans', 'Outfit', sans-serif";
    }

    /* Update active button state */
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('brochure_lang', lang);
    currentLang = lang;
}

/* -----------------------------------------------------------------------
   DOCUMENT READY
   ----------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

    /* --- Apply stored / default language on load --- */
    applyTranslations(currentLang);

    /* --- Language switcher button listeners --- */
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            applyTranslations(lang);
        });
    });

    /* --- Print trigger --- */
    const btnTriggerPrint = document.getElementById('btn-trigger-print');
    if (btnTriggerPrint) {
        btnTriggerPrint.addEventListener('click', () => window.print());
    }

    /* --- Auto-print via query param ?print=true --- */
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('print') === 'true') {
        setTimeout(() => window.print(), 500);
    }

    /* --- Auto-language from query param ?lang=hi|gu|en --- */
    const langParam = urlParams.get('lang');
    if (langParam && translations[langParam]) {
        applyTranslations(langParam);
    }
});
