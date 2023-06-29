import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start  flex-col">
      <h1 className="head_text text-left">
        {" "}
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any A-I powered platform.
      </p>

      {/*  */}

      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label htmlFor="">
          <span className="font-semibold font-satoshi text-base text-gray-700">
            Your AI prompt
          </span>

          <textarea
            name=""
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            required
            className="form_textarea"
            placeholder="Write your prompt here"
            id=""
          />
        </label>

        {/*  */}

        <label htmlFor="">
          <span className="font-semibold font-satoshi text-base text-gray-700">
            Tag{" "}
            <span className="font-normal">
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            name=""
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            required
            className="form_input"
            placeholder="#tag"
            id=""
          />
        </label>

        {/*  */}

        <div className="flex-end mx-3 mb-5">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button type="submit" className="px-5 py-1.5 mx-3 text-sm bg-primary-orange rounded-full text-white" disabled={submitting}>
            {submitting ? `${type}...` :  type  }
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
