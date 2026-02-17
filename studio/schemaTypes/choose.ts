// schemas/choose.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'choose',
  title: 'Why Choose Us Section',
  type: 'document',
  fields: [
    // Section Heading
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for why choose us section',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: 'Why Companies Choose Make Cloud',
    }),

    // Carousel Items
    defineField({
      name: 'carouselItems',
      title: 'Carousel Items',
      type: 'array',
      description: 'Add carousel slides (recommended: 3-6 items)',
      of: [
        {
          type: 'object',
          title: 'Carousel Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Slide title (e.g., CLOUD MIGRATION & OPTIMISATION)',
              validation: (Rule) => Rule.required().min(5).max(80),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Slide description text',
              validation: (Rule) => Rule.required().min(10).max(300),
            }),
            defineField({
              name: 'backgroundImage',
              title: 'Background Image',
              type: 'file',
              options: {
                accept: 'image/png,image/jpeg,image/webp',
              },
              description: 'Background image for the slide (choose-1.png, etc.)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon (SVG/PNG)',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              description: 'Icon that appears in red circle (choose-icon-1.svg, etc.)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).integer(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(3).max(10),
    }),

    // Carousel Settings
    defineField({
      name: 'carouselSettings',
      title: 'Carousel Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'autoplayInterval',
          title: 'Autoplay Interval (ms)',
          type: 'number',
          description: 'Time between automatic slides in milliseconds',
          initialValue: 4000,
          validation: (Rule) => Rule.required().min(1000).max(10000),
        }),
        defineField({
          name: 'enableAutoplay',
          title: 'Enable Autoplay',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'enableLoop',
          title: 'Enable Loop',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
  ],
})