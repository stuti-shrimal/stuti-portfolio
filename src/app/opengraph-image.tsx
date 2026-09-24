import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#f4f1ea",
          padding: 72,
        }}
      >
        <div style={{ color: "#e4d2b0", fontSize: 18, letterSpacing: 4 }}>DATA ENGINEER</div>
        <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 980 }}>{site.seo.ogTitle}</div>
        <div style={{ fontSize: 24, color: "#a39c92", maxWidth: 900 }}>{site.seo.ogDescription}</div>
      </div>
    ),
    size,
  );
}
