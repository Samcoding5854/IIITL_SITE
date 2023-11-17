import ControlledCarousel from "../components/Carousel";
import { useState } from "react";
import Layout from "../components/Layout/index";
import Fade from 'react-reveal/Fade';
import WhiteContainer from "../components/Containers/whiteContainer";
import Container from "../components/Containers";
import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import NewsSection from "../components/Newssection";

const About = () => {
  return (
    <WhiteContainer>
      <div className="relative min-h-[60vh]    max-md:m-5 scrollAnim flex">
        <Fade left>
          <div className="w-[50%] max-lg:w-[75%] pr-12  max-sm:w-[90%] max-md:text-xl text-2xl font-normal p-10 gap-10 ">
            <h1 className="text-5xl mb-10 text-bluel font-medium">ABOUT  IIIT LUCKNOW</h1>
            <p className="text-left font-extralight text-xl">
              Indian Institute of Information Technology, Lucknow (IIIT Lucknow) is one of the 20 IIITs being set up by the Central Government in Public Private Partnership (PPP) mode. IIIT Lucknow admitted its first batch of B. Tech. in Information Technology with an intake of 50 students w.e.f. the academic session 2015-16. It currently offers all the amenities ,academic and non-academic to its students that can help them flourish and serve the nation with all their apprehension in the various fields of technology. The admission is made through central counselling of candidates who qualify in JEE (Mains).
            </p>
            <p className="text-left font-extralight text-xl">
              The Institute is being set up with the financial contributions of MHRD, Govt. of India, Govt. of Uttar Pradesh, and U. P. Electronics Corporation Ltd. as industry partners. The mission of IIIT Lucknow is to be a unique and world class nucleating “Apex Center of Excellence” in the area of Information Technology so as to enhance India’s Technological strength in Information Technology . IIIT seeks to derive its strength from a linkage with sound Indian traditions of centuries past, and sets out to create knowledge-based resources in regional languages.
            </p>
            <div className="mt-10">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center p-3 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Read More
                </span>
                <span className="relative invisible">Read More</span>
              </a>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="w-[50%] max-lg:w-[25%] max-sm:w-[20%] self-center relative top-[-10px]">
            <img
              src="https://img.collegepravesh.com/2021/11/IIIT-Lucknow.jpg"
              alt="Image"
              width="100%"
              height="auto"
              style={{ filter: "blur(1px)" }}
            />
            <iframe
              width="70%"
              height="400"
              src="https://www.youtube.com/embed/Aq-zIMBbWog?si=C2IDlxaOVb_dZPdQ"
              title="YouTube Video"
              className="absolute translate-y-[-450px] translate-x-[30px] "
            ></iframe>
          </div>
        </Fade>
      </div>
    </WhiteContainer>
  );
};
const InfoCard = ({ title, content }) => {
  return (
    <div className="relative m-10 max-md:m-5 scrollAnim">
      <div className="bg-gray-200 z-[-1] py-12">
        <div className="flex flex-row justify-center space-x-10">
          <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className="bg-white text-bluedark font-bold h-12 py-2">
              {title}
            </p>
            <p className="">{content}</p>
          </div>
          <div className="w-[28%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 transform hover:scale-110 transition-transform py-0 px-0 hover:border border-bluedark hover:shadow-lg">
            <p className="bg-white text-bluedark font-bold h-12 py-2">
              {title}
            </p>
            <p className="">{content}</p>
          </div>

        </div>
      </div>
    </div>
  );
};

const InfoBoard = ({ title, content }) => {
  const [selectedContent, setSelectedContent] = useState(null);

  const handleButtonClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="relative m-10 max-md:m-5 scrollAnim">
      <div className="bg-white z-[-1] py-3">
        <div className="flex flex-row justify-center space-x-10">
          <div className="w-[59%] h-[60vh] max-lg:w-[30%] max-sm:w-[30%] max-md:text-xl flex flex-col text-center text-2xl font-normal bg-bluel text-white p-10 gap-10 py-0 px-0 hover:border border-bluedark hover:shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex justify-between">
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("-")}
              >
                -
              </button>
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("--")}
              >
                --
              </button>
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("---")}
              >
                ---
              </button>
              <button
                className="bg-gray-200 text-bluedark font-bold h-12 w-[25%] py-2 mx-2 my-2 transform hover:scale-105 transition-transform hover:border border-bluedark hover:shadow-lg"
                onClick={() => handleButtonClick("----")}
              >
                ----
              </button>
            </div>
            {selectedContent && <p>{selectedContent}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};




const Statitics = () => {
  return (
    <div>
      <Fade left>
      <Container>

        <Parallax bgImage="https://images.shiksha.com/mediadata/images/1609328511phpF7Rjbe.jpeg" bgImageAlt="the cat" strength={600}>
          <div className="h-[400px] py-10 flex justify-center gap-x-96 items-center text-5xl text-white">

            <div className="flex flex-col items-center">
            
              <h5 className="font-bold text-6xl flex gap-x-2">
                <CountUp end={2000} duration={2} >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor onChange={start} delayedCall>
                      <span ref={countUpRef} />
                    </VisibilitySensor>
                  )}
                </CountUp>
                +
              </h5>
              <h5 className="my-4">
                STUDENTS
              </h5>
            </div>

            <div className="flex flex-col items-center">
              <h5 className="font-bold text-6xl flex gap-x-2">
                <CountUp end={50} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
                </CountUp> 
                +
              </h5>
              <h5 className="my-4 capitalize">
                FACULTY
              </h5>
            </div>


            <div className="flex flex-col items-center">
              <h5 className="font-bold text-6xl flex gap-x-2">
                <CountUp end={100} duration={2} > 
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
                </CountUp>
                +
              </h5>
              <h5 className="my-4">
                STAFF
              </h5>


            </div>


          </div>
        </Parallax>

      </Container>
      </Fade>
    </div>
  )
}

const DirectorCorner=()=>{
  return(
    
    <WhiteContainer>
    <div className="flex flex-col sm:flex-row justify-between">
      <Fade left>
        <div className="w-full sm:w-[50%] max-lg:w-[75%] max-sm:w-[90%] max-md:text-xl text-2xl font-normal p-4 sm:p-10 gap-4 sm:gap-10 mb-4 sm:mb-0">
          <h1 className="text-5xl mb-4 sm:mb-10 text-bluel font-medium">DIRECTOR'S CORNER</h1>
  
          <p className="text-left font-extralight text-xl">
            Welcome to the Indian Institute of Information Technology, Lucknow, an institute of national importance. IIITs have a tradition of producing best-in-class human resources in IT and connecting multi-dimensional aspects of IT such as manufacturing, design, and management.
          </p>
  
          <div className="mt-4 sm:mt-10">
            <a
              href="#_"
              className="group relative inline-flex items-center justify-center p-3 px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-300 rounded-full shadow-md"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Read More
              </span>
              <span className="relative invisible">Read More</span>
            </a>
          </div>
        </div>
      </Fade>
      <Fade right>
        <div className="w-full sm:w-[50%] mb-4 sm:mb-0">
          <img
            src="https://iiitl.ac.in/wp-content/uploads/2020/07/canvas-resize-1.png"
            alt="Image"
            height="auto"
            style={{ filter: "blur(1px)" }}
          />
        </div>
      </Fade>
    </div>
  </WhiteContainer>
    
  )
}
export default function Home() {
  return (

    <Layout>
      <ControlledCarousel />
      <About />
      <Statitics />
      <DirectorCorner/>
      <NewsSection/>

    </Layout>

  );
}
