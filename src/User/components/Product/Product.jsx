"use client";
import ProductCard from "./ProductCard";
import { products } from "../../../Data/AllProductsData";
import { filters, singleFilter } from "../../../Data/ProductFilterData";
import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

const sortOptions = [
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    color: [],
    size: [],
    price: [],
    discount: [],
    stock: [],
  });
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Get category from URL parameters and location
  const { category, brand, featured } = useParams();
  const location = useLocation();

  // Handle filter changes
  const handleFilterChange = (filterType, value, isChecked) => {
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };

      if (isChecked) {
        newFilters[filterType] = [...newFilters[filterType], value];
      } else {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      }

      return newFilters;
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSelectedFilters({
      color: [],
      size: [],
      price: [],
      discount: [],
      stock: [],
    });
    setSortOption(null);
  };

  // Apply filters and sorting based on URL parameters
  useEffect(() => {
    setIsLoading(true);
    
    let results = [...products];

    // Get current path to determine gender
    const currentPath = location.pathname;
    const isWomenSection = currentPath.includes('/womensproduct');
    const isMenSection = currentPath.includes('/mensproduct');

    // Apply gender filtering first
    if (isWomenSection) {
      results = results.filter(product => product.gender === 'female');
    } else if (isMenSection) {
      results = results.filter(product => product.gender === 'male');
    }

    // Apply category filter from URL
    if (category && category !== 'all') {
      console.log('Filtering by category:', category);
      results = results.filter(product => {
        // Handle different category naming conventions for women
        if (category === 'sarees' && product.category === 'sarees') return true;
        if (category === 'kurtis' && product.category === 'kurtis') return true;
        if (category === 'ethnic-wear' && product.category === 'ethnic-wear') return true;
        if (category === 'tops' && product.category === 'tops') return true;
        if (category === 'dresses' && product.category === 'dresses') return true;
        if (category === 'jeans' && product.category === 'jeans') return true;
        if (category === 'tshirts' && product.category === 'tshirts') return true;
        if (category === 'shirts' && product.category === 'shirts') return true;
        if (category === 'pants' && product.category === 'pants') return true;
        if (category === 'sweaters' && product.category === 'sweaters') return true;
        if (category === 'jackets' && product.category === 'jackets') return true;
        if (category === 'lahenga-cholis' && product.category === 'lahenga-cholis') return true;
        if (category === 'salwar-suits' && product.category === 'salwar-suits') return true;
        if (category === 'shararas' && product.category === 'shararas') return true;
        if (category === 'track-pants' && product.category === 'track-pants') return true;
        return false;
      });
    }

    // Brand filter from URL
    if (brand) {
      const brandName = brand.replace(/-/g, ' ');
      results = results.filter(product => 
        product.brand && product.brand.toLowerCase().includes(brandName.toLowerCase())
      );
    }

    // Featured filter from URL
    if (featured) {
      const featureName = featured.replace(/-/g, ' ');
      if (featureName.includes('new-arrivals')) {
        results = results.filter(product => product.id <= 20);
      } else if (featureName.includes('best-sellers') || featureName.includes('trending')) {
        results = results.filter(product => product.discountPercent >= 40);
      }
    }

    // Apply additional filters only if they are selected
    // Color filter
    if (selectedFilters.color.length > 0) {
      results = results.filter((product) =>
        selectedFilters.color.includes(product.color.toLowerCase())
      );
    }

    // Size filter
    if (selectedFilters.size.length > 0) {
      results = results.filter((product) =>
        selectedFilters.size.some(
          (size) => product.size && product.size.includes(size)
        )
      );
    }

    // Price filter
    if (selectedFilters.price.length > 0) {
      results = results.filter((product) => {
        return selectedFilters.price.some((priceRange) => {
          const [min, max] = priceRange.split("-").map(Number);
          return product.price >= min && product.price <= max;
        });
      });
    }

    // Discount filter
    if (selectedFilters.discount.length > 0) {
      results = results.filter((product) => {
        return selectedFilters.discount.some((discount) => {
          const discountPercent = parseInt(discount.replace("%", ""));
          return product.discountPercent >= discountPercent;
        });
      });
    }

    // Stock filter
    if (selectedFilters.stock.length > 0) {
      results = results.filter((product) => {
        if (selectedFilters.stock.includes("In Stock")) {
          return product.quantity > 0;
        }
        if (selectedFilters.stock.includes("Out of Stock")) {
          return product.quantity === 0;
        }
        return true;
      });
    }

    // Apply sorting
    if (sortOption === "Price: Low to High") {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      results = [...results].sort((a, b) => b.price - a.price);
    }

    console.log('Filtered results:', results.length);
    setFilteredProducts(results);
    setIsLoading(false);
  }, [selectedFilters, sortOption, category, brand, featured, location.pathname]);

  // Reset filters when URL changes
  useEffect(() => {
    setSelectedFilters({
      color: [],
      size: [],
      price: [],
      discount: [],
      stock: [],
    });
    setSortOption(null);
  }, [category, brand, featured, location.pathname]);

  // Handle sort selection
  const handleSortSelect = (optionName) => {
    setSortOption(optionName === sortOption ? null : optionName);
  };

  // Check if any filters are active
  const areFiltersActive =
    Object.values(selectedFilters).some(
      (filterArray) => filterArray.length > 0
    ) || sortOption !== null;

  // Get page title based on URL parameters
  const getPageTitle = () => {
    const categoryTitles = {
      'tops': "Women's Tops",
      'dresses': "Women's Dresses", 
      'jeans': "Women's Jeans",
      'tshirts': "Women's T-Shirts",
      'kurtis': "Women's Kurtis",
      'pants': "Women's Pants",
      'jackets': "Women's Jackets",
      'sweaters': "Women's Sweaters",
      'sarees': "Sarees",
      'ethnic-wear': "Ethnic Wear",
      'lahenga-cholis': 'Lahenga Cholis',
      'salwar-suits': 'Salwar Suits',
      'shararas': 'Shararas',
      'shirts': 'Shirts',
      'track-pants': 'Track Pants',

    };

    // Get current path for gender-specific titles
    const currentPath = location.pathname;
    const isWomenSection = currentPath.includes('/womensproduct');
    const isMenSection = currentPath.includes('/mensproduct');

    // Brand pages
    if (brand) {
      const brandName = brand.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return `${brandName} Products`;
    }

    // Featured pages
    if (featured) {
      const featureName = featured.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return featureName;
    }

    // Category pages with gender context
    if (category && categoryTitles[category]) {
      return categoryTitles[category];
    }

    // Gender pages
    if (isWomenSection) {
      return "Women's Clothing";
    } else if (isMenSection) {
      return "Men's Clothing";
    }

    return "All Products";
  };

  // Get active filter description
  const getActiveFilterDescription = () => {
    const currentPath = location.pathname;
    const isWomenSection = currentPath.includes('/womensproduct');
    const isMenSection = currentPath.includes('/mensproduct');
    
    if (category) {
      const categoryNames = {
        'tops': 'Tops',
        'dresses': 'Dresses',
        'jeans': 'Jeans',
        'tshirts': 'T-Shirts',
        'kurtis': 'Kurtis',
        'pants': 'Pants',
        'sweaters': 'Sweaters',
        'jackets': 'Jackets',
        'sarees': 'Sarees',
        'ethnic-wear': 'Ethnic Wear',
        'lahenga-cholis': 'Lahenga Cholis',
        'salwar-suits': 'Salwar suits',
        'shararas': 'Shararas',
        'track-pants': 'Track Pants',
        'shirts': 'Shirts',
      };
      
      let description = `Showing ${categoryNames[category] || category}`;
      
      // Add gender context
      if (isWomenSection) {
        description = `Showing Women's ${categoryNames[category] || category}`;
      } else if (isMenSection) {
        description = `Showing Men's ${categoryNames[category] || category}`;
      }
      
      return description;
    }

    if (brand) {
      const brandName = brand.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return `Showing ${brandName} products`;
    }

    if (featured) {
      const featureName = featured.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      return `Showing ${featureName}`;
    }

    if (isWomenSection) {
      return "Showing all women's products";
    } else if (isMenSection) {
      return "Showing all men's products";
    }

    return 'Showing all products';
  };

  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex size-full max-w-xs transform flex-col overflow-y-auto bg-white pt-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <div className="flex items-center gap-2">
                  {areFiltersActive && (
                    <button
                      type="button"
                      onClick={clearAllFilters}
                      className="text-xs text-indigo-600 hover:text-indigo-800"
                    >
                      Clear All
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="relative -mr-2 flex size-10 items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </div>

              {/* Active filter info */}
              <div className="px-4 py-3 bg-blue-50 border-b">
                <p className="text-sm text-blue-700">
                  {getActiveFilterDescription()}
                </p>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  checked={selectedFilters[section.id].includes(
                                    option.value
                                  )}
                                  onChange={(e) =>
                                    handleFilterChange(
                                      section.id,
                                      option.value,
                                      e.target.checked
                                    )
                                  }
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                {/* Single filters for mobile */}
                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    <h3 className="-mx-2 -my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  checked={selectedFilters[section.id].includes(
                                    option.value
                                  )}
                                  onChange={(e) =>
                                    handleFilterChange(
                                      section.id,
                                      option.value,
                                      e.target.checked
                                    )
                                  }
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                              className="min-w-0 flex-1 text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {getPageTitle()}
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                {getActiveFilterDescription()}
              </p>
            </div>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                  />
                </MenuButton>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSortSelect(option.name);
                          }}
                          className={classNames(
                            sortOption === option.name
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-focus:bg-gray-100 data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="size-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pt-6 pb-24">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
              <form className="hidden lg:block">
                <div className="flex justify-between items-center">
                  <h1 className="text-3xl opacity-80 font-bold text-black my-3">
                    Filters
                  </h1>
                  <div className="flex items-center gap-2">
                    {areFiltersActive && (
                      <button
                        type="button"
                        onClick={clearAllFilters}
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        Clear All
                      </button>
                    )}
                    <FilterAltIcon />
                  </div>
                </div>

                {/* Active URL filter display */}
                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 text-sm mb-2">Active Category:</h4>
                  <p className="text-blue-700 text-sm">{getActiveFilterDescription()}</p>
                </div>

                <h3 className="sr-only">Categories</h3>
                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  checked={selectedFilters[section.id].includes(
                                    option.value
                                  )}
                                  onChange={(e) =>
                                    handleFilterChange(
                                      section.id,
                                      option.value,
                                      e.target.checked
                                    )
                                  }
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}

                {/* Single filters */}
                {singleFilter.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="border-b border-gray-200 py-6"
                  >
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="size-5 group-data-open:hidden"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="size-5 group-not-data-open:hidden"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex gap-3">
                            <div className="flex h-5 shrink-0 items-center">
                              <div className="group grid size-4 grid-cols-1">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  type="checkbox"
                                  checked={selectedFilters[section.id].includes(
                                    option.value
                                  )}
                                  onChange={(e) =>
                                    handleFilterChange(
                                      section.id,
                                      option.value,
                                      e.target.checked
                                    )
                                  }
                                  className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                />
                                <svg
                                  fill="none"
                                  viewBox="0 0 14 14"
                                  className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white"
                                >
                                  <path
                                    d="M3 8L6 11L11 3.5"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="opacity-0 group-has-checked:opacity-100"
                                  />
                                </svg>
                              </div>
                            </div>
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="text-sm text-gray-600"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                {/* Active filters and results count */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-gray-600">
                      {isLoading ? 'Loading...' : `Showing ${filteredProducts.length} of ${products.length} products`}
                    </p>
                  </div>
                  {areFiltersActive && (
                    <button
                      onClick={clearAllFilters}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                      Clear all filters
                    </button>
                  )}
                </div>

                <div className="bg-white flex flex-wrap justify-center py-5">
                  {isLoading ? (
                    <div className="w-full text-center py-10">
                      <p className="text-gray-500 text-lg">Loading products...</p>
                    </div>
                  ) : filteredProducts.length > 0 ? (
                    filteredProducts.map((item) => (
                      <ProductCard
                        key={item.id}
                        product={item}
                      />
                    ))
                  ) : (
                    <div className="w-full text-center py-10">
                      <p className="text-gray-500 text-lg">
                        No products found matching your criteria.
                      </p>
                      <button
                        onClick={clearAllFilters}
                        className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Clear all filters
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}