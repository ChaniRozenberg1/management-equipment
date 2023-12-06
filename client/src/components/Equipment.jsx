import React, { useState, useEffect } from "react";
import skyvar from "./skyvar.png"
import './Equipment.css';



function Equipment() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ owner: "", site: "", computerID: "", keyboardID: "", batteryID: "", screenID: "", bagID: "", headphonesID: "", mouseID: "", update: "✏️", delete: "🗑️" });



    const getDataFromDB = async (e) => {
        try {
            const response = await fetch('http://localhost:5000/equipment/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const responseData = await response.json();
            setData(responseData)
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(()=>{
        getDataFromDB()
    })

    const addRow = (e) => {
        const newRow = {
            owner: formData.owner,
            site: formData.site,
            computerID: formData.computerID,
            keyboardID: formData.keyboardID,
            batteryID: formData.batteryID,
            screenID: formData.screenID,
            bagID: formData.bagID,
            headphonesID: formData.headphonesID,
            mouseID: formData.mouseID,
            update: formData.update,
            delete: formData.delete

        };
        setData([...data, newRow]);
        setFormData({ owner: "", site: "", computerID: "", keyboardID: "", batteryID: "", screenID: "", bagID: "", headphonesID: "", mouseID: "", update: "✏️", delete: "🗑️" });
        setShowForm(false);
        addRowToDB(e, newRow);
    };

    const addRowToDB = async (e, newRow) => {
        e.preventDefault()
        try {
            const response = await fetch('http://localhost:5000/equipment/', {
                method: 'POST',
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

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleForm = () => {
        setShowForm(!showForm);
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


    const updateRow = () => {
        console.log("updateRow");
    }

    return (
        <div>
            <div className="all">
                <div className="header">
                    <h1>תוכנה לניהול ציוד</h1>
                </div >
                <div className="header2"></div>
                <div className="header3"></div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>שם</th>
                        <th>מיקום</th>
                        <th>מחשב</th>
                        <th>מקלדת</th>
                        <th>מטען</th>
                        <th>מסך</th>
                        <th>תיק</th>
                        <th>אזניות</th>
                        <th>עכבר</th>
                        <th> </th>
                        <th> </th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.owner}>
                            <td>{item.owner}</td>
                            <td>{item.site}</td>
                            <td>{item.computerID}</td>
                            <td>{item.keyboardID}</td>
                            <td>{item.screenID}</td>
                            <td>{item.batteryID}</td>
                            <td>{item.bagID}</td>
                            <td>{item.headphonesID}</td>
                            <td>{item.mouseID}</td>
                            <td> <input type="button" name="update" value="✏️" onClick={() => updateRow()} /></td>
                            <td> <input type="button" name="delete" value="🗑️" onClick={(e) => deleteRow(e,item)} /></td>
                        </tr>
                    ))}
                    {showForm && (
                        <tr>
                            <td>
                                <input type="text" name="owner" value={formData.owner} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="site" value={formData.site} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="number" name="computerID" value={formData.computerID} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="number" name="keyboardID" value={formData.keyboardID} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="number" name="screenID" value={formData.screenID} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="number" name="batteryID" value={formData.batteryID} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="number" name="bagID" value={formData.bagID} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="number" name="headphonesID" value={formData.headphonesID} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="mouseID" value={formData.mouseID} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="button" name="update" value="✏️" />
                            </td>
                            <td>
                                <input type="button" name="delete" value="🗑️" />
                            </td>
                        </tr>
                    )}
                </tbody>
                <button onClick={(e) => addRow(e)}>אישור</button>
            </table>

            <button onClick={toggleForm}>הוסף שורה</button>
            <div className="skyvarImg">
                <img src={skyvar} alt="logo" />
            </div>
        </div>
    );
}

export default Equipment;