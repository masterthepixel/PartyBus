import { TagCloud } from 'react-tagcloud'
import { Container } from '@/components/Container'
import Link from 'next/link'

const genRendomSize = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const colorOption = {
  luminosity: 'light',
  hue: 'blue',
}

const TagClouds = ({ data = [] }) => {
  const renderData = data.map((item) => ({
    value: item,
    count: genRendomSize(12, 35),
  }))
  return (
    <Container className="py-8">
      <TagCloud
        minSize={2}
        maxSize={5}
        tags={renderData}
        randomSeed={42}
        colorOptions={colorOption}
        className="mx-auto w-10/12 text-center font-body"
        renderer={customRenderer}
      />
    </Container>
  )
}

const customRenderer = (tag, size, color) => (
  <Link
    href={`/gallery?q=${tag.value.toLowerCase()}`}
    key={tag.value}
    style={{
      //   animation: 'blinker 3s linear infinite',
      //   animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      //   border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color,
    }}
  >
    {tag.value}
  </Link>
)

export default TagClouds
