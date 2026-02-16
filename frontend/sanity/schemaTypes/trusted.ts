// schemas/trusted.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'trusted',
  title: 'Trusted By Section',
  type: 'document',
  fields: [
    // Section Heading
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for trusted section',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: 'We Trusted By',
    }),

    // Partners List
    defineField({
      name: 'partnersList',
      title: 'Partners/Trusted Clients',
      type: 'array',
      description: 'Add trusted partners/clients with logos',
      of: [
        {
          type: 'object',
          title: 'Partner Item',
          fields: [
            defineField({
              name: 'name',
              title: 'Partner Name',
              type: 'string',
              description: 'Name of the partner/client',
              validation: (Rule) => Rule.required().min(2).max(80),
            }),
            defineField({
              name: 'logo',
              title: 'Partner Logo (SVG/PNG)',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              description: 'Logo image (SVG recommended)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'websiteUrl',
              title: 'Website URL (Optional)',
              type: 'url',
              description: 'Partner website URL',
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
      validation: (Rule) => Rule.min(1),
    }),

    // Carousel Settings
    defineField({
      name: 'carouselSettings',
      title: 'Carousel Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'enableLoop',
          title: 'Enable Loop',
          type: 'boolean',
          initialValue: true,
        }),
        defineField({
          name: 'align',
          title: 'Carousel Alignment',
          type: 'string',
          options: {
            list: [
              { title: 'Start', value: 'start' },
              { title: 'Center', value: 'center' },
              { title: 'End', value: 'end' },
            ],
          },
          initialValue: 'start',
        }),
        defineField({
          name: 'showNavigation',
          title: 'Show Navigation Arrows',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
  ],
})