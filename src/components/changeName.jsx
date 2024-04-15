import { useState } from "react";

const changeName = (props) => {
    let {sname}=props;
      const[name,setName]=useState("KIET")
  return (
    <div className="container mt-3">
        <div>{name}</div>
        <button className="btn btn-warning" onClick={()=> setName("kiet MCA")}>
            change Name
        </button>
    </div>
  );
};
export default changeName
