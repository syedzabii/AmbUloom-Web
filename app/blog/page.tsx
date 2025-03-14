"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "The Importance of Early Childhood Education",
    description:
      "Discover why early childhood education is crucial for lifelong learning and development.",
    date: "March 15, 2024",
    category: "Education",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "5 Tips for Effective Online Learning",
    description:
      "Learn how to make the most of online learning with these practical tips.",
    date: "March 10, 2024",
    category: "Learning",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "How to Foster Creativity in Kids",
    description:
      "Explore strategies to nurture creativity and imagination in children.",
    date: "March 5, 2024",
    category: "Parenting",
    image: "/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "The Role of Technology in Modern Education",
    description:
      "Understand how technology is transforming the way we teach and learn.",
    date: "February 28, 2024",
    category: "Technology",
    image: "/images/blog-4.jpg",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blog posts based on search and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-green-50 py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl font-bold text-green-800 mt-7">
            Amba ul Uloom Blog
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Insights on education, parenting, and learning
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-8 flex flex-col sm:flex-row gap-3"
        >
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-2/3 px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-green-500 focus:outline-none"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full sm:w-1/3 px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-green-500 focus:outline-none"
          >
            <option value="All">All Categories</option>
            <option value="Education">Education</option>
            <option value="Learning">Learning</option>
            <option value="Parenting">Parenting</option>
            <option value="Technology">Technology</option>
          </select>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <span className="text-xs text-green-700 font-medium">
                  {post.category}
                </span>
                <h2 className="mt-1 text-lg font-medium text-gray-800">
                  {post.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{post.date}</span>
                  <button className="px-3 py-1 text-sm bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors">
                    Read
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
