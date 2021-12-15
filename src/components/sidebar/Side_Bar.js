import React from "react";
import "./Side_Bar.css";
import logo from '../../assets/images/logo.png'
function Side_Bar({page}) {
  return (
    <nav className="main-menu">
      <div>
        <a className="logo" href="/">
          <img src={logo} alt="not found" width="50px"/>
        </a>
      </div>
      <div className="settings" />
      <div className="scrollbar" id="style-1">
      
        <ul>
          <li>
            <a href="/"
            onClick={()=>page(0)}>
              <i className="fa fa-home fa-lg" />
              <span className="nav-text">acceuil</span>
            </a>
          </li>
          <li>
            <a href="/" onClick={()=>page(1)}>
              <i className="fa fa-user fa-lg" />
              <span className="nav-text">Ajouter un établissement</span>
            </a>
          </li>
          
          <li>
            <a href="/" onClick={()=>page(2)}>
              <i className="fa fa-envelope-o fa-lg" />
              <span className="nav-text">liste établisement</span>
            </a>
          </li>
          </ul>
          {/* <li>
            <a href="http://startific.com">
              <i className="fa fa-heart-o fa-lg" />
              <span className="share"></span>
            </a>
            <div className="addthis_default_style addthis_32x32_style">
              <a href="http://startific.com"></a>
              <div
                style={{ position: "absolute", marginLeft: "56px", top: "3px" }}
              >
                <a href="http://startific.com"></a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u="
                  target="_blank"
                  className="share-popup"
                >
                  <img
                    src="http://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png"
                    width="30px"
                    height="30px"
                  />
                </a>
                <a
                  href="https://twitter.com/share"
                  target="_blank"
                  className="share-popup"
                >
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/metro-ui-dock-icon-set--icons-by-dakirby/512/Twitter_alt.png"
                    width="30px"
                    height="30px"
                  />
                </a>
                <a
                  href="https://plusone.google.com/_/+1/confirm?hl=en&url=_URL_&title=_TITLE_
"
                  target="_blank"
                  className="share-popup"
                >
                  <img
                    src="http://icons.iconarchive.com/icons/danleech/simple/512/google-plus-icon.png"
                    width="30px"
                    height="30px"
                  />
                </a>
              </div>
              <span className="twitter" />
              <span className="google" />
              <span className="fb-like">
                <iframe
                  src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2Ffacebook.com%2Fstartific&width&layout=button&action=like&show_faces=false&share=false&height=35"
                  scrolling="no"
                  frameBorder={0}
                  style={{ border: "none", overflow: "hidden", height: "35px" }}
                  allowTransparency="true"
                />
              </span>
              <span className="nav-text"></span>
            </div>
          </li> */}
          {/* <li className="darkerlishadow">
            <a href="http://startific.com">
              <i className="fa fa-clock-o fa-lg" />
              <span className="nav-text">News</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-desktop fa-lg" />
              <span className="nav-text">Technology</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-plane fa-lg" />
              <span className="nav-text">Travel</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-shopping-cart" />
              <span className="nav-text">Shopping</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-microphone fa-lg" />
              <span className="nav-text">Film &amp; Music</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-flask fa-lg" />
              <span className="nav-text">Web Tools</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-picture-o fa-lg" />
              <span className="nav-text">Art &amp; Design</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-align-left fa-lg" />
              <span className="nav-text">Magazines</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-gamepad fa-lg" />
              <span className="nav-text">Games</span>
            </a>
          </li>
          <li className="darkerli">
            <a href="http://startific.com">
              <i className="fa fa-glass fa-lg" />
              <span className="nav-text">Life &amp; Style</span>
            </a>
          </li>
          <li className="darkerlishadowdown">
            <a href="http://startific.com">
              <i className="fa fa-rocket fa-lg" />
              <span className="nav-text">Fun</span>
            </a>
          </li>
        </ul>
        <li>
          <a href="http://startific.com">
            <i className="fa fa-question-circle fa-lg" />
            <span className="nav-text">Help</span>
          </a>
        </li>
        <ul className="logout">
          <li>
            <a href="http://startific.com">
              <i className="fa fa-lightbulb-o fa-lg" />
              <span className="nav-text">BLOG</span>
            </a>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}

export default Side_Bar;
