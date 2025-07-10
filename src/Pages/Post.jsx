import Navbar from "../Components/Navbar";

const Post = () => {
  return (
    <div className="max-w-full grid grid-cols-12">
      <div className="col-span-2 w-full bg-blue-100">
           <Navbar className=''/>
        </div>

      <div className="col-span-10   bg-amber-100 h-screen  "></div>
    </div>
  );
};

export default Post;
