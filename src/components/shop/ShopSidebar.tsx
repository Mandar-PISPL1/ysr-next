import Search from '@/components/ui/search/search';
import { CustomDisclosure } from '@/components/ui/disclosure';

import ArrowNarrowLeft from '@/components/icons/arrow-narrow-left';
import { useIsRTL } from '@/lib/locals';
import CategoryFilter from '@/components/search-view/category-filter-view';
import PriceFilter from '@/components/search-view/price-filter';
import { drawerAtom } from '@/store/drawer-atom';
import { useAtom } from 'jotai';
import classNames from 'classnames';
import { useRouter } from 'next/router';

const FieldWrapper = ({ children, title }: any) => (
  <div className="border-b border-gray-200 py-7 last:border-0">
    <CustomDisclosure title={title}>{children}</CustomDisclosure>
  </div>
);
function ClearFiltersButton() {
  const router = useRouter();

  function clearFilters() {
    const {
      price,
      category,
      sortedBy,
      orderBy,
      tags,
      manufacturer,
      categories,
      min_price,
      max_price,

      text,
      ...rest
    } = router.query;
    router.push({
      pathname: router.pathname,
      query: {
        ...rest,
      },
    });
  }
  return (
    <button
      className="text-sm font-semibold text-body transition-colors hover:text-red-500 focus:text-red-500 focus:outline-none lg:m-0"
      onClick={clearFilters}
    >
      Clear All
    </button>
  );
}
export default function ShopSidebar() {
  const [_, closeSidebar] = useAtom(drawerAtom);
  const { isRTL } = useIsRTL();

  return (
    <>
      <div
        className={
          'flex h-full w-full flex-col  rounded-xl border-gray-200 bg-white px-5 lg:h-auto lg:border'
        }
      >
        <div className="sticky top-0 z-10 flex items-center justify-between rounded-tl-xl rounded-tr-xl border-b border-gray-200 bg-white px-5 py-6 lg:static">
          <div className="flex items-center space-x-3 rtl:space-x-reverse lg:space-x-0">
            <button
              className="text-body focus:outline-none lg:hidden"
              onClick={() => closeSidebar({ display: false, view: '' })}
            >
              <ArrowNarrowLeft
                className={classNames('h-7', {
                  'rotate-180': isRTL,
                })}
                strokeWidth={1.7}
              />
              <span className="sr-only">Close</span>
            </button>

            <h3 className="text-xl font-semibold text-heading lg:text-2xl">
              Filter
            </h3>
          </div>

          <ClearFiltersButton />
        </div>
        <FieldWrapper title="text-search">
          <Search variant="minimal" label="search" />
        </FieldWrapper>

        <FieldWrapper title="text-sort-by-price">
          <PriceFilter />
        </FieldWrapper>

        <FieldWrapper title="text-categories">
          <CategoryFilter type={'spritual'} />
        </FieldWrapper>
      </div>
    </>
  );
}
