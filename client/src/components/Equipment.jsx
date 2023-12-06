import React, { useState } from "react";

function Equipment() {
  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", age: "" });

  const addRow = () => {
    const newRow = { id: data.length + 1, name: formData.name, age: formData.age };
    setData([...data, newRow]);
    setFormData({ name: "", age: "" });
    setShowForm(false);
  };

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>מספר</th>
            <th>שם</th>
            <th>גיל</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
          {showForm && (
            <tr>
              <td>
                <input
                  type="text"
                  name="Id"
                  value={formData.Id}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </td>
              <td>
                <button onClick={addRow}>אישור</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <button onClick={toggleForm}>הוסף שורה</button>
    </div>
  );
}

export default Equipment;