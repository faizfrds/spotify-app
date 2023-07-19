"use client";

import { Song } from "@/types";
import SongItem from "@/components/SongItem"

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs on record</div>;
  } else {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gri-cols-5 2xl:grid-cols-8 gap-4 mt-4">
        {songs.map((item) => (
          <SongItem key={item.id} onClick={() => {}} data={item} />
        ))}
      </div>
    );
  }
};

export default PageContent;
