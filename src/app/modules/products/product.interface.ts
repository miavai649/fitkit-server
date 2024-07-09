export type TProduct = {
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  quantity: number;
  stock: "in-stock" | "out-stock";
  isDeleted: boolean;
};
