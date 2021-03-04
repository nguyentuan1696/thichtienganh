module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://thichtienganh.com/",
  favicon: "/public/assets/favico.ico",
  themeConfig: {
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site",
        src: "",
      },
      items: [
        {
          to: "",
          label: "",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              lebel: "Second Doc",
              to: "/docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
            },
          ],
        },
      ],
      copyright: `Copyright &#169; 2016-${new Date().getFullYear()} thichtienganh`,
    },
  },
};
