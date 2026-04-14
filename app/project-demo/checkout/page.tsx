"use client"
import { checkoutSchema } from "@/schemas/checkoutSchema";
import type { checkoutSchemaType } from "@/schemas/checkoutSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Checkout = () => {
  const {register, handleSubmit, reset, formState: { errors }} = useForm<checkoutSchemaType>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name:'',
      address: '',
      city: '',
      phone: ''
    }
  })

  const onSubmit = () => {
    console.log("Order confirmed");
    reset();
  }
  return (
    <div className="container max-w-4xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className=" border rounded-lg p-4">
              <h2 className="font-semibold mb-3">Shipping information</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-3">
                    <input
                      name="name"
                      placeholder="Full name"
                      className="w-full border p-2 rounded"
                      {...register('name')}
                    />
                    {errors.name && <p className="text-red-500 text-sm my-1 p-4 pt-0">{errors.name.message}</p>}
                    <input
                      name="address"
                      placeholder="Address"
                      className="w-full border p-2 rounded"
                      {...register('address')}
                    />
                    <input
                      name="city"
                      placeholder="City"
                      className="w-full border p-2 rounded"
                      {...register('city')}
                    />
                    <input
                      name="phone"
                      placeholder="Phone number"
                      className="w-full border p-2 rounded"
                      {...register('phone')}
                    />  
                    <button
                      type="submit"
                      className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                    >
                      Confirm Order
                    </button>
                  </div>
              </form>
            </div>
          </div>
          <div className="border rounded-lg p-4">

          </div>
      </div>
    </div>
  );
};

export default Checkout;