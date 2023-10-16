import {Link, Outlet, useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function footer () {
  return (
    <div className='card text-center'>
      <div className='card-header'>
        More Information
      </div>
      <div className='card-body'>
          <Link to='/' className='btn btn-primary mx-2'>
            Home
          </Link>
        <Link to='/about' className='btn btn-primary mx-2'>
          About
        </Link>
      </div>
      <div className='card-footer text-body-secondary'>
        <a href="https://github.com/kristinev7" target="_blank" rel="noopener noreferrer">
          <FaGithub />My Github Profile
        </a>
      </div>
      <Outlet />
    </div>
  )
};
          