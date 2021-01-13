export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ffefd6fa040b21dc46bc6df',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-1-studio-aew8gpqa',
                  apiId: 'a1aa78e4-b597-49db-97b6-6e7d79a066e3'
                },
                {
                  buildHookId: '5ffefd6faa727f1c2aec3ead',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-1-web-97smntdq',
                  apiId: '40256721-be84-49b9-9609-4632a7d90bc9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sree850/sanity-nextjs-landing-pages1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-1-web-97smntdq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
