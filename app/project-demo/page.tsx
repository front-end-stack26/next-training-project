import Home from "./home"
import { Suspense } from "react";

const Page = () => {

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Home />
    </Suspense>
  )
}

export default Page;