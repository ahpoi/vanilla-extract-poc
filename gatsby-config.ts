import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ahpoi-personal-site`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-vanilla-extract", "gatsby-plugin-sitemap"]
};

export default config;
