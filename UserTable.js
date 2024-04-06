import React,{useEffect,useContext,useState} from "react"
import Table from 'react-bootstrap/Table';
import { SupplierContext } from "../SupplierContext";
import SupplierRow from "./SupplierRow";
const SupplierTable=()=>
{
    const [supplier,setSupplier]=useContext(SupplierContext);
    //console.log(supplier.data);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/supplier")
            .then(resp => {
                return resp.json();
            }).then(results => {
                setSupplier({ "data": [...results.data] })

        })
    }, [])
    console.log(supplier.data)
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Supplier Name</th>
                        <th>Supplier Email</th>
                        <th>Supplier Company</th>
                        <th>Supplier Phone</th>
                    </tr>
                </thead>
                    <tbody>
                    {supplier.data.map((props) => (
                        <SupplierRow
                            id = {props.id}
                            name = {props.name}
                            email = {props.email}
                            company = {props.company}
                            phone = {props.phone}
                            
                        />
                    ))}
                    </tbody>
            </Table>
        </div>
    );
}
export default SupplierTable;
