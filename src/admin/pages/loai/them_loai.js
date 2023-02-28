import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ThemLoai = () => {
  const [tenloai, settenloai] = useState("");
  const navigate = useNavigate();

  const saveLoai = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}loai`, { tenloai });
      navigate("/admin/loai");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveLoai}>
          <div className="field">
            <label className="label">Tên loại</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tenloai}
                onChange={(e) => settenloai(e.target.value)}
                placeholder="Category Name"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Lưu
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ThemLoai;
