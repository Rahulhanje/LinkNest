
import { useDeleteSAvedPost, useGetCurrentUser, useLikePost, useSavePost } from "@/lib/react-query/queriesAndMutations";
import { checkIsLiked } from "@/lib/utils";
import { Models } from "appwrite";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";


type PostStatsProps = {
    post?: Models.Document;
    userId: string;
}

function PostStats({ post, userId }: PostStatsProps) {

    const likesList = post?.likes.map((user: Models.Document) => user.$id)
    const [likes, setlikes] = useState(likesList);
    const [isSaved, setIsSaved] = useState(false);

    const { mutate: likePost } = useLikePost();
    const { mutate: savePost, isPending: isSavingPost } = useSavePost();
    const { mutate: deleteSavedPost, isPending: isdeletingSavedPost } = useDeleteSAvedPost();
    const { data: currentUser } = useGetCurrentUser();
    const savedPostRecord = currentUser?.save.find((record: Models.Document) => record.post?.$id === post?.$id)


    useEffect(() => {
        setIsSaved(!!savedPostRecord);

    }, [currentUser]);
    const handleLikePost = (e: React.MouseEvent) => {
        e.stopPropagation();
        let newLikes = [...likes];
        const hasLikes = newLikes.includes(userId);

        if (hasLikes) {
            newLikes = newLikes.filter((id) => id !== userId);
        }
        else {
            newLikes.push(userId);
        }

        setlikes(newLikes);
        likePost({ postId: post?.$id || '', likesArray: newLikes });
    }


    const handleSavePost = (e: React.MouseEvent) => {
        e.stopPropagation();

        if (savedPostRecord) {
            setIsSaved(false);
            deleteSavedPost(savedPostRecord.$id);
        }
        else {
            savePost({ postId: post?.$id || '', userId })
            setIsSaved(true);
        }

    }
    return (
        <div className="flex justify-between items-center z-0 mt-2">
            <div className="flex gap-2 mr-5">

                <img src={checkIsLiked(likes, userId)
                    ?
                    "/assets/icons/liked.svg"
                    : "/assets/icons/like.svg"
                }

                    alt="like" height={20} width={20}
                    onClick={handleLikePost}
                    className="cursor-pointer" />

                <p className="small-medium">{likes.length}</p>
            </div>

            <div className="flex gap-2">
                {isSavingPost || isdeletingSavedPost ? <Loader /> : <img src={isSaved ? "/assets/icons/saved.svg"
                    :
                    "/assets/icons/save.svg"}


                    alt="like" height={20} width={20}
                    onClick={handleSavePost}
                    className="cursor-pointer" />
                }
            </div>
        </div>

    )
}

export default PostStats