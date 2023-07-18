import Image from 'next/image';
import Link from '../ui/link';
import { BlogPost } from '@/types';

interface Props {
  posts: BlogPost[];
}

export default function FeatureBlog(props: Props) {
  const { posts } = props;
  const firstPost = posts[0];
  if (!firstPost) {
    return null;
  }

  return (
    <div className="font-newsreader ">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 9).map((post: any) => (
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
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered.replace(
                    /^(.{120}[^\s]*).*/,
                    '$1'
                  ),
                }}
              ></p>
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
