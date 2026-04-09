import { Category } from "@/generated/prisma";
import { proxy } from "valtio";

export const useCategoriesStore = proxy({
    categories: [] as Category[],
    isLoading: true,
})