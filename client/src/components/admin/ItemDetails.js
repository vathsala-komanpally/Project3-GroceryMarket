// import React,{useState} from 'react'

// const ItemDetails=(props)=> {
//     const [items, setItems]=useState({itemname: '',
//     price: '',
//     noOfItems: '',
//     readyToEat: ''});
//     const handleChange=(e)=>{
//         const newItemState={...setItems, [e.target.name]:e.target.value};
//         setItems(newItemState);
//         console.log(items);
//         props.entered(items.itemname,items.price,items.noOfItems, items.readyToEat);
//     }
//     return (
//         <div className="itemDetails">
//              <div className="ItemName">
//                 <label>Name of item:
//                 <input name="itemname" value={items.itemname} onChange={handleChange} placeholder="Enter a name of the item to add"  />
//                 </label>
//             </div>

//             <div className="ItemPrice">
//                 <label >Price
//                 <input name="price" value={items.price} onChange={handleChange} placeholder="Enter a price of item"  />
//                 </label>
//             </div>
//             <div className="no.OfItems">
//                 <label >Number Of Items
//                 <input name="noofitems" value={items.noOfItems} onChange={handleChange} placeholder="Enter no. of items"  />
//                 </label>
//             </div>
//             <fieldset className="ReadyToEat">
//                 <legend className="col-form-label">Ready to Eat?</legend>
//                 <div className="form-check form-check-inline">
//                     <input  value={items.readyToEat} onChange={handleChange} type="radio" id="readyToEatYes" name="readyToEat" value="true" />
//                     <label>Yes</label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                     <input  value={items.readyToEat} onChange={handleChange} type="radio" id="readyToEatNo" name="readyToEat" value="false" />
//                     <label >No</label>
//                 </div></fieldset>
//         </div>
//     )
// }

// export {ItemDetails};
