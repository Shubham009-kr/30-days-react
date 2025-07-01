import React, { useEffect, useState } from "react";

const Meal = () => {
  const [mealData, setMealData] = useState([]);
  const [area, setArea] = useState('indian')
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await api.json();
      console.log(data);
      setMealData(data.meals);
    };
    fetchDataFromAPI();
  }, [area]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`
    );
    const data = await api.json();
    setMealData(data.meals);
    setSearchInput('');
  }

  return (
    <>
      <div className="w-full min-h-screen bg-linear-to-bl from-gren-500 to-yellow-500 ">
        <div className="flex items-center justify-center py-8 gap-10">
          <button
            onClick={() => setArea('Indian')}
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            Indian
          </button>
          <button
            onClick={() => setArea('Canadian')}
            type="button"
            class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Canadian
          </button>
          <button
            onClick={() => setArea('American')}
            type="button"
            class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            American
          </button>
          <button
            onClick={() => setArea('Thai')}
            type="button"
            class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Thai
          </button>
          <button
            onClick={() => setArea('Italian')}
            type="button"
            class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Italy
          </button>
          <button
            onClick={() => setArea('British')}
            type="button"
            class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            British
          </button>
          <button
            onClick={() => setArea('Russian')}
            type="button"
            class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Russian
          </button>
          <button
            onClick={() => setArea('French')}
            type="button"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            French
          </button>
        </div>
        <form onSubmit={submitHandler} className="flex items-center justify-center py-2">
          <input className="border-white border-4 rounded-xl w-84 h-12"
            onChange={(e) => setSearchInput(e.target.value)}
            type=" text" />
        </form>
        <div className="flex flex-wrap items-center justify-center  gap-10">
          {mealData.map((data) => (
            <div key={data.idMeal} className="">
              <div className="h-[24vh] w-[24vw] py-5 px-5 bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
                {/* <img className='' src={data.strMealThumb} alt="" /> */}
                <h3 className="text-xl">Item Code: {data.idMeal}</h3>
                <h1 className="text-2xl font-medium w-[250px]">
                  Name: {data.strMeal}
                </h1>
                <div className="absolute top-[12%] right-[-25px] flex items-center justify-center w-[135px] h-[135px] bg-amber-50 shadow-2xl backdrop-filter backdrop-blur-2xl rounded-full">
                  <img
                    className="w-[130px] h-[130px]  rounded-full"
                    src={data.strMealThumb}
                    alt=""
                  />
                </div>
                <button
                  type="button"
                  className="text-white absolute bottom-2 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                >
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </div >
    </>
  );
};

export default Meal;
