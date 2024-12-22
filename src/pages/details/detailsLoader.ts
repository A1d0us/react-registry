import {getPackage} from "../../api/queries/getPackage.ts";
import {Params} from "react-router-dom";
import {PackageDetails} from "../../api/types/packageDetails.ts";

interface LoaderArgs {
  params: Params
}

export interface DetailsLoaderResult {
  details: PackageDetails;
}

export async function detailsLoader({params}: LoaderArgs): Promise<DetailsLoaderResult> {
  const {name} = params;

  if (!name) {
    throw new Error("No name provided");
  }

  const details  = await getPackage(name);
  return {
    details,
  };
}