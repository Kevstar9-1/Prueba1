

const fetchRepos = async (): Promise<any> => {
  const id="projects";
    try {
      const response = await fetch("https://api.github.com/users/Kevstar9-1/repos");
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  };
  
  export default fetchRepos;
  