import React,{useState,useContext} from "react";
import { UserContext } from "../UserContext";
const UserForm = () =>
{
    //console.log(supplier.data.length);
    const [user,userSupplier]=useContext(UserContext);
    console.log(user);
    const [userInfo,setUserInfo]=useState({
        UserName:"",
        UserAge:0,
        UserGender:"",
        UserDuration:0,
        UserNetWorth:0,
        UserYearlySalary:0

    });
    //name,age,gender,duration,net_worth,duration,yearly_salary
    //updating the values  
    const UpdateForm =(event)=>
    {
        setUserInfo(
            {
                ...userInfo,
                [event.target.name]:[event.target.value]
            }
        )
    }
    const postData = async (e) => {
        console.log(user);
        e.preventDefault();
        const url='http://127.0.0.1:8000/user';
        const dataToUpdate={
            id:1,
            name:userInfo['UserName'][0],
            age:userInfo['UserAge'][0],
            gender:userInfo['UserGender'][0],
            duration:userInfo['UserDuration'][0],
            net_worth:userInfo['UserNetWorth'][0],
            yearly_salary:userInfo['UserYearlySalary'][0]

            
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
        fetch('http://127.0.0.1:8000/user',options)
            .then(response=>{
                console.log(response);
            })
            .catch(error =>{
                alert('BAD');
            });
        
        setUserInfo({
            UserName:"",
            UserAge:0,
            UserGender:"",
            UserDuration:0,
            UserNetWorth:0,
            UserYearlySalary:0

        });
    }
    //name,age,gender,net_worth,duration,yearly_salary
    return (<div>
        <form onSubmit={postData}>
      <label>Enter your name:
        <input name="UserName" type="text" onChange={UpdateForm} value={userInfo.UserName}/>
      </label>
      <br></br>
      <label>Enter your Age:
        <input name="UserAge" type="text" onChange={UpdateForm} value={userInfo.UserAge}/>
      </label>
      <br></br>
      <label>Enter your Gender:
        <input name="UserGender" type="text" onChange={UpdateForm} value={userInfo.UserGender} />
      </label>
      <br></br>
      <label>Duration:
        <input name="UserDuration" type="text" onChange={UpdateForm} value={userInfo.UserDuration} />
      </label>
      <br></br>
      <br></br>
      <label>Net Worth:
        <input name="UserNetWorth" type="text" onChange={UpdateForm} value={userInfo.UserNetWorth} />
      </label>
      <br></br>
      <br></br>
      <label>Yearly Salary:
        <input name="UserYearlySalary" type="text" onChange={UpdateForm} value={userInfo.UserYearlySalary} />
      </label>
      <br></br>
      <button>SUBMIT</button>
    </form>
    </div>);
}
export default UserForm;

