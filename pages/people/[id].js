import Navbar from '../../components/Navbar'
import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from 'next/link';
import { useRouter } from 'next/router'
import PortableText from "react-portable-text"

const people= ({people}) => {
    const router = useRouter()
    const id = router.query.id

    const client = createClient({
        projectId: "t8c6d80n",
        dataset: "production",
  
      });
      const builder = imageUrlBuilder(client);
      function urlFor(source) {
        return builder.image(source);
      }
    console.log(people)
  return (
    <div>
      <Navbar/>
      {
        people.map((it,index)=>{
            if(it._id==id){
                return(
                    <div key={index} className='flex w-full min-h-[700px]'>
                      <div className='w-1/4 px-5 py-10 text-center items-center flex flex-col bg-[#375F9B]'>
                        <img src={urlFor(it.picture)} className="max-w-[250px] rounded-full" alt="" />
                        <h2 className='my-3 mb-10 text-2xl text-white font-semibold'>{it.post}</h2>
                        {
                          it.qualifications.map((item,ind)=>{
                            return(
                              <button key={ind} className="py-4 bg-[#426ca9] text-white hover:font-black w-full font-medium text-2xl  my-5 shadow-sm hover:scale-105 rounded-md duration-300">
                              {item.title}
                              </button>
                            )
                          })
                        }
                      </div>
                      <div className='p-2'>
                      {
                        it.qualifications.map((item,ind)=>{
                          return(
                           <div key={ind}>
                              <h2 className='font-serif lg:text-3xl text-bluel md:text-5xl px-10 pt-5 sm:text-4xl max-sm:text-2xl border-b-2 border-gray-400'>{item.title}</h2>
                              <div className='px-10 py-4'>
                              <PortableText
                              content={item.text}
                              serializers={{
                              }}
                            />
                              </div>
                           </div>
                          )
                        })
                      }
                      </div>
                    </div>
                )
            }
        })
      }
       

    </div>
  )
}

export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "t8c6d80n",
      dataset: "production",

    });
    const query = `*[_type == "people"]`;
    const people = await client.fetch(query);

    return {
      props: {
        people,
      },
    };
  }

export default people