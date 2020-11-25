import React from "react"

function App() {
  const [url, setUrl] = React.useState<string>("")
  const [response, setResponse] = React.useState()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value)
  }

  const handleClick = async () => {
    const response = await fetch(url).then((res) => res.json())
    setResponse(response)
  }

  return (
    <div
      className={`flex w-screen h-screen flex-col ${
        !response ? "justify-center" : ""
      }`}
    >
      <div className="flex justify-center items-center">
        <div className="mt-1 flex rounded-md shadow-sm w-full">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
            GET
          </span>
          <input
            type="text"
            id="company_website"
            className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300 mr-2 w-full"
            placeholder="www.example.com"
            onChange={handleChange}
            value={url}
          />
          <button
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={handleClick}
          >
            Request
          </button>
        </div>
      </div>
      <div className="w-full">
        <pre className="whitespace-pre-wrap break-words">
          {JSON.stringify(response, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default App
