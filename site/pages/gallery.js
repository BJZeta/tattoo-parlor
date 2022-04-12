import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function gallery({ instaFeed }) {
  console.log(instaFeed);

  return (
    <Layout>
      <div id="gallery" className="text-white">
        <h1>Gallery</h1>
        <p>{`See the latest pieces we've produced at our shop`}</p>
        <section>
          {instaFeed.map((post) => (
            <Image
              key={post.id}
              src={post.media_url}
              alt={`post: ${post.id}`}
              height={750}
              width={750}
            />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${process.env.INSTA_KEY}`;

  const feed = await fetch(url);

  const { data } = await feed.json();

  return {
    props: {
      instaFeed: data,
    },
  };
}
