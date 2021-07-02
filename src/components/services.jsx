
import {useDispatch, useSelector} from 'react-redux'
import { getServiciosAction } from '../redux/serviciosDucks';

export const Services = () => {

  const API_URL_PUBLIC  = process.env.REACT_APP_API_URL_PUBLIC;
  const dispatch = useDispatch();
  const servicios = useSelector(store=>store.servicios.array);

  //ejecuto la action de traer los servicios
  dispatch((getServiciosAction()));

  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Nuestros servicios</h2>
        </div>
        <div className='row'>
          {servicios.map((d, i) => (
                <div key={`${d.nombre}-${i}`} className='col-md-4'>
                  {' '}
                 <img src={`${API_URL_PUBLIC}/categorias_servicios/${d.imagen}`} alt="" width="50px" height="50px"/>
                  <div className='service-desc'>
                    <h3>{d.nombre}</h3>
                    <p>{d.descripcion}</p>
                  </div>
                </div>
              ))
           }
        </div>
      </div>
    </div>
  )
}
