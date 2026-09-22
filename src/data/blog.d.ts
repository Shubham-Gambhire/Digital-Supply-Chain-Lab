export type BlogContentBlock = {
  type: 'paragraph' | 'heading' | 'emphasis' | 'quote' | 'closing' | 'list';
  text?: string;
  label?: string;
  items?: string[];
};

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  publishedAt: string;
  excerpt: string;
  tags: string[];
  content: BlogContentBlock[];
  searchText: string;
};

export const blogPosts: BlogPost[];