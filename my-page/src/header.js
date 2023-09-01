import './header.css';
import cart from './images/icons/cart-sm.png';
import logo from './images/icons/logo-sm.png';
import search from './images/icons/search-icon-sm.png';

function Header() {
  return (
    <header class="header-outer">
    <div class="internal-header">
      <div class="header-internal">
        <ul>
          <li class="logolink">
            <a href="/"><img src={logo} /></a>
          </li>
          <li><a href="/mac/">Mac</a></li>
          <li><a href="#">iphone</a></li>
          <li><a href="#">ipad</a></li>
          <li><a href="#">watch</a></li>
          <li><a href="#">tv</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Support</a></li>
          <li class="searchlink">
            <a href="/search/"><img src={search} /></a>
          </li>
          <li class="cartlink">
            <a href="/cart/"><img src={cart} /></a>
          </li>
        </ul>
      </div>
    </div>
  </header>

  );
}

export default Header;
