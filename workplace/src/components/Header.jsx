import CoverImage from '../images/cover-image.jpg';
import ProfileImage from '../images/profile-image.jpg';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { SiQiita } from "react-icons/si";

export const Header = () => {
  return (
    <header className="main-cover" style={{ backgroundImage: `url(${CoverImage})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="display-table">
          <div className="display-table-contents">
            <div className="profile-thumb" style={{ backgroundImage: `url(${ProfileImage})` }}></div>
            <h1 className="title-text">Kentaro Yoshizumi</h1>
            <h3 className="title-text">Infra Engineer</h3>
            <ul className="social-icons">
              <li className="icon-link">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://twitter.com/grad_engineer">
                  <FaTwitter color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://github.com/KentaroYoshizumi">
                  <FaGithub color="white" size="2rem" />
                </a>
              </li>
              <li className="icon-link">
                {/* リンク先(href)は任意のURLを設定してください */}
                <a href="https://qiita.com/KentaroYoshizumi/items/acec0cf38e8dcd697731">
                  <SiQiita color="white" size="2rem" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
