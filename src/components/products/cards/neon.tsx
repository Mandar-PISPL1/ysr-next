import { Image } from '@/components/ui/image';
import cn from 'classnames';
import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import { PlusIcon } from '@/components/icons/plus-icon';
import { useRouter } from 'next/router';
import Link from 'next/link';

type NeonProps = {
  product: any;
  className?: string;
};

const Neon: React.FC<NeonProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const {
    name,
    image,
    quantity,
    min_price,
    max_price,
    in_stock,
    product_type,
  } = product ?? {};
  const { price, basePrice, discount } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });

  const { price: minPrice } = usePrice({
    amount: min_price,
  });
  const { price: maxPrice } = usePrice({
    amount: max_price,
  });

  const { openModal } = useModalAction();

  function handleProductQuickView() {
    router.push(`/products/${product.slug}`);
    // return openModal('PRODUCT_DETAILS', product.slug);
  }
  const src = image?.original ? image?.original : productPlaceholder.src;
  if (product_type.toLowerCase() === 'variable') {
    return <></>;
  }
  return (
    <article
      className={cn(
        'product-card cart-type-neon h-full transform overflow-hidden rounded    bg-light transition-all duration-200 hover:-translate-y-0.5 hover:shadow',
        className
      )}
    >
      <div
        className="relative flex w-auto cursor-pointer items-center justify-center sm:h-44 md:h-48"
        // onClick={handleProductQuickView}
      >
        <span className="sr-only">{t('text-product-image')}</span>
        <Image
          src={src}
          alt={name}
          // layout="fill"
          height={200}
          width={400}
          // objectFit="contain"
          className="product-image object-cover shadow-2xl"
        />
        {discount && (
          <div
            style={{
              backgroundImage:
                'linear-gradient(70deg, #C32F34 0%, #487DB4 100%)',
            }}
            className="absolute top-3 rounded bg-accent px-1.5 text-xs font-semibold leading-6 text-light ltr:right-3 rtl:left-3 sm:px-2 md:top-4 md:px-2.5 ltr:md:right-4 rtl:md:left-4"
          >
            {discount} off
          </div>
        )}
      </div>
      {/* End of product image */}

      <header className="p-3 md:p-6">
        {product_type.toLowerCase() === 'variable' ? (
          <div className="mb-2">
            <span className="text-sm font-semibold text-heading md:text-base">
              {minPrice}
            </span>
            <span> - </span>
            <span className="text-sm font-semibold text-heading md:text-base">
              {maxPrice}
            </span>
          </div>
        ) : (
          <div className="mb-2 flex items-center">
            <span className="text-sm font-semibold text-heading md:text-base">
              {price}
            </span>
            {basePrice && (
              <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
                {basePrice}
              </del>
            )}
          </div>
        )}
        {/* End of product price */}
        <Link href={`/products/${product.slug}`}>
          <h3
            className="mb-4 cursor-pointer truncate text-xs text-body md:text-sm"
            // onClick={handleProductQuickView}
          >
            {name}
          </h3>
        </Link>

        {product_type.toLowerCase() === 'variable' ? (
          <>
            {Number(in_stock) > 0 && (
              <button
                // onClick={handleProductQuickView}
                className="group flex h-7 w-full items-center justify-between rounded bg-gray-100 text-xs text-body-dark transition-colors hover:border-accent hover:bg-accent hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-none md:h-9 md:text-sm"
              >
                <span className="flex-1">Add</span>
                <span className="grid h-7 w-7 place-items-center bg-gray-200 transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600 ltr:rounded-tr ltr:rounded-br rtl:rounded-tl rtl:rounded-bl md:h-9 md:w-9">
                  <PlusIcon className="h-4 w-4 stroke-2" />
                </span>
              </button>
            )}
          </>
        ) : (
          <>
            {Number(in_stock) > 0 && (
              <AddToCart variant="neon" data={product} />
            )}
          </>
        )}

        {Number(in_stock) <= 0 && (
          <div className="rounded bg-red-500 px-2 py-1.5 text-center text-xs text-light sm:py-2.5">
            {t('text-out-stock')}
          </div>
        )}
        {/* End of add to cart */}
      </header>
    </article>
  );
};

export default Neon;
