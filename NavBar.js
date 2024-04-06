import React,{useContext,useState} from 'react';
import './style.css';
import { UserContext } from '../UserContext';
const NavBar =()=>
{
    const [search,setSearch]=useState("");
    const postData = async (e) =>{
        e.preventDefault();
        const url='http://127.0.0.1:8000/searchStocks';
        const dataToUpdate={
            search:e.target[0].value 
        };
        const jsonString=JSON.stringify(dataToUpdate);
        console.log(jsonString);
        const options = {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },
            body: jsonString
          };
        fetch('http://127.0.0.1:8000/searchStocks',options)
            .then(response=>{
                console.log(response);
            })
            .catch(error =>{
                alert('BAD');
            });
        
        
        setSearch("");
    }
    const handleChange = (e)=>{
        setSearch(e.target.value); 
    }
    return(
        <div className="topnav">
            <div className="search-container">
                <form onSubmit={postData}>
                    <input type="text" placeholder="Search.." onChange={handleChange} name="search" value={search}></input>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
            <a href="#about">Stock Screener</a>
        </div>
    );
}
export default NavBar;