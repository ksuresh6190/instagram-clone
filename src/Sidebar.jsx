import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [search, setSearch] = useState(false);
  const SearchBar = () => {
    setSearch(!search);
  };
  const closeSearchBar = () => {
    setSearch(false);
  };
  const [notification, setNotification] = useState(false);
  const Notification = () => {
    setNotification(!notification);
  };
  const closeNotification = () => {
    setNotification(false);
  };
  const [newCreateBar, setCreateBar] = useState(false);
  const OpenCreateBar = () => {
    setCreateBar(!newCreateBar);
  };
  const closeCreateBar = () => {
    setCreateBar(false);
  };
  const [more, setMore] = useState(false);
  const OpenMore = () => {
    setMore(!more);
  };
  const closeMore = () => {
    setMore(false);
  };
  const [afMeta, setAfMeta] = useState(false);
  const OpenMeta = () => {
    setAfMeta(!afMeta);
  };
  const closeMeta = () => {
    setAfMeta(false);
  };

  return (
    <div className="sidebar position-fixed top-0">
      <img
        className="logo m-3"
        src=".\src\assets\instagramLogoWork.png"
        alt="instagram "
      />
      <div className="m-3 d-flex flex-column">
        <div
          className="sidebar-list"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="bi bi-house-door-fill"></i>Home
        </div>
        <div className="sidebar-list" onClick={SearchBar}>
          <i className="bi bi-search"></i>Search
        </div>
        <div className="sidebar-list" onClick={() => {
            navigate("/explore");
          }}>
          <i className="bi bi-compass"></i>Explore
        </div>
        <div className="sidebar-list" onClick={() => {
            navigate("/reels");
          }}>
          <i className="bi bi-play-btn-fill"></i>Reels
        </div>
        <div className="sidebar-list" onClick={() => {
            navigate("/message");
          }}>
          <i className="bi bi-messenger"></i>Messages
        </div>
        <div className="sidebar-list" onClick={Notification}>
          <i className="bi bi-heart"></i>Notifications
        </div>
        <div className="sidebar-list" onClick={OpenCreateBar}>
          <i className="bi bi-plus-square"></i>Create
        </div>
        <div className="sidebar-list" onClick={() => {
            navigate("/dashboard");
          }}>
          <i className="bi bi-bar-chart"></i>Dashboard
        </div>
        <div
          className="sidebar-list"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <i className="bi bi-person-square"></i>Profile
        </div>
      </div>
      <div className="m-3 d-flex flex-column gap-3 position-fixed bottom-0">
        <div className="sidebar-list" onClick={OpenMore}>
          <i className="bi bi-list"></i>More
        </div>
        <div className="sidebar-list" onClick={OpenMeta}>
          <i className="bi bi-ui-checks-grid"></i>Also from Meta
        </div>
      </div>
      <div>
        {search ? (
          <div className="search">
            <div className="s-1">
              <h3>Search</h3>
            </div>
            <div className="s-2">
              <input type="text" placeholder="Search" />
              <p onClick={closeSearchBar}>x</p>
            </div>
            <div className="s-3">
              <p>Recent</p>
            </div>
            <div className="s-4">
              <p className="text-secondary">No recent searches.</p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {notification ? (
          <div className="search">
            <div className="n-1">
              <h3>Notifications</h3>
              <p onClick={closeNotification}>
                <i className="bi bi-x-circle"></i>
              </p>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {newCreateBar ? (
          <div className="create-bar">
            <div className="c-1 d-flex flex-column gap-3">
              <div className="d-flex gap-5 c-cm">
                <p>Post</p>
                <i className="bi bi-images"></i>
              </div>
              <div className="d-flex gap-5 c-cm">
                <p>Live Video</p>
                <i className="bi bi-broadcast"></i>
              </div>
              <div className="d-flex gap-5 c-cm">
                <p>Ad</p>
                <i className="bi bi-graph-up-arrow"></i>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {more ? (
          <div className="more-bar" onClick={closeMore}>
            <div className="m-1 d-flex flex-column gap-3">
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-images"></i>
                <p>Settings</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-broadcast"></i>
                <p>Your activity</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-graph-up-arrow"></i>
                <p>Saved</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-images"></i>
                <p>Switch appearance</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-broadcast"></i>
                <p>Report a problem</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-graph-up-arrow"></i>
                <p>Threads</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-broadcast"></i>
                <p>Switch accounts</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-graph-up-arrow"></i>
                <p>Log out</p>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <div>
        {afMeta ? (
          <div className="meta-bar" onClick={closeMeta}>
            <div className="meta-1 d-flex flex-column gap-3">
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-record-circle-fill"></i>
                <p>Meta AI</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-ui-radios-grid"></i>
                <p>AI Studio</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-threads"></i>
                <p>Threads</p>
              </div>
              <div className="d-flex gap-2 m-cm">
                <i className="bi bi-whatsapp"></i>
                <p>Whatsapp</p>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
