// schemas/features.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'features',
  title: 'Features Section',
  type: 'document',
  fields: [
    // Section Heading
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for features section',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: 'Why Choose MakeCloud',
    }),

    // Tick Icon (optional - can be hardcoded or dynamic)
    defineField({
      name: 'tickIcon',
      title: 'Tick Icon',
      type: 'file',
      options: {
        accept: 'image/svg+xml,image/png',
      },
      description: 'Tick mark icon used for each feature (tick.svg)',
    }),

    // Features List
    defineField({
      name: 'featuresList',
      title: 'Features List',
      type: 'array',
      description: 'Add your features (recommended: 6 items for 3 columns)',
      of: [
        {
          type: 'object',
          title: 'Feature Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
              validation: (Rule) => Rule.required().min(3).max(80),
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              validation: (Rule) => Rule.required().min(10).max(300),
            }),
            defineField({
              name: 'column',
              title: 'Column (1, 2, or 3)',
              type: 'number',
              description: 'Assign to column 1, 2, or 3',
              validation: (Rule) => Rule.required().min(1).max(3).integer(),
            }),
            defineField({
              name: 'order',
              title: 'Order in Column',
              type: 'number',
              description: 'Order within the column (1 or 2)',
              validation: (Rule) => Rule.required().min(1).max(2).integer(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(2).max(12),
    }),
  ],
})