import React, { useState } from "react";
import skyvar from "./skyvar.png"
import './Equipment.css';


function Equipment() {
    const [data, setData] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", location: "", computer: "", keyboard: "", battery: "", screen: "", bag: "", headphones: "", mouse: "", update: "✏️", delete: "🗑️" });

    const addRow = () => {
        const newRow = {
            name: formData.name,
            location: formData.location,
            computer: formData.computer,
            keyboard: formData.keyboard,
            battery: formData.battery,
            screen: formData.screen,
            bag: formData.bag,
            headphones: formData.headphones,
            mouse: formData.mouse,
            update: formData.update,
            delete: formData.delete

        };
        setData([...data, newRow]);
        setFormData({ name: "", location: "", computer: "", keyboard: "", battery: "", screen: "", bag: "", headphones: "", mouse: "", update: "✏️", delete: "🗑️" });
        setShowForm(false);
    };

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const deleteRow = () => {
        console.log("deleteRow");
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
                        <tr key={item.name}>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.computer}</td>
                            <td>{item.keyboard}</td>
                            <td>{item.screen}</td>
                            <td>{item.battery}</td>
                            <td>{item.bag}</td>
                            <td>{item.headphones}</td>
                            <td>{item.mouse}</td>
                            <td> <input type="button" name="update" value="✏️" onClick={() => updateRow()}/></td>
                            <td> <input type="button" name="delete" value="🗑️" onClick={() => deleteRow()}/></td>
                        </tr>
                    ))}
                    {showForm && (
                        <tr>
                            <td>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="location" value={formData.location} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="computer" value={formData.computer} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="keyboard" value={formData.keyboard} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="screen" value={formData.screen} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="battery" value={formData.battery} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="bag" value={formData.bag} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="headphones" value={formData.headphones} onChange={handleInputChange} />
                            </td>
                            <td>
                                <input type="text" name="mouse" value={formData.mouse} onChange={handleInputChange} />
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
                <button onClick={addRow}>אישור</button>
            </table>

            <button onClick={toggleForm}>הוסף שורה</button>
            <div className="skyvarImg">
                <img src={skyvar} alt="logo" />
            </div>
        </div>
    );
}

export default Equipment;