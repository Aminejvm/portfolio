/* eslint-disable @typescript-eslint/camelcase */
import styled, { Box } from "@xstyled/styled-components";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { Heading, P } from "../../components/Atoms";
import Container from "../../components/layout/Container";

type Blog = {
  document: {
    content: string;
    data: {
      title: string;
      description: string;
      cover_image: string;
    };
  };
  slug: string;
};
interface Props {
  allBlogs: Blog[];
}

const Blog = ({ allBlogs }: Props): JSX.Element => (
  <Container forwardedAs="section" py={{ sm: 48, md: 128 }} id="#blog">
    <Head>
      <title>Blog</title>
    </Head>
    <h1>Blog</h1>
    <P>My personal space where I write about things I enjoy.</P>
    <Box row mx={-16} mt={24}>
      {allBlogs.map(({ document: { data: { cover_image, description, title } }, slug }) => (
        <BlogCard col={{ xs: 12 / 12, md: 6 / 12, lg: 4 / 12 }} key={slug} px={16} mt={24}>
          <Link href={`/blog/${slug}`}>
            <a>
              <img src={cover_image} />
              <Heading mt={12} forwardedAs="h3" fontSize="1.3rem">
                {title}
              </Heading>
              <P mt={16} fontSize="1.125rem">
                {description}
              </P>
            </a>
          </Link>
        </BlogCard>
      ))}
    </Box>
  </Container>
);

const BlogCard = styled(Box)`
  img,
  h3 {
    transition: all 0.4s;
  }

  &:hover img {
    transform: translateY(-4px);
    box-shadow: 3;
  }
  &:hover h3 {
    color: primary500;
  }
`;

Blog.getInitialProps = async function() {
  // get all .md files from the src/posts dir
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
    allBlogs: posts,
  };
};

export default Blog;
