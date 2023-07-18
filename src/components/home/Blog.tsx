import Image from 'next/image';
import Link from '../ui/link';
type BlogPost = {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  diff: string;
  excerpt: {
    rendered: string;
  };
  slug: string;
  featuredImg: {
    thumbnail: string | Boolean;
    medium: string | Boolean;
    large: string | Boolean;
  };
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  author: {
    name: string;
  };
};

interface Props {
  posts: BlogPost[];
}

export default function Blog(props: Props) {
  const { posts } = props;
  const firstPost = posts[0];
  if (!firstPost) {
    return null;
  }

  return (
    <div className="font-newsreader 2xl:px-32 ">
      <div className="flex justify-center">
        <div className="grid-header mt-8 flex max-w-max justify-center ">
          <h1
            className={`  my-4 text-center    font-bold  text-[#2459C6] lg:text-[30px]  `}
          >
            Blog
          </h1>
        </div>
      </div>
      <div className="my-4 flex w-full gap-2 md:hidden">
        <input
          className="w-full rounded-lg border px-4 py-2 focus:outline-none "
          placeholder="Search Blog By Name.."
        />
        <button className="flex items-center gap-2 rounded-md bg-black p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          Search
        </button>
      </div>
      <section className="grid gap-4 md:grid-cols-2">
        <div>
          <div>
            <div>
              {firstPost.featuredImg.large && (
                <Image
                  src={firstPost.featuredImg.large}
                  width={600}
                  height={300}
                  alt=""
                />
              )}
            </div>
            <div>
              <Link href={`/blog/${firstPost.slug}`}>
                <p className="my-1 text-[20px] font-semibold">
                  {firstPost.title.rendered}
                </p>
              </Link>
              <div className="my-1 font-semibold text-red-500">
                <span>{firstPost.author.name}</span> | {firstPost.diff} Ago
              </div>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: firstPost.excerpt.rendered,
                  }}
                />
              </div>
              <Link href={`/blog/${firstPost.slug}`}>
                <div className="my-2 font-semibold text-blue-800">
                  Read Article →
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="hidden w-full  gap-2 md:flex">
            <input
              className="w-full rounded-lg border px-4 py-2 focus:outline-none "
              placeholder="Search Blog By Name.."
            />
            <button className="flex items-center gap-2 rounded-md bg-black p-2 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              Search
            </button>
          </div>
          <div className="mt-4 bg-[#F1F1F1] px-4 py-4">
            <p className="text-xl font-semibold text-blue-800">Featured</p>
            <div>
              {posts.slice(1, 4).map((post) => (
                <div className="my-2 flex gap-5">
                  <div className="flex-shrink-0">
                    <Image
                      src={post.featuredImg.medium}
                      width={100}
                      height={100}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col ">
                    <Link href={`/blog/${post.slug}`}>
                      <p className="font-semibold">{post.title.rendered}</p>
                    </Link>
                    <p className="text-red-600">
                      {post.author.name} {post.diff}
                    </p>
                    <Link className="text-blue-800" href={`/blog/${post.slug}`}>
                      <div>Read Article →</div>{' '}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="my-6  border-b border-black"></div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(4, posts.length).map((post: any) => (
          <div key={post.id}>
            <div>
              <Image
                src={post.featuredImg.medium}
                width={500}
                className="rounded-md"
                height={300}
                alt={post.title.rendered}
              />
            </div>
            <div className="text-[14px] font-bold text-[#333333] lg:text-[20px]">
              <p dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </div>
            <div className="text-[12px]  font-semibold text-[#077A43] lg:text-[14px]">
              <span className=" ">{post.author.name}</span> |{' '}
              <span className="capitalize">{post.diff} Ago</span>
            </div>
            <div className="text-[12px]">
              {post.excerpt.rendered.replace(/^(.{120}[^\s]*).*/, '$1')} .
            </div>
            <Link
              className="my-4 text-[12px] font-bold text-[#166ab4] lg:text-[18px]"
              href={`/blog/${post.slug}`}
            >
              Read Article →{' '}
            </Link>
          </div>
        ))}
      </div>
      {/* <div className="my-4 flex justify-center">
        <button className="blog-btn ">View All Blogs</button>
      </div> */}
    </div>
  );
}
