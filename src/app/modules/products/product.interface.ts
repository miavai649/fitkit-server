export type TProduct = {
  name: string;
  price: number;
  description: string;
  images: string[];
  category: "weights" | "cardio" | "gear" | "apparel";
  quantity: number;
  stock: "in-stock" | "out-stock";
};

export type TParsedQuery = {
  searchTerm?: string;
  categories?: string[];
  sort?: "asc" | "desc";
  page: number;
};
