import Layout from '../components/Layout/index';
import React from 'react';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import FloatingActionButton from "../components/FloatingActionButton";
import Card from "../components/Card"
import TreeCard from '../components/TreeCard';
import styles from '../components/tree-card.module.css';


const people = ({ people, departments }) => {
  const client = createClient({
    projectId: 't8c6d80n',
    dataset: 'production',
  });
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }

  console.log(people);

  const handleFabClick = () => {
    // Add your FAB click logic here
    console.log("FAB Clicked");
  };

  return (
    <div>
      <Layout>
        <div className="flex justify-center">
          {departments.map((item, index) => (
            <div className='m-2' key={index}>
              <FloatingActionButton onClick={handleFabClick} content={item.name} />
            </div>
          ))}
        </div>
          {/* <div className='flex m-7'>
            <TreeCard/>
            <TreeCard/>
          </div> */}
          <div className='flex '>
            {departments.map((item, index) => (
              item?.people?.map((it, ind) => (
                it.people?.map((ct, num) => (
                  people.map((wm, wt) => {
                    if (wm._id === ct._ref) {
                      return (
                        <div className='m-3 p-7'>
                        <Link href={'/people/' + wm._id} key={wm._id}>
                          <TreeCard
                            imageUrl={urlFor(wm.picture)}
                            title={wm.name} // Adjust this according to your Sanity data structure
                            description={wm.role} // Adjust this according to your Sanity data structure
                          />
                        </Link>
                        </div>
                      );
                    }
                  })
                ))
              ))
            ))}
          </div>

        {/* {departments.map((item, index) => (
        <div className='my-12' key={index}>
          <h1 className='text-3xl text-black'>{item.name}</h1>
          <Card imageUrl={item.imageUrl} title={item.name} description={item.description} />
        </div>
      ))} */}

    
        
          {/* <div className='w-full md:w-3/4 px-10'>
            {departments.map((item, index) => (
              <div className='my-12 shadow-md p-4 rounded-md hover:scale-105 duration-300 bg-slate-100' key={index}>
                <h1 className='text-3xl'>{item.name}</h1>
                {item?.people?.map((it, ind) => (
                  <div key={it}>
                    <h1 className='text-2xl my-4 border-b-2 border-slate-400'>{it.SubDepartment}</h1>
                    <div className='grid grid-flow-row md:grid-cols-5 gap-3'>
                      {it.people?.map((ct, num) => (
                        <div key={num}>
                          {people.map((wm, wt) => {
                            if (wm._id == ct._ref) {
                              return (
                                <Link href={'/people/' + wm._id} key={wm._id}>
                                  <img className='rounded-full w-40 h-40' src={urlFor(wm.picture)} alt='' />
                                </Link>
                              );
                            }
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div> */}
        
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const client = createClient({
    projectId: 't8c6d80n',
    dataset: 'production',
  });
  const query = `*[_type == "people"]`;
  const query2 = `*[_type == "departments"]`;
  const people = await client.fetch(query);
  const departments = await client.fetch(query2);

  return {
    props: {
      people,
      departments,
    },
  };
}

export default people;