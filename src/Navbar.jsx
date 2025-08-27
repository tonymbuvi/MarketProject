import React, { useState } from "react";
import "./Navbar.css";

function Navbar({
  onCategorySelect,
  onLocationSelect,
  onVendorSelect,
  onClearAll,
  selectedCategory,
  selectedLocation,
  selectedVendor,
}) {
  const [openMenu, setOpenMenu] = useState(null);

  const categories = {
    Vegetables: ["Potatoes", "Tomatoes", "Beans"],
    Fruits: ["Mangoes", "Oranges", "Bananas"],
    Others: ["Spices", "Herbs"],
  };

  const locations = ["Githurai", "Marikiti", "Ruaka"];
  const vendors = ["Vendor A", "Vendor B", "Vendor C"];

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">MyMarket</div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>

          {/* Categories Dropdown */}
          <li className="dropdown categories">
            <button className="dropbtn" onClick={() => toggleMenu("categories")}>
              Categories ▾
            </button>
            {openMenu === "categories" && (
              <div className="dropdown-content">
                <a
                  href="#"
                  className={!selectedCategory ? "selected" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    onCategorySelect(null);
                    setOpenMenu(null);
                  }}
                >
                  All
                </a>
                {Object.entries(categories).map(([section, items]) => (
                  <div className="dropdown-section" key={section}>
                    <h4>{section}</h4>
                    {items.map((item) => (
                      <a
                        href="#"
                        key={item}
                        className={selectedCategory === item ? "selected" : ""}
                        onClick={(e) => {
                          e.preventDefault();
                          onCategorySelect(item);
                          setOpenMenu(null);
                        }}
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </li>

          {/* Location Dropdown */}
          <li className="dropdown location">
            <button className="dropbtn" onClick={() => toggleMenu("location")}>
              Location ▾
            </button>
            {openMenu === "location" && (
              <div className="dropdown-content">
                <a
                  href="#"
                  className={!selectedLocation ? "selected" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    onLocationSelect(null);
                    setOpenMenu(null);
                  }}
                >
                  All
                </a>
                {locations.map((loc) => (
                  <a
                    href="#"
                    key={loc}
                    className={selectedLocation === loc ? "selected" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      onLocationSelect(loc);
                      setOpenMenu(null);
                    }}
                  >
                    {loc}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Vendors Dropdown */}
          <li className="dropdown vendors">
            <button className="dropbtn" onClick={() => toggleMenu("vendors")}>
              Vendors ▾
            </button>
            {openMenu === "vendors" && (
              <div className="dropdown-content">
                <a
                  href="#"
                  className={!selectedVendor ? "selected" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    onVendorSelect(null);
                    setOpenMenu(null);
                  }}
                >
                  All
                </a>
                {vendors.map((vendor) => (
                  <a
                    href="#"
                    key={vendor}
                    className={selectedVendor === vendor ? "selected" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      onVendorSelect(vendor);
                      setOpenMenu(null);
                    }}
                  >
                    {vendor}
                  </a>
                ))}
              </div>
            )}
          </li>

          {/* Clear All Filters */}
          <li>
            <button className="clear-btn" onClick={onClearAll}>
              Clear Filters
            </button>
          </li>

          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
