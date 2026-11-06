// The remaining saṁskāras. Loaded after data.js.
// General household practice in brief — must be reviewed by a pandit before release.
(function () {
  const K = window.KALPA;

  // ---- reusable steps ----
  const ACAMANA = {
    title: { en: "Ācamana — purify with water", hi: "आचमन — जल से शुद्धि" },
    action: { en: "Sip a little water three times from the right palm.", hi: "दाहिनी हथेली से तीन बार थोड़ा जल ग्रहण करें।" },
    mantra: {
      deva: "ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ॥",
      iast: "oṁ keśavāya namaḥ · oṁ nārāyaṇāya namaḥ · oṁ mādhavāya namaḥ",
      meaning: { en: "Salutations to Keśava, Nārāyaṇa and Mādhava.", hi: "केशव, नारायण और माधव को नमस्कार।" }
    },
    why: { en: "The standard opening purification before a rite.", hi: "किसी भी संस्कार से पहले की मानक शुद्धि।" }
  };
  const GANESHA = {
    title: { en: "Gaṇeśa pūjā", hi: "गणेश पूजन" },
    action: { en: "Light the lamp and incense. Offer flowers, roli and akṣata to Gaṇeśa.", hi: "दीपक और अगरबत्ती जलाएँ। गणेश जी को फूल, रोली और अक्षत अर्पित करें।" },
    mantra: {
      deva: "ॐ गं गणपतये नमः ॥",
      iast: "oṁ gaṁ gaṇapataye namaḥ",
      meaning: { en: "Salutations to Gaṇapati, remover of obstacles.", hi: "विघ्नहर्ता गणपति को नमस्कार।" }
    },
    why: { en: "Gaṇeśa is worshipped first so the rite proceeds without obstacles.", hi: "गणेश जी की पूजा पहले होती है ताकि कार्य निर्विघ्न हो।" },
    timer: 300
  };
  const sankalpa = (en, hi) => ({
    title: { en: "Saṅkalpa — state the intention", hi: "संकल्प — उद्देश्य बताएँ" },
    action: {
      en: `With water, rice and a flower in the right hand, state the date, place, your family and that you are performing ${en}. Release the water.`,
      hi: `दाहिने हाथ में जल, अक्षत और फूल लेकर तिथि, स्थान, अपना परिवार और ${hi} का संकल्प बोलें। जल छोड़ दें।`
    },
    why: { en: "Formally declares what is being done, by whom and why.", hi: "औपचारिक रूप से बताता है कि क्या, किसके द्वारा और क्यों किया जा रहा है।" }
  });
  const BLESS = {
    title: { en: "Āratī and blessings", hi: "आरती और आशीर्वाद" },
    action: { en: "Perform āratī. Elders give their blessings with akṣata. Share prasād with everyone.", hi: "आरती करें। बड़े अक्षत डालकर आशीर्वाद दें। सभी में प्रसाद बाँटें।" },
    why: { en: "Closes the rite with blessings.", hi: "आशीर्वाद के साथ संस्कार का समापन।" },
    timer: 180
  };
  const BASIC = [
    { en: "Gaṇeśa picture, ghee lamp, incense", hi: "गणेश जी का चित्र, घी का दीपक, अगरबत्ती" },
    { en: "Flowers, roli and akṣata (rice)", hi: "फूल, रोली और अक्षत" },
    { en: "Kalaśa with water and mango leaves", hi: "जल और आम के पत्तों सहित कलश" },
    { en: "Sweets or fruit for prasād", hi: "प्रसाद के लिए मिठाई या फल" }
  ];
  const s = (title, action, why, extra) => Object.assign({ title, action, why }, extra || {});

  const rites = [
    // 1 ------------------------------------------------------------------
    {
      id: "garbhadhana", order: 1, group: "samskara",
      name: { en: "Garbhādhāna", hi: "गर्भाधान" },
      tagline: { en: "Prayer for a child", hi: "संतान हेतु प्रार्थना" },
      when: { en: "Before a couple plans to conceive, on a day the family considers auspicious.", hi: "दंपति द्वारा संतान की योजना से पहले, परिवार द्वारा शुभ माने गए दिन।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "The first saṁskāra: a private prayer by the couple for a healthy child. Today it is usually a short pūjā at home.", hi: "पहला संस्कार: स्वस्थ संतान के लिए दंपति की निजी प्रार्थना। आजकल यह प्रायः घर पर छोटी पूजा के रूप में होता है।" },
      roles: { en: "The couple; a pandit if desired.", hi: "दंपति; इच्छा हो तो पंडित।" },
      samagri: BASIC,
      steps: [
        ACAMANA, GANESHA,
        sankalpa("the Garbhādhāna saṁskāra", "गर्भाधान संस्कार"),
        s({ en: "Prayer together", hi: "साथ में प्रार्थना" },
          { en: "Sitting side by side, the couple prays for a healthy child and a happy family. Many recite the Gāyatrī or a family prayer.", hi: "साथ बैठकर दंपति स्वस्थ संतान और सुखी परिवार की प्रार्थना करें। कई लोग गायत्री मंत्र या पारिवारिक प्रार्थना बोलते हैं।" },
          { en: "The heart of the rite is the couple's shared intention.", hi: "इस संस्कार का मूल दंपति का साझा संकल्प है।" }),
        s({ en: "Blessings of elders", hi: "बड़ों का आशीर्वाद" },
          { en: "Touch the feet of parents and elders and receive their blessings.", hi: "माता-पिता और बड़ों के चरण स्पर्श कर आशीर्वाद लें।" },
          { en: "The family's goodwill is sought for the new life to come.", hi: "आने वाले जीवन के लिए परिवार की शुभकामना ली जाती है।" })
      ]
    },
    // 2 ------------------------------------------------------------------
    {
      id: "pumsavana", order: 2, group: "samskara",
      name: { en: "Puṁsavana", hi: "पुंसवन" },
      tagline: { en: "Early pregnancy blessing", hi: "गर्भ के आरंभ का आशीर्वाद" },
      when: { en: "Traditionally in the 3rd month of pregnancy.", hi: "परंपरागत रूप से गर्भ के तीसरे महीने में।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "A prayer for the healthy growth of the baby. Historically it prayed for a son; today families pray for a healthy child of either sex.", hi: "शिशु के स्वस्थ विकास की प्रार्थना। ऐतिहासिक रूप से इसमें पुत्र की कामना होती थी; आज परिवार बेटा हो या बेटी, स्वस्थ संतान की प्रार्थना करते हैं।" },
      roles: { en: "The expectant mother and her husband; family elders.", hi: "गर्भवती माँ और पति; परिवार के बड़े।" },
      note: { en: "Some old texts describe herbal drops in the nose. Do not give the mother any herbs or remedies without her doctor's approval.", hi: "कुछ पुराने ग्रंथों में नाक में औषधि की बूँदों का वर्णन है। डॉक्टर की अनुमति के बिना माँ को कोई जड़ी-बूटी या औषधि न दें।" },
      samagri: BASIC,
      steps: [
        ACAMANA, GANESHA,
        sankalpa("the Puṁsavana saṁskāra", "पुंसवन संस्कार"),
        s({ en: "Prayer for the baby", hi: "शिशु के लिए प्रार्थना" },
          { en: "The husband places his hand gently on his wife's shoulder and both pray for the baby's health and strength.", hi: "पति धीरे से पत्नी के कंधे पर हाथ रखें और दोनों शिशु के स्वास्थ्य और बल के लिए प्रार्थना करें।" },
          { en: "Marks the couple's care for the growing child.", hi: "बढ़ते शिशु के प्रति दंपति की देखभाल का प्रतीक।" }),
        BLESS
      ]
    },
    // 3 ------------------------------------------------------------------
    {
      id: "simantonnayana", order: 3, group: "samskara",
      name: { en: "Sīmantonnayana", hi: "सीमन्तोन्नयन" },
      tagline: { en: "Hair-parting & baby shower", hi: "माँग भराई / गोद भराई" },
      when: { en: "Between the 4th and 8th month of pregnancy, most often the 7th.", hi: "गर्भ के चौथे से आठवें महीने के बीच, प्रायः सातवें महीने में।" },
      duration: { en: "1–2 hours", hi: "1–2 घंटे" },
      about: { en: "A joyful rite for the mother's wellbeing. The husband parts her hair, and women of the family bless her — the origin of today's godh bharāī.", hi: "माँ की कुशलता के लिए आनंदमय संस्कार। पति उसकी माँग सँवारते हैं और परिवार की महिलाएँ आशीर्वाद देती हैं — आज की गोद भराई का मूल।" },
      roles: { en: "The mother-to-be, her husband, women of both families.", hi: "होने वाली माँ, पति, दोनों परिवारों की महिलाएँ।" },
      samagri: BASIC.concat([
        { en: "Comb and sindūr", hi: "कंघी और सिंदूर" },
        { en: "Fruits, dry fruits and sweets for her lap (godh)", hi: "गोद भरने के लिए फल, मेवे और मिठाई" },
        { en: "New sari or clothes and bangles", hi: "नई साड़ी या वस्त्र और चूड़ियाँ" }
      ]),
      steps: [
        ACAMANA, GANESHA,
        sankalpa("the Sīmantonnayana saṁskāra", "सीमन्तोन्नयन संस्कार"),
        s({ en: "Part the hair", hi: "माँग सँवारें" },
          { en: "The husband gently parts his wife's hair from the forehead upward with a comb.", hi: "पति कंघी से पत्नी के माथे से ऊपर की ओर धीरे से माँग निकालें।" },
          { en: "The name of the rite means 'parting the hair'; it expresses care and protection.", hi: "संस्कार का नाम ही ‘माँग निकालना’ है; यह देखभाल और सुरक्षा का भाव है।" }),
        s({ en: "Fill her lap (godh bharāī)", hi: "गोद भराई" },
          { en: "Women of the family place fruits, dry fruits and sweets in her lap, give bangles and new clothes, and sing.", hi: "परिवार की महिलाएँ उसकी गोद में फल, मेवे और मिठाई रखें, चूड़ियाँ और नए वस्त्र दें, और गीत गाएँ।" },
          { en: "Wishes abundance and a happy, healthy delivery.", hi: "समृद्धि और सुखद, स्वस्थ प्रसव की कामना।" }),
        BLESS
      ]
    },
    // 4 ------------------------------------------------------------------
    {
      id: "jatakarma", order: 4, group: "samskara",
      name: { en: "Jātakarma", hi: "जातकर्म" },
      tagline: { en: "Welcoming the newborn", hi: "नवजात का स्वागत" },
      when: { en: "Traditionally right after birth; many families now do it on returning home.", hi: "परंपरागत रूप से जन्म के तुरंत बाद; कई परिवार अब घर लौटने पर करते हैं।" },
      duration: { en: "15–30 minutes", hi: "15–30 मिनट" },
      about: { en: "The father welcomes the baby into the family with a blessing whispered in the ear and a symbolic first taste.", hi: "पिता शिशु के कान में आशीर्वाद कहकर और प्रतीकात्मक पहला स्वाद देकर उसका परिवार में स्वागत करते हैं।" },
      roles: { en: "Father and mother; grandparents.", hi: "पिता और माता; दादा-दादी/नाना-नानी।" },
      note: { en: "Tradition touches honey and ghee to the baby's lips. Doctors advise against honey for babies under 1 year (risk of botulism). Touch only a clean gold ring to the lips, or ask your paediatrician.", hi: "परंपरा में शिशु के होठों पर शहद और घी लगाया जाता है। डॉक्टर 1 वर्ष से छोटे शिशु को शहद न देने की सलाह देते हैं (बोटुलिज़्म का खतरा)। केवल साफ़ सोने की अंगूठी होठों से छुआएँ, या बाल-चिकित्सक से पूछें।" },
      samagri: [
        { en: "Clean gold ring", hi: "साफ़ सोने की अंगूठी" },
        { en: "Ghee lamp", hi: "घी का दीपक" },
        { en: "Akṣata and flowers", hi: "अक्षत और फूल" }
      ],
      steps: [
        ACAMANA,
        s({ en: "Whisper a blessing", hi: "कान में आशीर्वाद" },
          { en: "Holding the baby, the father whispers a blessing for wisdom and long life into the baby's right ear.", hi: "शिशु को गोद में लेकर पिता उसके दाहिने कान में बुद्धि और दीर्घायु का आशीर्वाद कहें।" },
          { en: "The child's first words heard are a blessing.", hi: "शिशु के सुने पहले शब्द आशीर्वाद हों।" },
          { mantra: { deva: "ॐ मेधां ते देवः सविता मेधां देवी सरस्वती ॥", iast: "oṁ medhāṁ te devaḥ savitā medhāṁ devī sarasvatī", meaning: { en: "May Savitṛ and Sarasvatī grant you wisdom.", hi: "सविता देव और देवी सरस्वती तुम्हें बुद्धि दें।" } } }),
        s({ en: "Symbolic first taste", hi: "प्रतीकात्मक पहला स्वाद" },
          { en: "Gently touch the clean gold ring to the baby's lips. Do not give honey.", hi: "साफ़ सोने की अंगूठी धीरे से शिशु के होठों से छुआएँ। शहद न दें।" },
          { en: "A symbolic wish for a bright, healthy life, kept safe for a newborn.", hi: "उज्ज्वल, स्वस्थ जीवन की प्रतीकात्मक कामना — नवजात के लिए सुरक्षित रूप में।" }),
        s({ en: "Blessings", hi: "आशीर्वाद" },
          { en: "Grandparents and elders bless the baby and the mother.", hi: "दादा-दादी/नाना-नानी और बड़े शिशु और माँ को आशीर्वाद दें।" },
          { en: "The family welcomes its newest member.", hi: "परिवार अपने नए सदस्य का स्वागत करता है।" })
      ]
    },
    // 6 ------------------------------------------------------------------
    {
      id: "nishkramana", order: 6, group: "samskara",
      name: { en: "Niṣkramaṇa", hi: "निष्क्रमण" },
      tagline: { en: "First outing", hi: "पहली बार बाहर जाना" },
      when: { en: "Usually in the 4th month after birth.", hi: "प्रायः जन्म के चौथे महीने में।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "The baby is taken outside the home for the first time — often to a temple — and shown the sky.", hi: "शिशु को पहली बार घर से बाहर ले जाया जाता है — प्रायः मंदिर — और आकाश दिखाया जाता है।" },
      roles: { en: "Parents and baby.", hi: "माता-पिता और शिशु।" },
      note: { en: "Never point the baby toward the sun directly; early morning or evening light is enough.", hi: "शिशु को कभी सीधे सूर्य की ओर न करें; सुबह या शाम का प्रकाश पर्याप्त है।" },
      samagri: BASIC.slice(0, 2).concat([{ en: "New clothes for the baby", hi: "शिशु के लिए नए वस्त्र" }, { en: "Offering for the temple", hi: "मंदिर के लिए भेंट" }]),
      steps: [
        ACAMANA, GANESHA,
        sankalpa("the Niṣkramaṇa saṁskāra", "निष्क्रमण संस्कार"),
        s({ en: "Step outside", hi: "बाहर निकलें" },
          { en: "Dressed in new clothes, the baby is carried out of the house by the father or mother, early in the morning or at dusk.", hi: "नए वस्त्र पहनाकर पिता या माँ शिशु को सुबह जल्दी या संध्या समय घर से बाहर ले जाएँ।" },
          { en: "Marks the baby's entry into the wider world.", hi: "शिशु के बाहरी संसार में प्रवेश का प्रतीक।" }),
        s({ en: "Show the sky; visit a temple", hi: "आकाश दर्शन; मंदिर दर्शन" },
          { en: "Gently show the baby the morning sky or evening moon, then visit a temple for darśan.", hi: "शिशु को धीरे से सुबह का आकाश या शाम का चंद्रमा दिखाएँ, फिर मंदिर में दर्शन करें।" },
          { en: "The child is introduced to nature and the divine.", hi: "शिशु का प्रकृति और ईश्वर से परिचय।" }),
        BLESS
      ]
    },
    // 9 ------------------------------------------------------------------
    {
      id: "karnavedha", order: 9, group: "samskara",
      name: { en: "Karṇavedha", hi: "कर्णवेध" },
      tagline: { en: "Ear piercing", hi: "कान छिदवाना" },
      when: { en: "Traditionally in the 1st, 3rd or 5th year; family custom varies.", hi: "परंपरागत रूप से पहले, तीसरे या पाँचवें वर्ष में; पारिवारिक रीति भिन्न होती है।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "The child's ears are pierced after a short pūjā, a rite shared by boys and girls in many traditions.", hi: "छोटी पूजा के बाद शिशु के कान छेदे जाते हैं; कई परंपराओं में यह लड़कों और लड़कियों दोनों का संस्कार है।" },
      roles: { en: "Parents, child, and a trained piercer or doctor.", hi: "माता-पिता, शिशु, और प्रशिक्षित व्यक्ति या डॉक्टर।" },
      note: { en: "Use a doctor or trained piercer with sterile equipment, and follow their aftercare advice.", hi: "स्टेराइल उपकरण वाले डॉक्टर या प्रशिक्षित व्यक्ति से ही छिदवाएँ और उनकी देखभाल-सलाह मानें।" },
      samagri: BASIC.concat([{ en: "Small gold or silver studs", hi: "सोने या चाँदी की छोटी बालियाँ" }]),
      steps: [
        ACAMANA, GANESHA,
        sankalpa("the Karṇavedha saṁskāra", "कर्णवेध संस्कार"),
        s({ en: "Seat the child", hi: "शिशु को बिठाएँ" },
          { en: "The child sits on a parent's lap facing east. Keep them calm with a toy.", hi: "शिशु माता या पिता की गोद में पूर्व की ओर मुख करके बैठे। खिलौने से शांत रखें।" },
          { en: "A calm child makes the piercing safer.", hi: "शांत शिशु के साथ छेदना सुरक्षित रहता है।" }),
        s({ en: "Pierce the ears", hi: "कान छेदें" },
          { en: "The piercer pierces the right ear first, then the left, and inserts the studs.", hi: "छेदने वाला पहले दाहिना कान, फिर बायाँ छेदे और बालियाँ पहना दे।" },
          { en: "Traditionally the right ear comes first.", hi: "परंपरागत रूप से पहले दाहिना कान।" }),
        BLESS
      ]
    },
    // 10 -----------------------------------------------------------------
    {
      id: "vidyarambha", order: 10, group: "samskara",
      name: { en: "Vidyārambha", hi: "विद्यारम्भ" },
      tagline: { en: "Beginning of learning", hi: "विद्या का आरंभ" },
      when: { en: "Around age 5; often on Vasant Pañcamī or Vijayādaśamī.", hi: "लगभग 5 वर्ष की आयु में; प्रायः वसंत पंचमी या विजयादशमी पर।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "The child writes their first letters after worshipping Sarasvatī, goddess of learning.", hi: "विद्या की देवी सरस्वती की पूजा के बाद शिशु अपने पहले अक्षर लिखता है।" },
      roles: { en: "Child, parents, and a teacher or elder as guide.", hi: "बालक, माता-पिता, और मार्गदर्शक के रूप में शिक्षक या बड़े।" },
      samagri: BASIC.concat([
        { en: "Picture of Sarasvatī", hi: "सरस्वती जी का चित्र" },
        { en: "Plate of rice for writing", hi: "लिखने के लिए चावल की थाली" },
        { en: "New book and pen", hi: "नई पुस्तक और कलम" }
      ]),
      steps: [
        ACAMANA, GANESHA,
        s({ en: "Sarasvatī pūjā", hi: "सरस्वती पूजन" },
          { en: "Offer flowers and akṣata to Sarasvatī. Place the book and pen before her.", hi: "सरस्वती जी को फूल और अक्षत अर्पित करें। पुस्तक और कलम उनके सामने रखें।" },
          { en: "Learning begins with respect for knowledge.", hi: "विद्या का आरंभ ज्ञान के प्रति सम्मान से।" },
          { mantra: { deva: "ॐ ऐं सरस्वत्यै नमः ॥", iast: "oṁ aiṁ sarasvatyai namaḥ", meaning: { en: "Salutations to Sarasvatī.", hi: "सरस्वती को नमस्कार।" } } }),
        s({ en: "First letters in rice", hi: "चावल पर पहले अक्षर" },
          { en: "Guiding the child's finger, the teacher or elder helps write ॐ and the first letters (अ, आ / A, B) in the rice.", hi: "शिशु की उँगली पकड़कर शिक्षक या बड़े चावल पर ॐ और पहले अक्षर (अ, आ) लिखवाएँ।" },
          { en: "The child's first act of writing is guided by a teacher.", hi: "शिशु का पहला लेखन गुरु के मार्गदर्शन में।" }),
        BLESS
      ]
    },
    // 11 -----------------------------------------------------------------
    {
      id: "upanayana", order: 11, group: "samskara",
      name: { en: "Upanayana", hi: "उपनयन" },
      tagline: { en: "Sacred-thread initiation", hi: "यज्ञोपवीत संस्कार" },
      when: { en: "Traditionally between ages 8 and 16; today often just before a wedding.", hi: "परंपरागत रूप से 8 से 16 वर्ष के बीच; आजकल प्रायः विवाह से पहले।" },
      duration: { en: "3–4 hours, usually led by a priest", hi: "3–4 घंटे, प्रायः पुरोहित द्वारा" },
      about: { en: "The student is initiated into Vedic study, receives the sacred thread (yajñopavīta) and is taught the Gāyatrī mantra. Eligibility was historically restricted by community and gender; practice today varies by family.", hi: "विद्यार्थी को वैदिक अध्ययन में दीक्षित किया जाता है, यज्ञोपवीत पहनाया जाता है और गायत्री मंत्र सिखाया जाता है। ऐतिहासिक रूप से इसकी पात्रता समुदाय और लिंग से सीमित थी; आज यह परिवार के अनुसार भिन्न है।" },
      roles: { en: "The student (baṭu), father, a priest as teacher (ācārya), mother.", hi: "बटु (विद्यार्थी), पिता, आचार्य के रूप में पुरोहित, माता।" },
      samagri: BASIC.concat([
        { en: "Yajñopavīta (sacred thread)", hi: "यज्ञोपवीत (जनेऊ)" },
        { en: "Havan kuṇḍa, wood, ghee and sāmagrī", hi: "हवन कुंड, लकड़ी, घी और हवन सामग्री" },
        { en: "Plain clothes and a staff (daṇḍa)", hi: "सादे वस्त्र और दंड" }
      ]),
      steps: [
        ACAMANA, GANESHA,
        sankalpa("the Upanayana saṁskāra", "उपनयन संस्कार"),
        s({ en: "Havan", hi: "हवन" },
          { en: "The priest lights the sacred fire and offers ghee and sāmagrī with Vedic mantras.", hi: "पुरोहित पवित्र अग्नि प्रज्वलित कर वैदिक मंत्रों के साथ घी और सामग्री की आहुति दें।" },
          { en: "Fire is the witness of the initiation.", hi: "अग्नि दीक्षा की साक्षी है।" }, { timer: 1200 }),
        s({ en: "Receive the sacred thread", hi: "यज्ञोपवीत धारण" },
          { en: "The student puts on the yajñopavīta over the left shoulder as the priest recites.", hi: "पुरोहित के मंत्र पढ़ते हुए विद्यार्थी बाएँ कंधे पर यज्ञोपवीत धारण करे।" },
          { en: "The thread marks the student's commitment to learning and discipline.", hi: "यज्ञोपवीत विद्या और अनुशासन के प्रति प्रतिबद्धता का चिह्न है।" }),
        s({ en: "Gāyatrī upadeśa", hi: "गायत्री उपदेश" },
          { en: "Under a cloth, the teacher (or father) teaches the student the Gāyatrī mantra, phrase by phrase.", hi: "कपड़े के नीचे आचार्य (या पिता) विद्यार्थी को गायत्री मंत्र पद-पद करके सिखाएँ।" },
          { en: "The central teaching of the rite, passed from teacher to student.", hi: "संस्कार की मुख्य शिक्षा, गुरु से शिष्य तक।" },
          { mantra: { deva: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥", iast: "oṁ bhūr bhuvaḥ svaḥ · tat savitur vareṇyaṁ bhargo devasya dhīmahi · dhiyo yo naḥ pracodayāt", meaning: { en: "We meditate on the radiant light of Savitṛ; may it inspire our minds.", hi: "हम सविता देव के श्रेष्ठ तेज का ध्यान करते हैं; वह हमारी बुद्धि को प्रेरित करे।" } } }),
        s({ en: "First bhikṣā", hi: "पहली भिक्षा" },
          { en: "The student asks his mother, then other women of the family, for alms (bhikṣā), which they give with blessings.", hi: "विद्यार्थी पहले माँ से, फिर परिवार की अन्य महिलाओं से भिक्षा माँगे, जो आशीर्वाद सहित देती हैं।" },
          { en: "Recalls the humility of a student's life.", hi: "विद्यार्थी जीवन की विनम्रता का स्मरण।" }),
        BLESS
      ]
    },
    // 12 -----------------------------------------------------------------
    {
      id: "vedarambha", order: 12, group: "samskara",
      name: { en: "Vedārambha", hi: "वेदारम्भ" },
      tagline: { en: "Beginning Vedic study", hi: "वेद-अध्ययन का आरंभ" },
      when: { en: "Soon after Upanayana — often on the same day today.", hi: "उपनयन के तुरंत बाद — आजकल प्रायः उसी दिन।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "The student begins study of the Veda of the family's tradition with a teacher.", hi: "विद्यार्थी गुरु के साथ अपनी पारिवारिक शाखा के वेद का अध्ययन आरंभ करता है।" },
      roles: { en: "Student and teacher (ācārya).", hi: "विद्यार्थी और आचार्य।" },
      samagri: BASIC.concat([{ en: "A text of the family's Veda", hi: "पारिवारिक वेद का ग्रंथ" }]),
      steps: [
        ACAMANA, GANESHA,
        s({ en: "Honour the teacher", hi: "गुरु का सम्मान" },
          { en: "The student bows to the teacher and offers flowers and dakṣiṇā.", hi: "विद्यार्थी गुरु को प्रणाम कर फूल और दक्षिणा अर्पित करे।" },
          { en: "Study begins with respect for the teacher.", hi: "अध्ययन गुरु के सम्मान से आरंभ होता है।" }),
        s({ en: "First lesson", hi: "पहला पाठ" },
          { en: "The teacher recites the opening verses of the Veda, and the student repeats them.", hi: "गुरु वेद के आरंभिक मंत्र बोलें और विद्यार्थी दोहराए।" },
          { en: "Vedic learning is traditionally oral: hear, repeat, remember.", hi: "वैदिक शिक्षा परंपरागत रूप से मौखिक है: सुनो, दोहराओ, याद रखो।" }),
        BLESS
      ]
    },
    // 13 -----------------------------------------------------------------
    {
      id: "keshanta", order: 13, group: "samskara",
      name: { en: "Keśānta", hi: "केशान्त" },
      tagline: { en: "First shave", hi: "पहला क्षौर" },
      when: { en: "Traditionally around age 16. Rarely performed separately today.", hi: "परंपरागत रूप से लगभग 16 वर्ष की आयु में। आजकल अलग से कम होता है।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "Marks coming of age with the first ceremonial shave and a gift to the teacher.", hi: "पहले विधिपूर्वक क्षौर और गुरु को भेंट के साथ युवावस्था का संस्कार।" },
      roles: { en: "The young man, father, a barber; the teacher.", hi: "युवक, पिता, नाई; गुरु।" },
      samagri: BASIC.concat([{ en: "Gift (go-dāna or dakṣiṇā) for the teacher", hi: "गुरु के लिए भेंट (गोदान या दक्षिणा)" }]),
      steps: [
        ACAMANA, GANESHA,
        sankalpa("the Keśānta saṁskāra", "केशान्त संस्कार"),
        s({ en: "Ceremonial shave", hi: "विधिपूर्वक क्षौर" },
          { en: "The young man's first shave is done by the barber after the father symbolically begins it.", hi: "पिता द्वारा प्रतीकात्मक आरंभ के बाद नाई युवक का पहला क्षौर करे।" },
          { en: "Marks the passage into adulthood.", hi: "वयस्कता में प्रवेश का प्रतीक।" }),
        s({ en: "Gift to the teacher", hi: "गुरु को भेंट" },
          { en: "Offer a gift or dakṣiṇā to the teacher in gratitude.", hi: "कृतज्ञता में गुरु को भेंट या दक्षिणा दें।" },
          { en: "Traditionally called go-dāna, the gift of a cow.", hi: "परंपरागत रूप से इसे गोदान कहा जाता है।" }),
        BLESS
      ]
    },
    // 14 -----------------------------------------------------------------
    {
      id: "samavartana", order: 14, group: "samskara",
      name: { en: "Samāvartana", hi: "समावर्तन" },
      tagline: { en: "Completing studies", hi: "अध्ययन की पूर्णता" },
      when: { en: "At the end of studies; today often combined with wedding rites.", hi: "अध्ययन के अंत में; आजकल प्रायः विवाह की विधियों के साथ।" },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: { en: "The 'return home' — the student completes his studies, takes a ritual bath and receives the teacher's final advice. A forerunner of graduation.", hi: "‘घर वापसी’ — विद्यार्थी अध्ययन पूर्ण कर विधिवत स्नान करता है और गुरु की अंतिम शिक्षा पाता है। दीक्षांत समारोह का पूर्वरूप।" },
      roles: { en: "Graduate and teacher; family.", hi: "स्नातक और गुरु; परिवार।" },
      samagri: BASIC.concat([{ en: "New clothes", hi: "नए वस्त्र" }, { en: "Dakṣiṇā for the teacher", hi: "गुरु के लिए दक्षिणा" }]),
      steps: [
        ACAMANA, GANESHA,
        s({ en: "Ritual bath", hi: "विधिवत स्नान" },
          { en: "The graduate bathes and puts on new clothes.", hi: "स्नातक स्नान कर नए वस्त्र पहने।" },
          { en: "That is why a graduate was called a snātaka, 'one who has bathed'.", hi: "इसीलिए स्नातक का अर्थ है ‘जिसने स्नान किया’।" }),
        s({ en: "Teacher's final advice", hi: "गुरु का अंतिम उपदेश" },
          { en: "The teacher gives parting advice, such as 'speak the truth, follow dharma, never neglect study'.", hi: "गुरु विदाई का उपदेश दें, जैसे ‘सत्यं वद, धर्मं चर, स्वाध्यायान्मा प्रमदः’।" },
          { en: "Echoes the famous convocation address of the Taittirīya Upaniṣad.", hi: "तैत्तिरीय उपनिषद के प्रसिद्ध दीक्षांत उपदेश की प्रतिध्वनि।" },
          { mantra: { deva: "सत्यं वद । धर्मं चर ।", iast: "satyaṁ vada · dharmaṁ cara", meaning: { en: "Speak the truth. Walk in dharma.", hi: "सत्य बोलो। धर्म का आचरण करो।" } } }),
        s({ en: "Dakṣiṇā and return home", hi: "दक्षिणा और घर वापसी" },
          { en: "Offer dakṣiṇā to the teacher, take blessings and return to the family.", hi: "गुरु को दक्षिणा दें, आशीर्वाद लें और परिवार में लौटें।" },
          { en: "Completes the student stage of life.", hi: "ब्रह्मचर्य आश्रम की पूर्णता।" })
      ]
    },
    // 15 -----------------------------------------------------------------
    {
      id: "vivaha", order: 15, group: "samskara",
      name: { en: "Vivāha", hi: "विवाह" },
      tagline: { en: "Wedding", hi: "विवाह संस्कार" },
      when: { en: "On a muhūrta fixed with the family priest.", hi: "पारिवारिक पुरोहित द्वारा निश्चित मुहूर्त पर।" },
      duration: { en: "2–4 hours for the core rites, led by a priest", hi: "मुख्य विधियों के लिए 2–4 घंटे, पुरोहित द्वारा" },
      about: { en: "The most elaborate saṁskāra. This guide covers the core sequence so families know what is happening; regional customs add many more rituals.", hi: "सबसे विस्तृत संस्कार। यह मार्गदर्शिका मुख्य क्रम बताती है ताकि परिवार समझ सके कि क्या हो रहा है; क्षेत्रीय रीतियाँ कई और विधियाँ जोड़ती हैं।" },
      roles: { en: "Bride and groom, both families, the priest.", hi: "वर-वधू, दोनों परिवार, पुरोहित।" },
      samagri: BASIC.concat([
        { en: "Havan kuṇḍa, wood, ghee, sāmagrī", hi: "हवन कुंड, लकड़ी, घी, सामग्री" },
        { en: "Varmālā (garlands) ×2", hi: "वरमाला ×2" },
        { en: "Maṅgalsūtra and sindūr", hi: "मंगलसूत्र और सिंदूर" },
        { en: "Puffed rice (lājā) for offerings", hi: "आहुति के लिए लाजा (खील)" },
        { en: "Cloth for the gaṭhbandhan knot", hi: "गठबंधन के लिए वस्त्र" }
      ]),
      steps: [
        GANESHA,
        s({ en: "Jaimālā — exchange of garlands", hi: "जयमाला" },
          { en: "Bride and groom exchange garlands, accepting each other.", hi: "वर-वधू एक-दूसरे को माला पहनाकर स्वीकार करते हैं।" },
          { en: "Public acceptance of each other.", hi: "एक-दूसरे की सार्वजनिक स्वीकृति।" }),
        s({ en: "Kanyādāna", hi: "कन्यादान" },
          { en: "The bride's parents place her hand in the groom's hand with water and blessings.", hi: "वधू के माता-पिता जल और आशीर्वाद के साथ उसका हाथ वर के हाथ में देते हैं।" },
          { en: "The parents entrust their daughter to the new family.", hi: "माता-पिता अपनी बेटी नए परिवार को सौंपते हैं।" }),
        s({ en: "Pāṇigrahaṇa & gaṭhbandhan", hi: "पाणिग्रहण और गठबंधन" },
          { en: "The groom takes the bride's hand; their garments are tied together in a knot.", hi: "वर वधू का हाथ थामता है; दोनों के वस्त्रों में गाँठ बाँधी जाती है।" },
          { en: "A lifelong bond, made visible.", hi: "जीवन भर के बंधन का प्रत्यक्ष प्रतीक।" }),
        s({ en: "Agni and lājā homa", hi: "अग्नि और लाजा होम" },
          { en: "The couple offers puffed rice into the sacred fire, the bride's brother helping.", hi: "दंपति पवित्र अग्नि में खील की आहुति देते हैं, वधू का भाई सहायता करता है।" },
          { en: "Agni is the divine witness to the marriage.", hi: "अग्नि विवाह के दिव्य साक्षी हैं।" }),
        s({ en: "Saptapadī / pheras", hi: "सप्तपदी / फेरे" },
          { en: "The couple takes seven steps (or circles the fire), making a vow at each: food, strength, prosperity, happiness, children, long life, and lifelong friendship.", hi: "दंपति सात पग चलते हैं (या अग्नि के फेरे लेते हैं), हर पग पर एक वचन: अन्न, बल, समृद्धि, सुख, संतान, दीर्घायु और आजीवन मित्रता।" },
          { en: "The marriage is complete with the seventh step.", hi: "सातवें पग के साथ विवाह पूर्ण होता है।" }),
        s({ en: "Sindūr and maṅgalsūtra", hi: "सिंदूर दान और मंगलसूत्र" },
          { en: "The groom applies sindūr to the bride's hair parting and ties the maṅgalsūtra.", hi: "वर वधू की माँग में सिंदूर भरता है और मंगलसूत्र पहनाता है।" },
          { en: "Marks of marriage in many North Indian traditions.", hi: "कई उत्तर भारतीय परंपराओं में विवाह के चिह्न।" }),
        BLESS
      ]
    },
    // 16 -----------------------------------------------------------------
    {
      id: "antyeshti", order: 16, group: "samskara", sensitive: true,
      name: { en: "Antyeṣṭi", hi: "अन्त्येष्टि" },
      tagline: { en: "Last rites", hi: "अंतिम संस्कार" },
      when: { en: "Traditionally within a day of death. Your priest and funeral home will guide timing.", hi: "परंपरागत रूप से मृत्यु के एक दिन के भीतर। समय के लिए पुरोहित और अंतिम-संस्कार गृह मार्गदर्शन करेंगे।" },
      duration: { en: "Cremation day, followed by a 10–13 day observance", hi: "दाह-संस्कार का दिन, फिर 10–13 दिन का पालन" },
      about: { en: "The final saṁskāra. It is almost always led by a priest; this overview is here to help the family understand what will happen. Customs vary widely — follow your priest.", hi: "अंतिम संस्कार। यह लगभग हमेशा पुरोहित द्वारा कराया जाता है; यह विवरण परिवार को समझने में सहायता के लिए है। रीतियाँ बहुत भिन्न हैं — पुरोहित का पालन करें।" },
      roles: { en: "The chief mourner (often the eldest son, or any close family member), family, priest.", hi: "मुख्य कर्ता (प्रायः ज्येष्ठ पुत्र, या कोई निकट परिजन), परिवार, पुरोहित।" },
      note: { en: "Outside India, most crematoriums can accommodate Hindu rites. Ask the funeral home early.", hi: "भारत के बाहर, अधिकांश शवदाह गृह हिंदू विधियों की व्यवस्था कर सकते हैं। अंतिम-संस्कार गृह से जल्दी पूछें।" },
      samagri: [
        { en: "Contact the family priest and funeral home", hi: "पारिवारिक पुरोहित और अंतिम-संस्कार गृह से संपर्क" },
        { en: "Gaṅgājal and tulsī leaves", hi: "गंगाजल और तुलसी पत्र" },
        { en: "White cloth", hi: "सफ़ेद वस्त्र" },
        { en: "Flowers and garland", hi: "फूल और माला" },
        { en: "Ghee lamp", hi: "घी का दीपक" }
      ],
      steps: [
        s({ en: "Call the priest", hi: "पुरोहित को बुलाएँ" },
          { en: "Inform the family priest and the funeral home. They will guide each step.", hi: "पारिवारिक पुरोहित और अंतिम-संस्कार गृह को सूचित करें। वे हर चरण में मार्गदर्शन करेंगे।" },
          { en: "You do not need to know everything. Help is available.", hi: "आपको सब कुछ जानने की आवश्यकता नहीं। सहायता उपलब्ध है।" }),
        s({ en: "Prepare and pray", hi: "तैयारी और प्रार्थना" },
          { en: "The body is bathed, dressed in clean cloth, and gaṅgājal and a tulsī leaf are placed on the lips. A lamp is lit near the head, and family members offer prayers.", hi: "पार्थिव शरीर को स्नान कराकर स्वच्छ वस्त्र पहनाए जाते हैं, होठों पर गंगाजल और तुलसी पत्र रखा जाता है। सिर के पास दीपक जलाया जाता है और परिजन प्रार्थना करते हैं।" },
          { en: "Purity and remembrance at the moment of farewell.", hi: "विदाई के क्षण में पवित्रता और स्मरण।" },
          { mantra: { deva: "ॐ नमो भगवते वासुदेवाय ॥", iast: "oṁ namo bhagavate vāsudevāya", meaning: { en: "Salutations to the Lord Vāsudeva.", hi: "भगवान वासुदेव को नमस्कार।" } } }),
        s({ en: "Cremation (dāha)", hi: "दाह संस्कार" },
          { en: "At the cremation ground or crematorium, the chief mourner performs the rites guided by the priest and lights the fire (mukhāgni).", hi: "श्मशान या शवदाह गृह में, मुख्य कर्ता पुरोहित के मार्गदर्शन में विधि करके मुखाग्नि देता है।" },
          { en: "The body is returned to the elements.", hi: "शरीर पंचतत्व में विलीन होता है।" }),
        s({ en: "Asthi and the days after", hi: "अस्थि और आगे के दिन" },
          { en: "Ashes are collected for immersion in a river. The family observes a mourning period of about 10–13 days, ending with the śrāddha and a gathering (terahvīṁ).", hi: "अस्थियाँ नदी में विसर्जन के लिए एकत्र की जाती हैं। परिवार लगभग 10–13 दिन शोक का पालन करता है, जो श्राद्ध और तेरहवीं से पूर्ण होता है।" },
          { en: "The family honours the departed and is gradually supported back into daily life.", hi: "परिवार दिवंगत का सम्मान करता है और धीरे-धीरे सामान्य जीवन में लौटता है।" })
      ]
    }
  ];

  // Give existing rites their place in the life sequence, then merge and sort.
  const orderOf = { namakarana: 5, annaprashana: 7, mundan: 8, sandhya: 99 };
  K.rites.forEach((r) => (r.order = orderOf[r.id] || 50));
  K.rites = K.rites.concat(rites).sort((a, b) => a.order - b.order);
  K.upcoming = [];
})();
