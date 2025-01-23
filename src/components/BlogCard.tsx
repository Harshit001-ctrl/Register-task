import React from "react";

type BlogCardProps = {
  author: string;
  date: string;
  title: string;
  description: string;
  categories: string[];
  imageUrl: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ author, date, title, description, categories, imageUrl }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-48 mt-12 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <p className="text-gray-600 text-sm">{author} • {date}</p>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-700">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded">
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
