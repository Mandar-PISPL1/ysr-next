import { Routes } from '@/config/routes';

export const siteSettings = {
  name: 'PickBazar',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'PickBazar',
    href: '/grocery',
    width: 128,
    height: 40,
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  product: {
    placeholderImage: '/product-placeholder.svg',
    cardMaps: {
      grocery: 'Krypton',
      furniture: 'Radon',
      bag: 'Oganesson',
      makeup: 'Neon',
      book: 'Xenon',
      medicine: 'Helium',
      default: 'Argon',
    },
  },
  authorizedLinks: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },

    { href: Routes.checkout, label: 'auth-menu-checkout' },
  ],
  authorizedLinksMobile: [
    { href: Routes.profile, label: 'auth-menu-profile' },
    { href: Routes.orders, label: 'auth-menu-my-orders' },
    { href: Routes.wishlists, label: 'profile-sidebar-my-wishlist' },
    { href: Routes.refunds, label: 'text-my-refunds' },
    { href: Routes.checkout, label: 'auth-menu-checkout' },
    { href: Routes.changePassword, label: 'profile-sidebar-password' },
  ],
  dashboardSidebarMenu: [
    {
      href: Routes.profile,
      label: 'profile-sidebar-profile',
    },
    {
      href: Routes.changePassword,
      label: 'profile-sidebar-password',
    },
    {
      href: Routes.orders,
      label: 'profile-sidebar-orders',
    },
    {
      href: Routes.downloads,
      label: 'profile-sidebar-downloads',
    },
    {
      href: Routes.wishlists,
      label: 'profile-sidebar-my-wishlist',
    },
    {
      href: Routes.questions,
      label: 'profile-sidebar-my-questions',
    },
    {
      href: Routes.refunds,
      label: 'text-my-refunds',
    },
    {
      href: Routes.reports,
      label: 'profile-sidebar-my-reports',
    },
    {
      href: Routes.help,
      label: 'profile-sidebar-help',
    },
    {
      href: Routes.logout,
      label: 'profile-sidebar-logout',
    },
  ],
  sellingAdvertisement: {
    image: {
      src: '/selling.png',
      alt: 'Selling Advertisement',
    },
  },
  cta: {
    mockup_img_src: '/mockup-img.png',
    play_store_link: '/',
    app_store_link: '/',
  },
  footer: {
    copyright: {
      name: 'Your Spiritual Revolution ',
      href: 'https://yourspiritualrevolution.org/',
    },
    address: `Your Spiritual Revolution LLP
    318, Gemstar Commercial Complex,
    Ram Chandra Lane Extension, Kanch Pada,
    Malad West, Mumbai 400064, India.`,
    email: 'amitt@YourSpiritualRevolution.org',
    phone: '+91- 8591706800',
    menus: [
      {
        title: 'Quick Links',
        links: [
          {
            name: 'Home',
            href: '/',
          },
          {
            name: 'Wellness Expo',
            href: '/august-2021-expo',
          },
          {
            name: 'About Us',
            href: '/about-us',
          },
          {
            name: 'Contact Us',
            href: '/contact-us',
          },
          {
            name: 'Write For Us',
            href: '/guest-post-service',
          },
        ],
      },
      {
        title: ' Service',
        links: [
          {
            name: 'Magazine',
            href: `/spiritual-magazine`,
          },
          {
            name: 'Blog',
            href: '/spiritual-blog/',
          },
          {
            name: 'Shop',
            href: '/shop',
          },
          {
            name: 'Integral Healing',
            href: `/integral-healing-service`,
          },
        ],
      },
      {
        title: 'Free Resources',
        links: [
          {
            name: `Guided Meditations`,
            href: `/guided-meditations`,
          },
          {
            name: 'Webinar',
            href: `/webinar`,
          },
          {
            name: 'Music',
            href: '/music',
          },
        ],
      },
      {
        title: 'Policy',
        links: [
          {
            name: `Privacy Policy`,
            href: `/privacy-policy`,
          },
          {
            name: 'Disclaimer',
            href: `/disclaimer`,
          },
          {
            name: 'Terms & Conditions',
            href: '/terms-conditions',
          },
          {
            name: 'Cancellation / Refund Policy',
            href: '/cancellation-refund-policy',
          },
          {
            name: 'Submission Guidelines',
            href: '/submission-guidelines',
          },
        ],
      },
    ],
    payment_methods: [
      {
        img: '/payment/master.png',
        url: '/',
      },
      {
        img: '/payment/skrill.png',
        url: '/',
      },
      {
        img: '/payment/paypal.png',
        url: '/',
      },
      {
        img: '/payment/visa.png',
        url: '/',
      },
      {
        img: '/payment/discover.png',
        url: '/',
      },
    ],
  },
};
