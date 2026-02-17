// schemas/header.ts
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    // Logo (optional - can reuse from Branding or have separate)
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'file',
      options: {
        accept: 'image/svg+xml,image/png,image/jpeg',
      },
      description: 'Upload logo (SVG recommended)',
    }),

    // Navigation Links
    defineField({
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      description: 'Add navigation items in order (max 5 recommended)',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Navigation Item',
          fields: [
            defineField({
              name: 'label',
              title: 'Link Label',
              type: 'string',
              validation: (Rule) => Rule.required().min(2).max(50),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              description: 'Internal link (e.g., /services) or external URL',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'hasDropdown',
              title: 'Has Dropdown Menu?',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'dropdownItems',
              title: 'Dropdown Items',
              type: 'array',
              hidden: ({ parent }) => !parent?.hasDropdown,
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'label',
                      title: 'Item Label',
                      type: 'string',
                      validation: (Rule) => Rule.required().min(2).max(50),
                    }),
                    defineField({
                      name: 'url',
                      title: 'Item URL',
                      type: 'string',
                      validation: (Rule) => Rule.required(),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),

    // Contact Information
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phoneNumber',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule) => Rule.required(),
          description: 'e.g., +91-234-567-8900',
        }),
        defineField({
          name: 'consultantText',
          title: 'Consultant Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
          initialValue: 'Free Consultant',
        }),
      ],
    }),
  ],
})