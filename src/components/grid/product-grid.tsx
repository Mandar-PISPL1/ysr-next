import Image from 'next/image';
import Link from '@/components/ui/link';

export default function Productgrid(props: any) {
  const { heading, products } = props;
  return (
    <div>
      <center>
        <div className="grid-header mt-8 flex max-w-max justify-center ">
          <h1 className="   text-center    font-bold  text-[#2459C6] lg:text-[30px]">
            {heading}
          </h1>
        </div>
      </center>
      <div className="my-8 grid grid-cols-2 gap-2 lg:grid-cols-4  lg:gap-4">
        {products.map((product: any) => (
          <div key={product.id} className="flex flex-col justify-start">
            <Image
              className="box-shadow mb-2 rounded-md drop-shadow-2xl"
              src={product.images[0].src}
              width={300}
              height={200}
            />
            <Link href={`/products/${product.slug}`}>
              <p className="font-newsreader text-[12px] font-semibold text-[#2459C6] lg:text-[18px]">
                {product.name}
              </p>
            </Link>

            <div>
              {product.sale_price ? (
                <>
                  ₹{' '}
                  <del className="text-muted-light">
                    {product.regular_price}
                  </del>{' '}
                  <span>₹{product.sale_price}</span>
                </>
              ) : (
                <>
                  ₹ <span>{product.price}</span>{' '}
                </>
              )}
            </div>
            <div className="flex justify-center">
              <button className="cart-btn my-2 bg-blue-900 px-3 py-1 text-white lg:py-2">
                Add To Cart{' '}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
