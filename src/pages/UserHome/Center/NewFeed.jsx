import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import EventHomeItem from "@components/EventHomeItem";
import PostItem from "@components/PostItem";
import { Fragment } from "react";
import usePosts from "@hooks/api/queries/usePosts";

const NewFeed = () => {
  const [numOfPost, setNumOfPost] = useState(6);

  const { ref, inView } = useInView({ rootMargin: "100px", delay: 100 });
  const { data, fetchMore } = usePosts();

  const postsEdges = data?.posts?.edges;

  useEffect(() => {
    if (inView === true) setNumOfPost((prev) => prev + 6);
    return () => {};
  }, [inView]);

  return (
    <div className="space-y-4">
      {postsEdges?.map((egde, i) => (
        <PostItem {...egde.node} key={egde.node?.id} />
      ))}

      <button
        className="text-white bg-blue-500"
        onClick={() =>
          fetchMore({
            variables: { after: data?.posts?.pageInfo?.endCursor },
          })
        }
      >
        Fetchmore
      </button>
      {[...Array(numOfPost)].map((_, i) => (
        <Fragment key={i}>
          <EventHomeItem
            img={`https://picsum.photos/500/500.jpg?random=${3 * i}`}
          />
          {/* <PostItem
            img={[
              `https://picsum.photos/500/500.jpg?random=${3 * i + 1}`,
              `https://picsum.photos/500/500.jpg?random=${3 * i + 2}`,
            ]}
          /> */}
        </Fragment>
      ))}
      <div ref={ref}></div>
    </div>
  );
};

export default NewFeed;
