"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarousel,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card"

function CarouselWatcher({ setCurrentIndex }) {
  const { api } = useCarousel();

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCurrentIndex(api.selectedScrollSnap() + 1);
    };

    update();
    api.on("select", update);

    return () => {
      api.off("select", update);
    };
  }, [api, setCurrentIndex]);

  return null;
}

export default function ProductGallery({ product }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div>
      <Carousel>
        <CarouselWatcher setCurrentIndex={setCurrentIndex} />

        <CarouselContent>
          {product[0].images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <img src={img} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className='flex gap-4 pt-4'>
        {product[0].images.map((img, index) => (
          <Card  key={index} className={`${currentIndex == index + 1 ? 'border-4 border-indigo-600' : ''} w-full max-w-3xs p-0 aspect-square w-full overflow-hidden rounded-lg`}>
            <CardContent className="w-full h-full px-0">
              <img src={img} alt={product[0].name} className="w-full h-full object-cover" />
            </CardContent>
          </Card>))
        }
      </div>
    </div>
  );
}