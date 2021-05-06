import React from 'react';

const TopNav = ({ blok }) => {
  const TopNav = blok.topNav;

  const displayDate = (date) => {
    const _date = new Date(date);

    return _date.toLocaleDateString() + ' ' + _date.toLocaleTimeString();
  };
  return (
    <>
      <div className="topbar d-none d-sm-block">
        <div className="container ">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="topbar-left">
                <div className="topbar-text">{displayDate(TopNav[0].date)}</div>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
              <div className="list-unstyled topbar-right">
                {TopNav[1].navItems.map((item, index) => {
                  return (
                    <ul className="topbar-link">
                      <li key={index}>
                        <a href="#" data-toggle="dropdown">
                          {item.navItem}
                        </a>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TopNav