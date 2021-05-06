import { Logo } from './Logo';

const MainNav = ({ blok }) => {

  const MainNav = blok.mainNav;

  return (
    <>
      <div className="navigation-wrap navigation-shadow bg-white">
        <nav className="navbar navbar-hover navbar-expand-lg navbar-soft">
          <div className="container">
            <div className="offcanvas-header">
              <div data-toggle="modal" data-target="#modal_aside_right" className="btn-md">
                <span className="navbar-toggler-icon" />
              </div>
            </div>
            <Logo color="purple" />

            <div className="collapse navbar-collapse justify-content-between" id="main_nav99">

              <ul className="navbar-nav ml-auto ">
                {MainNav.map((item, index) => (
                  <li className="nav-item dropdown" key={index}>
                    <>
                      <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                        {item.title}
                      </a>
                      <ul className="dropdown-menu animate fade-up">
                        {item.navItems.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a className="dropdown-item">{subItem.navItem}</a>
                          </li>
                        ))}
                      </ul>
                    </>
                  </li>
                ))}
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
    </>

  )
}

export default MainNav