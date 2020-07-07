/* eslint-disable @typescript-eslint/camelcase */
import styled, { Box, css } from "@xstyled/styled-components";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { animated, config, useChain, useSpring, useTrail } from "react-spring";
import { Button, Heading, HeroTitle, P, ProjectHeading } from "../components/Atoms";
import Container from "../components/layout/Container";
import Stack from "../components/layout/Stack";
import { useRouteHistory } from "../components/Molecules/RouterHistoryContext";
import Projects from "../_data/Projects";

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

// For animating the opener
const values = Array(4).fill("1");
const curiosityQuote = ["Curiosity is, ", "the engine of achievements "];

const Home = ({ allBlogs }: Props): JSX.Element => {
  // Browser History
  const { routes } = useRouteHistory();
  const isFirstVisitToHome = routes.length === 0;

  // Animation Logic
  const phraseRef = React.useRef();
  const divRef = React.useRef();
  const heroRef = React.useRef();
  const phraseTrail = useTrail(curiosityQuote.length, {
    from: { display: "block", transform: "translate3d(0,200px,0)", opacity: 1 },
    to: async (next, cancel) => {
      await next({ transform: "translate3d(0,0px,0)", opacity: 1 });
      await next({ opacity: 0 });
      await next({ display: "none" });
    },
    config: config.slow,
    ref: phraseRef,
  });
  const trails = useTrail(values.length, {
    from: { transform: "translate3d(0,0%,0)" },
    to: { transform: "translate3d(0,102%,0)" },
    ref: divRef,
  });
  const springs = useSpring({
    from: { transform: "translate3d(0,100px,0)", opacity: 0 },
    to: {
      transform: "translate3d(0,0px,0)",
      opacity: 1,
    },
    config: config.slow,
    ref: heroRef,
  });

  useChain(isFirstVisitToHome ? [phraseRef, divRef, heroRef] : [heroRef], isFirstVisitToHome ? [0, 2.3, 2.5] : [0]);
  return (
    <div>
      <Head>
        <title>Amine Elouarti</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isFirstVisitToHome && (
        <>
          <OpenerPhrase>
            {phraseTrail.map((props, i) => (
              <animated.div key={i} style={props}>
                {curiosityQuote[i]}
              </animated.div>
            ))}
          </OpenerPhrase>
          {trails.map((props, i) => (
            <BlackOpener key={i} left={25 * i} style={props} />
          ))}
        </>
      )}
      <Container forwardedAs="section" height="80vh" display="flex" alignItems="center">
        <animated.div style={springs}>
          <Box row justifyContent="center">
            <Box col={{ xs: 10 / 12, md: 8 / 12 }} forwardedAs={Stack} space={1}>
              <P color="grey400" fontSize={{ xs: "1.125rem", md: "1.5rem" }} ml={{ xs: 20, md: 40, xl: 92 }}>
                Hi There,
              </P>
              <HeroTitle mt={{ xs: 0, md: -12 }} fontSize={{ xs: "2rem", md: "5.75rem" }}>
                I&apos; m Amine Elouarti
              </HeroTitle>
              <P color="grey500" fontSize={{ xs: "1.125rem", md: "2rem" }} mx={{ xs: 0, xl: 64 }}>
                <B> Software engineer </B>
                based in Morocco, my passion is to
                <B> improve people&apos;s life </B>
                through solid and scalable products.
              </P>
            </Box>
          </Box>
        </animated.div>
      </Container>
      <AboutMeDiv>
        <Container forwarededAs="section" py={{ xs: 48, md: 128 }}>
          <Box row>
            <Box col={{ xs: 10 / 12, md: 5 / 12 }}>
              <P color="primary700" fontSize="1.125rem" fontWeight="700">
                About Me
              </P>
              <Heading.h1 fontSize="4rem" fontWeight="normal" mt={12}>
                Passionate about building immersive products.
              </Heading.h1>
            </Box>
            <Box col={1 / 12} />
            <Box col={{ sm: 12 / 12, md: 6 / 12, lg: 5 / 12 }} mt={{ xs: "32px", nd: "0px" }}>
              <P mt={{ sm: 32, md: 0 }}>
                Like any other kid, I was curious about how most things work. Growing up I’ve been trying various stuff,
                editing videos, 3d modeling, but coding happens to be the thing that stuck around. That was the main
                reason why I chose computer science as my major.
              </P>
              <P mt={16}>
                Fast forward to 2019, I had finally graduated with a bachelor degree in the field, in the last year of
                my major I’ve been trying to work with different web technologies since I believe that the web is a
                great platform to build beautiful and accessible apps. At the age of 22, I’m looking forward to work in
                a team environment and build great products that we’ll be proud of.
              </P>
            </Box>
          </Box>
        </Container>
        <Container forwardedAs="section" py={{ xs: 48, md: 128 }}>
          <P color="primary700" fontSize="1.125rem" fontWeight="700">
            Education
          </P>
          <Box row my={32}>
            <Box col={{ sm: 12 / 12, md: 6 / 12, lg: 5 / 12 }}>
              <EducationHeading my={{ xs: 32, md: 12 }} fontSize={{ xs: "1.75rem", md: "2rem" }}>
                Software Developement
              </EducationHeading>
              <P>
                Curious computer science specialist, with a strong foundation in logic, algorithms and web technologies
                coding, seeking to leverage solid skills in collaboration, communication and developenent as a
                programmer.
              </P>
              <Heading.h1 color="indigo600" fontSize="1.5rem" mt={48}>
                Highlights of my university journey :
              </Heading.h1>
              <EducationWrapper>
                <EducationBullet>Graduated with 14.20 ( French system).</EducationBullet>
                <EducationBullet>
                  My favorite classes: Graph theory, Entrepreneurship, Optimization techniques, cryptography, Data
                  structures and algorithms, Computer Networks, Software Architectures.
                </EducationBullet>
                <EducationBullet>Favorite area of study: Software Design and Architecture</EducationBullet>
              </EducationWrapper>
            </Box>
            <Box col={{ md: 1 / 12, lg: 2 / 12 }} />
            <Box col={{ sm: 12 / 12, md: 5 / 12, lg: 5 / 12 }}>
              <EducationHeading my={{ xs: 32, md: 12 }} fontSize={{ xs: "1.75rem", md: "2rem" }}>
                UI Design
              </EducationHeading>
              <P>
                Strong understanding of the process of interface design, mostly intrigued by minimal design, open to
                learning other styles and looking forward to building well thought of products with great designers.
              </P>
              <Heading.h1 color="indigo600" fontSize="1.5rem" mt={48}>
                Highlights of my Design Journey :
              </Heading.h1>
              <EducationWrapper>
                <EducationBullet>Understanding of The importance of Hierarchy. </EducationBullet>
                <EducationBullet>Typography</EducationBullet>
                <EducationBullet>Color Theory</EducationBullet>
              </EducationWrapper>
            </Box>
          </Box>
        </Container>
      </AboutMeDiv>
      <Container forwardedAs="section" py={{ xs: 48, md: 128 }} id="#blog">
        <P color="grey900" fontSize="1.125rem" fontWeight="700">
          Blog
        </P>
        <Box row mx={-16}>
          {allBlogs.map(({ document: { data: { cover_image, description, title } }, slug }) => (
            <BlogCard col={{ xs: 12 / 12, md: 6 / 12, lg: 4 / 12 }} key={slug} px={16} mt={24}>
              <Link href={`/blog/[slug]`} as={`/blog/${slug}`}>
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
      <Devider />
      <Container forwardedAs="section" py={{ xs: 48, md: 128 }}>
        <P color="grey900" fontSize="1.125rem" fontWeight="700">
          Projects I worked on
        </P>
        {Projects.map(({ heading, description, img }) => (
          <Box row py={32} key={heading} justifyContent="center">
            <Box col={{ xs: 12 / 12, md: 6 / 12, lg: 4 / 12 }}>
              <ProjectHeading fontSize={{ xs: "2rem", md: "3.25rem" }} img={img}>
                {heading}
              </ProjectHeading>
            </Box>
            <Box col={1 / 12} />
            <Box col={{ xs: 12 / 12, md: 5 / 12 }}>
              <P pt={12}>{description}</P>
            </Box>
          </Box>
        ))}
      </Container>
      <Container forwardedAs="section" pb={54}>
        <Box row justifyContent="center">
          <Box
            col={{ xs: 12 / 12, md: 7 / 12, lg: 5 / 12 }}
            borderBottom="4px solid"
            borderColor="primary500"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={12}
          >
            <Heading.h1>elouartinra@gmail.com</Heading.h1>
            <a href="mailto:elouartinra@gmail.com">
              <Button>Say Hi!</Button>
            </a>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
/********************* Opener */
const BlackOpener = styled(animated.div)`
  position: fixed;
  top: 0%;
  ${({ left }) => css`
    left: ${left}%;
  `}
  height: 100vh;
  width: 25%;
  background-color: grey;
  z-index: 998;
`;

const OpenerPhrase = styled.div`
  position: fixed;
  overflow: hidden;
  font-weight: bold;
  font-family: "Roboto";
  font-size: 2rem;
  color: white;
  width: 80%;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;
/********************** Opener End */

/***
 * BlogCardWrapper
 *
 */

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

const B = styled.b`
  color: primary500;
  font-weight: bold;
  font-family: inherit;
`;

const EducationHeading = styled.h3Box`
  padding-left: 72px;
  font-family: "Roboto";
  font-size: 2rem;
  color: grey;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 14px;
    left: 0%;
    background-color: indigo500;
    width: 60px;
    height: 4px;
  }
`;

const EducationWrapper = styled.ul`
  margin-top: 32px;
  * + * {
    margin-top: 16px;
  }
`;
const EducationBullet = styled.li`
  position: relative;
  color: grey500;
  font-size: 1.125rem;
  line-height: 1.4;
  font-family: "Source Sans Pro";
  margin-left: 32px;
  &::before {
    left: -32px;
    top: 4px;
    content: "";
    position: absolute;
    width: 22px;
    height: 22px;
    background-image: url("./bullet.svg");
  }
`;

const AboutMeDiv = styled.div`
  width: 100%;
  background-color: primary100;
`;

const Devider = styled.div`
  width: 100%;
  height: 2px;
  background-color: grey200;
`;
Home.getInitialProps = async function() {
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
  })(require.context("../posts", true, /\.md$/));

  return {
    allBlogs: posts,
  };
};
export default Home;
