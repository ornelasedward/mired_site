import { ImageResponse } from 'next/og'
import mired_banner  from "../public/images/mired_banner.png"
 
export const runtime = 'edge'
 
// Define seoContent for this file
const seoContent = {
  title: "Build Digital Solutions That Scale",
  description: "The #1 growth studio for digital innovators - Custom Software & AI Solutions",
}

export const alt = 'Mired.io - Build Digital Solutions That Scale'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <img
        src={mired_banner.src}
        alt="Mired.io Banner"
        width={1200}
        height={630}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    ),
    {
      ...size,
    }
  )
}