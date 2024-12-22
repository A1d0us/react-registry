import {useLoaderData} from "react-router-dom";
import {SearchLoaderResult} from "./searchLoader.ts";
import PackageListItem from "../../components/PackageListItem.tsx";

export default function SearchPage() {
  const {searchResults} = useLoaderData<SearchLoaderResult>();

  const renderedResults = searchResults.map((pack, index) => {
    return (
      <PackageListItem key={index} pack={pack}/>
    )
  });

  return (
    <div>
      <h1 className="text-2xl font-bold my-6">Search Results</h1>
      <div className="space-y-4 mt-4">
        {renderedResults}
      </div>
    </div>
  );
}