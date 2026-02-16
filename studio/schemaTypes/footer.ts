// schemas/footer.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  fields: [
    // Logo (optional - can reuse from Header or have separate)
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'file',
      options: {
        accept: 'image/svg+xml,image/png',
      },
      description: 'Footer logo (SVG recommended)',
    }),

    // Certification Badges
    defineField({
      name: 'certificationBadges',
      title: 'Certification Badges',
      type: 'array',
      description: 'Add certification badges (AWS, Google Cloud, etc.)',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              validation: (Rule) => Rule.required().min(2).max(50),
            }),
            defineField({
              name: 'badge',
              title: 'Badge Image',
              type: 'file',
              options: {
                accept: 'image/svg+xml,image/png,image/jpeg',
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'row',
              title: 'Row (1 or 2)',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).max(2).integer(),
            }),
            defineField({
              name: 'order',
              title: 'Order in Row',
              type: 'number',
              validation: (Rule) => Rule.required().min(1).integer(),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.max(8),
    }),

    // Social Links
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      description: 'Add social media links',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'GitHub', value: 'github' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
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
      validation: (Rule) => Rule.max(6),
    }),

    // Quick Links
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      description: 'Add quick navigation links',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Link Name',
              type: 'string',
              validation: (Rule) => Rule.required().min(2).max(50),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
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
      validation: (Rule) => Rule.max(10),
    }),

    // Contact Information
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Phone Number',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: '+44 (0) 20 3637 8933',
            }),
            defineField({
              name: 'link',
              title: 'Phone Link',
              type: 'string',
              description: 'Tel link format',
              initialValue: 'tel:+442036378933',
            }),
          ],
        }),
        defineField({
          name: 'email',
          title: 'Email Address',
          type: 'object',
          fields: [
            defineField({
              name: 'address',
              title: 'Email Address',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: 'hello@makecloud.com',
            }),
            defineField({
              name: 'link',
              title: 'Email Link',
              type: 'string',
              description: 'Mailto link format',
              initialValue: 'mailto:hello@makecloud.com',
            }),
          ],
        }),
        defineField({
          name: 'address',
          title: 'Office Address',
          type: 'object',
          fields: [
            defineField({
              name: 'line1',
              title: 'Address Line 1',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: 'Rothamsted Enterprises, Harpenden,',
            }),
            defineField({
              name: 'line2',
              title: 'Address Line 2',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: 'Hertfordshire AL5 2JQ',
            }),
          ],
        }),
      ],
    }),

    // Newsletter Section
    defineField({
      name: 'newsletter',
      title: 'Newsletter Section',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Newsletter Heading',
          type: 'string',
          validation: (Rule) => Rule.required().min(2).max(50),
          initialValue: 'Newsletter',
        }),
        defineField({
          name: 'emailPlaceholder',
          title: 'Email Placeholder',
          type: 'string',
          validation: (Rule) => Rule.required().min(2).max(50),
          initialValue: 'Email here',
        }),
        defineField({
          name: 'subscribeButtonText',
          title: 'Subscribe Button Text',
          type: 'string',
          validation: (Rule) => Rule.required().min(2).max(30),
          initialValue: 'Subscribe',
        }),
        defineField({
          name: 'submittingText',
          title: 'Submitting Text',
          type: 'string',
          validation: (Rule) => Rule.required().min(2).max(30),
          initialValue: 'Subscribing...',
        }),
        defineField({
          name: 'successMessage',
          title: 'Success Message',
          type: 'string',
          validation: (Rule) => Rule.required().min(2).max(100),
          initialValue: 'Successfully subscribed!',
        }),
        defineField({
          name: 'errorMessage',
          title: 'Error Message',
          type: 'string',
          validation: (Rule) => Rule.required().min(2).max(100),
          initialValue: 'Something went wrong. Try again.',
        }),
        defineField({
          name: 'apiEndpoint',
          title: 'API Endpoint',
          type: 'string',
          initialValue: '/api/newsletter',
        }),
      ],
    }),

    // Copyright
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
      initialValue: '© 2026 MakeCloud. All rights reserved.',
    }),
  ],
})