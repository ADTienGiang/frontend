import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Editthuonghieu = () => {
  const [tenhieu, setthuonghieu] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getLoaiById();
  }, []);

  const getLoaiById = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}thuonghieu/${id}`);
    setthuonghieu(response.data.tenhieu);
  };

  const updateLoai = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}thuonghieu/${id}`, {
        tenhieu,
      });
      navigate("/admin/thuonghieu");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateLoai}>
          <div className="field">
            <label className="label">Tên thương hiệu</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tenhieu}
                onChange={(e) => setthuonghieu(e.target.value)}
                placeholder="Tên thương hiệu"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editthuonghieu;
