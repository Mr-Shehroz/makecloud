// schemas/contacts.ts
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contacts',
  title: 'Contact Section',
  type: 'document',
  fields: [
    // Left Side - Contact Info Section
    defineField({
      name: 'leftSection',
      title: 'Left Section (Contact Info)',
      type: 'object',
      fields: [
        defineField({
          name: 'heading',
          title: 'Heading',
          type: 'string',
          description: 'Main heading (e.g., "LET`S START YOUR CLOUD JOURNEY")',
          validation: (Rule) => Rule.required().min(5).max(100),
          initialValue: 'LET`S START YOUR CLOUD JOURNEY',
        }),
        defineField({
          name: 'subheading',
          title: 'Subheading',
          type: 'text',
          description: 'Subheading text below the main heading',
          validation: (Rule) => Rule.required().min(10).max(300),
          initialValue: 'Ready to transform your infrastructure? Our cloud experts are here to help you navigate your digital transformation.',
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              initialValue: 'Call us directly',
            }),
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
          title: 'Email',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              initialValue: 'Email us',
            }),
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
              name: 'label',
              title: 'Label',
              type: 'string',
              initialValue: 'Visit our office',
            }),
            defineField({
              name: 'street',
              title: 'Street Address',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: 'Rothamsted Enterprises,',
            }),
            defineField({
              name: 'city',
              title: 'City/State/ZIP',
              type: 'string',
              validation: (Rule) => Rule.required(),
              initialValue: 'Harpenden, Hertfordshire AL5 2JQ',
            }),
          ],
        }),
        defineField({
          name: 'backgroundImage',
          title: 'Background Vector Image',
          type: 'file',
          options: {
            accept: 'image/svg+xml,image/png',
          },
          description: 'Background vector image (contact-vector.svg)',
        }),
        defineField({
          name: 'nameVectorImage',
          title: 'Name Vector Image',
          type: 'file',
          options: {
            accept: 'image/svg+xml,image/png',
          },
          description: 'Name vector image (contact-name-vector.svg)',
        }),
      ],
    }),

    // Right Side - Form Section
    defineField({
      name: 'rightSection',
      title: 'Right Section (Form)',
      type: 'object',
      fields: [
        defineField({
          name: 'formHeading',
          title: 'Form Heading',
          type: 'string',
          description: 'Form heading text',
          validation: (Rule) => Rule.required().min(5).max(100),
          initialValue: 'GET YOUR FREE CONSULTATION',
        }),
        defineField({
          name: 'formFields',
          title: 'Form Fields',
          type: 'object',
          fields: [
            defineField({
              name: 'fullNameLabel',
              title: 'Full Name Label',
              type: 'string',
              initialValue: 'Full Name',
            }),
            defineField({
              name: 'emailLabel',
              title: 'Email Label',
              type: 'string',
              initialValue: 'Email',
            }),
            defineField({
              name: 'phoneLabel',
              title: 'Phone Label',
              type: 'string',
              initialValue: 'Phone Number',
            }),
            defineField({
              name: 'messageLabel',
              title: 'Message Label',
              type: 'string',
              initialValue: 'Message',
            }),
          ],
        }),
        defineField({
          name: 'submitButton',
          title: 'Submit Button',
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Submit',
            }),
            defineField({
              name: 'submittingText',
              title: 'Submitting Text',
              type: 'string',
              initialValue: 'Submitting...',
            }),
          ],
        }),
        defineField({
          name: 'privacyPolicy',
          title: 'Privacy Policy Text',
          type: 'string',
          description: 'Text for privacy policy checkbox',
          validation: (Rule) => Rule.required().min(10).max(200),
          initialValue: 'By submitting this form, you agree to our Privacy Policy.',
        }),
        defineField({
          name: 'successMessage',
          title: 'Success Message',
          type: 'string',
          initialValue: 'Thank you! Your message has been sent successfully.',
        }),
        defineField({
          name: 'errorMessage',
          title: 'Error Message',
          type: 'string',
          initialValue: 'Oops! Something went wrong. Please try again.',
        }),
        defineField({
          name: 'formBackgroundImage',
          title: 'Form Background Vector',
          type: 'file',
          options: {
            accept: 'image/svg+xml,image/png',
          },
          description: 'Background vector for form side (contact-vector-2.svg)',
        }),
      ],
    }),

    // Form Settings
    defineField({
      name: 'formSettings',
      title: 'Form Settings',
      type: 'object',
      fields: [
        defineField({
          name: 'apiEndpoint',
          title: 'API Endpoint',
          type: 'string',
          description: 'Form submission API endpoint',
          initialValue: '/api/contact',
        }),
        defineField({
          name: 'requiredFields',
          title: 'Required Fields',
          type: 'array',
          of: [{ type: 'string' }],
          options: {
            list: [
              { title: 'Full Name', value: 'fullName' },
              { title: 'Email', value: 'email' },
              { title: 'Message', value: 'message' },
            ],
          },
          initialValue: ['fullName', 'email', 'message'],
        }),
        defineField({
          name: 'enablePrivacyCheckbox',
          title: 'Enable Privacy Policy Checkbox',
          type: 'boolean',
          initialValue: true,
        }),
      ],
    }),
  ],
})