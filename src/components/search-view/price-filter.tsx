import Slider from '@/components/ui/forms/range-slider';
import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
const { Range } = Slider;
const defaultPriceRange = [0, 1000];
const PriceFilter = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const selectedValues = useMemo(
    () =>
      router.query.min_price
        ? (
            `${router.query.min_price},${router.query.max_price}` as string
          ).split(',')
        : defaultPriceRange,
    [router.query.min_price]
  );

  const [state, setState] = useState<number[] | string[]>(selectedValues);

  useEffect(() => {
    setState(selectedValues);
  }, [selectedValues]);

  function handleChange(value: number[]) {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,

        min_price: value[0],
        max_price: value[1],
      },
    });
  }

  return (
    <>
      <span className="sr-only">{t('text-sort-by-price')}</span>
      <Range
        allowCross={false}
        min={0}
        max={2000}
        //@ts-ignore
        defaultValue={state}
        //@ts-ignore
        value={state}
        onChange={(value) => setState(value)}
        onAfterChange={handleChange}
      />
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="flex flex-col items-start rounded border border-gray-200 bg-gray-100 p-2">
          <label className="text-sm font-semibold text-gray-400">Min</label>
          <span className="text-sm font-bold text-heading">{state[0]}</span>
        </div>
        <div className="flex flex-col rounded border border-gray-200 bg-gray-100 p-2">
          <label className="text-sm font-semibold text-gray-400">Max</label>
          <span className="text-sm font-bold text-heading">{state[1]}</span>
        </div>
      </div>
    </>
  );
};

export default PriceFilter;
