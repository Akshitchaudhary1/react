const Info =(props) => {
    let {lang}=props;
    return {
        <div>
        <h1> TOP PROGRMMING LANGUAGES</h1>
        { lang.map((item,index)=>(
            <li key={} ></li>
        )
        )
        }
    }
}