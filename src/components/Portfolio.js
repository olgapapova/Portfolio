import { NavLink, useNavigate } from 'react-router-dom';
import { PagesRouter } from './PagesRouter';
import './Portfolio.css';

export const Portfolio = () => {

    return (
      
      <div className="Portfolio_conteyner">
        <div className='Portfolio_hiader'>
          <div className="Portfolio_hiader_button">
            <NavLink to="/" className="double-border-button">HOME</NavLink>
            <NavLink to="/about" className="double-border-button">ABOUT</NavLink>
            <NavLink to="/portfolio" className="double-border-button">PORTFOLIO</NavLink>
            <NavLink to="/contact" className="double-border-button">CONTACT</NavLink>
          </div>
        </div>
        <div className="Change"><PagesRouter /></div>
      </div>
    
    );

};