// schemas/services.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services Section',
  type: 'document',
  fields: [
    // Section Heading
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for services section',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: 'Our Cloud Consulting Services',
    }),

    // Services List
    defineField({
      name: 'servicesList',
      title: 'Services List',
      type: 'array',
      description: 'Add your services (recommended: 4 items)',
      of: [
        {
          type: 'object',
          title: 'Service Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(3).max(80),
            }),
            defineField({
              name: 'url',
              title: 'Service URL',
              type: 'string',
              description: 'Internal link (e.g., /services/cloud-strategy) or external URL',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icon (SVG/PNG/JPG)',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              description: 'Top-left icon (services-icon-1.svg, etc.)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              title: 'Service Image',
              type: 'file',
              options: {
                accept: 'image/png,image/jpeg,image/webp',
              },
              description: 'Main service image (services-1.png, etc.)',
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
      validation: (Rule) => Rule.max(8), // Limit to reasonable number
    }),
  ],
})