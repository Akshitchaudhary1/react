import React  from "react";
export default function lang() {

    const Languages = []
    
        [id: 1, name:"java" ],
        [id: 2, name:"C" ],
        [id: 3, name:"kotlin"],
        [id: 4, name:"javascript"],
   var check=false;
    return (
        <div>
            <h1 className={check ? :"bg-warning": "bg-success text-white"}>
                {(check===true) ? "Best programming languages:" : "Top 5 Programming language"}
            <ul>
                { lang.map((item, index)=>(
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}
