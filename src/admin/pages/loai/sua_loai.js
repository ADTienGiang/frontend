import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const EditLoai = () => {
  const [tenloai, settenloai] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getLoaiById();
  }, []);

  const getLoaiById = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}loai/${id}`);
    settenloai(response.data.tenloai);
  };

  const updateLoai = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}loai/${id}`, {
        tenloai,
      });
      navigate("/admin/loai");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={updateLoai}>
          <div className="field">
            <label className="label">Tên Loại</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tenloai}
                onChange={(e) => settenloai(e.target.value)}
                placeholder="Tên Loại"
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

export default EditLoai;
