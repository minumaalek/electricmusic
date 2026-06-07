import { blogPosts, getPostByQuery } from "../../js/blogs";
import { Link, useSearchParams, useMemo } from "../..";
import { Helmet } from "react-helmet-async";
function BlogList() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const posts = useMemo(() => {
    if (query) return getPostByQuery(query);

    return blogPosts;
  }, [searchParams]);

  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <div className="w-screen h-screen flex flex-col items-center justify-center lg:px-60 mt-80 lg:mt-0 blogList relative">
        <div className="w-full h-full flex flex-col lg:h-auto lg:grid lg:grid-flow-rows lg:grid-cols-3 items-center justify-center gap-3 mt-20">
          {posts.map((post) => {
            return (
              <Link
                to={`/blog/${post.URL}`}
                key={post.id}
                className="w-5/6 md:w-1/2 h-1/4 lg:h-auto lg:w-auto bg-gray-200 shadow-md shadow-black flex flex-col justify-around items-center text-center p-2 relative"
              >
                <div className="w-full h-40 bg-black">
                  {/* <img src="" alt="" /> */}
                </div>
                <span className="text-lg">{post.Title}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlogList;
