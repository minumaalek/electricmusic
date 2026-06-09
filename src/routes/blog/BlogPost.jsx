import { getPostByURL } from "../../js/blogs";
import {
  Comments,
  useEffect,
  useState,
  useRef,
  useParams,
  Helmet,
} from "../..";
import { useImmer } from "use-immer";
import Breadcrumb from "../../components/Breadcrumb";

function BlogPost() {
  const { blogURL } = useParams();
  // const contentRef = useRef(null);
  const [post, setPost] = useImmer(null);
  const [headings, setHeadings] = useState([]);
  const [contentWithIds, setContentWithIds] = useState("");

  useEffect(() => {
    const fetchedPost = getPostByURL(blogURL);
    setPost(fetchedPost);
  }, [blogURL]);

  useEffect(() => {
    if (!post || !post.Content) {
      setHeadings([]);
      setContentWithIds("");
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(post.Content, "text/html");
    const h2s = doc.querySelectorAll("h2");

    const extractedHeadings = Array.from(h2s).map((h2) => h2.innerText);
    setHeadings(extractedHeadings);

    h2s.forEach((h2, index) => {
      const id = `heading-${index}`;
      h2.setAttribute("id", id);
    });

    const htmlContent = doc.body.innerHTML;
    setContentWithIds(htmlContent);
  }, [post]);

  const handleHeadingClick = (index) => {
    const element = document.getElementById(`heading-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!post) {
    return <div className="p-10">Loading...</div>;
  }
  return (
    <div className="blogPost flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>{post.Title}</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col">
        <div className="h-10 w-full p-2 ">
          <Breadcrumb />
        </div>
        <div className="bg-black w-full h-48 lg:h-80 mb-3"></div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-6">{post.Title}</h1>
        <div className="flex flex-col-reverse lg:flex-row gap-10">
          <main className="w-full lg:w-2/3 lg:pr-10">
            <article
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentWithIds }}
            />
          </main>

          <aside className="lg:block w-full lg:w-1/3 lg:sticky top-0 lg:top-10 h-fit">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4">Contents</h3>
              <ul className="list-disc pl-5">
                {headings.map((text, i) => (
                  <li
                    key={i}
                    className="cursor-pointer text-gray-500 hover:text-black border-none transition-colors my-2"
                    onClick={() => handleHeadingClick(i)}
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <section className="bg-slate-50 py-10 ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Comments</h2>
          <Comments items={post.Comments} />
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
