import Layout from "../components/Layout/index.tsx";
import React from "react";
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import PortableText from "react-portable-text";
import styles from "./admissions.module.css";
import Zoom from "react-reveal/Zoom";

const admissions = ({ admissions, course }) => {
  const client = createClient({
    projectId: "10usolyp",
    dataset: "production",
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(admissions);
  return (
    <div>
      <Layout>
        <Zoom>
          <div className="p-20">
            {admissions.map((item, index) => {
              return (
                <div className="p-4 shadow-lg mb-4">
                  <h1 className="text-5xl text-cyan-800 font-semibold mb-4 text-center">
                    {item.title}
                  </h1>
                  <div class="text-center mt-8">
                  <h2 class="text-2xl font-semibold text-cyan-700 relative">
                      <span class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-0.5 bg-cyan-800">
                        <span class="w-8 h-8 bg-white border-2 border-cyan-800 rounded-full absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2"></span>
                      </span>
                    </h2>
                  </div>
                  <PortableText content={item.content} serializers={{}} />
                  <h2 className="my-5 text-2xl font-semibold text-cyan-700 border-b-2 border-cyan-800 text-center">
                    Courses
                  </h2>

                  <div className="flex gap-5 justify-center mb-4">
                    {item.course?.map((it, ind) => {
                      return (
                        <div className="text-2xl">
                          {course.map((cd, i) => {
                            if (cd._id == it._ref) {
                              return (
                                <div className={styles.course}>
                                  <Link
                                    className="font-semibold bold text-cyan-700 ml-2 no-underline"
                                    href={"/course/" + cd._id}
                                  >
                                    {cd.title}
                                  </Link>
                                </div>
                              );
                            }
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Zoom>
      </Layout>
    </div>
  );
};
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "10usolyp",
    dataset: "production",
  });
  const query = `*[_type == "admissions"]`;
  const query2 = `*[_type == "course"]`;
  const admissions = await client.fetch(query);
  const course = await client.fetch(query2);
  return {
    props: {
      admissions,
      course,
    },
  };
}

export default admissions;
