import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

const EditProduct = () => {
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
  const { id } = useParams();
  //loại và thương hiệu
  const [listLoai, setListLoai] = useState([]);
  const [listThuongHieu, setListThuongHieu] = useState([]);

  useEffect(() => {
    const fetchLoai = async () => {
      const response = await axios.get("http://localhost:8000/loai");
      setListLoai(response.data);
    };
    const fetchThuongHieu = async () => {
      const response = await axios.get("http://localhost:8000/thuonghieu");
      setListThuongHieu(response.data);
    };

    fetchLoai();
    fetchThuongHieu();
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    fetchProduct();
  }, []);
    const fetchProduct = async () => {
      const response = await axios.get(`http://localhost:8000/sanpham/${id}`);
      const data = response.data;
      setTen(data.ten);
      setGioitinh(data.gioitinh);
      setKichco(data.kichco);
      setMau(data.mau);
      setChatlieu(data.chatlieu);
      setGia(data.gia);
      setSoluong(data.soluong);
      setHinhAnh(data.hinhanh);
      setLoaiId(data.loaiId);
      setThuonghieuId(data.thuonghieuId);
      setPreview(data.url);
    };
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setHinhAnh(file);
      setPreview(URL.createObjectURL(file));
      };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

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
      await axios.patch(`http://localhost:8000/sanpham/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  };



    return (
      <div>
        <h2>Chỉnh sửa sản phẩm</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Tên sản phẩm: </label>
            <input
              type="text"
              required
              value={ten}
              onChange={(e) => setTen(e.target.value)}
            />
          </div>
          <div>
            <label>Giới tính: </label>
            <input
              type="text"
              required
              value={gioitinh}
              onChange={(e) => setGioitinh(e.target.value)}
            />
          </div>
          <div>
            <label>Kích cỡ: </label>
            <input
              type="text"
              required
              value={kichco}
              onChange={(e) => setKichco(e.target.value)}
            />
          </div>
          <div>
            <label>Màu sắc: </label>
            <input
              type="text"
              required
              value={mau}
              onChange={(e) => setMau(e.target.value)}
            />
          </div>
          <div>
            <label>Chất liệu: </label>
            <input
              type="text"
              required
              value={chatlieu}
              onChange={(e) => setChatlieu(e.target.value)}
            />
          </div>
          <div>
            <label>Giá: </label>
            <input
              type="number"
              required
              value={gia}
              onChange={(e) => setGia(e.target.value)}
            />
          </div>
          <div>
            <label>Số lượng: </label>
            <input
              type="number"
              required
              value={soluong}
              onChange={(e) => setSoluong(e.target.value)}
            />
          </div>
          <div>
            <label>Hình ảnh: </label>
            <input
              type="file"
              onChange={handleImageChange}
            />
            {preview && <img src={preview} alt="preview" width="100" />}
          </div>
          <div>
            <label>Loại: </label>
            <select
              value={loaiId}
              onChange={(e) => setLoaiId(e.target.value)}
            >
              {listLoai.map((loai) => (
                <option key={loai.id} value={loai.id}>
                  {loai.tenloai}
                </option>
              ))}
            </select>
          </div>
          <div>
          <label>Thương hiệu: </label>
          <select
            value={thuonghieuId}
            onChange={(e) => setThuonghieuId(e.target.value)}
          >
            {listThuongHieu.map((thuonghieu) => (
              <option key={thuonghieu.id} value={thuonghieu.id}>
                {thuonghieu.tenhieu}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button type="submit">Lưu</button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
