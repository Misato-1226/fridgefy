import type { Metadata } from "next";
import Header from "../components/header";
import Fridge from "../components/myFridge";

export const metadata: Metadata = {
  title: "Recipe and item page",
  description: "Generated by create next app",
};

export default function FridgeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      <div className="p-3 flex">
        <Fridge />
        <div className="mx-auto">{children}</div>
      </div>
    </section>
  );
}
