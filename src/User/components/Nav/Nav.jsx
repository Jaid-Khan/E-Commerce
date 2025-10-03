'use client'
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect, useCallback } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import navigation from '../../../Data/NavMenuData'
import { userMenuItems } from '../../../Data/NavMenuData'
import Logo from "../../../assets/UrbanEaseLogo.png"

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [openCategory, setOpenCategory] = useState(null)
  const [authPopoverOpen, setAuthPopoverOpen] = useState(false)
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const username = "Rahul"
  const navigate = useNavigate();
  const location = useLocation();

  // Memoized function to calculate total cart items count
  const calculateCartItemsCount = useCallback(() => {
    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
      const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0)
      return totalCount
    } catch (error) {
      console.error('Error calculating cart items count:', error)
      return 0
    }
  }, [])

  // Update cart items count
  const updateCartItemsCount = useCallback(() => {
    const count = calculateCartItemsCount()
    setCartItemsCount(count)
  }, [calculateCartItemsCount])

  // Single useEffect to handle all cart updates
  useEffect(() => {
    // Initial load
    updateCartItemsCount()

    const handleCartUpdate = () => {
      updateCartItemsCount()
    }

    // Listen for custom cart update event
    window.addEventListener('cartUpdated', handleCartUpdate)
    
    // Also listen for storage events (in case cart is updated in another tab)
    const handleStorageChange = (e) => {
      if (e.key === 'cartItems') {
        updateCartItemsCount()
      }
    }
    
    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [updateCartItemsCount])

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  }

  const isCategoryActive = (category) => {
    return location.pathname.startsWith(category.href);
  }

  // Handle category click - navigate to category page
  const handleCategoryClick = (categoryHref) => {
    navigate(categoryHref);
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.id}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.id} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <Link 
                            to={item.href} 
                            className="mt-6 block font-medium text-gray-900"
                            onClick={() => setOpen(false)}
                          >
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </Link>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.id}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <Link 
                                to={item.href} 
                                className="-m-2 block p-2 text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <NavLink 
                    to={page.href}
                    className={({ isActive }) => 
                      `-m-2 block p-2 font-medium ${isActive ? 'text-indigo-600' : 'text-gray-900'}`
                    }
                    onClick={() => setOpen(false)}
                  >
                    {page.name}
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {isLoggedIn ? (
                <>
                  <div className="flex items-center px-2 pb-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center rounded-full bg-indigo-600 h-10 w-10 text-white font-medium">
                        {username.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">Hello, {username}</div>
                    </div>
                  </div>
                  
                  {userMenuItems.map((item) => (
                    <div key={item.name} className="flow-root">
                      <Link 
                        to={item.href} 
                        className="-m-2 block p-2 font-medium text-gray-900"
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                  
                  <div className="flow-root">
                    <button 
                      onClick={() => {
                        handleLogout();
                        setOpen(false);
                      }}
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flow-root">
                    <Link 
                      to="/login" 
                      className="-m-2 block p-2 font-medium text-gray-900"
                      onClick={() => setOpen(false)}
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link 
                      to="/register" 
                      className="-m-2 block p-2 font-medium text-gray-900"
                      onClick={() => setOpen(false)}
                    >
                      Create account
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Mobile Cart Count */}
            <div className="border-t border-gray-200 px-4 py-6">
              <Link 
                to="/cart" 
                className="-m-2 flex items-center p-2"
                onClick={() => setOpen(false)}
              >
                <ShoppingBagIcon
                  aria-hidden="true"
                  className="size-6 shrink-0 text-gray-400"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">
                  {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'} in cart
                </span>
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">UrbanEase</span>
                  <img
                    alt="UrbanEase Logo"
                    src={Logo}
                    className="h-8 w-auto object-cover"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <div 
                      key={category.id} 
                      className="flex"
                      onMouseEnter={() => setOpenCategory(category.id)}
                      onMouseLeave={() => setOpenCategory(null)}
                    >
                      <div className="relative flex">
                        <button 
                          onClick={() => handleCategoryClick(category.href)}
                          className={`group relative flex items-center justify-center text-sm font-medium transition-colors duration-300 ease-in-out ${
                            isCategoryActive(category) 
                              ? 'text-indigo-600' 
                              : 'text-gray-700 hover:text-gray-800'
                          }`}
                        >
                          {category.name}
                          <span
                            aria-hidden="true"
                            className={`absolute inset-x-0 -bottom-px z-30 h-0.5 transition-all duration-300 ease-in-out ${
                              isCategoryActive(category) || openCategory === category.id
                                ? 'bg-indigo-600 w-full' 
                                : 'bg-transparent w-0 group-hover:w-full group-hover:bg-indigo-600'
                            }`}
                          />
                        </button>
                      </div>
                      
                      <div className={`absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 shadow-lg transition-all duration-300 ease-in-out ${
                        openCategory === category.id 
                          ? 'opacity-100 translate-y-0' 
                          : 'opacity-0 -translate-y-2 pointer-events-none'
                      }`}>
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75 transition-opacity duration-300"
                                    />
                                    <Link to={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </Link>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.id}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                      >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <Link to={item.href} className="hover:text-gray-800 transition-colors duration-200">
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {navigation.pages.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.href}
                      className={({ isActive }) =>
                        `flex items-center text-sm font-medium transition-colors duration-300 ${
                          isActive ? 'text-indigo-600' : 'text-gray-700 hover:text-gray-800'
                        }`
                      }
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {isLoggedIn ? (
                    <Popover className="relative">
                      <PopoverButton className="flex items-center space-x-2 rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
                        <div className="flex items-center justify-center rounded-full bg-indigo-600 h-8 w-8 text-white font-medium">
                          {username.charAt(0).toUpperCase()}
                        </div>
                        <span>Hello, {username}</span>
                      </PopoverButton>
                      <PopoverPanel
                        transition
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 focus:outline-none data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                      >
                        <div className="px-4 py-2 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-800">Hello, {username}</p>
                        </div>
                        {userMenuItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100">
                          <button
                            onClick={handleLogout}
                            className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                          >
                            Logout
                          </button>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ) : (
                    <Popover 
                      className="relative"
                      onMouseEnter={() => setAuthPopoverOpen(true)}
                      onMouseLeave={() => setAuthPopoverOpen(false)}
                    >
                      <PopoverButton className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 transition-colors duration-200">
                        Sign in
                      </PopoverButton>
                      <PopoverPanel
                        static={authPopoverOpen}
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 focus:outline-none"
                      >
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                          Sign in to your account
                        </Link>
                        <div className="border-t border-gray-100">
                          <Link
                            to="/register"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                            Create new account
                          </Link>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Link to="/searchproduct" className="p-2 text-gray-400 hover:text-gray-500 transition-colors duration-200">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to="/cart" className="group -m-2 flex items-center p-2 relative">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
                    />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-1 -right-1 flex items-center justify-center bg-indigo-600 text-white text-xs font-bold rounded-full h-5 w-5 min-w-[20px]">
                        {cartItemsCount > 99 ? '99+' : cartItemsCount}
                      </span>
                    )}
                    <span className="sr-only">
                      {cartItemsCount} {cartItemsCount === 1 ? 'item' : 'items'} in cart, view bag
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}