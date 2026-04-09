"use client"
import { useEffect } from "react"
import { getCategories } from "../../actions/requests"

export function Guard({ children }: { children: React.ReactNode }) {

    const handleGetCategories = async () => {
        await getCategories()
    }

    useEffect(() => {
        handleGetCategories()
    }, [])

    return children
}