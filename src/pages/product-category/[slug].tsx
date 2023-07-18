import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next';
import HomeLayout from '@/components/layouts/_home';
import CartCounterButton from '@/components/cart/cart-counter-button';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Grid } from '@/components/products/grid';
import Image from 'next/image';
import { Product } from '@/types';
import Categories from '../../../Categories.json';
import { extractMetaTags, extractScriptTags } from 'utils/extractMetaTags';
import SeoByRankMath from '@/components/products/SEO';
interface ContentData {
  title: string;
  content: string;
  acf_meta: {
    title: string;
    sub_text: string;
    content: string;
  };
  category: number;
  featured_image: string;
}
interface Props {
  products: Product[];
  categoryInformation: ContentData | null;
  seoData: any;
}
function ProductCategory(props: Props) {
  const { categoryInformation } = props;

  return (
    <>
      <SeoByRankMath {...props.seoData} />
      {categoryInformation && (
        <div>
          <Image
            src={categoryInformation.featured_image}
            width={2040}
            height={600}
            className="pb-0"
          />
        </div>
      )}
      <div className="container mx-auto mt-4  px-4  lg:px-28">
        {categoryInformation && (
          <div>
            <div className="my-2">Home/Shop/ {categoryInformation?.title}</div>
            <div className="my-4 text-[40px] font-semibold">
              Crystal & Gemstones
            </div>

            <div className="mb-8">
              <p
                dangerouslySetInnerHTML={{
                  __html: categoryInformation?.acf_meta.sub_text,
                }}
              ></p>
            </div>
          </div>
        )}

        <Grid products={props.products} />
        <div className="my-8 border border-black"></div>
        {categoryInformation && (
          <div className="post-content">
            <p
              dangerouslySetInnerHTML={{
                __html: categoryInformation?.acf_meta.content,
              }}
            ></p>
          </div>
        )}
        <CartCounterButton />
      </div>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const { slug } = params!; //* we know it's required because of getStaticPaths

  let url =
    process.env.NEXT_PUBLIC_WP_API + `/api/product-filter?categories=${slug}`;

  const products = await fetch(url).then((r) => r.json());

  const id = getCategoryIdBySlug(products[0]?.categories, slug);

  const categoryInformationUrl = `${process.env.NEXT_PUBLIC_WP_API}/api/posts-with-acf-fields/category/${id}`;
  const categoryInformation = await fetch(categoryInformationUrl).then((r) =>
    r.json()
  );

  const { NEXT_PUBLIC_CMS } = process.env;

  const seoURL = `${NEXT_PUBLIC_CMS}/wp-json/rankmath/v1/getHead?url=${NEXT_PUBLIC_CMS}/product-category/${slug}`;
  const seoData = await fetch(seoURL).then((r) => r.json());
  return {
    props: {
      products: products,
      seoData: {
        meta_tags: extractMetaTags(seoData.head),
        jsonLtdScheam: extractScriptTags(seoData.head),
      },
      categoryInformation: categoryInformation.length
        ? categoryInformation[0]
        : null,
      ...(await serverSideTranslations(locale!, ['common'])),
      type: 'grocery',
    },
  };
};
interface Category {
  id: number;
  name: string;
  slug: string;
  language: string;
  type_id: number;
  created_at: string;
  translated_languages: string[];
  image: any[]; // Assuming the image property can be an array of any type
  pivot: any; // Assuming the pivot property can have any type
}

function getCategoryIdBySlug(categories: Category[], slug: string) {
  if (categories) {
    return categories.find((category) => category.slug === slug)?.id;
  }
}
type ParsedQueryParams = {
  slug: string;
};
export const getStaticPaths: GetStaticPaths<ParsedQueryParams> = async () => {
  let page = '';
  let productList: any = [];

  // const products = await Api.get('products/categories', {
  //   per_page: 10, // 20 products per page
  // });
  Categories.map((p: any) => productList.push({ slug: p.slug }));

  const paths = await productList.map(({ slug }: { slug: any }) => ({
    params: { slug: slug },
  }));

  return {
    paths,
    fallback: 'blocking', //indicates the type of fallback
  };
};
ProductCategory.getLayout = function getLayout(page: any) {
  return <HomeLayout layout={page.props.layout}>{page}</HomeLayout>;
};
export default ProductCategory;
