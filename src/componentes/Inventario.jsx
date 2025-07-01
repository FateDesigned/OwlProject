import React, { useState} from "react";
import axios from "axios";

function Inventory() {
  let id_usuario = sessionStorage.getItem("id_usuario");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen1, setModalOpen1] = useState(false);
  let [product, setProduct] = useState({
    nombre: "",
    cantidad_total: 0,
    unidad_medida: "",
    precioUnitario: 0,
    cantidad_unitaria: 0,
    precio_mayoritario: 0,
    cantidad_mayoritaria: 0,
    categoria: "",
    descripcion: "",
  });
  const [products, setProducts] = useState([]); // Estado para los productos
  const [selectedProduct, setSelectedProduct] = useState(null); // Estado para el producto seleccionado


  // Obtener los productos del inventario

  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/inventario/productos/${id_usuario}`
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error al obtener productos", error);
    }
  };

  const fetchProductDetails = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/inventario/producto/${id_usuario}`);
      setSelectedProduct(response.data); // Guardar datos del producto en el estado
      setModalOpen(true); // Abrir modal para ver detalles
    } catch (error) {
      console.error("Error al obtener detalles del producto", error);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Añadir un nuevo producto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/inventario/productos/agregar",
        product
      );
      id_usuario = response.data.id_usuario;
      console.log(response.data.message);
      setModalOpen(false);
      fetchProducts(); // Actualiza la lista de productos
    } catch (error) {
      console.error("Error al agregar producto", error);
    }
  };

  // Renderizar el componente

  return (
    <div className="mainInventory">
      <div className="openModal">
        <h2>Inventario</h2>
        {/* Boton Para Abrir Modal */}
        <button className="addButton" onClick={() => setModalOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="addLogo"
            viewBox="0 0 16 16"
          >
            <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5z" />
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" />
          </svg>
          Agregar Producto
        </button>

        {/* Button modal vender */}
        <button className="venderButton" onClick={() => setModalOpen1(true)}>
          Vender un producto
        </button>
      </div>
      {modalOpen1 && (
        <div className="modalOverlay">
          
        </div>
        )}
      {modalOpen && (
        <div className="modalOverlay">
          <div className="modalBox" id="modalInventario">
            <form
              className="formProducts"
              id="addProductForm"
              onSubmit={handleSubmit}
            >
              <h2>Agregar Producto</h2>
              <b>añade los datos de tu nuevo producto</b>

              <div className="boxInputs">
                {/* Nombre del producto */}
                <div className="inventoryDiv" htmlFor="productName">
                  <b className="tittleInventory">

                  Nombre del producto:

                  </b>
                 
                  <input
                    type="text"
                    id="productName"
                    className="inputInventory"
                    placeholder="Nombre"
                    onChange={handleChange}
                  />
                </div>
                {/* Codigo de barras */}

                {/* scripts para lector de codigo de barras */}

                {/* Precio del producto */}
                <div id="unitaryProduct" className="inventoryDiv">

                  <b className="tittleInventory">

                  Precio unitario del producto:

                  </b>

                  <input
                    type="number"
                    id="precioUnitario"
                    className="inputInventory"
                    placeholder="Precio unitario"
                    onChange={handleChange}
                  />
                  {/* Cantidad del producto unitario */}

                  <b className="tittleInventory">

                  Cantidad unitaria del producto:

                  </b>

                  <input
                    type="text"
                    id="cantidadUnitario"
                    className="inputInventory"
                    placeholder="Cantidad unitaria"
                    tittle="Ejemplo: 1kg"
                    autoComplete="1kg"
                    onChange={handleChange}
                  />
                </div>
                {/* Precio Mayoritario del Producto */}
                <div id="mayoritaryProduct" className="inventoryDiv">

                  <b className="tittleInventory">

                  Precio mayoritario del producto:

                  </b>
                 
                  <input
                    type="number"
                    id="PrecioMayoritario"
                    className="inputInventory"
                    placeholder="Precio mayoritario"
                    onChange={handleChange}
                  />
                  
                  {/* Cantidad Mayoritaría del producto */}
                  <b className="tittleInventory">

                  Cantidad mayoritaria del producto:

                  </b>
                  <input
                    type="text"
                    id="cantidadMayoritaria"
                    tittle="Ejemplo: 10kg, 10unidades"
                    className="inputInventory"
                    placeholder="Cantidad mayoritaria"
                    autoComplete="10kg"
                    onChange={handleChange}
                  />
                </div>
                {/* Cantidad disponible */}
                <div className="inventoryDiv" id="cantidadDisponible">
                  <b className="tittleInventory">

                  Cantidad disponible:

                  </b>
                  <input
                    type="number"
                    id="cantidadTotal"
                    tittle="Ejemplo: 100kg, 100 unidades"
                    className="inputInventory"
                    placeholder="Cantidad disponible"
                    autoComplete="10kg"
                    onChange={handleChange}
                  />
                  
                  {/* Unidad de medida */}
                  <b className="tittleInventory">

                  Unidad de medida:

                  </b>
                  <input
                    type="text"
                    id="unidadMedida"
                    tittle="Ejemplo: kilos, libras, frascos, unidades, etc."
                    className="inputInventory"
                    placeholder="medida del producto"
                    autoComplete="10unidades"
                    onChange={handleChange}
                  />
                </div>
                {/* Categoria del producto */}
                <div id="categoriaProduct" className="inventoryDiv">
                  <b className="tittleInventory">

                  Añade categoria del producto:
                  
                  </b>

                  <select value="categoria">
                    <option selected>Categoría</option>
                    
                  </select>
                  <input type="text" id="" placeholder="Nueva categoría" />
                </div>
                {/* Descripción del producto */}
                <div id="productDescription" className="inventoryDiv">
                  <b className="tittleInventory">

                  añade una descripcion del producto
                  </b>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    className="inputInventory"
                    placeholder="Descripción"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit">Guardar Producto</button>
              <button type="button" onClick={() => setModalOpen(false)}>
                Cancelar
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="product-list">

        {products.map((prod, index) =>(
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
