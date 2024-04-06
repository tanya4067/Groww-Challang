import React from "react";


const SupplierRow =({id,name,email,company,phone,key}) =>
{
    const DeleteData = async (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/supplier/" + id, {
                method: "DELETE",
                headers: {
                    accept: 'application/json'
                }
            }).then(
                alert("Successfully Deleteed")
            );
            }
    return(
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{company}</td>
            <td>{phone}</td>
            <td>
                <button>EDIT</button>
                <button onClick={DeleteData}>DELETE</button>
            </td>
        </tr>
    );
}
export default SupplierRow;