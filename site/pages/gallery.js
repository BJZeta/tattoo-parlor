import React from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import Instagram from "instagram-web-api";

export default function gallery({}) {  

  return (
    <Layout>
      <div id="gallery" className="text-white">
        <h1>Gallery</h1>
        <p>See the latest pieces we've produced at our shop</p>
        <section>
          {/* {instagramPosts.map((post) => (
            <Image
              key={post.node.id}
              src={post.node.display_resources[2].src}
              alt={`post: ${post.node.id}`}
              height={750}
              width={750}
            />
          ))} */}
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const url = `https://graph.instagram.com/me/media?fields=id,caption&access_token=${process.env.INSTA_KEY}`;

  const data = await fetch(url);

  const feed = await data.json();

  console.log(feed)
}
