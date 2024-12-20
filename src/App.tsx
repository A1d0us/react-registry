import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root.tsx";
import HomePage from "./pages/HomePage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        index: true,
        element: <HomePage/>
      },
      {
        path: '/search',
        element: <SearchPage/>,
        loader: async ({request}) => {
          const {searchParams} = new URL(request.url);
          const term = searchParams.get('term');

          if (!term) {
            throw new Error('Search term must be provided');
          }



        },
      },
      {
        path: '/packages/:name',
        element: <DetailsPage/>
      },
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
