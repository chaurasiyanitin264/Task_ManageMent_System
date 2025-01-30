import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
const UserTaskDisplay = () => {
    // const [mydata, setMydata] = useState([]);
    const [mydata, setMydata] = useState([]);
    const loadData = async () => {
       
        // try {
        //     const userid =  localStorage.getItem("userid");
        //     let api = `http://localhost:8000/user/usertaskdisplay?id=${userid}`;
        //     const response = await axios.get(api);
        //     console.log(response.data);
        //     if (response.status == 200) {
        //         setMydata(response.data);
        //     }
        // } catch (error) {
        //     console.log(error.response.data.msg)
        // }


try {
    const userid=localStorage.getItem("userid");
    let api="http://localhost:8000/user/usertaskdisplay";
    let response=await axios.post(api,{id:userid});
    if(response.status==200)
    {
        console.log(response.data);
        setMydata(response.data)
    }
   
} catch (error) {
    console.log(error)
}
      



    }
    useEffect(() => {
        loadData();
    }, []);

    // console.log(mydata)

    const ans = mydata.map((key) => {
        return (
            <>
                <tr>
                {/* <td>{key.empid}</td> */}
                    <td>{key.title}</td>
                    <td>{key.description}</td>
                    <td>{key.duration}</td>
                </tr>
            </>
        )
    })

    return (
        <>
            {/* <h4>User Task:{userid}</h4> */}
            <div className="card p-4 shadow-custom">
                <Table striped bordered hover >
                    <thead class="table-secondary">
                        <tr>
                            {/* <th></th> */}
                            <th>Title</th>
                            <th>Description</th>
                            <th>Duration</th>

                        </tr>
                    </thead>
                    <tbody>
                        {ans}
                    </tbody>
                </Table>
            </div>
        </>
    )
}
export default UserTaskDisplay;