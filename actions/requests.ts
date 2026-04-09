import { useCategoriesStore } from "@/store/categories"
import axios from "axios"

const base_url = process.env.NEXT_PUBLIC_BASE_URL

export async function getCategories() {
    try {
        const { data } = await axios.get(
            `${base_url}/categories/get-categories`,
        )

        useCategoriesStore.categories = data || []

        return data
    } finally {
        useCategoriesStore.isLoading = false
    }
}