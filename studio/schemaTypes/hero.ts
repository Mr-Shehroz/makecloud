// schemas/hero.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    // Make Cloud Logo (single image field)
    defineField({
      name: 'partnersLogo',
      title: 'Partners Logo',
      type: 'file',
      options: {
        accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
      },
      description: 'Upload the Partners logo image (e.g., for hero section).',
      validation: (Rule) => Rule.required(),
    }),

    // Main Heading
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Main hero heading text (e.g., "Expert Cloud Consultancy")',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: 'Expert Cloud Consultancy',
    }),

    // Subheading/Description
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      description: 'Hero subheading/description text',
      validation: (Rule) => Rule.required().min(10).max(200),
      initialValue: 'Innovation accelerated with cloud, DevOps & automation',
    }),

    // Call-to-Action Button
    defineField({
      name: 'ctaButton',
      title: 'Call-to-Action Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required().min(3).max(50),
          initialValue: 'Book A Call',
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'string',
          description: 'Internal link (e.g., /contact) or external URL',
          validation: (Rule) => Rule.required(),
          initialValue: '/contact',
        }),
        defineField({
          name: 'openInNewTab',
          title: 'Open in New Tab?',
          type: 'boolean',
          initialValue: false,
        }),
      ],
    }),
  ],
})