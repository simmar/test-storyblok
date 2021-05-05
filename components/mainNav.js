const MainNav = ({ blok }) => {

  const mainNav = blok.mainNav;
  console.log('mainNav', mainNav);
  return (
    <>
      {
        mainNav.map((item, index) =>
          <ul key="index">
            {
              item.mainNav.map((navItem, i) =>
                <li key="index">{navItem.navItem}</li>
              )}
          </ul>
        )
      }
    </>

  )
}

export default MainNav