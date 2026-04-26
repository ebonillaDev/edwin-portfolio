import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  const geistBold = await fetch(
    new URL('../../public/fonts/Geist-Bold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: '#020617',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <span
          style={{
            fontSize: '26px', 
            fontFamily: 'Geist',
            fontWeight: 900, 
            color: '#50a2ff', 
            lineHeight: 1,
          }}
        >
          E
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Geist',
          data: geistBold,
          weight: 900,
        },
      ],
    }
  );
}