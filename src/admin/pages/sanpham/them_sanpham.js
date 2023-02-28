import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [ten, setTen] = useState("");
  const [gioitinh, setGioitinh] = useState("");
  const [kichco, setKichco] = useState("");
  const [mau, setMau] = useState("");
  const [chatlieu, setChatlieu] = useState("");
  const [gia, setGia] = useState("");
  const [soluong, setSoluong] = useState("");
  const [hinhanh, setHinhAnh] = useState("");
  const [preview, setPreview] = useState("");
  const [loaiId, setLoaiId] = useState("");
  const [thuonghieuId, setThuonghieuId] = useState("");


  //loại và thương hiệu
  const [listLoai, setListLoai] = useState([]);
  const [listThuongHieu, setListThuongHieu] = useState([]);

  useEffect(() => {
    const fetchLoai = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}loai`);
      setListLoai(response.data);
    };
  
    const fetchThuongHieu = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}thuonghieu`);
      setListThuongHieu(response.data);
    };
  
    fetchLoai();
    fetchThuongHieu();
  }, []);
  //



  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setHinhAnh(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ten", ten);
    formData.append("gioitinh", gioitinh);
    formData.append("kichco", kichco);
    formData.append("mau", mau);
    formData.append("chatlieu", chatlieu);
    formData.append("gia", gia);
    formData.append("soluong", soluong);
    formData.append("hinhanh", hinhanh);
    formData.append("loaiId", loaiId);
    formData.append("thuonghieuId", thuonghieuId);
    try {
      await axios.post("${process.env.REACT_APP_BACKEND_URL}sanpham", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns is-centered mt-5">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">Tên sản phẩm</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={ten}
                onChange={(e) => setTen(e.target.value)}
                placeholder="Tên sản phẩm"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Giới tính</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={gioitinh}
                onChange={(e) => setGioitinh(e.target.value)}
                placeholder="Giới tính"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Kích cỡ</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kichco}
                onChange={(e) => setKichco(e.target.value)}
                placeholder="Kích cỡ"
              />
            </div>
          </div>

          <div className="field">
  <label className="label">Màu sắc</label>
  <div className="control">
    <input
      type="text"
      className="input"
      value={mau}
      onChange={(e) => setMau(e.target.value)}
      placeholder="Màu sắc"
    />
  </div>
</div>
<div className="field">
  <label className="label">Chất liệu</label>
  <div className="control">
    <input
      type="text"
      className="input"
      value={chatlieu}
      onChange={(e) => setChatlieu(e.target.value)}
      placeholder="Chất liệu"
    />
  </div>
</div>
<div className="field">
  <label className="label">Giá</label>
  <div className="control">
    <input
      type="number"
      className="input"
      value={gia}
      onChange={(e) => setGia(e.target.value)}
      placeholder="Giá"
    />
  </div>
</div>
<div className="field">
  <label className="label">Số lượng</label>
  <div className="control">
    <input
      type="number"
      className="input"
      value={soluong}
      onChange={(e) => setSoluong(e.target.value)}
      placeholder="Số lượng"
    />
  </div>
</div>
<div className="field">
  <label className="label">Hình ảnh</label>
  <div className="control">
    <input
      type="file"
      onChange={loadImage}
    />
  </div>
  {preview && (
    <img src={preview} alt="Preview" className="mt-3" style={{ width: "200px" }} />
  )}
</div>
<div className="field">
  <label className="label">Thương hiệu</label>
  <div className="control">
    <div className="select">
      <select
        value={thuonghieuId}
        onChange={(e) => setThuonghieuId(e.target.value)}
      >
        <option value="">Chọn thương hiệu</option>
        {listThuongHieu.map((th) => (
          <option key={th.id} value={th.id}>
            {th.tenhieu}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>

<div className="field">
  <label className="label">Loại</label>
  <div className="control">
    <div className="select">
      <select
        value={loaiId}
        onChange={(e) => setLoaiId(e.target.value)}
      >
        <option value="">Chọn loại</option>
        {listLoai.map((l) => (
          <option key={l.id} value={l.id}>
            {l.tenloai}
          </option>
        ))}
      </select>
    </div>
  </div>
</div>

<div className="field is-grouped">
  <div className="control">
    <button type="submit" className="button is-primary">
      Lưu
    </button>
  </div>
  <div className="control">
    <button type="button" className="button is-link" onClick={() => navigate("/admin")}>
      Hủy
    </button>
  </div>
</div>
</form>
</div>
</div>
);
}
export default AddProduct;