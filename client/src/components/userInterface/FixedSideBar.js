import React,{useEffect, useState} from 'react'

const FixedSideBar=()=> {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9000/api/groceryItems/category/all', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then((response) => {
            return response.json();
        }).then((groceryCategories) => {
            setCategories(groceryCategories);
        });
    }, []);

    return (
        <div>
             {categories.map((categoryDetails)=>(
                <div className="Category-Name" key={categoryDetails._id}>
                 <a href="#" name={categoryDetails._id}>{categoryDetails.name}</a>
              </div>
            ))}
            
        </div>
    )
}

export {FixedSideBar};
