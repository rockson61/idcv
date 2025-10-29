import { DataTable, Th, Td } from "@/components/ui/data-table"

const timings = [
  { day: "Monday", hours: "10:00 AM - 8:00 PM", consultation: "Available", emergency: "24/7" },
  { day: "Tuesday", hours: "10:00 AM - 8:00 PM", consultation: "Available", emergency: "24/7" },
  { day: "Wednesday", hours: "10:00 AM - 8:00 PM", consultation: "Available", emergency: "24/7" },
  { day: "Thursday", hours: "10:00 AM - 8:00 PM", consultation: "Available", emergency: "24/7" },
  { day: "Friday", hours: "10:00 AM - 8:00 PM", consultation: "Available", emergency: "24/7" },
  { day: "Saturday", hours: "10:00 AM - 8:00 PM", consultation: "Available", emergency: "24/7" },
  { day: "Sunday", hours: "10:00 AM - 1:30 PM", consultation: "Free Consultation", emergency: "24/7" },
]

export function ClinicTimings() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Clinic Timings</h2>
        <DataTable className="max-w-3xl mx-auto">
          <thead>
            <tr>
              <Th>DAY</Th>
              <Th>HOURS</Th>
              <Th>CONSULTATION</Th>
              <Th>EMERGENCY</Th>
            </tr>
          </thead>
          <tbody>
            {timings.map((timing, index) => (
              <tr key={index} className="border-b border-white/5 last:border-0">
                <Td className="font-medium">{timing.day}</Td>
                <Td className="text-primary">{timing.hours}</Td>
                <Td>
                  <span
                    className={timing.consultation === "Free Consultation" ? "text-accent" : "text-muted-foreground"}
                  >
                    {timing.consultation}
                  </span>
                </Td>
                <Td className="text-secondary">{timing.emergency}</Td>
              </tr>
            ))}
          </tbody>
        </DataTable>
      </div>
    </section>
  )
}
