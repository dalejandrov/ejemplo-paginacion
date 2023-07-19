import { useState, ChangeEvent } from 'react';
import { Loading } from '../components/loading';
import { useProduct } from '../hooks/useProducts';
import { Products } from '../interfaces/fetchAllProductsResponse';

function ProductsPage() {

  const { isLoading, products } = useProduct();
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');

  const filteredProducts = (): Products[] => {
    if (!products) {
      return []; // Return an empty array if products is undefined
    }

    if (search.length === 0) {
      return products.slice(currentPage, currentPage + 5);
    }

    const filtered = products.filter(poke => poke.name.includes(search));
    return filtered.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (products.filter(poke => poke.name.includes(search)).length > currentPage + 5)
      setCurrentPage(currentPage + 5);
  }
  const prevPage = () => {
    if (currentPage > 0)
      setCurrentPage(currentPage - 5);
  }

  const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  }

  return (
    <div className="mt-5">
      <h1>Listado de Productos</h1>
      <hr />

      <input
        type="text"
        className="mb-2 form-control"
        placeholder="Buscar Productos"
        value={search}
        onChange={onSearchChange}
      />

      <button
        className="btn btn-primary"
        onClick={prevPage}
      >
        Anteriores
      </button>
      &nbsp;
      <button
        className="btn btn-primary"
        onClick={nextPage}
      >
        Siguientes
      </button>

      <table className='table'>
        <thead>
          <tr>
            <th style={{ width: 100 }}>ID</th>
            <th style={{ width: 150 }}>Nombre</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>

          {
            filteredProducts().map(({ id, name, description, price, image }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{price}</td>
                <td>
                  <img
                    src={image}
                    alt={name}
                    style={{ height: 100 }}
                  />
                </td>
              </tr>
            ))
          }

        </tbody>
      </table>

      {
        isLoading && <Loading />
      }

    </div>
  )
}

export default ProductsPage
