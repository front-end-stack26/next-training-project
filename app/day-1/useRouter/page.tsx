import { Suspense } from "react";
import UseRouterHome from "./useRouterHome";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UseRouterHome />
    </Suspense>
  );
}