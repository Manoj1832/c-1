import type { Metadata } from "next";
import { FAQPage } from "./FAQPage";

export const metadata: Metadata = {
  title: "FAQ | H Dentistry Erode — Your Questions Answered",
  description:
    "Find answers to frequently asked questions about H Dentistry in Erode. Learn about treatments, pricing, opening hours, and more from Dr. Harini Sri K.",
};

export default function Page() {
  return <FAQPage />;
}
