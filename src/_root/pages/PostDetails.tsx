import { HomeLoader } from "@/components/shared/Loader";
import PostStats from "@/components/shared/PostStats";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/context/AuthContext";
import { useGetPostById } from "@/lib/react-query/queriesAndMutations";
import { timeAgo } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";

function PostDetails() {
  const { id } = useParams();
  const { data: post, isPending } = useGetPostById(id || "");
  const {user}=useUserContext();
  return (
    <div className="post_details-container">
      {isPending ? (
        <HomeLoader />
      ) : (
        <div className="post_details-card">
          <img src={post?.imageUrl} alt="post" className="post_details-img" 
          />

          <div className="post_details-info">
            <div className="flex-between w-full">
              <Link to={`/profile/${post?.creator.$id}`} className="flex items-center gap-5">
                <img
                  src={
                    post?.creator?.imageUrl ||
                    "/assets/icons/profile-placeholder.svg"
                  }
                  alt="creator"
                  className="rounded-full w-9 h-9 lg:w-16 h-16"
                ></img>

                <div className="flex flex-col">
                  <p className="base-medium lg:body-bold text-light-1">
                    {post?.creator.name}
                  </p>
                  <div className="flex-center gap-2 text-light-3">
                    <p className="subtle-semibold lg:small-regular">
                      {timeAgo(post?.$createdAt || new Date().toISOString())}
                    </p>
                    -
                    <p className="subtle-semibold lg:small-regular">
                      {post?.location}
                    </p>
                  </div>
                </div>
              </Link>
            <div className="flex-center">
              <Link to={`/update-post/${post?.$id}`} className={`${user.id!==post?.creator.$id && 'hidden'}`}>
                <img src="/assets/icons/edit.svg" alt="Edit" width={24} height={24} />
              </Link>
              <Button  variant={"ghost"} className={`ghost_details-delete_btn ${user.id!==post?.creator.$id && 'hidden'}`} >
                <img src="/assets/icons/delete.svg" alt="delete" width={24} height={24}></img>
              </Button>
            </div>

            </div>
            <hr className="border w-full border-dark-4/80"/>
            <div className="flex felx-col flex-1 w-full small-medium lg:base-regular">
                    <p>{post?.caption}</p>
                    <ul className="flex gap-1 mt-2">
                        {post?.tags.map((tag: string) => (<li className="text-light-3" key={post.id} >#{tag}</li>))}

                    </ul>

                </div>
                <div>
                  <PostStats post={post} userId={user.id} ></PostStats>
                </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetails;
