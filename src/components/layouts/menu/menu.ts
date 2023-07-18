import Categories from 'Categories.json';
export const healing_services = [
  {
    id: 1,
    name: 'Healing Services',
    slug: 'healing-services',
  },
  {
    id: 2,
    name: 'Integral Healing',
    slug: '/integral-healing-service',
  },
  {
    id: 3,
    name: 'Distance Reiki Healing',
    slug: '/reiki-healing',
  },
  {
    id: 4,
    name: 'Distance Aura &  Chakra Healing',
    slug: '/aura-chakra-healing',
  },
  {
    id: 5,
    name: 'Distance Emotion &  Body Code',
    slug: '/distance-emotion-body-code',
  },
  {
    id: 6,
    name: 'Distance Lama Fera Healing',
    slug: '/distance-lama-fera-healing ',
  },
  {
    id: 7,
    name: 'Distance Money Reiki',
    slug: '/distance-money-reiki',
  },
  {
    id: 8,
    name: 'Distance Pranic Healing',
    slug: '/distance-pranic-healing',
  },
  {
    id: 9,
    name: 'Distance Spiritual Healing and /n Divine Light Guidance',
    slug: '/distance-spiritual-healing-divine-light-guidance',
  },
  {
    id: 10,
    name: 'The Wave of Fortune Lifeline Activation',
    slug: 'the-wave-of-fortune-lifeline-activation',
  },
  {
    id: 11,
    name: 'Astrology Consultation',
    slug: '/astrology-consultation',
  },
];
export const shop = Categories.map((c) => ({
  id: Math.floor(Math.random()),
  name: c.name,
  slug: `/product-category/` + c.slug,
}));
