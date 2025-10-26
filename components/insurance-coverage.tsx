import { DataTable, Th, Td } from "@/components/ui/data-table"

const insurancePlans = [
  {
    provider: "Star Health Insurance",
    coverage: "Up to ₹50,000",
    treatments: ["Root Canal", "Dental Implants", "Orthodontic Care"],
    cashless: "Yes",
  },
  {
    provider: "HDFC ERGO Health",
    coverage: "Up to ₹75,000",
    treatments: ["All Dental Procedures", "Cosmetic Dentistry"],
    cashless: "Yes",
  },
  {
    provider: "Religare Health",
    coverage: "Up to ₹1,00,000",
    treatments: ["Major Dental Procedures", "Surgical Extractions"],
    cashless: "Yes",
  },
  {
    provider: "Max Bupa Health",
    coverage: "Up to ₹60,000",
    treatments: ["Basic Dental Care", "Emergency Procedures"],
    cashless: "Available",
  },
]

export function InsuranceCoverage() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Insurance Coverage</h2>
        <DataTable>
          <thead>
            <tr>
              <Th>INSURANCE PROVIDER</Th>
              <Th>COVERAGE LIMIT</Th>
              <Th>COVERED TREATMENTS</Th>
              <Th>CASHLESS</Th>
            </tr>
          </thead>
          <tbody>
            {insurancePlans.map((plan, index) => (
              <tr key={index} className="border-b border-white/5 last:border-0">
                <Td className="font-medium text-primary">{plan.provider}</Td>
                <Td className="text-accent">{plan.coverage}</Td>
                <Td>
                  <div className="flex flex-wrap gap-1">
                    {plan.treatments.map((treatment, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {treatment}
                      </span>
                    ))}
                  </div>
                </Td>
                <Td>
                  <span className={plan.cashless === "Yes" ? "text-accent" : "text-secondary"}>{plan.cashless}</span>
                </Td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </div>
    </section>
  )
}
