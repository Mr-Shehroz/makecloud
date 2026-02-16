// schemas/partners.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'partners',
  title: 'Partners Section',
  type: 'document',
  fields: [
    // Section Heading
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      description: 'Main heading for partners section',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: 'Multi Cloud Certified Strategic Partners',
    }),

    // Background Image (optional - can be hardcoded or dynamic)
    defineField({
      name: 'backgroundImage',
      title: 'Card Background Image',
      type: 'file',
      options: {
        accept: 'image/png,image/jpeg,image/webp',
      },
      description: 'Background image for partner cards (partners-bg.png)',
    }),

    // Partners List
    defineField({
      name: 'partnersList',
      title: 'Partners List',
      type: 'array',
      description: 'Add your strategic partners (recommended: 3 items)',
      of: [
        {
          type: 'object',
          title: 'Partner Item',
          fields: [
            defineField({
              name: 'partnerName',
              title: 'Partner Name',
              type: 'string',
              description: 'e.g., AWS, Azure, Google Cloud',
              validation: (Rule) => Rule.required().min(2).max(50),
            }),
            defineField({
              name: 'logoIcon',
              title: 'Logo Icon (Top-right in red circle)',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              description: 'Small icon that appears in red circle (aws-logo.svg, azure-logo.svg, etc.)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'mainLogo',
              title: 'Main Partner Logo',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg,image/webp',
              },
              description: 'Large partner logo (partners-aws.svg, partners-azure.svg, etc.)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Partner description text',
              validation: (Rule) => Rule.required().min(10).max(300),
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
      validation: (Rule) => Rule.max(6), // Limit to reasonable number
    }),
  ],
})