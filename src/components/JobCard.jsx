import React from 'react';

const JobCard = ({ job, setSearchTags, searchTags }) => {
  // Function to add a search tag
  const addTag = (tag) => {
    if (!searchTags.includes(tag)) {
      setSearchTags((tags) => [...tags, tag]);
    }
  };

  return (
    <div className="wrapper bg-white flex justify-between p-6 mb-4 rounded-lg shadow-md">
      <div className="profile flex gap-6 items-center">
        <img
          src={job.logo}
          alt={job.company}
          className="profile-img"
        />
        <div className="profile-desc">
          <div className="company flex gap-2 items-center">
            <span className="company-name text-hsl-180">
              {job.company}
            </span>
            {job.new && (
              <span className="new bg-hsl-180 text-white py-1 px-2 rounded-full text-xs">
                New!
              </span>
            )}
            {job.featured && (
              <span className="featured bg-hsl-180 text-white py-1 px-2 rounded-full text-xs">
                Featured
              </span>
            )}
          </div>
          <div className="profession text-hsl-180">
            {job.position}
          </div>
          <div className="company-details text-hsl-180">
            <span className="time">{job.postedAt} .</span>
            <span className="part">{job.contract} .</span>
            <span className="location">{job.location}</span>
          </div>
        </div>
      </div>
      <div className="skills">
        {[
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ].map((tag) => (
          <span
            key={tag}
            className="role filter bg-hsl-180 text-hsl-29 hover:bg-hsl-29 hover:text-white text-lg font-semibold px-4 py-2 rounded-md cursor-pointer"
            onClick={() => addTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
