"use client";
import React, { useState, useEffect } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => (
  <div className="mt-16 prompt_layout">
    {data &&
      data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
  </div>
);

const Feed = () => {
  // search state
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  //
  const [posts, setPosts] = useState([]);

  //filter prompts

  const filterPrompts = (searchItem) => {
    return posts.filter(
      (item) =>
        item.prompt.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchItem.toLowerCase()) ||
        item.creator.username.toLowerCase().includes(searchItem.toLowerCase())
    );
  };

  const handleSearchChange = async (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  //implementing search by clicking tag name

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");

      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();

    console.log(posts);
  }, []);

  return (
    <section className="feed">
      <form action="" className="relative w-full flex-center">
        <input
          type="text"
          placeholder="search for tag or username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/*  */}

      {searchText && searchText ? (
        <PromptCardList data={searchedResults} handleTagClick={() => {}} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
