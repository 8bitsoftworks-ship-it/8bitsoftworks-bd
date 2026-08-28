import { useParams } from "react-router-dom";

export default function DemoPage({ pages, pageProps }) {
  const params = useParams();
  const sub = (params["*"] || "").split("/").filter(Boolean)[0] || "";
  const Page = pages[sub] || pages[""] || Object.values(pages)[0];
  return <Page {...pageProps} />;
}
