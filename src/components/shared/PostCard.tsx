import { useUserContext } from "@/context/AuthContext";
import { timeAgo } from "@/lib/utils";
import { Models } from "appwrite";
import { Link } from "react-router-dom";
import PostStats from "./PostStats";

type PostCardProps = {
    post: Models.Document;
};

function PostCard({ post }: PostCardProps) {
    const { user } = useUserContext();
    if (!post.creator) return;
    return (
        <div className="post-card ">
            <div className="flex-between">
                <div className="flex item-center gap-3">
                    <Link to={`/profile/${post.creator.$id}`}>
                        <img
                            src={
                                post.creator?.imageUrl ||
                                "/assets/icons/profile-placeholder.svg"
                            }
                            alt="creator"
                            className="rounded-full w-12 lg:h-12"
                        ></img>
                    </Link>
                    <div className="flex flex-col">
                        <p className="base-medium lg:body-bold text-light-1">
                            {post.creator.name}
                        </p>
                        <div className=" sm:flex-row sm:gap sm:flex-center  flex-row gap-2  text-light-3">
                            <p className="subtle-semibold lg:small-regular">
                                {timeAgo(post.$createdAt)}
                            </p>
                            <div className="hidden lg:block">-</div>
                            <p className="subtle-semibold lg:small-regular">
                                {post.location}
                            </p>
                        </div>
                    </div>
                </div>
                <Link
                    className={`${user.id !== post.creator.$id && "hidden"}`}
                    to={`/update-post/${post.$id}`}
                >
                    <img src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
                </Link>
            </div>
            <Link to={`/posts/${post.$id}`}>
                <div className="small-medium lg:base-medium py-5 w-full overflow-auto">
                    <p>{post.caption}</p>
                    <ul className="flex flex-wrap gap-1 mt-2">
                        {post.tags.map((tag: string) => (
                            <li className="text-light-3" key={tag}>
                                #{tag}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative w-full max-w-full flex justify-center">
                    <img
                        src={post.imageUrl || "/assets/icons/profile-placeholder.svg"}
                        className="block max-w-full max-h-screen object-contain"
                        alt="Post image"
                    />
                </div>
            </Link>
            <PostStats post={post} userId={user.id} />
        </div>
    );
}

export default PostCard;
