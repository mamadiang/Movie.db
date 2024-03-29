import React from "react";
import search from "../Assets/search.svg"
const PageAccueil = () => {

    return<>
        <div className="bg-black d-flex align-items-center justify-content-evenly">
             <h1 className="text-warning ">Movie v2</h1>
            <span className="">
                    <img src={search} alt="" />
            </span>
        </div>

    </>

}

export default PageAccueil;