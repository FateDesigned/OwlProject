import React, { useState, useEffect } from "react";
import axios from "axios";

function Inventory() {
  const [modalOpen, setModalOpen] = useState(false);
  const [product, setProduct] = useState({
    codigoBarras: "",
    foto: "",
    nombre: "",
    precioUnitario: 0,
    costoUnitario: 0,
    categoria: "",
    descripcion: "",
  });
  const [products, setProducts] = useState([]); // Estado para los productos
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3001/productos");
      setProducts(response.data);
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };
  const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/productos/${id}`);
      setSelectedProduct(response.data); // Guardar datos del producto en el estado
      setModalOpen(true); // Abrir modal para ver detalles
    } catch (error) {
      console.error("Error al obtener detalles del producto", error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/productos/agregar",
        product
      );
      console.log(response.data.message);
      setModalOpen(false);
      fetchProducts(); // Actualiza la lista de productos
    } catch (error) {
      console.error("Error al agregar producto", error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem", position: "relative" }}>
      <h1>Inventario</h1>
      <button onClick={() => setModalOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          fill="currentColor"
          className="bi bi-file-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z" />
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
        </svg>
        Agregar Producto
      </button>
      {modalOpen && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="File"
              name="codigoBarras"
              placeholder="Código de Barras"
              onChange={handleChange}
            />
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              onChange={handleChange}
            />
            <input
              type="number"
              name="precioUnitario"
              placeholder="Precio Unitario"
              onChange={handleChange}
            />
            <input
              type="number"
              name="costoUnitario"
              placeholder="Costo Unitario"
              onChange={handleChange}
            />
            <input
              type="text"
              name="categoria"
              placeholder="Categoría"
              onChange={handleChange}
            />
            <textarea
              name="descripcion"
              placeholder="Descripción"
              onChange={handleChange}
            />
            <input
              type="file"
              name="foto"
              placeholder="Foto"
              onChange={(e) =>
                setProduct({ ...product, foto: e.target.files[0] })
              }
            />
            <button type="submit">Guardar Producto</button>
            <button type="button" onClick={() => setModalOpen(false)}>
              Cancelar
            </button>
          </form>
        </div>
      )}
      <div className="product-list">
        {products.map((prod, index) => (
          <div key={prod.codigo_barras || index} className="product-item">
            <p>
              <strong>Nombre:</strong> {prod.nombre}
            </p>
            <p>
              <strong>Código de Barras:</strong> {prod.codigo_barras}
            </p>
            <p>
              <strong>Precio Unitario:</strong> {prod.precio_unitario}
            </p>
            <p>
              <strong>Categoría:</strong> {prod.categoria}
            </p>
          </div>
        ))}
        <div className="product-list">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="product-item"
              onClick={() => fetchProductDetails(prod.id)}
            >
              <p>
                <strong>Nombre:</strong> {prod.nombre}
              </p>
              <p>
                <strong>Código de Barras:</strong> {prod.codigo_barras}
              </p>
            </div>
          ))}
        </div>
        {modalOpen && selectedProduct && (
          <div className="modal">
            <h2>Detalles del Producto</h2>
            <p>
              <strong>Nombre:</strong> {selectedProduct.nombre}
            </p>
            <p>
              <strong>Código de Barras:</strong> {selectedProduct.codigo_barras}
            </p>
            <p>
              <strong>Precio Unitario:</strong>{" "}
              {selectedProduct.precio_unitario}
            </p>
            <p>
              <strong>Categoría:</strong> {selectedProduct.categoria}
            </p>
            <p>
              <strong>Descripción:</strong> {selectedProduct.descripcion}
            </p>
            <button onClick={() => setModalOpen(false)}>Cerrar</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Inventory;
