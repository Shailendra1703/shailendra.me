import { ImageResponse } from "next/server";

export const runtime = "edge";

export const GET = async (req) => {
  const { searchParams } = req.nextUrl;

  const title = searchParams.get("title");
  const font = fetch(
    new URL("../../font/inter/og/semibold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          backgroundImage: "url(https://singhshailendra.in/og-bg.png)",
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://singhshailendra.in/images/profile.jpg"
          width={48}
          height={48}
          style={{ borderRadius: "50%" }}
        />
        <div
          style={{
            fontSize: 24,
            fontFamily: "Inter",
            color: "black",
            letterSpacing: -0.5,
            marginLeft: 12,
          }}
        >
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: await font,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
};
