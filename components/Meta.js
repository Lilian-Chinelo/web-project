import Head from "next/head";

const Meta = ({ title, description, keywords }) => {
  return (
    <Head>
      <title>Mentorship</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charset="utf-8" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
    title: "Mentorship",
    keywords: "Mentorship, women in tech",
    description: "What mentorship means to me",
}

export default Meta;
