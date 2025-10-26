'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, X } from 'lucide-react'

interface SearchFiltersProps {
  onSearch?: (query: string, tags: string[]) => void
}

const popularTags = [
  'root canal',
  'dental implants',
  'braces',
  'cosmetic dentistry',
  'gum disease',
  'emergency',
  'pain',
  'whitening',
  'veneers',
  'extraction',
  'preventive care',
  'oral hygiene'
]

export function SearchFilters({ onSearch }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchQuery, selectedTags)
    }
  }

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedTags([])
    if (onSearch) {
      onSearch('', [])
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search questions, answers, or topics..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="pl-10 pr-4 py-3 text-lg"
        />
        <Button
          onClick={handleSearch}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal-600 hover:bg-teal-700"
          size="sm"
        >
          Search
        </Button>
      </div>

      {/* Popular Tags */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Popular Topics:</span>
          {selectedTags.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-xs text-gray-500 hover:text-gray-700"
            >
              <X className="w-3 h-3 mr-1" />
              Clear all
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "secondary"}
              className={`cursor-pointer transition-colors ${
                selectedTags.includes(tag)
                  ? "bg-teal-600 hover:bg-teal-700 text-white"
                  : "hover:bg-teal-100 hover:text-teal-700"
              }`}
              onClick={() => handleTagToggle(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Active Filters */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {selectedTags.map((tag) => (
            <Badge
              key={tag}
              variant="default"
              className="bg-teal-600 text-white"
            >
              {tag}
              <button
                onClick={() => handleTagToggle(tag)}
                className="ml-2 hover:text-teal-200"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
