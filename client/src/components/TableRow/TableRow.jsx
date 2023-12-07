// import React, { useState } from 'react';

// function TableRow({ item }) {
//     const [isEditing, setIsEditing] = useState(false);
//     //   const [inputValue, setInputValue] = useState(item.value);

//     //   const handleEditClick = () => {
//     //     setIsEditing(true);
//     //   };

//     //   const handleSaveClick = () => {
//     //     setIsEditing(false);
//     //     onUpdate(inputValue);
//     //     //post for update
//     //   };

//     const deleteRow = async (e, item) => {
//         e.preventDefault();
//         try {
//             const response = await fetch(`http://localhost:5000/equipment/${item._id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const responseData = await response.json();
//         } catch (error) {
//             console.error(error);
//         }
//     }


//     const handleEditClick = () => {
//         setIsEditing(true);
//     };
//     // const handleSaveClick = () => {
//     //
//     //     onUpdate(inputValue);
//     // };
//     const updateRow = (e, item) => {
//         console.log("updateRow");
//         setIsEditing(false);
//         // onUpdate(item);
//     }
//     return <>

//         {/* <tr>
//       <td>{data.id}</td>
//       <td>
//         {isEditing ? (
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//           />
//         ) : (
//           data.value
//         )}
//       </td>
//       <td>
//         <button onClick={handleEditClick}>
//           {isEditing ? 'Cancel' : 'Edit'}
//         </button>
//         {isEditing && (
//           <button onClick={handleSaveClick}>
//             Save
//           </button>
//         )}
//       </td>
//     </tr> */}
//         <tr key={item.owner}>
//             <td>{item.owner}</td>
//             <td>{item.site}</td>
//             <td>{item.computerID}</td>
//             <td>{item.keyboardID}</td>
//             <td>{item.screenID}</td>
//             <td>{item.batteryID}</td>
//             <td>{item.bagID}</td>
//             <td>{item.headphonesID}</td>
//             <td>{item.mouseID}</td>
//             <td> <input type="button" name="update" value={isEditing ? '✔️' : '✏️'} onClick={isEditing ? (e) => updateRow(e, item) : (e) => handleEditClick()} /></td>
//             <td> <input type="button" name="delete" value="🗑️" onClick={(e) => deleteRow(e, item)} /></td>
//         </tr>
//     </>;
// }

// export default TableRow;


import React, { useState } from 'react';

function TableRow({ item }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState({ ...item });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const updateRow = (e) => {
    console.log("updateRow");
    setIsEditing(false);
    console.log(editedItem);
    UpdateDataInDB(e,editedItem);
    // יש לכתוב את הקוד לשמירת הנתונים
  };

  const handleInputChange = (e) => {
    setEditedItem({ ...editedItem, [e.target.name]: e.target.value });

  };

  const deleteRow = async (e,item) => {
    e.preventDefault();
    try {
        const response = await fetch(`http://localhost:5000/equipment/${item._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const responseData = await response.json();
    } catch (error) {
        console.error(error);
    }
}

  const UpdateDataInDB = async (e, newRow) => {
    e.preventDefault()
    try {
        console.log(item);
        const response = await fetch(`http://localhost:5000/equipment/${item._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRow),
        });
        const responseData = await response.json();
    } catch (error) {
        console.error(error);
    }
}


  return (
    <>
      <tr key={item.owner}>
        <td>{isEditing ? <input type="text" name="owner" value={editedItem.owner} onChange={handleInputChange} /> : item.owner}</td>
        <td>{isEditing ? <input type="text" name="site" value={editedItem.site} onChange={handleInputChange} /> : item.site}</td>
        <td>{isEditing ? <input type="number" name="computerID" value={editedItem.computerID} onChange={handleInputChange} /> : item.computerID}</td>
        <td>{isEditing ? <input type="number" name="keyboardID" value={editedItem.keyboardID} onChange={handleInputChange} /> : item.keyboardID}</td>
        <td>{isEditing ? <input type="number" name="screenID" value={editedItem.screenID} onChange={handleInputChange} /> : item.screenID}</td>
        <td>{isEditing ? <input type="number" name="batteryID" value={editedItem.batteryID} onChange={handleInputChange} /> : item.batteryID}</td>
        <td>{isEditing ? <input type="number" name="bagID" value={editedItem.bagID} onChange={handleInputChange} /> : item.bagID}</td>
        <td>{isEditing ? <input type="number" name="headphonesID" value={editedItem.headphonesID} onChange={handleInputChange} /> : item.headphonesID}</td>
        <td>{isEditing ? <input type="number" name="mouseID" value={editedItem.mouseID} onChange={handleInputChange} /> : item.mouseID}</td>
        <td>
          {isEditing ? (
            <>
              <button onClick={(e)=>updateRow(e)}>✔️</button>
            </>
          ) : (
            <button onClick={handleEditClick}>✏️</button>

          )}
        </td>
        <td> <input type="button" name="delete" value="🗑️" onClick={(e) => deleteRow(e,item)}/></td>
      </tr>
    </>
  );
}

export default TableRow;