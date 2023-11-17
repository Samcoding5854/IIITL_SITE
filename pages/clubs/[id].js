import React from 'react'
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from 'next/router'
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Zoom from 'react-reveal/Zoom';

const Clubs = ({ clubs, events }) => {
  const router = useRouter()
  const id = router.query.id


  const client = createClient({
    projectId: "msx6zvjg",
    dataset: "production",

  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  console.log(clubs,events)
  return (
    <div>
      <Navbar />
     
      {
        clubs.map((item, index) => {
          if (item._id == id) {
            return (
              
              <div className='px-20' key={index}>
               <Zoom>
               <h1 className='text-3xl  my-6'>About {item.name}</h1>
               <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-x-20'>
               <h3 >About {item.description}</h3>
               <img className="inline-block   " src={urlFor(item.picture[0]).url()} />
               </div>
               </Zoom>
                <Zoom>
                {
                  <div className=''>
                    <h1 className='text-3xl  my-6'>Events</h1>
                    {
                      item.clubEvents?.map((it, ind) => {

                        return (
                          <div>
                            {
                              events.map((ct, i) => {
                                if(ct._id==it._ref){
                                  return (
                                    <div key={i} className="cursor-pointer">
                                    <Link href={'/collegeevents/' +ct._id}>
                                    <img className="inline-block   " src={urlFor(ct.picture[0]).url()} />
                                    </Link>
                                    </div>
                                  )
                                }
                              })
                            }
                            </div>
                            )
                            
                          })
                          
                        }
                        </div>
                      }
                      </Zoom>

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
    projectId: "msx6zvjg",
    dataset: "production",

  });
  const query = `*[_type == "clubs"]`;
  const query2 = `*[_type == "events"]`;
  const clubs = await client.fetch(query);
  const events = await client.fetch(query2);

  return {
    props: {
      clubs, events
    },
  };
}


export default Clubs
