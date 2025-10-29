"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin, Filter } from "lucide-react"

interface LocationSearchProps {
  onSearch: (query: string) => void
  onFilterChange: (filters: any) => void
}

export function LocationSearch({ onSearch, onFilterChange }: LocationSearchProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState({
    distance: "any",
    services: [],
    rating: 0,
    openNow: false,
  })

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleServiceToggle = (service: string) => {
    const newServices = filters.services.includes(service)
      ? filters.services.filter((s) => s !== service)
      : [...filters.services, service]

    handleFilterChange("services", newServices)
  }

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <form onSubmit={handleSearchSubmit} className="p-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Enter location or postal code"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-dental-teal"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-dental text-white px-6 py-2 rounded-lg flex items-center justify-center"
          >
            <Search className="h-5 w-5 mr-2" />
            Search
          </button>
          <button
            type="button"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center justify-center md:ml-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5 mr-2" />
            Filters
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 border-t border-gray-200 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Distance Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-dental-teal"
                  value={filters.distance}
                  onChange={(e) => handleFilterChange("distance", e.target.value)}
                >
                  <option value="any">Any distance</option>
                  <option value="5">Within 5 km</option>
                  <option value="10">Within 10 km</option>
                  <option value="25">Within 25 km</option>
                  <option value="50">Within 50 km</option>
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Rating</label>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`h-8 w-8 ${filters.rating >= star ? "text-yellow-500" : "text-gray-300"}`}
                      onClick={() => handleFilterChange("rating", star)}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Open Now Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Availability</label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-dental-teal focus:ring-dental-teal border-gray-300 rounded"
                    checked={filters.openNow}
                    onChange={(e) => handleFilterChange("openNow", e.target.checked)}
                  />
                  <span className="ml-2 text-sm text-gray-700">Open now</span>
                </label>
              </div>

              {/* Services Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Services</label>
                <div className="space-y-1">
                  {["Root Canal", "Implants", "Braces", "Cosmetic"].map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-dental-teal focus:ring-dental-teal border-gray-300 rounded"
                        checked={filters.services.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                      />
                      <span className="ml-2 text-sm text-gray-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="text-sm text-gray-600 mr-3"
                onClick={() => {
                  setFilters({
                    distance: "any",
                    services: [],
                    rating: 0,
                    openNow: false,
                  })
                  onFilterChange({
                    distance: "any",
                    services: [],
                    rating: 0,
                    openNow: false,
                  })
                }}
              >
                Reset Filters
              </button>
              <button
                type="button"
                className="bg-dental-navy text-white px-4 py-2 rounded-lg text-sm"
                onClick={() => setShowFilters(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}
