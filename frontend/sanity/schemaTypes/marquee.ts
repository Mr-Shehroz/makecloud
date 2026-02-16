// schemas/marquee.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'marquee',
  title: 'Marquee Section',
  type: 'document',
  fields: [
    // Marquee Logos
    defineField({
      name: 'logos',
      title: 'Marquee Logos',
      type: 'array',
      description: 'Upload logos to display in the marquee (minimum 3 recommended)',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              description: 'Alternative text for accessibility',
              validation: (Rule) => Rule.required().min(2).max(50),
            }),
            defineField({
              name: 'logo',
              title: 'Logo File',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              description: 'Logo image (SVG recommended for best quality)',
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
      validation: (Rule) => Rule.min(3),
    }),

    // Marquee Settings
    defineField({
      name: 'marqueeSettings',
      title: 'Marquee Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'animationSpeed',
          title: 'Animation Speed (seconds)',
          type: 'number',
          description: 'Time for one complete cycle in seconds',
          initialValue: 24,
          validation: (Rule) => Rule.required().min(5).max(60),
        }),
        defineField({
          name: 'animationDirection',
          title: 'Animation Direction',
          type: 'string',
          options: {
            list: [
              { title: 'Left to Right', value: 'normal' },
              { title: 'Right to Left', value: 'reverse' },
            ],
          },
          initialValue: 'normal',
        }),
        defineField({
          name: 'enableAnimation',
          title: 'Enable Animation',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
  ],
})