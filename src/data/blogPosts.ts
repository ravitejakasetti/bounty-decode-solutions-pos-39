
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Restaurant Technology: AI and Automation",
    excerpt: "Discover how artificial intelligence and automation are transforming the restaurant industry, from order processing to customer service.",
    author: "BOUNTI Team",
    date: "2024-06-10",
    readTime: "5 min read",
    category: "Technology",
    image: "/lovable-uploads/a45d20c3-cd8e-46c9-9767-36fe6657b29a.png"
  },
  {
    id: 2,
    title: "Maximizing Revenue with Smart POS Analytics",
    excerpt: "Learn how advanced analytics from your POS system can help identify revenue opportunities and optimize your restaurant's performance.",
    author: "Restaurant Expert",
    date: "2024-06-08",
    readTime: "7 min read",
    category: "Analytics",
    image: "/lovable-uploads/2866bc59-3c38-4240-afac-d8c0a481be2c.png"
  },
  {
    id: 3,
    title: "Cloud Kitchen Success: Best Practices for 2024",
    excerpt: "Essential strategies for running a successful cloud kitchen operation, from menu optimization to delivery management.",
    author: "Cloud Kitchen Specialist",
    date: "2024-06-05",
    readTime: "6 min read",
    category: "Operations",
    image: "/lovable-uploads/1daf4833-cb41-4343-b7d4-4d63e9af7fd9.png"
  },
  {
    id: 4,
    title: "Customer Experience in the Digital Age",
    excerpt: "How modern restaurants are enhancing customer experience through technology, mobile apps, and personalized service.",
    author: "Customer Success Team",
    date: "2024-06-03",
    readTime: "4 min read",
    category: "Customer Experience",
    image: "/lovable-uploads/7cac0aae-c7a0-467c-af8a-7cb59ffda010.png"
  },
  {
    id: 5,
    title: "Inventory Management: Reducing Waste, Increasing Profit",
    excerpt: "Advanced techniques for managing restaurant inventory efficiently, reducing waste, and maximizing profitability.",
    author: "Operations Manager",
    date: "2024-06-01",
    readTime: "8 min read",
    category: "Management",
    image: "/lovable-uploads/5de71c65-bfe8-4281-9d0a-90be8a60a189.png"
  },
  {
    id: 6,
    title: "Multi-Location Restaurant Management Made Easy",
    excerpt: "Streamline operations across multiple restaurant locations with centralized management systems and standardized processes.",
    author: "Chain Restaurant Expert",
    date: "2024-05-28",
    readTime: "9 min read",
    category: "Scaling",
    image: "/lovable-uploads/8ae05009-ee34-40be-9650-0e3a84e37152.png"
  }
];

export const categories = ["All", "Technology", "Analytics", "Operations", "Customer Experience", "Management", "Scaling"];
