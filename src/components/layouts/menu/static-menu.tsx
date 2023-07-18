import { CaretDown } from '@/components/icons/caret-down';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { useTranslation } from 'next-i18next';
import GroupsDropdownMenu from './groups-menu';
import DropdownMenu from './dropdown-menu';
import { healing_services, shop } from './menu';

const headerLinks = [
  { href: '/', icon: null, label: 'Home' },
  {
    href: '/shop',
    label: ' Shop',
    subMenu: true,
    comp: (
      <DropdownMenu groups={shop} defaultGroup={{ id: '0', name: 'Shop' }} />
    ),
  },
  { href: '/magazine', label: 'Magazine' },

  { href: '/our-certified-healers', label: 'Healers' },
  {
    href: '/integral-healing-service/',
    label: 'Healing Services',
    subMenu: true,
    comp: (
      <DropdownMenu
        groups={healing_services}
        defaultGroup={{ id: '0', name: 'Healing Services' }}
      />
    ),
  },
  { href: '/spiritual-blog', label: 'Blog' },
  { href: '/submit-guest-post', label: 'Submit Article' },
];

const StaticMenu = () => {
  const { t } = useTranslation('common');

  return (
    <>
      {headerLinks.map(({ href, label, icon, subMenu, comp }) => (
        <li key={`${href}${label}`}>
          <Link
            href={href}
            className="flex items-center font-normal text-heading no-underline transition duration-200 hover:text-accent focus:text-accent"
          >
            {subMenu ? comp : t(label)}

            {icon && <span className="mx-2 ltr:mr-2 rtl:ml-2">{icon}</span>}
          </Link>
        </li>
      ))}
    </>
  );
};

export default StaticMenu;
