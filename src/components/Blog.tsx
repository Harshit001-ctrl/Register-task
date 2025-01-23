import React from "react";
import BlogCard from "../components/BlogCard";

const blogData = [
  {
    author: "Prakash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small Business & Startup",
    description: "Learn the secrets of transforming a 2-14 team into a Super Bowl-winning Dynasty.",
    categories: ["Tax & Audit", "Management"],
    imageUrl: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Mental models are simple expressions of complex processes realtionship.",
    categories: ["Tax", "Research", "Compliance"],
    imageUrl: "https://img.freepik.com/free-vector/big-meeting-room-concept-illustration_114360-24589.jpg",
  },
  {
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description: "Introduction to Wireframing and its Principles.Learn from the best in the industry.",
    categories: ["Audit", "Money Back"],
    imageUrl: "https://t4.ftcdn.net/jpg/01/08/15/85/360_F_108158598_RMPoDKrr8QtlJ7wcLTnhlaSU0LegMbYe.jpg",
  },
  {
    author: "Prakash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small Business & Startup",
    description: "Collboration can make our teams stronger, and our individual designs better.",
    categories: ["Tax & Return", "News"],
    imageUrl: "https://media.istockphoto.com/id/1224064817/photo/laptop-computer-on-a-modern-wooden-business-desk-with-a-notepad-and-pen-in-unfocused.jpg?s=612x612&w=0&k=20&c=V9D-NQkP4t9uY9sGwn1qOVD4-_v63CBpw8YJuoNzQzM=",
  },
  {
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Javascript framework is a powerful tool for building web applications. ",
    categories: ["Tax", "Research", "Compliance"],
    imageUrl: "https://media.gettyimages.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=gi&k=20&c=7nr36edXgIy-bQf93nfcW2nvcvRELyjzX8-lZ7wXwko=",
  },
  {
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description: "Introduction to Wireframing and its Principles.",
    categories: ["Audit", "Money Back"],
    imageUrl: "https://media.gettyimages.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=gi&k=20&c=7nr36edXgIy-bQf93nfcW2nvcvRELyjzX8-lZ7wXwko=",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 ">
      <h2 className="text-lg font-semibold text-center text-orange-400 mt-8">Explore Our Blogs</h2>
      <h2 className="text-3xl font-bold text-center mt-8">Accelerate Digital Transformation</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
      <div className="text-center mt-9">
        <button className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-700">
          Show more blogs →
        </button>
      </div>
    </div>
  );
};

export default Blogs;
