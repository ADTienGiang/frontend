import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ThemThuonghieu = () => {
  const [tenhieu, settenhieu] = useState("");
  const navigate = useNavigate();

  const saveThuonghieu = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}thuonghieu`, { tenhieu });
      navigate("/admin/thuonghieu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveThuonghieu}>
          <div className="field">
            <label className="label">Tên loại</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tenhieu}
                onChange={(e) => settenhieu(e.target.value)}
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

export default ThemThuonghieu;
