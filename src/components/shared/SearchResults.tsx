import { Models } from 'appwrite';
import React from 'react'

type SearchResultsProps={
    isSearchFetching:boolean;
    searchedPosts:Models.Document[];
}

function SearchResults({isSearchFetching,searchedPosts}:SearchResultsProps) {
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults