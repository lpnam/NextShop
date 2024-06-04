import dynamic from "next/dynamic";

const CartPageNoSSR = dynamic(() => import("@/page/CartPage"), { ssr: false });

export default async function Page() {
  return <CartPageNoSSR />;
}
