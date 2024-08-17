
import { Models } from 'appwrite';
import { Loader } from 'lucide-react';

import GridPostList from './GridPostList';

type SearchResultsProps={
    isSearchFetching:boolean;
    searchedPosts:Models.Document[];
}

function SearchResults({isSearchFetching,searchedPosts}:SearchResultsProps) {
    if(isSearchFetching)
        return(
    <Loader></Loader>);
    //@ts-ignore
    if(searchedPosts && searchedPosts.documents.length >0){
        return(
            //@ts-ignore
            <GridPostList posts={searchedPosts.documents}/>
        )
    }
  return (
    <div>
        <p className='text-light-4 mt-10 text-center w-full'>No results Found </p>
    </div>
  )
}

export default SearchResults