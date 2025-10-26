"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator } from "lucide-react"

interface CurrencyRates {
  [key: string]: number
}

export function CurrencyCalculator() {
  const [amount, setAmount] = useState<number>(1000)
  const [fromCurrency, setFromCurrency] = useState<string>("INR")
  const [toCurrency, setToCurrency] = useState<string>("USD")
  const [result, setResult] = useState<number | null>(null)

  // Fixed exchange rates (as provided)
  const rates: CurrencyRates = {
    INR: 1,
    THB: 0.45, // 1 INR = 0.45 THB
    AUD: 0.038, // 1 INR = 0.038 AUD
    USD: 0.028, // 1 INR = 0.028 USD
    EUR: 0.026, // 1 INR = 0.026 EUR
    NZD: 0.042, // 1 INR = 0.042 NZD
  }

  // Reverse rates for display
  const reverseRates = {
    AUD: "1 AUD = ₹26.31",
    USD: "1 USD = ₹35.37",
    EUR: "1 EUR = ₹38.91",
    NZD: "1 NZD = ₹24.06",
  }

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      const fromRate = rates[fromCurrency]
      const toRate = rates[toCurrency]
      const calculatedResult = (amount / fromRate) * toRate
      setResult(calculatedResult)
    }
  }, [amount, fromCurrency, toCurrency])

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Currency Calculator
        </CardTitle>
        <CardDescription>Convert dental treatment costs to your preferred currency</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Enter amount"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="fromCurrency">From</Label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger id="fromCurrency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                  <SelectItem value="THB">Thai Baht (฿)</SelectItem>
                  <SelectItem value="USD">US Dollar ($)</SelectItem>
                  <SelectItem value="EUR">Euro (€)</SelectItem>
                  <SelectItem value="AUD">Australian Dollar (A$)</SelectItem>
                  <SelectItem value="NZD">New Zealand Dollar (NZ$)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="toCurrency">To</Label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger id="toCurrency">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR">Indian Rupee (₹)</SelectItem>
                  <SelectItem value="THB">Thai Baht (฿)</SelectItem>
                  <SelectItem value="USD">US Dollar ($)</SelectItem>
                  <SelectItem value="EUR">Euro (€)</SelectItem>
                  <SelectItem value="AUD">Australian Dollar (A$)</SelectItem>
                  <SelectItem value="NZD">New Zealand Dollar (NZ$)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {result !== null && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg text-center">
              <p className="text-lg font-semibold">
                {amount} {fromCurrency} = {result.toFixed(2)} {toCurrency}
              </p>
            </div>
          )}

          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Exchange Rates</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              {Object.entries(reverseRates).map(([currency, rate]) => (
                <div key={currency} className="p-2 bg-gray-50 rounded text-center">
                  {rate}
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
