const Nav = ({ blok }) => {

  const nav = blok.nav;
  console.log('Nav', Nav);
  return (
    <>
      {/* {
        Nav.map((item, index) =>
          <ul key="index">
            {
              item.Nav.map((navItem, i) =>
                <li key="index">{navItem.navItem}</li>
              )}
          </ul>
        )
      } */}


      <div className="navigation-wrap navigation-shadow bg-white">
        <nav className="navbar navbar-hover navbar-expand-lg navbar-soft">
          <div className="container">
            <div className="offcanvas-header">
              <div data-toggle="modal" data-target="#modal_aside_right" className="btn-md">
                <span className="navbar-toggler-icon" />
              </div>
            </div>
            {/* <figure className="mb-0 mx-auto">
                    <a>
                        <img src={imglogo} alt="" className="img-fluid logo" />
                    </a>
                    </figure> */}
            {/* <Logo color="purple" /> */}
            <div className="collapse navbar-collapse justify-content-between" id="main_nav99">
              <ul className="navbar-nav ml-auto ">
                {nav.map((item, index) => (
                  // console.log('item', item);

                  <li className="nav-item dropdown" key={index}>
                    {
                      item.navItems.map((navItem, i) => (
                        // console.log('navItem', navItem)
                        <li key="index" >{navItem.navItem}</li>
                      ))}
                  </li>
                )


                )}
              </ul>

              <ul className="navbar-nav ">
                <li className="nav-item search hidden-xs hidden-sm ">
                  {' '}
                  <a className="nav-link" href="#">
                    <i className="fa fa-search" />
                  </a>
                </li>
              </ul>

              <div className="top-search navigation-shadow">
                <div className="container">
                  <div className="input-group ">
                    <form action="#">
                      <div className="row no-gutters mt-3">
                        <div className="col">
                          <input
                            className="form-control border-secondary border-right-0 rounded-0"
                            type="search"
                            defaultValue
                            placeholder="Search "
                            id="example-search-input4"
                          />
                        </div>
                        <div className="col-auto">
                          <a
                            className="btn btn-outline-secondary border-left-0 rounded-0 rounded-right"
                            href="/search-result.html">
                            <i className="fa fa-search" />
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>


      {/* <ul className="navbar-nav ml-auto ">
        {navItems.map((item, index) => (
          <li className="nav-item dropdown" key={index}>
            {!item.fields.items ? (
              <Link path={item.fields.slug} href={item.fields.slug || ''}>
                <a className="nav-link">{item.fields.title}</a>
              </Link>
            ) : (
              <>
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                  {item.fields.title}
                </a>
                <ul className="dropdown-menu animate fade-up">
                  {item.fields.items.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      {!subItem.fields.items ? (
                        <Link path={subItem.fields.slug} href={subItem.fields.slug || ''}>
                          <a className="dropdown-item">{subItem.fields.title}</a>
                        </Link>
                      ) : (
                        <>
                          <a className="dropdown-item icon-arrow" href="#">
                            {subItem.fields.title}
                          </a>
                          <ul className="submenu dropdown-menu  animate fade-up">
                            {subItem.fields.items.map((subSubItem, subSubIndex) => (
                              <li key={subSubIndex}>
                                <Link
                                  path={subSubItem.fields.slug}
                                  href={subSubItem.fields.slug || ''}>
                                  <a className="dropdown-item">{subSubItem.fields.title}</a>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul> */}




    </>

  )
}

export default Nav