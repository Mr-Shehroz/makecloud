export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
      {
        name: 'sections',
        title: 'Sections',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'hero' },
              { type: 'services' },
              { type: 'partners' },
              { type: 'choose' },
              { type: 'marquee' },
              { type: 'features' },
              { type: 'trusted' },
              { type: 'blogs' },
              { type: 'contacts' },
            ],
          },
        ],
      },
    ],
  }
  