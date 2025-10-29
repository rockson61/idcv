export function FeaturedOn() {
  return (
    <section className="py-8 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Featured In</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 grayscale opacity-70">
            <div className="flex items-center justify-center">
              <img src="/placeholder.svg?height=40&width=120" alt="The Hindu" className="h-8 md:h-10" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/placeholder.svg?height=40&width=120" alt="Times of India" className="h-8 md:h-10" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/placeholder.svg?height=40&width=120" alt="Vellore Today" className="h-8 md:h-10" />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Dental Association of India"
                className="h-8 md:h-10"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg?height=40&width=120"
                alt="Tamil Nadu Medical Journal"
                className="h-8 md:h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
