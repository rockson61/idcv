'use client'

import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { IndianRupee, TrendingDown, CheckCircle } from 'lucide-react'

interface PriceComparisonTableProps {
  locationName: string
  className?: string
}

export function PriceComparisonTable({ locationName, className = "" }: PriceComparisonTableProps) {
  const services = [
    { 
      name: 'Root Canal Treatment', 
      ourPrice: '₹3,000 - ₹8,000', 
      marketPrice: '₹5,000 - ₹12,000', 
      savings: 'Up to ₹4,000',
      features: ['Single sitting', 'Digital X-Ray', 'Crown included']
    },
    { 
      name: 'Dental Implants', 
      ourPrice: '₹25,000 - ₹45,000', 
      marketPrice: '₹40,000 - ₹70,000', 
      savings: 'Up to ₹25,000',
      features: ['Titanium implant', 'Lifetime warranty', 'Natural look']
    },
    { 
      name: 'Braces (Complete)', 
      ourPrice: '₹30,000 - ₹80,000', 
      marketPrice: '₹50,000 - ₹1,20,000', 
      savings: 'Up to ₹40,000',
      features: ['Metal/Ceramic', '18-24 months', 'Retainers included']
    },
    { 
      name: 'Teeth Whitening', 
      ourPrice: '₹5,000 - ₹15,000', 
      marketPrice: '₹8,000 - ₹25,000', 
      savings: 'Up to ₹10,000',
      features: ['Professional grade', 'Instant results', 'Safe procedure']
    },
  ];

  return (
    <ModernCard className={className}>
      <ModernCardHeader>
        <ModernCardTitle className="flex items-center gap-2">
          <TrendingDown className="w-6 h-6 text-green-600" />
          Affordable Pricing for {locationName} Patients
        </ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <p className="text-gray-600 mb-6">
          Compare our transparent pricing with market rates. Save significantly on your dental treatments!
        </p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Treatment</th>
                <th className="text-left py-3 px-4 font-semibold text-teal-600">Our Price</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-600">Market Price</th>
                <th className="text-left py-3 px-4 font-semibold text-green-600">You Save</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4">
                    <div>
                      <p className="font-semibold text-gray-900">{service.name}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-xs text-gray-500 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-teal-500" />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-lg font-bold text-teal-600">{service.ourPrice}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600 line-through">{service.marketPrice}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-semibold">{service.savings}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Savings Highlight */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500 rounded-full">
              <IndianRupee className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">Save 20-40% on Dental Treatments</p>
              <p className="text-sm text-gray-600">
                Transparent pricing • No hidden costs • EMI options available
              </p>
            </div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-teal-500" />
            <span>Free Consultation</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-teal-500" />
            <span>EMI Available</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-teal-500" />
            <span>Insurance Accepted</span>
          </div>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}

