import "./style.css";
const Header = (props) => {
  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="#">Narrate</a>
        <a href="#">Personalise</a>
        <a href="#">Impress</a>
      </nav>
      <div>
        <a
          class="facebook"
          href="https://www.facebook.com/mitroumitsos/"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <i class="fa fa-facebook"></i>
        </a>

        <a
          class="pinterest"
          href="https://www.pinterest.com/mitroumitsos/"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
        >
          <i class="fa fa-pinterest"></i>
        </a>
        <a
          class="behance"
          href="https://www.behance.com/mitroumitsos/"
          target="_blank"
          rel="noopener noreferrer"
          title="Behance"
        >
          <i class="fa fa-behance"></i>
        </a>
        <a
          class="flickr"
          href="https://www.flickr.com/mitroumitsos/"
          target="_blank"
          rel="noopener noreferrer"
          title="flickr"
        >
          <i class="fa fa-flickr"></i>
        </a>
        <a
          class="instagram"
          href="https://www.instagram.com/mitroumitsos/"
          target="_blank"
          rel="noopener noreferrer"
          title="instagram"
        >
          <i class="fa fa-instagram"></i>
        </a>
        <a
          class="twitter"
          href="https://www.twitter.com/mitroumitsos/"
          target="_blank"
          rel="noopener noreferrer"
          title="twitter"
        >
          <i class="fa fa-twitter"></i>
        </a>
        <a
          class="linkedin"
          href="https://www.linkedin.com/mitroumitsos/"
          target="_blank"
          rel="noopener noreferrer"
          title="linkedin"
        >
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
