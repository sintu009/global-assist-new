import React from "react";
import { Link } from "react-router-dom";
import cs1 from "../assets/blog1.png";
import cs2 from "../assets/blog2.png";
import cs3 from "../assets/blog3.png";
import cs4 from "../assets/blog4.png";

const blogs = [
  {
    title: "Need Help? Hire a Social Media Virtual Assistant",
    image: cs1,
    link: "/blog-social-media-virtual-assistant",
  },
  {
    title: "Virtual Assistant Bookkeeping for Small Businesses",
    image: cs2,
    link: "/blog-virtual-assistant-bookkeeping",
  },
  {
    title: "Why Small Businesses Are Turning to Affordable Virtual Assistants",
    image: cs3,
    link: "/blog-affordable-virtual-assistants-for-small-business",
  },
  {
    title: "Why Your Business Needs Local SEO in 2025",
    image: cs4,
    link: "/blog-local-seo-for-business-2025",
  },
];

const Blog = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-[#0A0D17]">
      <h2 className="text-4xl font-bold text-center mb-12">Our Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <Link
            to={blog.link}
            key={index}
            className="group block border rounded-2xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold group-hover:text-purple-700 transition">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Click to read the full blog
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
