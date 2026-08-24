// -----------------------------------------------------------------------
// Every fact below is sourced from the SKILL UP Facebook page
// (facebook.com/profile.php?id=61569417715901 — name "Skill UP • სქილაპ")
// as of 2026-08-25: the page Intro, About tab, and the course promo
// graphics currently pinned to the feed (course spec card, curriculum
// card, "შეისწავლე გრაფიკული დიზაინი" card).
//
// Nothing below is invented. Anywhere the source material didn't confirm
// a fact (testimonials, student work samples, instructor name/bio,
// founding date, street address) the field is explicitly marked
// `placeholder: true` — see StudentWork / Testimonials sections, which
// render an honest "content pending" state instead of fabricated copy.
// -----------------------------------------------------------------------

export const siteContent = {
  meta: {
    title: "SKILL UP — გრაფიკული დიზაინის აკადემია",
    description:
      "ისწავლე გრაფიკული დიზაინი პროფესიონალურ დონეზე — Photoshop და Illustrator, ლაივ გაკვეთილები, პრაქტიკული პროექტები და სერტიფიკატი. თბილისი.",
    url: "https://academy.skup.ge",
    ogImage: "/brand/og-cover.jpg",
    keywords: [
      "გრაფიკული დიზაინის კურსი",
      "გრაფიკული დიზაინის სკოლა თბილისში",
      "Photoshop კურსი",
      "Illustrator კურსი",
      "დიზაინის აკადემია საქართველო",
      "SKILL UP",
      "სქილაპ",
    ],
  },

  nav: {
    brand: "SKILL UP",
    brandKa: "სქილაპ",
    links: [
      { label: "აკადემია", href: "#about" },
      { label: "კურსი", href: "#course" },
      { label: "რას ისწავლი", href: "#curriculum" },
      { label: "ნამუშევრები", href: "#work" },
      { label: "კითხვები", href: "#faq" },
      { label: "კონტაქტი", href: "#contact" },
    ],
    cta: "კურსზე ჩაწერა",
  },

  contact: {
    phone: "571 77 99 31",
    phoneHref: "tel:+995571779931",
    city: "თბილისი, საქართველო",
    facebook: "https://www.facebook.com/profile.php?id=61569417715901",
    site: "skup.ge",
  },

  hero: {
    eyebrow: "გრაფიკული დიზაინის აკადემია · თბილისი",
    // Real tagline pair used across SKILL UP's own promo graphics.
    headline: ["იდეიდან", "პროფესიამდე."],
    lede: "ისწავლე გრაფიკული დიზაინი პროფესიონალურ დონეზე — Photoshop და Illustrator ერთ კურსში, პრაქტიკული პროექტებით და საკუთარი პორტფოლიოთი დასასრულს.",
    primaryCta: { label: "კურსზე ჩაწერა", href: "#contact" },
    secondaryCta: { label: "რას ისწავლი", href: "#curriculum" },
    meta: [
      { label: "ფორმატი", value: "ონლაინ · ლაივ + ჩანაწერები" },
      { label: "ხანგრძლივობა", value: "3 თვე" },
      { label: "დონე", value: "დამწყებთათვის" },
    ],
  },

  about: {
    kicker: "რა არის SKILL UP",
    statement:
      "SKILL UP აკადემია, სადაც სწავლობ გრაფიკული დიზაინის პროგრამების გამოყენებას უმაღლეს დონეზე.",
    body: "ერთი კურსი, ორი ინსტრუმენტი — Adobe Photoshop და Adobe Illustrator — და ერთი მიზანი: რომ კურსის ბოლოს გქონდეს არა მხოლოდ თეორიული ცოდნა, არამედ საკუთარი ხელით შექმნილი პროექტები, საიდანაც პორტფოლიო შედგება.",
  },

  course: {
    kicker: "01 · კურსი",
    title: "გრაფიკული დიზაინის კურსი",
    tools: ["Photoshop", "Illustrator"],
    description:
      "ონლაინ კურსი დამწყებთათვის — დიზაინის საფუძვლებიდან საკუთარი პორტფოლიოს პროექტებამდე, ლაივ გაკვეთილებით და მუდმივი წვდომით ჩანაწერებზე.",
    specs: [
      { label: "დონე", value: "დამწყებთათვის" },
      { label: "ფორმატი", value: "ონლაინ, ლაივ + ჩანაწერები" },
      { label: "სიხშირე", value: "კვირაში 2-ჯერ, 2 საათი" },
      { label: "ხანგრძლივობა", value: "3 თვე" },
    ],
    includes: [
      "ლაივ გაკვეთილები + ჩანაწერები",
      "პრაქტიკული დავალებები და საპორტფოლიო პროექტები",
      "დიზაინის საფუძვლები და პროგრამების ეფექტური გამოყენება",
      "სერტიფიკატი კურსის დასრულების შემდეგ",
    ],
    pricing: [
      {
        label: "ჯგუფური კურსი",
        duration: "3 თვე",
        price: "300",
        currency: "₾",
        note: "ფასდაკლებით",
      },
      {
        label: "ინდივიდუალური გაკვეთილები",
        duration: "პერსონალური გრაფიკი",
        price: "450",
        currency: "₾",
        note: "ფასდაკლებით",
      },
    ],
    payment: {
      label: "გადახდის მეთოდები",
      options: ["სრულად გადახდა", "ნაწილ-ნაწილ", "განაწილება საიტზე"],
    },
    cta: { label: "კურსზე ჩაწერა", href: "#contact" },
  },

  curriculum: {
    kicker: "02 · რას ისწავლი",
    title: "კურსის შინაარსი",
    // The four confirmed curriculum points from SKILL UP's own course
    // graphics — presented as-is, not expanded with invented sub-topics.
    items: [
      {
        index: "01",
        title: "ფოტო რედაქტირება და გრაფიკის შექმნა",
        description:
          "Photoshop-ში სურათის დამუშავება და საწყისი გრაფიკული მასალის აწყობა.",
      },
      {
        index: "02",
        title: "ვექტორული დიზაინი, ლოგოები, ილუსტრაციები",
        description:
          "Illustrator-ში ვექტორული ფორმებით მუშაობა — ლოგოდან ილუსტრაციამდე.",
      },
      {
        index: "03",
        title: "შრიფების სწორად შერჩევა და კომბინაცია",
        description: "ტიპოგრაფიული წყვილები და იერარქია, რომელიც კითხულობს კომპოზიციას.",
      },
      {
        index: "04",
        title: "ბრენდის ვიზუალური იდენტობის შექმნა",
        description: "ცალკეული გრაფიკებიდან თანმიმდევრულ ვიზუალურ სისტემამდე.",
      },
    ],
  },

  experience: {
    kicker: "03 · სწავლის პროცესი",
    title: "როგორ მიმდინარეობს კურსი",
    body: "გაკვეთილები ლაივ ფორმატში ტარდება, ყოველი ჩანაწერი კი დარჩენილი გაქვს ხელმისაწვდომი — რომ საკუთარი ტემპით დაუბრუნდე ნებისმიერ თემას.",
    facts: [
      {
        title: "ლაივ გაკვეთილები + ჩანაწერები",
        description: "კვირაში 2-ჯერ, 2 საათი — გამოტოვებული გაკვეთილი ჩანაწერში გელოდება.",
      },
      {
        title: "პრაქტიკული დავალებები",
        description: "თეორია მაშინვე გადადის საკუთარ პროექტში — არა მხოლოდ ვარჯიშში.",
      },
      {
        title: "საპორტფოლიო პროექტები",
        description: "კურსის ბოლოს გაქვს არა სერტიფიკატის გარდა, საკუთარი ნამუშევრებიც.",
      },
      {
        title: "სერტიფიკატი",
        description: "გაიცემა კურსის დასრულების შემდეგ.",
      },
    ],
  },

  // "Student work should become part of the website's identity" — but no
  // real portfolio pieces were available in the source material. Rendered
  // as an honest, designed empty state rather than stock imagery.
  studentWork: {
    kicker: "04 · ნამუშევრები",
    title: "სტუდენტების პროექტები",
    placeholder: true,
    placeholderNote:
      "ეს განყოფილება მზადდება — მალე გამოქვეყნდება კურსდამთავრებულების რეალური პროექტები.",
  },

  whySkillUp: {
    kicker: "05 · რატომ SKILL UP",
    title: "რას იღებ კურსის ბოლოს",
    points: [
      {
        title: "ორი პროგრამა, ერთი კურსი",
        description: "Photoshop და Illustrator ერთმანეთთან კავშირში ისწავლება, არა ცალ-ცალკე მოდულებად.",
      },
      {
        title: "ლაივ + ჩანაწერი, ორივე",
        description: "არ კარგავ გაკვეთილს, თუ ლაივზე ვერ ესწრები — ჩანაწერი მუდმივად ხელმისაწვდომია.",
      },
      {
        title: "მოქნილი გადახდა",
        description: "სრულად გადახდა, ნაწილ-ნაწილ ან განაწილება საიტზე — შენ ირჩევ.",
      },
      {
        title: "სერტიფიკატი და პორტფოლიო ერთად",
        description: "კურსის დასრულებისას გაქვს დამადასტურებელი დოკუმენტიც და საკუთარი პროექტებიც.",
      },
    ],
  },

  // No real testimonial text was available from the source material —
  // structure is built, content is explicitly marked as pending rather
  // than invented.
  testimonials: {
    kicker: "06 · გამოხმაურება",
    title: "სტუდენტების შეფასებები",
    placeholder: true,
    placeholderNote: "რეალური შეფასებები მალე დაემატება.",
  },

  faq: {
    kicker: "07 · კითხვები",
    title: "ხშირად დასმული კითხვები",
    items: [
      {
        q: "რა პროგრამებს ვისწავლი კურსზე?",
        a: "Adobe Photoshop-ს და Adobe Illustrator-ს — ორივეს ერთი კურსის ფარგლებში.",
      },
      {
        q: "რამდენ ხანს გრძელდება კურსი?",
        a: "3 თვე, კვირაში 2-ჯერ, 2 საათიანი გაკვეთილებით.",
      },
      {
        q: "როგორია გაკვეთილების ფორმატი?",
        a: "ონლაინ, ლაივ რეჟიმში — ყოველი გაკვეთილის ჩანაწერი კი შენთვის ხელმისაწვდომი რჩება.",
      },
      {
        q: "ვისთვისაა კურსი შესაფერისი?",
        a: "დამწყებთათვის — წინასწარი გამოცდილება საჭირო არ არის.",
      },
      {
        q: "რა ღირს კურსი?",
        a: "ჯგუფური, 3-თვიანი კურსი — 300₾. ინდივიდუალური გაკვეთილები — 450₾ (ორივე ფასდაკლებით). გადახდა შესაძლებელია სრულად, ნაწილ-ნაწილ ან საიტზე განაწილებით.",
      },
      {
        q: "მივიღებ სერტიფიკატს?",
        a: "დიახ — კურსის დასრულების შემდეგ.",
      },
    ],
  },

  finalCta: {
    title: "მზად ხარ დიზაინის დასაწყებად?",
    body: "დაგვიკავშირდი — გითხრათ დეტალურად კურსის, ფასისა და დაწყების თარიღის შესახებ.",
    primaryCta: { label: "დაგვირეკე", href: "tel:+995571779931" },
    secondaryCta: { label: "Facebook-ზე მოწერა", href: "https://www.facebook.com/profile.php?id=61569417715901" },
  },

  footer: {
    tagline: "იდეიდან პროფესიამდე.",
    columns: [
      {
        title: "აკადემია",
        links: [
          { label: "აკადემიის შესახებ", href: "#about" },
          { label: "კურსი", href: "#course" },
          { label: "რას ისწავლი", href: "#curriculum" },
        ],
      },
      {
        title: "კონტაქტი",
        links: [
          { label: "571 77 99 31", href: "tel:+995571779931" },
          { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61569417715901" },
          { label: "skup.ge", href: "https://skup.ge" },
        ],
      },
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
