import { createContext,useState} from 'react';
import axios from 'axios';


const token = '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';
const default_Octat_Data = {
  avatar_url:'/assets/github-octocat.svg',
  name:'The Octocate',
  login:'@octacate',
  created_at:'25 jan 2011',
  bio:'This profile has no bio',
  public_repos:8,
  followers:999,
  following:22,
  location:'San Francisco',
  twitter_username:'Not Available',
  blog:'http://github.bog',
  company:'@github'
}

export const APiContext = createContext();

export const APiContextProvider =({children}) =>{
  const [searchResults, setSearchResults] = useState(default_Octat_Data);
  const [searchError, setSearchError] = useState("");

 const searchGithubUser = async (username) => {
    try{
      setSearchError("");  
      const data = await axios.get(`https://api.github.com/users/${username}`,{
        headers:{
          Accept:"application/vnd.github+json",
          Authorization: `Bearer ${token}`,
          "X-GitHub-Api-Version": "2022-11-28"
        }
      })
  
      setSearchResults(data.data);
    } catch(error){
      setSearchResults(default_Octat_Data);
      if (error?.response?.status === 404) {
        setSearchError("User not found");
      } else if (error?.response?.status === 401) {
        setSearchError("Token expired");
      } else {
        setSearchError(error?.message?.toString());
      }
    }
  }
  return (
    <APiContext.Provider value={{
      searchResults,
      searchError,
      searchGithubUser
      }}>
     {children}
    </APiContext.Provider>
  );
}


    //theme context
  export  const ThemeContext = createContext();

 export const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  
    return (
      <ThemeContext.Provider
        value={{
          dark,
          setDark,
           }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }

  

  