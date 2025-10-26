import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CallToActionProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
}

export function CallToAction({ title, description, ctaText, ctaLink }: CallToActionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full bg-white text-primary hover:bg-white/90">
              <Link href={ctaLink}>{ctaText}</Link>
            </Button>
            <div className="flex items-center justify-center space-x-2 text-sm">
              <span className="text-primary-foreground/60">Or call us at</span>
              <Link
                href="tel:7010650063"
                className="font-medium underline underline-offset-4 hover:text-primary-foreground"
              >
                7010650063
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
