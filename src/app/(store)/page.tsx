import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, MessageCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProductGrid } from "@/components/products/product-grid"
import { PLACEHOLDER_IMAGE } from "@/lib/constants"
import { productRepository, categoryRepository } from "@/lib/repositories"

export const metadata: Metadata = {
  title: "HUNAR — Personalized Gifts & Custom Products",
  description:
    "Create something personal with HUNAR. Custom T-shirts, mugs, photo frames and personalized gifts made especially for you.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "HUNAR — Make It Personal. Make It Yours.",
    description:
      "Custom T-shirts, mugs, photo frames and personalized gifts made especially for you.",
    type: "website",
  },
  keywords: [
    "custom t-shirts",
    "personalized gifts",
    "custom mugs",
    "photo frames",
    "personalized products",
    "custom printing",
    "HUNAR",
  ],
}

export default async function HomePage() {
  const categories = await categoryRepository.list()
  const featuredProducts = await productRepository.getFeatured(4)

  return (
    <div className="flex flex-col bg-white">

      {/* ========================================================= */}
      {/* HERO                                                      */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-neutral-950 text-white">
        <div className="absolute inset-0">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-40 -right-32 h-[500px] w-[500px] rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-[620px] max-w-[1440px] items-center px-6 py-20 sm:px-10 lg:px-16">
          <div className="max-w-3xl">

            <Badge
              variant="secondary"
              className="mb-6 border-0 bg-white text-neutral-950"
            >
              Made personal. Made for you.
            </Badge>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Make it
              <br />
              <span className="text-neutral-400">personal.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
              Custom T-shirts, mugs, photo frames and gifts created
              especially for you. Turn your ideas, memories and moments
              into something you can hold onto.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="h-12 bg-white px-7 text-base text-neutral-950 hover:bg-neutral-200"
                asChild
              >
                <Link href="/shop">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 border-neutral-700 bg-transparent px-7 text-base text-white hover:bg-white hover:text-neutral-950"
                asChild
              >
                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================= */}
      {/* CATEGORY SECTION                                          */}
      {/* ========================================================= */}

      <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">

        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Explore
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Shop by category
            </h2>

            <p className="mt-3 max-w-xl text-muted-foreground">
              Find something you love and make it uniquely yours.
            </p>
          </div>

          <Link
            href="/shop"
            className="hidden items-center text-sm font-medium hover:underline sm:flex"
          >
            View all
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

          {categories.slice(0, 6).map((category) => (
            <Link
              key={category.id}
              href={`/${category.slug}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-neutral-100">

                <Image
                  src={category.image?.url ?? PLACEHOLDER_IMAGE}
                  alt={category.image?.alt ?? category.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </div>

              <h3 className="mt-4 text-center text-sm font-semibold sm:text-base">
                {category.name}
              </h3>
            </Link>
          ))}

        </div>

        <div className="mt-8 sm:hidden">
          <Button variant="outline" className="w-full" asChild>
            <Link href="/shop">
              View all products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

      </section>


      {/* ========================================================= */}
      {/* FEATURED PRODUCTS                                         */}
      {/* ========================================================= */}

      <section className="border-y bg-neutral-50">

        <div className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">

          <div className="flex items-end justify-between gap-6">

            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Our picks
              </p>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Made to stand out
              </h2>

              <p className="mt-3 max-w-xl text-muted-foreground">
                Some of our favourite products to personalize, gift and
                make your own.
              </p>
            </div>

            <Link
              href="/shop"
              className="hidden items-center text-sm font-medium hover:underline sm:flex"
            >
              Shop everything
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

          </div>

          <div className="mt-10">
            <ProductGrid products={featuredProducts} />
          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* HOW IT WORKS                                              */}
      {/* ========================================================= */}

      <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-3xl text-center">

          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-neutral-950 text-white">
            <Sparkles className="h-5 w-5" />
          </div>

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Simple & personal
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            How HUNAR works
          </h2>

          <p className="mt-4 text-muted-foreground">
            Your idea. Your design. Your product.
            <br className="hidden sm:block" />
            We make the rest happen.
          </p>

        </div>


        <div className="mt-14 grid gap-10 md:grid-cols-4">

          {[
            {
              number: "01",
              title: "Choose",
              description:
                "Pick the product you want to personalize.",
            },
            {
              number: "02",
              title: "Customize",
              description:
                "Tell us what you want printed or personalized.",
            },
            {
              number: "03",
              title: "Connect",
              description:
                "Send your requirements to us on WhatsApp.",
            },
            {
              number: "04",
              title: "Create",
              description:
                "We create your personalized product and confirm the details.",
            },
          ].map((step) => (
            <div key={step.number} className="relative">

              <span className="text-5xl font-bold text-neutral-200">
                {step.number}
              </span>

              <h3 className="mt-4 text-xl font-bold">
                {step.title}
              </h3>

              <p className="mt-2 leading-7 text-muted-foreground">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* ========================================================= */}
      {/* WHY HUNAR                                                  */}
      {/* ========================================================= */}

      <section className="bg-neutral-950 text-white">

        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-16 lg:py-24">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Why HUNAR
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Because ordinary
              <br />
              isn't your style.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
              We believe the best gifts are the ones that mean something.
              That's why HUNAR focuses on products that carry your memories,
              your ideas and your personality.
            </p>

          </div>


          <div className="grid gap-8 sm:grid-cols-2">

            {[
              {
                title: "Personalized",
                description:
                  "Make every product uniquely yours.",
              },
              {
                title: "Made to order",
                description:
                  "Your product is created specifically for you.",
              },
              {
                title: "Easy ordering",
                description:
                  "No complicated checkout. Just tell us what you need.",
              },
              {
                title: "Human support",
                description:
                  "Talk directly with us whenever you need help.",
              },
            ].map((feature) => (
              <div key={feature.title} className="border-t border-neutral-800 pt-6">

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-950">
                    <Check className="h-4 w-4" />
                  </div>

                  <h3 className="font-semibold">
                    {feature.title}
                  </h3>
                </div>

                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ========================================================= */}
      {/* WHATSAPP CTA                                               */}
      {/* ========================================================= */}

      <section className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 lg:px-16">

        <div className="overflow-hidden rounded-3xl bg-neutral-100 px-6 py-16 text-center sm:px-12">

          <MessageCircle className="mx-auto h-10 w-10" />

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Have something specific in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Tell us what you want to create. Send us your idea, photo or
            design and we'll help you turn it into something special.
          </p>

          <div className="mt-8">
            <Button size="lg" className="h-12 px-8" asChild>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Talk to HUNAR
              </a>
            </Button>
          </div>

        </div>

      </section>

    </div>
  )
}