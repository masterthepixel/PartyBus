// import fs from 'fs'
// import path from 'path'
const fs = require('fs')
const path = require('path')

function content() {
  // // Read txt file from root
  const text = fs.readFileSync(
    // path.join(process.cwd(), 'src/lib/data.txt'),
    './data.txt',
    'utf8'
  )

  const chapters = [
    {
      category:
        'Chapter 1: Discovering the City: An Overview of the DC metro area',
      blogs: [
        'Introduction to the DC metro area',
        'History of the region',
        'Geography and Demographics',
        'Neighborhoods and Landmarks',
      ],
    },
    {
      category:
        'Chapter 2: A Walk Through History: The Best Museums and Historical Landmarks',
      blogs: [
        'Overview of the top museums',
        'Overview of the landmarks',
        'Smithsonian Museums',
        'National Mall and Monuments',
        'Historic Homes',
        'Off-the-beaten-path gems',
      ],
    },
    {
      category:
        'Chapter 3: The Great Outdoors: Sports and Recreation in the DC metro area',
      blogs: [
        'Introduction to sports and recreation in the region',
        'Exploring the Great Outdoors',
        'Water sports and activities',
        'Golf courses and tennis courts',
        'Professional and College Sports Teams',
      ],
    },
    {
      category:
        "Chapter 4: A Foodie's Paradise: Exploring the Culinary Scene in the DC metro area",
      blogs: [
        'Overview of the DC food scene',
        'Ethnic and international cuisine',
        'Local specialties and regional cuisine',
        'Brunch and breakfast spots',
        'Best restaurants for a night out',
      ],
    },
    {
      category:
        'Chapter 5: Local Life: The Best Entertainment and Lifestyle Options',
      blogs: [
        'Introduction to the entertainment scene',
        'Bars and Nightlife',
        'Music venues and theaters',
        'Festivals and events',
        'Shopping and markets',
      ],
    },
    {
      category:
        'Chapter 6: Parks and Gardens: The Best Green Spaces in the DC metro area',
      blogs: [
        'Introduction to parks and gardens ',
        'National parks and forests',
        'Local and community parks',
        'Botanical gardens and conservatories',
        'Zoos and wildlife sanctuaries',
      ],
    },
    {
      category: 'Chapter 7: Culture and the Arts: Museums and Galleries',
      blogs: [
        'Overview of the arts scene',
        'Top museums and galleries',
        'Public art and street mural',
      ],
    },
    {
      category:
        'Chapter 8: Off the Beaten Path: Hidden Gems in the DC metro area',
      blogs: [
        'Introduction to hidden gems',
        'Lesser-known museums and landmarks',
        'Hidden parks and natural wonders',
        'Quirky attractions and offbeat experiences',
      ],
    },
    {
      category:
        'Chapter 9: Nightlife and Entertainment: The Best Places to Go After Dark',
      blogs: [
        'Introduction to DC nightlife',
        'Bars',
        'Night Clubs',
        'Live music and concerts',
        'Theater and Performing Arts',
        'Late-night food spots',
      ],
    },
  ]
  const chap1contents = [
    'Introduction to the DC metro area',
    'History of the region',
    'Geography and Demographics',
    'Neighborhoods and Landmarks',
  ]

  const chaptersContents = text.split(/Chapter \d+: /).filter(Boolean)
  // console.log(chaptersContents.length)

  let flag = 0
  const result = chapters.map((chap) => {
    const category = chap.category
    const blogs = chap.blogs.map((blog, index) => {
      const text = chaptersContents[flag].slice(
        chaptersContents[flag].indexOf(blog),
        chaptersContents[flag].indexOf(chap.blogs[index + 1]) - 1
      )
      return {
        title: text.slice(0, text.indexOf('\r')),
        content: text.slice(text.indexOf('\r') + 1),
      }
    })
    flag++
    return { category, blogs }
  })

  // write mdx files
  result.forEach((chap, index) => {
    chap.blogs.forEach((blog, index) => {
      fs.writeFile(
        // path.join(
        //   process.cwd(),
        //   `/articles/${blog.title.toLowerCase().replace(/ /g, '-')}.mdx`
        // ),
        `../pages/articles/${blog.title.toLowerCase().replace(/ /g, '-')}.mdx`,
        `import { ArticleLayout } from '@/components/ArticleLayout'

export const meta = {
  author: 'Adam Wathan',
  date: '2022-09-02',
  title: '${blog.title}',
  description: \`${blog.content.slice(blog.content.indexOf('#') + 1, 350)}\`,
  category: \`${chap.category}\`,
  thumbnail: '/images/image-2.jpg',
  order: ${index + 1},
}

export default (props) => <ArticleLayout meta={meta} {...props} />
        ${blog.content}
        `,
        (err) => {
          if (err) throw err
          console.log('File is created successfully.')
        }
      )
    })
  })

  // return result

  // return {
  //   // category: chapters[0],
  //   blogs: chap1contents.map((chap, index) =>
  //     chaptersContents[0].slice(
  //       chaptersContents[0].indexOf(chap),
  //       chaptersContents[0].indexOf(chap1contents[index + 1]) - 1
  //     )
  //   ),
  // }
  // return chapters[0]
}

content()
