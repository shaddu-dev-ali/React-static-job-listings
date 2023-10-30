import React, { useState, useEffect } from 'react';
import JobCard from './components/JobCard';

function App() {
  // State to store job data and search tags
  const [jobs, setJobs] = useState([]);
  const [searchTags, setSearchTags] = useState([]);

  // Fetch job data using useEffect
  useEffect(() => {
    // Replace this with your data fetching logic (fetching the data.json file)
    fetch('data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  // Function to filter jobs based on search tags
  const filterJobs = () => {
    if (searchTags.length === 0) {
      return jobs; // If no tags are selected, show all jobs
    }

    return jobs.filter((job) => {
      const jobTags = [
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
      ];

      return searchTags.every((tag) =>
        jobTags.includes(tag)
      );
    });
  };

  return (
    <div className="bg-effafa min-h-screen">
      <header className="header bg-cover h-32"></header>
      <div className="container mx-auto p-4">
        {searchTags.length > 0 && (
          <div className="search-bar bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="search-content flex justify-between">
              <div className="search-filter">
                {searchTags.map((tag) => (
                  <span
                    key={tag}
                    className="filter-content"
                  >
                    {tag}
                    <button
                      className="filter-remove"
                      onClick={() =>
                        setSearchTags((tags) =>
                          tags.filter((t) => t !== tag)
                        )
                      }
                    >
                      X
                    </button>
                  </span>
                ))}
              </div>
              <button
                className="clear text-hsl-180 hover:border-b hover:hsl-180"
                onClick={() => setSearchTags([])}
              >
                Clear
              </button>
            </div>
          </div>
        )}
        <div className="jobs">
          {filterJobs().map((job) => (
            <JobCard
              key={job.id}
              job={job}
              setSearchTags={setSearchTags}
              searchTags={searchTags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
