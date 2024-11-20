import { ImageResponse } from 'next/og'
 
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
      <div
        style={{
          background: 'linear-gradient(to right, #0f172a, #1e293b)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <img
          src="/images/mired_banner.svg"
          alt="Mired.io Banner"
          width="100%"
          height="auto"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}