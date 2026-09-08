import { useState } from "react";
import { mockIntelligentSearch } from "../mockData/mockData";
import type { MockSearchResponse } from "../mockData/mockData";

export function useIntelligentSearch(rollNo: string) {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<MockSearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const search = async (searchQuery?: string) => {
    const finalQuery = searchQuery ?? query;

    if (!finalQuery.trim()) {
      setError("Please enter something to search.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await mockIntelligentSearch(rollNo, finalQuery);
      setResult(response);
    } catch {
      setError("Something went wrong while searching.");
    } finally {
      setLoading(false);
    }
  };

  return {
    query,
    setQuery,
    result,
    loading,
    error,
    search,
  };
}