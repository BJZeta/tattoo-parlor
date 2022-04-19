import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function gallery({ instaFeed }) {
  console.log(instaFeed);

  return (
    <Layout>
      <div id="gallery" className="text-white">
        <h1 className="text-center text-7xl py-8 lg:text-left lg:pl-52">Gallery</h1>
        <p className="text-center text-xl pb-8 lg:pl-52 lg:text-left">{`See the latest pieces we've produced at our shop`}</p>
        <section className="grid grid-cols-1 gap-y-12 place-items-center lg:grid-cols-2">
          {instaFeed.map((post) => (
            <div className="w-[70vw] lg:w-[32vw]">
              <Image
                key={post.id}
                src={post.media_url}
                alt={`post: ${post.id}`}
                objectFit="contain"
                layout="responsive"
                width={100}
                height={100}
                className="rounded-xl"
              />
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=${process.env.INSTA_KEY}`;

  const feed = await fetch(url);

  const { data } = await feed.json();

  return {
    props: {
      instaFeed: data,
    },
  };
}
