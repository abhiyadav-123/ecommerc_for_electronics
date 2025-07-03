import React, { useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

const GitHub = () => {
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetch("https://api.github.com/users/abhiyadav-123");
        const userData = await userResponse.json();
        setUser(userData);

        const reposResponse = await fetch("https://api.github.com/users/abhiyadav-123/repos");
        const reposData = await reposResponse.json();
        setRepos(reposData);

        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    );
  }


  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        <div>{`Error: ${error}`}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4">
    

      <div className="max-w-6xl mx-auto text-center mt-10">

        {user && (
          <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center mb-12 transition transform hover:scale-105 hover:shadow-2xl">
            <img
              src={user.avatar_url}
              alt={user.name}
              className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
            />
            <h2 className="text-3xl font-bold text-gray-800 mt-4">{user.name}</h2>
            <p className="text-gray-600 mt-2">{user.bio || "No bio available"}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View GitHub Profile <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>
        )}


        <h1 className="text-4xl font-bold mb-8">My GitHub Repositories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-xl font-semibold text-gray-800">{repo.name}</h2>
              <p className="text-gray-600 mt-2">{repo.description || "No description available"}</p>
              <div className="mt-4 flex justify-between items-center text-gray-700">
                <span className="flex items-center">
                  <FaStar className="mr-1" /> {repo.stargazers_count}
                </span>
                <span className="flex items-center">
                  <FaCodeBranch className="mr-1" /> {repo.forks_count}
                </span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-center"
              >
                View on GitHub <FaExternalLinkAlt className="inline ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GitHub;
