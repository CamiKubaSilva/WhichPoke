import React, { useEffect, useState, Pagination } from 'react';
import { getPokemons } from '../../actions/index';
import { useDispatch } from "react-redux";
import Cards from '../Cards/Cards';
import Filter from '../Filter/Filter';
import Order from '../Order/Order'
import { useLocation } from 'react-router-dom';
import './Home.css'

function Home() {
  const dispatch = useDispatch();

  const location = useLocation();

  const [state, setState] = useState(true);

  useEffect(() => {
    location.pathname == '/home' && dispatch(getPokemons())
  }, []);

  return (
    <div className='margin'>
      <div className='filter'>
        <Filter state={state} setState={setState} />
        <Order state={state} setState={setState} />
      </div>
      <Cards />
    </div>
  );
}

export default (Home);