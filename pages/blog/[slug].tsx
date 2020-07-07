import styled from "@xstyled/styled-components";
import matter from "gray-matter";
import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "../../components/Atoms";
import Container from "../../components/layout/Container";

export default function BlogTemplate({ content, data }) {
  // data from getInitialProps
  const markdownBody = content;
  const frontmatter = data;
  return (
    <Container forwardedAs="main" style={{ padding: "3rem 0px" }}>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <article>
        <Image src={frontmatter.cover_image} alt={`Cover Img for ${data.cover_img}`} />
        <HeadingWrapper>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.description}</p>
        </HeadingWrapper>
        <Wrapper>
          <ReactMarkdown
            renderers={{
              code: CodeBlock,
            }}
            source={markdownBody}
          />
        </Wrapper>
      </article>
    </Container>
  );
}

const HeadingWrapper = styled.header`
  margin: 0 auto;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 68ch;
  * + * {
    margin-top: 12px;
  }
  img {
    border-radius: 4px;
    box-shadow: 4;
  }
  p {
    color: grey400;
    font-size: 1.3125rem;
    font-family: "Source Sans Pro";
  }
  h1 {
    font-size: 3rem;
    font-family: "Roboto";
    margin-top: 2rem;
  }
`;
const Image = styled.img`
  width: 100%;
`;

const Wrapper = styled.section`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 68ch;
  p {
    color: grey500;
    font-size: 1.3125rem;
    font-family: "Source Sans Pro";
  }

  img {
    margin: 0 auto;
  }

  pre code {
    span {
      font-size: 1.3125rem;
      font-family: "Source Sans Pro";
    }
  }
  & > * + * {
    margin-top: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 1rem;
    font-family: "Roboto";
  }
  h3,
  h4,
  h5 {
    font-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-family: "Roboto";
  }
  a {
    color: primary500;
  }
`;

export async function getStaticProps({ params }) {
  const content = await import(`../../posts/${params.slug}.md`);
  const data = matter(content.default);
  delete data.orig;
  return { props: data };
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values: any = keys.map(context);
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      // return the .md content & pretty slug
      return {
        document,
        slug,
      };
    });
    // return all the posts
    return data;
  })(require.context("../../posts", true, /\.md$/));
  return {
    paths: posts.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
}
