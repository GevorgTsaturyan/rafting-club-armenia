import type { LocaleContent } from '~/types/content'

/**
 * English content — primary SEO language.
 * Original copy written for search intent around "rafting in Armenia" and
 * "Debed River rafting". No invented prices, reviews, awards or certifications.
 */
const en: LocaleContent = {
  tours: [
    {
      id: 'debed-classic',
      name: 'Debed River Classic',
      tagline: 'The signature Armenian rafting run',
      description:
        'Our flagship trip down the Debed River in northern Armenia — a lively, scenic descent through the canyons of Lori, guided every metre of the way. It is the perfect introduction to whitewater for first-timers and a favourite for groups and families.',
      duration: null,
      difficulty: 'Beginner friendly',
      bestFor: 'First-timers, families, groups',
      highlights: [
        'Full safety briefing and gear before launch',
        'Certified-style guiding on every raft',
        'Dramatic canyon and medieval-monastery scenery',
        'Photos of your run along the river'
      ],
      image: '/images/tours/rafting-debed-river-classic.jpg',
      imageAlt: 'Rafting team paddling through the Debed River canyon in Armenia'
    },
    {
      id: 'debed-adventure',
      name: 'Debed Adventure',
      tagline: 'A longer, more energetic descent',
      description:
        'A longer stretch of the Debed for those who want more river time and a bit more excitement. Expect faster sections, more paddling and the full rhythm of a proper rafting day out in the Lori highlands.',
      duration: null,
      difficulty: 'Moderate',
      bestFor: 'Active travellers, returning rafters',
      highlights: [
        'Extended river distance',
        'More continuous whitewater sections',
        'Small-group friendly',
        'Riverside break in nature'
      ],
      image: '/images/tours/rafting-debed-adventure.jpg',
      imageAlt: 'Rafters navigating faster whitewater on the Debed River in Lori, Armenia'
    },
    {
      id: 'group-corporate',
      name: 'Groups & Team Days',
      tagline: 'Rafting for teams, celebrations and events',
      description:
        'A tailored rafting experience for larger groups, company team-building days, birthdays and special occasions. We coordinate multiple rafts together so everyone shares the adventure on the same stretch of river.',
      duration: null,
      difficulty: 'Beginner friendly',
      bestFor: 'Companies, events, celebrations',
      highlights: [
        'Multiple rafts coordinated together',
        'Flexible arrangements for larger numbers',
        'Great for team-building and celebrations',
        'Group photos on the water'
      ],
      image: '/images/tours/rafting-group-team-building-armenia.jpg',
      imageAlt: 'Large group rafting together on the Debed River in Armenia'
    }
  ],

  gallery: [
    { src: '/images/gallery/rafting-armenia-01.jpg', alt: 'Raft crossing whitewater rapids on the Debed River in Armenia' },
    { src: '/images/gallery/rafting-armenia-02.jpg', alt: 'Rafting guide steering through a rocky section of the Debed canyon' },
    { src: '/images/gallery/rafting-armenia-03.jpg', alt: 'Group of friends paddling a raft together in Lori, Armenia' },
    { src: '/images/gallery/rafting-armenia-04.jpg', alt: 'Splashing through rapids surrounded by green Armenian mountains' },
    { src: '/images/gallery/rafting-armenia-05.jpg', alt: 'Rafters in helmets and life vests smiling on the river' },
    { src: '/images/gallery/rafting-armenia-06.jpg', alt: 'Aerial view of the Debed River winding through the Lori canyon' },
    { src: '/images/gallery/rafting-armenia-07.jpg', alt: 'Calm stretch of the Debed River reflecting the surrounding cliffs' },
    { src: '/images/gallery/rafting-armenia-08.jpg', alt: 'Rafting team celebrating at the end of their Armenian river adventure' }
  ],

  home: {
    seo: {
      title: 'Rafting in Armenia | Rafting Club Armenia — Debed River',
      description:
        'Rafting Club Armenia runs guided whitewater rafting trips on the Debed River in Lori. Safety-focused guides, stunning canyon scenery and an unforgettable adventure. Book yours.'
    },
    hero: {
      eyebrow: 'Rafting Club Armenia',
      title: 'Rafting in Armenia',
      subtitle:
        'Experience an unforgettable whitewater adventure on the Debed River, in the heart of Armenia’s Lori highlands — guided, safe and genuinely thrilling.',
      primaryCta: 'Book your adventure',
      secondaryCta: 'Explore the tours',
      scrollHint: 'Scroll to explore'
    },
    quickFacts: [
      {
        icon: 'shield',
        title: 'Safety-focused guides',
        text: 'Every trip starts with a full briefing and proper gear. Our guides stay with you the whole way down the river.'
      },
      {
        icon: 'mountain',
        title: 'Real Armenian nature',
        text: 'Raft through the dramatic canyons of Lori, past cliffs, forest and centuries-old monasteries.'
      },
      {
        icon: 'users',
        title: 'For visitors & groups',
        text: 'Suitable for first-timers, families and larger groups — no previous rafting experience needed.'
      },
      {
        icon: 'wave',
        title: 'Genuine whitewater',
        text: 'The Debed delivers lively rapids and calmer pools — a proper river adventure, not a gentle float.'
      }
    ],
    experience: {
      heading: {
        eyebrow: 'The experience',
        title: 'What a day on the river feels like',
        intro:
          'From the first safety briefing to the last rapid, a rafting trip with us is about adrenaline, teamwork and the raw beauty of northern Armenia.'
      },
      paragraphs: [
        'You start on the riverbank, where your guide fits your helmet and life vest and walks the whole team through paddling and safety. Within minutes you are on the water, reading the current together and finding your rhythm.',
        'The Debed alternates between punchy rapids that get everyone paddling hard and quieter stretches where you can catch your breath, look up at the canyon walls and take it all in. By the end, strangers have become a crew.'
      ],
      bullets: [
        'No experience required — guides teach you everything',
        'All rafting equipment provided',
        'Small teams per raft for a personal experience',
        'Suitable for confident swimmers and non-swimmers alike, with proper gear'
      ],
      imageAlt: 'Rafters paddling hard through a rapid on the Debed River in Armenia'
    },
    why: {
      heading: {
        eyebrow: 'Why Armenia',
        title: 'Why go rafting in Armenia',
        intro:
          'Armenia is a compact country of deep river canyons, high mountains and ancient culture. Rafting here means adventure and landscape in equal measure.'
      },
      features: [
        {
          icon: 'canyon',
          title: 'Spectacular canyons',
          text: 'The Debed carves one of Armenia’s most beautiful gorges, lined with cliffs, forest and historic monasteries.'
        },
        {
          icon: 'compass',
          title: 'Adventure within reach',
          text: 'The Lori region is an easy trip from the capital, so you can swap the city for whitewater in the same day.'
        },
        {
          icon: 'leaf',
          title: 'Unspoilt nature',
          text: 'Clean mountain water, fresh air and scenery that most visitors never expect to find in the Caucasus.'
        },
        {
          icon: 'landmark',
          title: 'Culture on the banks',
          text: 'The valley is home to UNESCO-listed monasteries — adventure and heritage in one trip.'
        }
      ]
    },
    debed: {
      heading: {
        eyebrow: 'The river',
        title: 'The Debed River',
        intro:
          'The Debed is the longest river in northern Armenia and the home of our rafting trips. It flows through the Lori Province, cutting a deep, green canyon that is made for whitewater.'
      },
      paragraphs: [
        'Fed by mountain tributaries, the Debed runs fast and lively through the Lori gorge, with a mix of rapids and calmer sections that suit both beginners and more active rafters.',
        'Along the way the river passes beneath forested slopes and near some of Armenia’s most famous medieval monasteries, making the descent as scenic as it is exciting.'
      ],
      stats: [
        { value: 'Lori', label: 'Region in northern Armenia' },
        { value: 'Debed', label: 'The river you’ll raft' },
        { value: 'Canyon', label: 'Cliffs, forest & monasteries' }
      ],
      cta: 'More about the Debed River',
      imageAlt: 'The Debed River flowing through the green canyon of Lori in Armenia'
    },
    tours: {
      heading: {
        eyebrow: 'Choose your trip',
        title: 'Rafting tours & packages',
        intro:
          'Pick the trip that fits your group. Every option is fully guided and includes all the rafting gear you need.'
      },
      note: 'Exact durations, prices and dates are confirmed on request — get in touch and we’ll help you plan.',
      cta: 'See all tours'
    },
    gallery: {
      heading: {
        eyebrow: 'Gallery',
        title: 'Moments from the river',
        intro: 'Real rafting on the Debed. Swipe through and picture yourself out on the water.'
      }
    },
    howItWorks: {
      heading: {
        eyebrow: 'How it works',
        title: 'From booking to the river in four steps',
        intro: 'Getting out on the water is simple. Here is exactly how it works.'
      },
      steps: [
        { title: 'Choose your adventure', text: 'Browse the tours and pick the trip that suits your group and experience level.' },
        { title: 'Contact & book', text: 'Send us your dates and group size through the contact form and we confirm the details with you.' },
        { title: 'Meet the rafting team', text: 'On the day, meet your guides at the river for your safety briefing and gear fitting.' },
        { title: 'Enjoy the river', text: 'Paddle the Debed with your crew and finish with stories you’ll be telling for years.' }
      ]
    },
    faq: {
      heading: {
        eyebrow: 'Good to know',
        title: 'Frequently asked questions',
        intro: 'The essentials about rafting with us in Armenia. Anything else, just ask.'
      },
      items: [
        {
          question: 'Do I need any rafting experience?',
          answer:
            'No. Our trips are designed for beginners as well as experienced rafters. Your guide teaches you everything you need to know before you get on the water.'
        },
        {
          question: 'Is rafting on the Debed safe?',
          answer:
            'Safety is our priority. Every trip includes a briefing and proper equipment — helmet and life vest — and a guide stays with your raft the entire way. You should always follow your guide’s instructions on the river.'
        },
        {
          question: 'Do I need to know how to swim?',
          answer:
            'You do not need to be a strong swimmer. Everyone wears a life vest at all times. If you have any concerns, let your guide know before the trip so they can look after you.'
        },
        {
          question: 'What should I wear and bring?',
          answer:
            'Wear clothes you don’t mind getting wet, plus secure footwear that can stay on in water. Bring a change of dry clothes and a towel. We provide the rafting equipment.'
        },
        {
          question: 'What is the best season for rafting in Armenia?',
          answer:
            'Rafting season in Armenia generally runs through the warmer months when river levels are suitable. Contact us for the current season dates and the best time for the trip you want.',
          needsConfirmation: true
        },
        {
          question: 'How much does rafting cost and how long does it take?',
          answer:
            'Prices, trip durations and available dates are confirmed on request, because they depend on the tour and group size. Send us a message and we’ll give you the details.',
          needsConfirmation: true
        },
        {
          question: 'Is there a minimum age or group size?',
          answer:
            'Age and group requirements depend on the specific trip and river conditions. Please contact us with your group details and we’ll advise what works best.',
          needsConfirmation: true
        },
        {
          question: 'How do I book a trip?',
          answer:
            'Use the contact form on this site with your preferred dates and the number of people. We’ll confirm availability and walk you through the rest.'
        }
      ]
    },
    finalCta: {
      title: 'Ready to hit the water?',
      text: 'Tell us your dates and group size and we’ll help you plan an unforgettable rafting day on the Debed River.',
      primaryCta: 'Book your adventure',
      secondaryCta: 'Contact us'
    }
  },

  raftingInArmenia: {
    seo: {
      title: 'Rafting in Armenia — Guided Whitewater Adventures | Rafting Club',
      description:
        'A complete guide to rafting in Armenia: where to go, what to expect on the Debed River, the best season, safety and how to book a guided whitewater trip.'
    },
    hero: {
      eyebrow: 'Rafting in Armenia',
      title: 'Rafting in Armenia: your complete guide',
      subtitle:
        'Everything you need to know about whitewater rafting in Armenia — the rivers, the scenery, the season and how to plan your adventure.',
      imageAlt: 'Raft splashing through whitewater in an Armenian canyon'
    },
    sections: [
      {
        heading: 'Why Armenia is a rafting destination worth the trip',
        paragraphs: [
          'When travellers picture Armenia they usually think of ancient monasteries and mountain landscapes — not whitewater. Yet the country’s deep river canyons make it a genuinely rewarding place to raft, especially in the north where the Debed River cuts through the Lori Province.',
          'Rafting in Armenia combines adventure with landscape and culture. In a single day you can paddle lively rapids, drift beneath towering cliffs and pass within sight of centuries-old monasteries. For active travellers looking for something beyond the usual sightseeing, it is one of the most memorable things to do in the country.'
        ]
      },
      {
        heading: 'Where you go rafting: the Debed River in Lori',
        paragraphs: [
          'Our trips run on the Debed River, the longest river in northern Armenia. It flows through the Lori gorge, a green canyon of forested slopes and rocky walls that is ideal for rafting.',
          'The Debed offers a natural mix of faster whitewater and calmer stretches, which makes it suitable for first-timers as well as those who want more of a workout. The Lori region is an easy trip from central Armenia, so rafting fits neatly into a wider tour of the country.'
        ],
        bullets: [
          'River: the Debed, northern Armenia',
          'Region: Lori Province',
          'Scenery: canyon cliffs, forest and historic monasteries',
          'Suitable for: beginners, families and active groups'
        ]
      },
      {
        heading: 'What to expect on the water',
        paragraphs: [
          'Every trip begins on the bank with a safety briefing and gear — a helmet and life vest for everyone. Your guide teaches the whole team how to paddle and what to do on the river before you set off, so no experience is needed.',
          'Out on the Debed you paddle as a crew, working through rapids together and relaxing on the quieter sections. A guide stays with every raft the entire way. It is active, exciting and genuinely social — most people finish already planning their next run.'
        ]
      },
      {
        heading: 'The best time to go rafting in Armenia',
        paragraphs: [
          'Rafting depends on river levels, so the season runs through the warmer part of the year when conditions on the Debed are right. The exact dates vary from year to year with the weather and water flow.',
          'Because the ideal window shifts, the best approach is to contact us with the dates you have in mind. We’ll tell you whether they suit the river and help you choose the right trip.'
        ]
      },
      {
        heading: 'Safety and what to bring',
        paragraphs: [
          'Rafting is an adventure sport, and we treat safety seriously. Everyone wears a life vest and helmet, listens to a full briefing and follows the guide’s instructions on the river. You do not need to be a strong swimmer, but you should always let your guide know about any concerns.',
          'Wear clothes you don’t mind getting wet and footwear that stays securely on your feet in water. Bring a change of dry clothes and a towel for afterwards — we provide all the rafting equipment.'
        ]
      }
    ],
    faq: {
      heading: { title: 'Rafting in Armenia — quick answers' },
      items: [
        {
          question: 'Where can you go rafting in Armenia?',
          answer:
            'The most popular rafting is on the Debed River in the Lori Province of northern Armenia, which is where our guided trips run.'
        },
        {
          question: 'Is rafting in Armenia suitable for beginners?',
          answer:
            'Yes. The Debed has sections that work well for first-timers, and every trip is fully guided with a safety briefing beforehand, so no experience is needed.'
        },
        {
          question: 'When is rafting season in Armenia?',
          answer:
            'The season runs through the warmer months when river levels are suitable. Dates shift year to year, so contact us for the current season.',
          needsConfirmation: true
        }
      ]
    },
    cta: {
      title: 'Plan your rafting trip in Armenia',
      text: 'Send us your dates and group size and we’ll help you put together the perfect day on the river.',
      primaryCta: 'Book your adventure',
      secondaryCta: 'See the tours'
    }
  },

  debedRiver: {
    seo: {
      title: 'Debed River Rafting in Lori, Armenia | Rafting Club Armenia',
      description:
        'Rafting on the Debed River in Lori, Armenia — the canyon, the rapids, the scenery and what a guided descent is really like. Plan your Debed rafting trip.'
    },
    hero: {
      eyebrow: 'Debed River',
      title: 'Rafting on the Debed River',
      subtitle:
        'The Debed is the home of rafting in Armenia — a lively river running through the green canyon of Lori. Here is what makes it special.',
      imageAlt: 'The Debed River flowing through its canyon in Lori, Armenia'
    },
    sections: [
      {
        heading: 'The longest river in northern Armenia',
        paragraphs: [
          'The Debed River is the longest river in northern Armenia. It gathers water from mountain tributaries and flows through the Lori Province, carving a deep canyon on its way toward the country’s northern border.',
          'That canyon is exactly what makes the Debed so good for rafting: steady flow, a natural sequence of rapids and pools, and dramatic scenery from start to finish.'
        ]
      },
      {
        heading: 'The canyon and its scenery',
        paragraphs: [
          'The Lori gorge is one of the most beautiful parts of Armenia. Forested slopes rise on either side, rocky cliffs frame the water, and the light changes constantly as you move down the river.',
          'The valley is also rich in history. The Debed canyon is home to the UNESCO-listed monasteries of the region, so a day on the river sits alongside some of the country’s most important cultural landmarks.'
        ],
        bullets: [
          'A deep, green canyon through the Lori highlands',
          'A natural mix of rapids and calm stretches',
          'Cliffs, forest and mountain air',
          'Historic monasteries in the surrounding valley'
        ]
      },
      {
        heading: 'What the rafting is like',
        paragraphs: [
          'The Debed gives you a real river experience without demanding previous skill. Faster sections get the whole crew paddling and reacting together, while the calmer stretches let you relax and take in the canyon.',
          'Because the river mixes excitement with more forgiving water, it suits beginners, families and active travellers alike. Every raft is led by a guide who reads the river for you and keeps the team on line.'
        ]
      },
      {
        heading: 'Planning your Debed rafting trip',
        paragraphs: [
          'The Debed runs through the Lori region, an easy trip from central Armenia, which makes it simple to add rafting to a wider tour of the country. River conditions change with the season, so the best time to raft varies from year to year.',
          'Tell us your dates and group size and we’ll confirm whether the river is running well and recommend the right trip for you.'
        ]
      }
    ],
    cta: {
      title: 'Raft the Debed River',
      text: 'Ready to experience the Debed for yourself? Get in touch and we’ll help you plan the trip.',
      primaryCta: 'Book your adventure',
      secondaryCta: 'View rafting tours'
    }
  },

  toursPage: {
    seo: {
      title: 'Rafting Tours in Armenia | Debed River Trips — Rafting Club',
      description:
        'Guided rafting tours in Armenia on the Debed River — from beginner-friendly runs to longer adventures and group days. See the trips and plan your booking.'
    },
    hero: {
      eyebrow: 'Rafting tours',
      title: 'Rafting tours in Armenia',
      subtitle:
        'Fully guided whitewater trips on the Debed River, with all the gear included. Choose the adventure that fits your group.',
      imageAlt: 'Rafting team on the Debed River during a guided tour in Armenia'
    },
    intro: [
      'Every tour below runs on the Debed River in Lori and is led by experienced guides. Whether it is your first time on whitewater or you are back for more, there is a trip to suit you.',
      'Exact durations, prices and available dates are confirmed on request, because they depend on the tour, the season and your group size. Get in touch and we’ll help you plan.'
    ],
    includedHeading: 'What’s included',
    included: [
      'Professional rafting guide with every raft',
      'All rafting equipment — raft, paddle, helmet and life vest',
      'Full safety briefing before launch',
      'A genuine whitewater experience on the Debed'
    ],
    bringHeading: 'What to bring',
    bring: [
      'Clothes you don’t mind getting wet',
      'Secure footwear that stays on in water',
      'A change of dry clothes and a towel',
      'A sense of adventure'
    ],
    cta: {
      title: 'Not sure which tour to pick?',
      text: 'Tell us about your group and we’ll recommend the best trip and confirm the details.',
      primaryCta: 'Contact us',
      secondaryCta: 'See prices'
    }
  },

  prices: {
    seo: {
      title: 'Rafting Prices in Armenia | Debed River Tours — Rafting Club',
      description:
        'Rafting prices for Debed River trips in Armenia are confirmed on request based on tour and group size. Contact Rafting Club Armenia for a quote.'
    },
    hero: {
      eyebrow: 'Prices',
      title: 'Rafting prices',
      subtitle:
        'Clear, fair pricing for guided rafting on the Debed River. Because trips vary by group and season, we confirm exact prices on request.'
    },
    intro: [
      'We keep our pricing straightforward and want you to know exactly what you’re paying for. Because the right price depends on the tour, the number of people and the season, we confirm it for you when you get in touch.'
    ],
    pendingNotice:
      'Current prices are confirmed on request. Send us your dates and group size and we’ll reply with a clear quote — no obligation.',
    rows: [
      { label: 'Debed River Classic', price: null, note: 'Beginner-friendly signature trip — price on request' },
      { label: 'Debed Adventure', price: null, note: 'Longer, more energetic descent — price on request' },
      { label: 'Groups & Team Days', price: null, note: 'Tailored to your group size — price on request' }
    ],
    includesHeading: 'Every trip includes',
    includes: [
      'A professional guide on every raft',
      'All rafting equipment',
      'A full safety briefing',
      'An unforgettable run on the Debed River'
    ],
    cta: {
      title: 'Get your price',
      text: 'Tell us what you have in mind and we’ll send a clear quote for your group.',
      primaryCta: 'Request a quote',
      secondaryCta: 'See the tours'
    }
  },

  about: {
    seo: {
      title: 'About Rafting Club Armenia | Guided Rafting on the Debed River',
      description:
        'Rafting Club Armenia runs guided whitewater rafting on the Debed River in Lori, with a focus on safety, small teams and genuine adventure. Learn more about us.'
    },
    hero: {
      eyebrow: 'About us',
      title: 'About Rafting Club Armenia',
      subtitle:
        'We share the adventure of Armenia’s rivers with visitors and locals alike — safely, personally and with real love for the outdoors.',
      imageAlt: 'Rafting Club Armenia guides and rafters on the Debed River'
    },
    story: {
      heading: 'Our story',
      paragraphs: [
        'Rafting Club Armenia exists to show people a side of the country that many never see: its fast, clean rivers and the wild canyons they run through. We are a team of people who love the outdoors and want to share that feeling with everyone who joins us.',
        'We focus on the Debed River in the Lori region, where the water and the scenery come together for an experience that is exciting, welcoming and unmistakably Armenian.'
      ]
    },
    values: {
      heading: {
        eyebrow: 'What we stand for',
        title: 'What matters to us',
        intro: 'A few simple principles guide everything we do on and off the river.'
      },
      items: [
        {
          icon: 'shield',
          title: 'Safety first',
          text: 'Proper gear, a clear briefing and a guide with every raft. Adventure should be exciting, not reckless.'
        },
        {
          icon: 'users',
          title: 'A personal experience',
          text: 'We keep teams small so every trip feels personal and everyone gets the most out of the river.'
        },
        {
          icon: 'leaf',
          title: 'Respect for nature',
          text: 'We raft in some of Armenia’s most beautiful places and we work to keep them that way.'
        },
        {
          icon: 'heart',
          title: 'Real hospitality',
          text: 'You are our guests. We want you to leave with great memories and stories worth telling.'
        }
      ]
    },
    safety: {
      heading: 'Our approach to safety',
      paragraphs: [
        'Rafting is an adventure sport, and doing it well means taking preparation seriously. Every trip starts with a briefing, everyone wears a helmet and life vest, and a guide stays with each raft from start to finish.',
        'We match trips to the river’s condition and your group’s experience, and we’ll always be honest with you about what to expect.'
      ],
      bullets: [
        'Full safety briefing before every trip',
        'Helmet and life vest for everyone',
        'A guide with every raft',
        'Trips matched to conditions and experience'
      ]
    },
    cta: {
      title: 'Come rafting with us',
      text: 'We’d love to show you the Debed. Get in touch and let’s plan your adventure.',
      primaryCta: 'Book your adventure',
      secondaryCta: 'Contact us'
    }
  },

  contact: {
    seo: {
      title: 'Contact Rafting Club Armenia | Debed River Rafting',
      description:
        'Get in touch with Rafting Club Armenia by phone, WhatsApp, Instagram or Facebook to plan and book your rafting adventure on the Debed River.'
    },
    hero: {
      eyebrow: 'Contact',
      title: 'Get in touch',
      subtitle:
        'Ready to raft the Debed, or just have a question? Reach us directly by phone, WhatsApp or social media.'
    },
    intro: [
      'The easiest way to plan or book your rafting trip is to contact us directly. Call us, message us on WhatsApp, or reach out on Instagram or Facebook — we’re happy to help with dates, group sizes and any questions you have.'
    ],
    channelsHeading: 'Contact us directly',
    channelsNote: 'Tap any option below to reach us — we usually reply quickly.',
    phoneLabel: 'Phone',
    actions: {
      call: 'Call us',
      whatsapp: 'Chat on WhatsApp',
      instagram: 'Follow us on Instagram',
      facebook: 'Message us on Facebook'
    }
  },

  privacy: {
    seo: {
      title: 'Privacy Policy | Rafting Club Armenia',
      description:
        'How Rafting Club Armenia handles the information you share when you contact us or use this website.'
    },
    title: 'Privacy Policy',
    updatedLabel: 'Last updated',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This policy explains, in plain language, what information we collect through this website and how we use it. It is provided as a general template and should be reviewed and completed with your final business and legal details before launch.'
        ]
      },
      {
        heading: 'Information we collect',
        paragraphs: [
          'If you contact us through the form on this site, we receive the details you choose to send — such as your name, email, phone number, group size and message. We use this information only to respond to your enquiry and arrange your trip.'
        ]
      },
      {
        heading: 'Analytics',
        paragraphs: [
          'This website may use privacy-respecting analytics to understand how visitors use the site so we can improve it. No analytics are enabled unless a measurement ID is configured by the site owner.'
        ]
      },
      {
        heading: 'Your choices',
        paragraphs: [
          'You can contact us at any time to ask what information we hold about you or to request that we delete it. Contact details will be published here once confirmed.'
        ]
      }
    ]
  }
}

export default en
