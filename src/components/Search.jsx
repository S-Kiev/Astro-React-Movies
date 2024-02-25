import { useState } from "react";

export default function Search() {
    const [value, setValue] = useState("");
    const search = (e) => setValue(e.target.value);
    const url = '/results/';

    return (
        <div className="search">
            <center>
                <h1 className="mt-5">
                    Search
                </h1>
                <form action={url + value} method="POST">
                    <input type="search" className="form-control p-3" value={value} onChange={search}  placeholder="Search" />
                </form>
            </center>
        </div>
    );
    

}