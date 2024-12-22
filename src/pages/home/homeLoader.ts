import {PackageDetails} from "../../api/types/packageDetails.ts";
import {getFeaturedPackages} from "../../api/queries/getFeaturedPackages.ts";

export interface HomeLoaderResult {
  featuredPackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
  const featuredPackages = await getFeaturedPackages();

  return {
    featuredPackages,
  }
}