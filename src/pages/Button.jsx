

// eslint-disable-next-line react/prop-types
const Button = ({children}) => {
  return (
    <div className="text-white inline-block  bg-[#1053FC] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{children}</div>
  )
}

export default Button