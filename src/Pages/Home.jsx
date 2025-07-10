import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="max-w-full grid grid-cols-12 ">

        <div className="col-span-2 w-full">
          
           <Navbar />
        
        </div>
          {/* <div className="border-gray-400 h-screen border-1 ">a</div> */}



        <div className="col-span-8 flex flex-col border-l-2 border-r-2  border-r-gray-400 border-l-gray-400 h-screen bg-amber-100">
            <div className=" m-4 p-4  text-xl text-center bg-sky-400">Top Heading</div>
          <div className="grid grid-cols-6 p-3 justify-around gap-4 w-full ">
            <div className="col-span-3 bg-sky-300">Content 1</div>
            <div className="col-span-3 bg-sky-300">Content 2</div>
          </div>
        </div>


        <div className="col-span-2 flex justify-center bg-blue-100">
          <div className="flex justify-center mx-auto ">
            <h2>CONTENT</h2>  
          </div>
        </div>

      </div>
    </>
  );
};

export default Home;
