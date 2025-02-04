type Author = {
  name: string;
  image: string;
  designation: string;
  tags: string[];
};

type Sidebar = {
  title: string;
  price: string;
  description: Array<{ list: string }>;
  information: Array<{ name: string; quantity: string; image: string }>;
};

export type Course = {
  id: number;
  title: string;
  subtitle: string;
  subtitledetail: string;
  paragraph: string;
  benefitstitle: string;
  benefits: Array<{ id: number; title: string; description: string }>;
  suitableFor: Array<{ id: number; paragraph: string }>;
  desc: Array<{ id: number; paragraph: string }>;
  actualcourse: string;
  image: string;
  data: string;
  author: Author;
  sidebar: Sidebar;

  publishDate: string;
};
