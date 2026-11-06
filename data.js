// Content for Kalpa: Vedic Rituals (prototype).
// Every text field is { en, hi }. Procedures are general North Indian household practice
// and must be reviewed by a qualified pandit before public release.

window.KALPA = {
  vedangas: [
    { en: "Śikṣā — phonetics", hi: "शिक्षा — उच्चारण" },
    { en: "Chandas — metre", hi: "छन्द — छन्द-शास्त्र" },
    { en: "Vyākaraṇa — grammar", hi: "व्याकरण" },
    { en: "Nirukta — etymology", hi: "निरुक्त — शब्द-व्युत्पत्ति" },
    { en: "Jyotiṣa — timekeeping", hi: "ज्योतिष — काल-गणना" },
    { en: "Kalpa — procedure", hi: "कल्प — विधि", highlight: true }
  ],

  branches: [
    {
      id: "grihya", name: { en: "Gṛhya Sūtras", hi: "गृह्य सूत्र" },
      title: { en: "Household rites", hi: "गृहस्थ संस्कार" },
      body: {
        en: "Rules for rites performed at home by the householder: the saṁskāras that mark a life, from naming a child to marriage and the last rites.",
        hi: "घर में गृहस्थ द्वारा किए जाने वाले कर्मों के नियम: जीवन के संस्कार — नामकरण से विवाह और अंत्येष्टि तक।"
      },
      module: { en: "Saṁskāra Guide", hi: "संस्कार मार्गदर्शिका" }, link: "#/samskaras"
    },
    {
      id: "dharma", name: { en: "Dharma Sūtras", hi: "धर्म सूत्र" },
      title: { en: "Conduct and daily duty", hi: "आचार और दैनिक कर्तव्य" },
      body: {
        en: "Duties, conduct and daily observances, such as morning and evening sandhyā.",
        hi: "कर्तव्य, आचार और दैनिक कर्म, जैसे प्रातः और सायं संध्या।"
      },
      module: { en: "Nitya Karma", hi: "नित्य कर्म" }, link: "#/rite/sandhya"
    },
    {
      id: "shrauta", name: { en: "Śrauta Sūtras", hi: "श्रौत सूत्र" },
      title: { en: "The great sacrifices", hi: "महान यज्ञ" },
      body: {
        en: "Procedures for the large Vedic yajñas performed with three sacred fires and teams of priests, such as Agnihotra and the Soma rites.",
        hi: "तीन पवित्र अग्नियों और पुरोहितों के दल द्वारा किए जाने वाले बड़े वैदिक यज्ञों की विधि, जैसे अग्निहोत्र और सोम याग।"
      },
      module: { en: "Yajña Explorer (coming soon)", hi: "यज्ञ परिचय (शीघ्र)" }, link: null
    },
    {
      id: "shulba", name: { en: "Śulba Sūtras", hi: "शुल्ब सूत्र" },
      title: { en: "Altar geometry", hi: "वेदी ज्यामिति" },
      body: {
        en: "Rope-and-peg rules for building fire altars of exact shapes and areas, including one of the earliest statements of the theorem now called Pythagorean.",
        hi: "रस्सी और खूँटी से सटीक आकार और क्षेत्रफल की वेदियाँ बनाने के नियम — जिनमें आज 'पाइथागोरस प्रमेय' कहलाने वाले सिद्धांत का प्राचीनतम कथन मिलता है।"
      },
      module: { en: "Geometry Lab", hi: "ज्यामिति प्रयोगशाला" }, link: "#/lab"
    }
  ],

  rites: [
    // ---------------------------------------------------------------- NAMAKARANA
    {
      id: "namakarana", group: "samskara", free: true,
      name: { en: "Nāmakaraṇa", hi: "नामकरण" },
      tagline: { en: "Naming ceremony", hi: "नाम रखने का संस्कार" },
      when: {
        en: "Traditionally on the 11th or 12th day after birth; many families choose a later auspicious day.",
        hi: "परंपरागत रूप से जन्म के 11वें या 12वें दिन; कई परिवार बाद का कोई शुभ दिन चुनते हैं।"
      },
      duration: { en: "About 1–1½ hours", hi: "लगभग 1–1½ घंटे" },
      about: {
        en: "The child is formally given a name in the presence of family and the deities. It is one of the sixteen saṁskāras described in the Gṛhya Sūtras.",
        hi: "परिवार और देवताओं की उपस्थिति में शिशु का औपचारिक नाम रखा जाता है। यह गृह्य सूत्रों में वर्णित सोलह संस्कारों में से एक है।"
      },
      roles: {
        en: "Parents (often the father leads), the baby, family elders; a pandit if available.",
        hi: "माता-पिता (प्रायः पिता मुख्य), शिशु, परिवार के बड़े; उपलब्ध हो तो पंडित।"
      },
      samagri: [
        { en: "Small idol or picture of Gaṇeśa", hi: "गणेश जी की छोटी मूर्ति या चित्र" },
        { en: "Kalaśa (pot) with water, mango leaves and a coconut", hi: "जल, आम के पत्ते और नारियल सहित कलश" },
        { en: "Bronze or steel plate (thālī)", hi: "काँसे या स्टील की थाली" },
        { en: "Uncooked rice (akṣata)", hi: "अक्षत (कच्चे चावल)" },
        { en: "Roli / kumkum and haldī", hi: "रोली / कुमकुम और हल्दी" },
        { en: "Ghee lamp (dīpa) and matches", hi: "घी का दीपक और माचिस" },
        { en: "Incense (agarbattī)", hi: "अगरबत्ती" },
        { en: "Flowers and a garland", hi: "फूल और माला" },
        { en: "Sweets or fruit for prasād", hi: "प्रसाद के लिए मिठाई या फल" },
        { en: "New clothes for the baby", hi: "शिशु के लिए नए वस्त्र" },
        { en: "Paper with the chosen name written on it", hi: "चुने गए नाम वाला कागज़" }
      ],
      steps: [
        {
          title: { en: "Prepare the space", hi: "स्थान तैयार करें" },
          action: {
            en: "Clean the puja area. Set the Gaṇeśa picture, the kalaśa and the lamp on a clean cloth. Bathe the baby and dress them in new clothes.",
            hi: "पूजा स्थान साफ़ करें। स्वच्छ कपड़े पर गणेश जी का चित्र, कलश और दीपक रखें। शिशु को स्नान कराकर नए वस्त्र पहनाएँ।"
          },
          why: {
            en: "A clean, prepared space marks the start of a sacred act and keeps everything at hand.",
            hi: "स्वच्छ और तैयार स्थान पवित्र कार्य के आरंभ का संकेत है और सब सामग्री हाथ में रहती है।"
          }
        },
        {
          title: { en: "Ācamana — purify with water", hi: "आचमन — जल से शुद्धि" },
          action: {
            en: "Sip a little water three times from the right palm, reciting one name of Viṣṇu each time.",
            hi: "दाहिनी हथेली से तीन बार थोड़ा जल ग्रहण करें, हर बार विष्णु का एक नाम लेते हुए।"
          },
          mantra: {
            deva: "ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ॥",
            iast: "oṁ keśavāya namaḥ · oṁ nārāyaṇāya namaḥ · oṁ mādhavāya namaḥ",
            meaning: { en: "Salutations to Keśava, Nārāyaṇa and Mādhava.", hi: "केशव, नारायण और माधव को नमस्कार।" }
          },
          why: {
            en: "Ācamana is the standard opening purification before almost every Vedic rite.",
            hi: "आचमन लगभग हर वैदिक कर्म से पहले की जाने वाली मानक शुद्धि है।"
          }
        },
        {
          title: { en: "Light the lamp and worship Gaṇeśa", hi: "दीप जलाएँ और गणेश पूजन करें" },
          action: {
            en: "Light the lamp and incense. Offer flowers, roli and akṣata to Gaṇeśa.",
            hi: "दीपक और अगरबत्ती जलाएँ। गणेश जी को फूल, रोली और अक्षत अर्पित करें।"
          },
          mantra: {
            deva: "ॐ गं गणपतये नमः ॥",
            iast: "oṁ gaṁ gaṇapataye namaḥ",
            meaning: { en: "Salutations to Gaṇapati, remover of obstacles.", hi: "विघ्नहर्ता गणपति को नमस्कार।" }
          },
          why: {
            en: "Gaṇeśa is worshipped first so the rite proceeds without obstacles.",
            hi: "गणेश जी की पूजा सबसे पहले होती है ताकि कार्य निर्विघ्न संपन्न हो।"
          },
          timer: 300
        },
        {
          title: { en: "Saṅkalpa — state the intention", hi: "संकल्प — उद्देश्य बताएँ" },
          action: {
            en: "Hold water, rice and a flower in the right hand. State the date, place, your family name and that you are performing the naming of your child. Then release the water onto the ground or a plate.",
            hi: "दाहिने हाथ में जल, अक्षत और फूल लें। तिथि, स्थान, अपना गोत्र/परिवार और यह कहें कि आप अपनी संतान का नामकरण कर रहे हैं। फिर जल भूमि या थाली पर छोड़ दें।"
          },
          why: {
            en: "The saṅkalpa formally declares what is being done, by whom and why. Tithi can supply the day's tithi for this.",
            hi: "संकल्प औपचारिक रूप से बताता है कि क्या, किसके द्वारा और क्यों किया जा रहा है। आज की तिथि ‘तिथि’ ऐप से मिल सकती है।"
          }
        },
        {
          title: { en: "Write the name on rice", hi: "चावल पर नाम लिखें" },
          action: {
            en: "Spread rice evenly in the thālī. The father (or an elder) writes the chosen name in the rice with a gold ring or a fresh twig.",
            hi: "थाली में चावल समान रूप से फैलाएँ। पिता (या कोई बड़ा) सोने की अंगूठी या ताज़ी टहनी से चावल पर चुना गया नाम लिखें।"
          },
          why: {
            en: "Writing on rice, a symbol of abundance, is a widespread household custom that makes the name visible to all present.",
            hi: "समृद्धि के प्रतीक चावल पर नाम लिखना एक प्रचलित पारिवारिक रीति है, जिससे सभी उपस्थित लोग नाम देख सकें।"
          }
        },
        {
          title: { en: "Whisper the name", hi: "कान में नाम कहें" },
          action: {
            en: "Holding the baby, the father whispers the name into the child's right ear, usually beginning with Om.",
            hi: "शिशु को गोद में लेकर पिता उसके दाहिने कान में नाम कहते हैं, प्रायः ‘ॐ’ से आरंभ करके।"
          },
          mantra: {
            deva: "ॐ … (नाम) …",
            iast: "oṁ … (name) …",
            meaning: { en: "The child is told their name first, before it is announced.", hi: "घोषणा से पहले शिशु को सबसे पहले उसका नाम बताया जाता है।" }
          },
          why: {
            en: "The child is the first to 'hear' their own name, a personal and tender part of the rite.",
            hi: "शिशु सबसे पहले अपना नाम ‘सुनता’ है — यह संस्कार का आत्मीय और कोमल भाग है।"
          }
        },
        {
          title: { en: "Announce the name", hi: "नाम की घोषणा करें" },
          action: {
            en: "Announce the name aloud to everyone present. Family members repeat it and call the baby by name.",
            hi: "सभी उपस्थित लोगों के सामने नाम ज़ोर से बोलें। परिवारजन नाम दोहराएँ और शिशु को नाम से पुकारें।"
          },
          why: {
            en: "The family and community now recognise the child by this name.",
            hi: "अब परिवार और समाज शिशु को इसी नाम से पहचानते हैं।"
          }
        },
        {
          title: { en: "Āratī", hi: "आरती" },
          action: {
            en: "Perform āratī with the ghee lamp before Gaṇeśa, then gently wave it before the baby.",
            hi: "गणेश जी के सामने घी के दीपक से आरती करें, फिर धीरे से शिशु के सामने घुमाएँ।"
          },
          why: {
            en: "Āratī closes the worship and invokes protection for the child.",
            hi: "आरती पूजा का समापन करती है और शिशु की रक्षा की कामना करती है।"
          },
          timer: 180
        },
        {
          title: { en: "Blessings and prasād", hi: "आशीर्वाद और प्रसाद" },
          action: {
            en: "Elders bless the child with akṣata and a hand on the head. Distribute prasād to everyone.",
            hi: "बड़े अक्षत डालकर और सिर पर हाथ रखकर शिशु को आशीर्वाद दें। सभी में प्रसाद बाँटें।"
          },
          why: {
            en: "The rite ends with the blessings of elders and sharing of prasād.",
            hi: "संस्कार बड़ों के आशीर्वाद और प्रसाद वितरण से संपन्न होता है।"
          }
        }
      ]
    },

    // ---------------------------------------------------------------- ANNAPRASHANA
    {
      id: "annaprashana", group: "samskara", free: true,
      name: { en: "Annaprāśana", hi: "अन्नप्राशन" },
      tagline: { en: "First solid food", hi: "पहला अन्न" },
      when: {
        en: "Commonly in the 6th month for boys and the 5th or 7th month for girls; family custom varies. Confirm with your paediatrician that the baby is ready for solids.",
        hi: "प्रायः लड़कों के लिए छठे महीने और लड़कियों के लिए पाँचवें या सातवें महीने में; पारिवारिक रीति अलग हो सकती है। शिशु ठोस आहार के लिए तैयार है, यह अपने बाल-चिकित्सक से पक्का करें।"
      },
      duration: { en: "About 1 hour", hi: "लगभग 1 घंटा" },
      about: {
        en: "The baby is given their first taste of cooked grain, usually sweet rice kheer, marking the move beyond milk.",
        hi: "शिशु को पहली बार पका हुआ अन्न, प्रायः मीठी खीर, खिलाई जाती है — दूध से आगे के आहार की शुरुआत।"
      },
      roles: {
        en: "Parents and baby; in many families the father or maternal uncle (māmā) feeds the first bite.",
        hi: "माता-पिता और शिशु; कई परिवारों में पिता या मामा पहला कौर खिलाते हैं।"
      },
      samagri: [
        { en: "Small idol or picture of Gaṇeśa", hi: "गणेश जी की छोटी मूर्ति या चित्र" },
        { en: "Ghee lamp, incense, flowers", hi: "घी का दीपक, अगरबत्ती, फूल" },
        { en: "Roli and akṣata", hi: "रोली और अक्षत" },
        { en: "Kheer (rice cooked in milk, lightly sweetened, smooth)", hi: "खीर (दूध में पके चावल, हल्की मीठी, मुलायम)" },
        { en: "Silver or steel bowl and spoon for the baby", hi: "शिशु के लिए चाँदी या स्टील की कटोरी और चम्मच" },
        { en: "A few tulsī leaves", hi: "कुछ तुलसी के पत्ते" },
        { en: "Objects for the choice ritual: book, pen, coin, clay, food", hi: "चयन रीति के लिए वस्तुएँ: पुस्तक, कलम, सिक्का, मिट्टी, भोजन" },
        { en: "New clothes for the baby", hi: "शिशु के लिए नए वस्त्र" }
      ],
      steps: [
        {
          title: { en: "Prepare the kheer and space", hi: "खीर और स्थान तैयार करें" },
          action: {
            en: "Cook a small amount of smooth, lightly sweetened kheer and let it cool. Set up the puja area and dress the baby in new clothes.",
            hi: "थोड़ी मुलायम, हल्की मीठी खीर बनाकर ठंडी होने दें। पूजा स्थान तैयार करें और शिशु को नए वस्त्र पहनाएँ।"
          },
          why: {
            en: "The first food is offered to the deity before it is given to the child, so it is prepared fresh and with care.",
            hi: "पहला अन्न शिशु को देने से पहले देवता को अर्पित होता है, इसलिए इसे ताज़ा और सावधानी से बनाया जाता है।"
          }
        },
        {
          title: { en: "Ācamana", hi: "आचमन" },
          action: { en: "Purify by sipping water three times.", hi: "तीन बार जल ग्रहण कर शुद्धि करें।" },
          mantra: {
            deva: "ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ॥",
            iast: "oṁ keśavāya namaḥ · oṁ nārāyaṇāya namaḥ · oṁ mādhavāya namaḥ",
            meaning: { en: "Salutations to Keśava, Nārāyaṇa and Mādhava.", hi: "केशव, नारायण और माधव को नमस्कार।" }
          },
          why: { en: "Standard opening purification.", hi: "मानक प्रारंभिक शुद्धि।" }
        },
        {
          title: { en: "Gaṇeśa pūjā", hi: "गणेश पूजन" },
          action: { en: "Light the lamp and incense; offer flowers, roli and akṣata.", hi: "दीपक और अगरबत्ती जलाएँ; फूल, रोली और अक्षत अर्पित करें।" },
          mantra: {
            deva: "ॐ गं गणपतये नमः ॥",
            iast: "oṁ gaṁ gaṇapataye namaḥ",
            meaning: { en: "Salutations to Gaṇapati.", hi: "गणपति को नमस्कार।" }
          },
          why: { en: "Removes obstacles before the rite.", hi: "संस्कार से पहले विघ्न दूर करने के लिए।" },
          timer: 300
        },
        {
          title: { en: "Saṅkalpa", hi: "संकल्प" },
          action: {
            en: "With water, rice and a flower in the right hand, state the date, place, family and the intention to perform your child's Annaprāśana. Release the water.",
            hi: "दाहिने हाथ में जल, अक्षत और फूल लेकर तिथि, स्थान, परिवार और अपनी संतान के अन्नप्राशन का संकल्प बोलें। जल छोड़ दें।"
          },
          why: { en: "Formally declares the rite.", hi: "संस्कार की औपचारिक घोषणा।" }
        },
        {
          title: { en: "Offer the kheer (naivedya)", hi: "खीर का भोग लगाएँ" },
          action: {
            en: "Place a tulsī leaf on the kheer and offer it to the deity first.",
            hi: "खीर पर तुलसी का पत्ता रखें और पहले भगवान को भोग लगाएँ।"
          },
          why: {
            en: "Food offered to the deity becomes prasād, so the child's first meal is a blessed one.",
            hi: "भगवान को अर्पित अन्न प्रसाद बन जाता है, इसलिए शिशु का पहला भोजन आशीर्वाद-युक्त होता है।"
          }
        },
        {
          title: { en: "First feeding", hi: "पहला कौर" },
          action: {
            en: "The father or māmā gives the baby a tiny amount of kheer with a spoon or fingertip, usually three small tastes. Go slowly; this is a taste, not a meal.",
            hi: "पिता या मामा चम्मच या उँगली से शिशु को बहुत थोड़ी खीर चखाएँ, प्रायः तीन बार। धीरे-धीरे दें; यह केवल स्वाद है, भोजन नहीं।"
          },
          why: {
            en: "This is the heart of the saṁskāra: the child's first grain.",
            hi: "यही संस्कार का मुख्य भाग है: शिशु का पहला अन्न।"
          }
        },
        {
          title: { en: "The choice ritual (optional)", hi: "वस्तु चयन (वैकल्पिक)" },
          action: {
            en: "Place a book, pen, coin, clay and some food in front of the baby and see which they reach for first.",
            hi: "शिशु के सामने पुस्तक, कलम, सिक्का, मिट्टी और कुछ भोजन रखें और देखें कि वह सबसे पहले क्या उठाता है।"
          },
          why: {
            en: "A playful family custom said to hint at the child's future inclinations. It is not part of every tradition.",
            hi: "एक मनोरंजक पारिवारिक रीति, जो शिशु की भविष्य की रुचि का संकेत मानी जाती है। यह हर परंपरा में नहीं होती।"
          }
        },
        {
          title: { en: "Āratī and blessings", hi: "आरती और आशीर्वाद" },
          action: {
            en: "Perform āratī, then elders bless the baby. Share prasād with everyone.",
            hi: "आरती करें, फिर बड़े शिशु को आशीर्वाद दें। सभी में प्रसाद बाँटें।"
          },
          why: { en: "Closes the rite with blessings.", hi: "आशीर्वाद के साथ संस्कार का समापन।" },
          timer: 180
        }
      ]
    },

    // ---------------------------------------------------------------- MUNDAN
    {
      id: "mundan", group: "samskara", free: true,
      name: { en: "Muṇḍan (Cūḍākaraṇa)", hi: "मुंडन (चूड़ाकरण)" },
      tagline: { en: "First haircut", hi: "पहला केश-कर्तन" },
      when: {
        en: "Usually in an odd year of age — the 1st or 3rd year is most common. Many families do it at a temple or on a riverbank on an auspicious day.",
        hi: "प्रायः विषम वर्ष में — पहला या तीसरा वर्ष सबसे सामान्य है। कई परिवार शुभ दिन पर मंदिर या नदी तट पर करते हैं।"
      },
      duration: { en: "About 1–2 hours", hi: "लगभग 1–2 घंटे" },
      about: {
        en: "The child's birth hair is shaved for the first time. It is traditionally linked to purification and healthy growth.",
        hi: "शिशु के जन्म के बाल पहली बार उतारे जाते हैं। परंपरागत रूप से इसे शुद्धि और स्वस्थ विकास से जोड़ा जाता है।"
      },
      roles: {
        en: "Parents and child; a barber (nāī); the child usually sits on the mother's or maternal uncle's lap.",
        hi: "माता-पिता और शिशु; नाई; शिशु प्रायः माँ या मामा की गोद में बैठता है।"
      },
      samagri: [
        { en: "Gaṇeśa picture, lamp, incense, flowers", hi: "गणेश जी का चित्र, दीपक, अगरबत्ती, फूल" },
        { en: "Roli and akṣata", hi: "रोली और अक्षत" },
        { en: "Clean new razor (barber) and scissors", hi: "नया साफ़ उस्तरा (नाई) और कैंची" },
        { en: "Bowl of lukewarm water", hi: "गुनगुने पानी की कटोरी" },
        { en: "Haldī or sandalwood paste for the scalp", hi: "सिर पर लगाने के लिए हल्दी या चंदन का लेप" },
        { en: "Dough ball or cloth to collect the hair", hi: "बाल इकट्ठा करने के लिए आटे की लोई या कपड़ा" },
        { en: "Towel and clean clothes for after bathing", hi: "स्नान के बाद के लिए तौलिया और साफ़ कपड़े" },
        { en: "Sweets for prasād; dakṣiṇā for the barber", hi: "प्रसाद के लिए मिठाई; नाई के लिए दक्षिणा" }
      ],
      steps: [
        {
          title: { en: "Ācamana and Gaṇeśa pūjā", hi: "आचमन और गणेश पूजन" },
          action: {
            en: "Purify with ācamana, light the lamp and worship Gaṇeśa with flowers, roli and akṣata.",
            hi: "आचमन से शुद्धि करें, दीपक जलाएँ और फूल, रोली, अक्षत से गणेश पूजन करें।"
          },
          mantra: {
            deva: "ॐ गं गणपतये नमः ॥",
            iast: "oṁ gaṁ gaṇapataye namaḥ",
            meaning: { en: "Salutations to Gaṇapati.", hi: "गणपति को नमस्कार।" }
          },
          why: { en: "Standard opening of the rite.", hi: "संस्कार का मानक आरंभ।" },
          timer: 300
        },
        {
          title: { en: "Saṅkalpa", hi: "संकल्प" },
          action: {
            en: "State the date, place, family and the intention to perform the child's Muṇḍan, and release the water.",
            hi: "तिथि, स्थान, परिवार और शिशु के मुंडन का संकल्प बोलें, और जल छोड़ दें।"
          },
          why: { en: "Formally declares the rite.", hi: "संस्कार की औपचारिक घोषणा।" }
        },
        {
          title: { en: "Seat the child", hi: "शिशु को बिठाएँ" },
          action: {
            en: "The child sits on the lap of the mother or māmā, facing east. Keep a toy or snack ready to keep them calm.",
            hi: "शिशु माँ या मामा की गोद में पूर्व की ओर मुख करके बैठे। उसे शांत रखने के लिए खिलौना या कुछ खाने को पास रखें।"
          },
          why: {
            en: "A calm child and a steady hold are the most important safety measure.",
            hi: "शांत शिशु और स्थिर पकड़ सबसे महत्वपूर्ण सुरक्षा उपाय है।"
          }
        },
        {
          title: { en: "Wet the hair", hi: "बाल गीले करें" },
          action: {
            en: "Moisten the hair with lukewarm water to soften it.",
            hi: "बालों को मुलायम करने के लिए गुनगुने पानी से गीला करें।"
          },
          why: { en: "Softened hair makes shaving gentler on a young scalp.", hi: "मुलायम बालों से कोमल सिर पर मुंडन आसान होता है।" }
        },
        {
          title: { en: "First locks", hi: "पहली लट" },
          action: {
            en: "The father (or a priest) ceremonially snips a few locks with scissors before the barber begins.",
            hi: "नाई के शुरू करने से पहले पिता (या पुरोहित) कैंची से विधिपूर्वक कुछ लटें काटते हैं।"
          },
          why: {
            en: "The parent begins the act, and the barber completes it.",
            hi: "माता-पिता कार्य आरंभ करते हैं और नाई उसे पूरा करता है।"
          }
        },
        {
          title: { en: "Shave the head", hi: "मुंडन" },
          action: {
            en: "The barber shaves the head with a new, clean razor. Some families leave a small tuft (śikhā) at the crown. Collect all the hair in the dough or cloth.",
            hi: "नाई नए, साफ़ उस्तरे से सिर मुंडते हैं। कुछ परिवार सिर के शीर्ष पर छोटी शिखा छोड़ते हैं। सारे बाल आटे की लोई या कपड़े में इकट्ठा करें।"
          },
          why: {
            en: "The birth hair is removed completely and kept together for respectful disposal.",
            hi: "जन्म के बाल पूरी तरह उतारे जाते हैं और आदरपूर्वक विसर्जन के लिए एकत्र रखे जाते हैं।"
          },
          timer: 900
        },
        {
          title: { en: "Apply haldī or sandalwood", hi: "हल्दी या चंदन लगाएँ" },
          action: {
            en: "Gently apply haldī or sandalwood paste to the scalp, then bathe the child.",
            hi: "सिर पर धीरे से हल्दी या चंदन का लेप लगाएँ, फिर शिशु को स्नान कराएँ।"
          },
          why: {
            en: "Traditionally soothing and cooling for the freshly shaved scalp.",
            hi: "परंपरागत रूप से ताज़ा मुंडे सिर के लिए शीतल और आरामदायक।"
          }
        },
        {
          title: { en: "Offer the hair", hi: "बालों का विसर्जन" },
          action: {
            en: "Offer the collected hair at a temple, in a river, or bury it respectfully, as your family custom prescribes.",
            hi: "एकत्र बालों को परिवार की रीति अनुसार मंदिर में अर्पित करें, नदी में प्रवाहित करें, या आदरपूर्वक भूमि में दबा दें।"
          },
          why: {
            en: "The hair is treated with respect rather than discarded.",
            hi: "बालों को फेंका नहीं जाता, आदरपूर्वक विसर्जित किया जाता है।"
          }
        },
        {
          title: { en: "Blessings and dakṣiṇā", hi: "आशीर्वाद और दक्षिणा" },
          action: {
            en: "Elders bless the child. Give dakṣiṇā and sweets to the barber and share prasād.",
            hi: "बड़े शिशु को आशीर्वाद दें। नाई को दक्षिणा और मिठाई दें, और प्रसाद बाँटें।"
          },
          why: { en: "Closes the rite and honours those who helped.", hi: "संस्कार का समापन और सहायकों का सम्मान।" }
        }
      ]
    },

    // ---------------------------------------------------------------- SANDHYA
    {
      id: "sandhya", group: "nitya", free: true,
      name: { en: "Sandhyā (simple)", hi: "संध्या (सरल)" },
      tagline: { en: "Daily morning practice", hi: "दैनिक प्रातः उपासना" },
      when: {
        en: "At sunrise, after bathing. Many also perform it at noon and sunset.",
        hi: "स्नान के बाद सूर्योदय के समय। कई लोग इसे मध्याह्न और सूर्यास्त पर भी करते हैं।"
      },
      duration: { en: "About 15 minutes", hi: "लगभग 15 मिनट" },
      about: {
        en: "A short daily practice centred on the Gāyatrī mantra and an offering of water to the Sun. This is a simplified version for beginners; full sandhyāvandana varies by Vedic school.",
        hi: "गायत्री मंत्र और सूर्य को जल अर्पण पर केंद्रित छोटी दैनिक उपासना। यह शुरुआती लोगों के लिए सरल रूप है; पूर्ण संध्यावंदन वैदिक शाखा के अनुसार भिन्न होता है।"
      },
      roles: { en: "Yourself.", hi: "स्वयं।" },
      samagri: [
        { en: "Small copper or steel pot (loṭā) of water", hi: "जल से भरा ताँबे या स्टील का लोटा" },
        { en: "Small spoon (ācamanī) or use your palm", hi: "आचमनी (छोटा चम्मच) या हथेली" },
        { en: "A mat (āsana) to sit on", hi: "बैठने के लिए आसन" },
        { en: "Optional: a mālā of 108 beads", hi: "वैकल्पिक: 108 मनकों की माला" }
      ],
      steps: [
        {
          title: { en: "Sit facing east", hi: "पूर्व की ओर बैठें" },
          action: {
            en: "After bathing, sit on your mat facing east with the water pot beside you.",
            hi: "स्नान के बाद आसन पर पूर्व की ओर मुख करके बैठें और लोटा पास रखें।"
          },
          why: { en: "East faces the rising Sun, the focus of the morning sandhyā.", hi: "पूर्व दिशा उगते सूर्य की ओर है, जो प्रातः संध्या का केंद्र है।" }
        },
        {
          title: { en: "Ācamana", hi: "आचमन" },
          action: { en: "Sip water three times from the right palm.", hi: "दाहिनी हथेली से तीन बार जल ग्रहण करें।" },
          mantra: {
            deva: "ॐ केशवाय नमः । ॐ नारायणाय नमः । ॐ माधवाय नमः ॥",
            iast: "oṁ keśavāya namaḥ · oṁ nārāyaṇāya namaḥ · oṁ mādhavāya namaḥ",
            meaning: { en: "Salutations to Keśava, Nārāyaṇa and Mādhava.", hi: "केशव, नारायण और माधव को नमस्कार।" }
          },
          why: { en: "Purifies body and mind before the practice.", hi: "उपासना से पहले तन और मन की शुद्धि।" }
        },
        {
          title: { en: "Prāṇāyāma", hi: "प्राणायाम" },
          action: {
            en: "Take a few slow, steady breaths: breathe in, hold briefly, breathe out. Let the mind settle.",
            hi: "कुछ धीमी, स्थिर साँसें लें: साँस लें, थोड़ा रोकें, छोड़ें। मन को शांत होने दें।"
          },
          why: { en: "Steadies the breath and focuses attention.", hi: "श्वास को स्थिर और ध्यान को एकाग्र करता है।" },
          timer: 120
        },
        {
          title: { en: "Mārjana — sprinkle water", hi: "मार्जन — जल छिड़कें" },
          action: {
            en: "Sprinkle a few drops of water on your head with your fingers while reciting.",
            hi: "मंत्र बोलते हुए उँगलियों से सिर पर जल की कुछ बूँदें छिड़कें।"
          },
          mantra: {
            deva: "ॐ आपो हि ष्ठा मयोभुवः ॥",
            iast: "oṁ āpo hi ṣṭhā mayobhuvaḥ",
            meaning: { en: "O waters, you are the source of well-being.", hi: "हे जल, तुम कल्याण के स्रोत हो।" }
          },
          why: { en: "Purification with water and the Ṛgvedic hymn to the waters.", hi: "जल और ऋग्वेद के जल-सूक्त से शुद्धि।" }
        },
        {
          title: { en: "Arghya — offer water to the Sun", hi: "अर्घ्य — सूर्य को जल" },
          action: {
            en: "Stand facing the Sun. Holding water in cupped hands or the loṭā, pour it out slowly while reciting the Gāyatrī. Repeat three times.",
            hi: "सूर्य की ओर खड़े हों। अंजलि या लोटे में जल लेकर गायत्री मंत्र बोलते हुए धीरे-धीरे जल अर्पित करें। तीन बार दोहराएँ।"
          },
          mantra: {
            deva: "ॐ भूर्भुवः स्वः । तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि । धियो यो नः प्रचोदयात् ॥",
            iast: "oṁ bhūr bhuvaḥ svaḥ · tat savitur vareṇyaṁ bhargo devasya dhīmahi · dhiyo yo naḥ pracodayāt",
            meaning: {
              en: "We meditate on the radiant light of the divine Savitṛ; may it inspire our minds.",
              hi: "हम सविता देव के उस श्रेष्ठ तेज का ध्यान करते हैं; वह हमारी बुद्धि को प्रेरित करे।"
            }
          },
          why: { en: "The central act of sandhyā: honouring the Sun with the Gāyatrī.", hi: "संध्या का मुख्य कर्म: गायत्री के साथ सूर्य का सम्मान।" }
        },
        {
          title: { en: "Gāyatrī japa", hi: "गायत्री जप" },
          action: {
            en: "Sit again and repeat the Gāyatrī silently or softly — 10, 28 or 108 times, using a mālā if you have one.",
            hi: "फिर बैठकर गायत्री मंत्र का मौन या धीमे स्वर में जप करें — 10, 28 या 108 बार, माला हो तो उससे।"
          },
          why: { en: "Repetition deepens concentration.", hi: "जप से एकाग्रता गहरी होती है।" },
          timer: 600
        },
        {
          title: { en: "Close with a prayer", hi: "प्रार्थना से समापन" },
          action: {
            en: "Bow, offer a moment of gratitude, and sip water once more (ācamana) to close.",
            hi: "प्रणाम करें, कृतज्ञता प्रकट करें, और समापन के लिए एक बार फिर आचमन करें।"
          },
          mantra: {
            deva: "ॐ शान्तिः शान्तिः शान्तिः ॥",
            iast: "oṁ śāntiḥ śāntiḥ śāntiḥ",
            meaning: { en: "Peace, peace, peace.", hi: "शांति, शांति, शांति।" }
          },
          why: { en: "Ends the practice with peace.", hi: "शांति के साथ उपासना का समापन।" }
        }
      ]
    }
  ],

  // Saṁskāras shown as "coming soon" in the library
  upcoming: [
    { en: "Garbhādhāna", hi: "गर्भाधान" }, { en: "Puṁsavana", hi: "पुंसवन" },
    { en: "Sīmantonnayana", hi: "सीमन्तोन्नयन" }, { en: "Jātakarma", hi: "जातकर्म" },
    { en: "Niṣkramaṇa", hi: "निष्क्रमण" }, { en: "Karṇavedha", hi: "कर्णवेध" },
    { en: "Vidyārambha", hi: "विद्यारम्भ" }, { en: "Upanayana", hi: "उपनयन" },
    { en: "Vedārambha", hi: "वेदारम्भ" }, { en: "Keśānta", hi: "केशान्त" },
    { en: "Samāvartana", hi: "समावर्तन" }, { en: "Vivāha", hi: "विवाह" },
    { en: "Antyeṣṭi", hi: "अन्त्येष्टि" }
  ]
};
