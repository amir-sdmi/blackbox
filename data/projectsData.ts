export type ProjectDetail = {
  slug: string;
  card: {
    title: string;
    category: string;
    filter: string;
    image: string;
  };
  breadcrumb: {
    home: string;
    details: string;
  };
  badge: string;
  title: string;
  lead: string;
  info: {
    title: string;
    dateLabel: string;
    date: string;
    clientLabel: string;
    client: string;
    categoryLabel: string;
    category: string;
    viewProjectsButton: string;
  };
  images: {
    caption: string;
    main: string;
    gallery: string[];
  };
  description: {
    title: string;
    paragraphs: string[];
  };
  features: string[];
  cta: {
    badge: string;
    title: string;
    button: string;
    link: string;
  };
  columns: {
    title: string;
    items: string[];
  }[];
  relatedTitle: string;
  relatedSlugs?: string[];
};

const breadcrumb = { home: "خانه", details: "جزئیات پروژه" } as const;
const ctaBase = {
  badge: "پیشنهاد مشاوره",
  button: "درخواست جلسه تخصصی",
  link: "#contact-with-us",
} as const;

export const projectsData: ProjectDetail[] = [
  {
    slug: "hot-rolling-garmsar",
    card: {
      title: "خط نورد گرم فولاد گرمسار",
      category: "طراحی و ساخت",
      filter: "طراحی و ساخت",
      image:
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-1.jpg",
    },
    breadcrumb,
    badge: "خط نورد گرم",
    title: "ساخت خط نورد گرم با تجهیزات کامل انتقال و برش",
    lead: "طراحی و ساخت کامل خط نورد گرم شامل اره‌های گرم‌بر، همدورها، گاردان، استندها، خطوط کانواير و مجموعه غلطک‌ها برای کارخانه نورد نوین فولاد گرمسار.",
    info: {
      title: "جزئیات پروژه",
      dateLabel: "سال اجرا:",
      date: "۱۴۰۲",
      clientLabel: "کارفرما:",
      client: "نورد نوین فولاد گرمسار",
      categoryLabel: "نوع خدمات:",
      category: "طراحی و ساخت خط جدید",
      viewProjectsButton: "بازگشت به پروژه‌ها",
    },
    images: {
      caption: "خط نورد گرم",
      main: "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-1.jpg",
      gallery: [
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-2.jpg",
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-3.jpg",
      ],
    },
    description: {
      title: "شرح پروژه",
      paragraphs: [
        "این پروژه شامل مهندسی کامل خط نورد گرم از مرحله طراحی تا نصب و راه‌اندازی بود. کلیه تجهیزات اصلی و جانبی مطابق ظرفیت تولید کارفرما و استانداردهای به‌روز ساخته شد.",
        "سیستم کنترل خط به صورت تمام‌اتوماتیک طراحی گردید تا تنظیم سرعت و کنترل کیفیت محصول با دقت بالا انجام شود.",
        "پس از راه‌اندازی، تیم بلک باکس فکتوری فرآیند تست سرد و گرم، آموزش اپراتور و تحویل نهایی را با تضمین عملکرد خط بر عهده داشت."
      ],
    },
    features: [
      "طراحی مکانیکی و برقی یکپارچه",
      "ساخت تجهیزات کلیدی با استاندارد اروپایی",
      "پیاده‌سازی سامانه مانیتورینگ و کنترل کیفیت"
    ],
    cta: {
      ...ctaBase,
      title: "برای طراحی خط نورد مطابق ظرفیت تولید شما آماده ارائه مشاوره هستیم.",
    },
    columns: [
      { title: "خدمات کلیدی", items: ["طراحی مفهومی", "مهندسی جزئیات", "ساخت تجهیزات", "راه‌اندازی و آموزش"] },
      { title: "تجهیزات", items: ["اره گرم‌بر", "کانواير انتقال", "استند و غلطک", "سیستم خنک‌کن"] },
      { title: "نتایج", items: ["افزایش ظرفیت تولید", "کنترل تمام‌اتوماتیک", "کاهش توقف خط"] },
      { title: "پشتیبانی", items: ["حضور تیم فنی", "برنامه تعمیرات", "تضمین عملکرد"] }
    ],
    relatedTitle: "پروژه‌های مشابه",
    relatedSlugs: ["industrial-rebar-alloy", "angle-channel-saba", "elevator-rail-elsa"],
  },
  {
    slug: "industrial-rebar-alloy",
    card: {
      title: "نورد میلگردهای صنعتی",
      category: "طراحی و ساخت",
      filter: "طراحی و ساخت",
      image:
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-4.jpg",
    },
    breadcrumb,
    badge: "میل‌گرد آلیاژی",
    title: "ساخت نورد میلگردهای صنعتی فولاد آلیاژی",
    lead: "طراحی و ساخت خط نورد میلگردهای صنعتی برای تولید محصولات آلیاژی با دقت ابعادی بالا و کنترل دمایی چند ناحیه‌ای.",
    info: {
      title: "جزئیات پروژه",
      dateLabel: "سال اجرا:",
      date: "در دست اقدام",
      clientLabel: "کارفرما:",
      client: "آژن پولاد احسان",
      categoryLabel: "نوع خدمات:",
      category: "طراحی و ساخت",
      viewProjectsButton: "بازگشت به پروژه‌ها",
    },
    images: {
      caption: "خط نورد میلگرد",
      main: "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-4.jpg",
      gallery: [
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-5.jpg",
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-6.jpg",
      ],
    },
    description: {
      title: "اهداف پروژه",
      paragraphs: [
        "هدف پروژه ایجاد خط تولید میلگرد آلیاژی با توان تولید مستمر و نظارت دقیق بر کیفیت محصول بود.",
        "سامانه‌های کنترل و اتوماسیون فرآیند به گونه‌ای طراحی شدند که ردیابی کیفیت و مدیریت تولید به صورت لحظه‌ای انجام شود.",
        "پروژه شامل ساخت استندهای نورد، کوره پیش‌گرم، میزهای رولگان و تجهیزات بسته‌بندی نهایی است."
      ],
    },
    features: [
      "طراحی اختصاصی برای میلگرد آلیاژی",
      "کنترل دمایی چند مرحله‌ای",
      "قابلیت تولید سایزهای متنوع"
    ],
    cta: {
      ...ctaBase,
      title: "به دنبال توسعه خط میلگرد صنعتی هستید؟ با متخصصان ما گفتگو کنید.",
    },
    columns: [
      { title: "خدمات", items: ["تحلیل ظرفیت", "طراحی نورد", "تامین تجهیزات", "نصب و تست"] },
      { title: "تجهیزات", items: ["کوره پیش‌گرم", "استندهای نورد", "سیستم برش", "بسته‌بندی"] },
      { title: "نوآوری", items: ["کنترل هوشمند", "اتوماسیون فرآیند", "پایش آنلاین کیفیت"] },
      { title: "پشتیبانی", items: ["آموزش اپراتور", "مستندسازی کامل", "پشتیبانی فنی"] }
    ],
    relatedTitle: "پروژه‌های مرتبط",
    relatedSlugs: ["hot-rolling-garmsar", "angle-channel-saba", "elevator-rail-elsa"],
  },
  {
    slug: "angle-channel-saba",
    card: {
      title: "خط نبشی و ناودانی",
      category: "بازسازی و ارتقا",
      filter: "بازسازی و ارتقا",
      image:
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-3.jpg",
    },
    breadcrumb,
    badge: "بازسازی خط",
    title: "بازسازی و راه‌اندازی خط نورد نبشی، ناودانی و ورق",
    lead: "افزایش ظرفیت تولید و بهینه‌سازی مصرف انرژی در خط نورد صبا فولاد با بازسازی کامل تجهیزات.",
    info: {
      title: "جزئیات پروژه",
      dateLabel: "سال اجرا:",
      date: "۱۴۰۰",
      clientLabel: "کارفرما:",
      client: "صبا فولاد",
      categoryLabel: "نوع خدمات:",
      category: "بازسازی و ارتقا",
      viewProjectsButton: "بازگشت به پروژه‌ها",
    },
    images: {
      caption: "بازسازی خط نورد",
      main: "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-3.jpg",
      gallery: [
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-4.jpg",
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-5.jpg",
      ],
    },
    description: {
      title: "بازسازی و بهینه‌سازی",
      paragraphs: [
        "خط قدیمی نورد نبشی و ناودانی با هدف افزایش بهره‌وری و کاهش مصرف انرژی بازطراحی و تجهیز شد.",
        "تغییر کاربری بخش‌هایی از خط برای تولید مقاطع متنوع‌تر و ارتقای سیستم‌های کنترل از جمله اقدامات کلیدی بود.",
        "پس از نصب تجهیزات جدید، تنظیمات فرآیندی و آموزش تیم تولید جهت بهره‌برداری پایدار انجام شد."
      ],
    },
    features: [
      "افزایش راندمان انرژی",
      "بازطراحی مسیر تولید",
      "نصب تجهیزات اندازه‌گیری و کنترل جدید"
    ],
    cta: {
      ...ctaBase,
      title: "خط تولید فعلی شما نیاز به بازسازی دارد؟ ما برنامه ارتقای مرحله‌ای ارائه می‌دهیم.",
    },
    columns: [
      { title: "دامنه کار", items: ["گزارش وضع موجود", "طراحی مجدد", "تامین تجهیزات", "راه‌اندازی"] },
      { title: "تجهیزات", items: ["سیستم خنک‌کن", "غلطک‌های جدید", "اتوماسیون کنترل", "برش دقیق"] },
      { title: "مزایا", items: ["افزایش ظرفیت", "کاهش توقف تولید", "مصرف انرژی کمتر"] },
      { title: "پشتیبانی", items: ["بازدید دوره‌ای", "آموزش تیم", "قطعات یدکی"] }
    ],
    relatedTitle: "پروژه‌های مرتبط",
    relatedSlugs: ["hot-rolling-garmsar", "industrial-rebar-alloy", "elevator-rail-elsa"],
  },
  {
    slug: "elevator-rail-elsa",
    card: {
      title: "انتقال و واورهال خط ریل آسانسور",
      category: "اتوماسیون",
      filter: "اتوماسیون",
      image:
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-6.jpg",
    },
    breadcrumb,
    badge: "ریل آسانسور",
    title: "انتقال خط نورد ریل آسانسور و اتوماسیون کامل T50 و T70",
    lead: "انتقال خط نورد ریل آسانسور از ترکیه به ایران، بازسازی تجهیزات و پیاده‌سازی سامانه اتوماسیون جدید برای شرکت السا.",
    info: {
      title: "جزئیات پروژه",
      dateLabel: "سال اجرا:",
      date: "۱۴۰۰",
      clientLabel: "کارفرما:",
      client: "السا",
      categoryLabel: "نوع خدمات:",
      category: "انتقال و اتوماسیون",
      viewProjectsButton: "بازگشت به پروژه‌ها",
    },
    images: {
      caption: "خط ریل آسانسور",
      main: "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-6.jpg",
      gallery: [
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-5.jpg",
        "https://doob-laravel.pixcelsthemes.com/livePreview/assets/images/portfolio/portfolio-4.jpg",
      ],
    },
    description: {
      title: "انتقال و اتوماسیون",
      paragraphs: [
        "خط نورد ریل آسانسور به همراه تجهیزات T50 و T70 از کشور ترکیه به طور کامل به ایران منتقل شد و پس از بازسازی، در سایت جدید نصب گردید.",
        "سامانه‌های کنترلی و اتوماسیون خط مطابق نیازهای جدید مشتری بازنویسی و تجهیزات اندازه‌گیری دقیق نصب شد.",
        "آموزش اپراتور، راه‌اندازی مرحله‌ای و پشتیبانی فنی پس از بهره‌برداری بخشی از خدمات ارائه شده بود."
      ],
    },
    features: [
      "انتقال بین‌المللی تجهیزات",
      "بازسازی و ارتقای سیستم کنترل",
      "پیاده‌سازی اتوماسیون و پایش کیفیت"
    ],
    cta: {
      ...ctaBase,
      title: "برای انتقال و اتوماسیون خطوط تولید خود با ما در تماس باشید.",
    },
    columns: [
      { title: "خدمات", items: ["بازبینی فنی", "واورهال تجهیزات", "راه‌اندازی", "آموزش"] },
      { title: "تجهیزات", items: ["ریل T50/T70", "سیستم‌های کنترل", "تجهیزات اندازه‌گیری", "سیستم‌های ایمنی"] },
      { title: "مزایا", items: ["کاهش زمان توقف", "اتوماسیون کامل", "افزایش کیفیت خروجی"] },
      { title: "پشتیبانی", items: ["نگهداری دوره‌ای", "آموزش تکمیلی", "قطعات یدکی"] }
    ],
    relatedTitle: "پروژه‌های مرتبط",
    relatedSlugs: ["hot-rolling-garmsar", "industrial-rebar-alloy", "angle-channel-saba"],
  },
];

export function findProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}

