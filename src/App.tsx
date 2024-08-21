import { useState } from "react";
import "./App.css";

type githubObj = {
  avatar_url: string,
  login: string,
  id:string,
  [key: string]: string | number | boolean | object


};
const API_URL = "https://api.github.com/search/users?q=";

function App() {
  const [query, setQuery] = useState<String>("");
  const [userData, setUserData] = useState<githubObj[]>([]); // find out type of array
  //console.log("submitted");
  async function callApi() {
    try {
      const response = await fetch(API_URL + query);
      const json = await response.json();
      setUserData(json.items || []);
      console.log(json.items);
    } catch (e) {
      setUserData([]);
    }
  }

  return (
    <section>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          callApi();
        }}>
        <input
          type="text"
          name=","
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button type="submit">search</button>
      </form>
      <h1> Results</h1>
      <ul>
        {userData.map((user) => {
          const { avatar_url, login, id } = user;
          return (
            <div className='results-container'key={id}>
              {login && (
                <div className="data">
                  <img src={avatar_url} alt="pic" />
                  <br />
                  {login}
                  <br />
                  <br />
                </div>
              )}
            </div>
          );
        })}
      </ul>
    </section>
  );
}

export default App;
/* 

problem - we need to fetch data,which is whatever the user has inputted, specifically their name and use the github api to receive that data. 
then we need to go through all that data and put them in their respectable html tags to show it to use

solution - ok, declare a state called query and use that as what the user is inputting.
then call the github api using that query using fetch 
get all the data, loop over them then put them in respected html tags 

lessons learned: 
if an a type you want to declare that you want to have a certain properties, but it will also come with other properties,
 for those other properties just define an index signature like I did above
*/
