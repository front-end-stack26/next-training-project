import { Product } from "@/types/product";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"

type ProductCardProps = {
    product: Product;
}

const ProductCard = ({product}: ProductCardProps) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        src={product.image}
        alt={product.name}
        className="h-full w-full object-cover object-center transition-transform group-hover:scale-105"
        width={400}
        height={400}
        loading="eager"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{product.category}</Badge>
        </CardAction>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>
            <p>{product.description}</p> 
            <p className="mt-2 text-sm font-bold text-red-500">{product.price.toFixed(2)} {product.currency}</p>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full bg-transparent font-bold uppercase text-indigo-900 cursor-pointer">Details</Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard