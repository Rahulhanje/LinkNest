import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";
import { HomeLoader } from "@/components/shared/Loader";


function Home() {
  const { data: posts, 
    isPending: isPostLoading, 
    //@ts-ignore
    isError: isErrorPosts,
  } = useGetRecentPosts();

  
  return (
    <div className="flex w-full flex-1">
      <div className="home-container h-screen">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPostLoading && !posts ? (<HomeLoader />) : (
            <ul className="flex  flex-col flex-1 gap-9 w-full">
              {posts?.documents.map((post: Models.Document) => (
                <PostCard post={post} key={post.caption}/>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home                