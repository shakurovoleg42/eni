import Image from "next/image";
import { Container } from "@/components/Container";
import { GetServerSideProps } from "next";

interface NewsPostProps {
  newsPost: {
    name: string;
    description: string;
    image: string;
  };
}

const NewsPost = ({ newsPost }: NewsPostProps) => {
  return (
    <Container className="flex flex-col items-center my-8">
      <Image
        src={newsPost.image}
        alt={newsPost.name}
        width={500}
        height={500}
      />
      <div className="flex flex-col items-center mt-4 max-w-[800px]">
        <div>
          <h1 className="text-4xl">{newsPost.name}</h1>
        </div>
        <div>
          <p>{newsPost.description}</p>
        </div>
      </div>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { slug } = query;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/news/${slug}`);
  const data = await response.json();

  return {
    props: {
      newsPost: data.data,
    },
  };
};

export default NewsPost;
