export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    currency: string;
    image: string;
    images: string[];
    category: string;
    slug: string;
    colors?: string[];
    sizes?: string[];
    stock: number;
}