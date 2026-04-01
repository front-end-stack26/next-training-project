"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";

export function QuantityInput({ min = 1, max = 99, value, onChange }) {
  const [qty, setQty] = useState(value ?? min);

  const update = (newValue: number) => {
    const v = Math.min(max, Math.max(min, newValue));
    setQty(v);
    onChange?.(v);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => update(qty - 1)}
        disabled={qty <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>

      <Input
        type="number"
        className="w-16 pl-6 text-center"
        value={qty}
        min={min}
        max={max}
        onChange={(e) => update(Number(e.target.value))}
      />

      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => update(qty + 1)}
        disabled={qty >= max}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
``