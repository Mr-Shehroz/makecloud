// schemas/blogs.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogs',
  title: 'Blogs & Case Studies Section',
  type: 'document',
  fields: [
    // Section Heading
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for blogs section',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: 'Case Studies',
    }),

    // Case Studies List
    defineField({
      name: 'caseStudies',
      title: 'Case Studies / Blog Posts',
      type: 'array',
      description: 'Add case studies or blog posts',
      of: [
        {
          type: 'object',
          title: 'Case Study Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Case study title (uppercase recommended)',
              validation: (Rule) => Rule.required().min(5).max(150),
            }),
            defineField({
              name: 'date',
              title: 'Date',
              type: 'date',
              description: 'Publication date',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'featuredImage',
              title: 'Featured Image',
              type: 'file',
              options: {
                accept: 'image/png,image/jpeg,image/webp',
              },
              description: 'Featured image for the case study (blogs-1.png, etc.)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL / Link',
              type: 'string',
              description: 'Internal link (e.g., /case-studies/slug) or external URL',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'openInNewTab',
              title: 'Open in New Tab?',
              type: 'boolean',
              initialValue: false,
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