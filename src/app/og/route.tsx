import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const baseUrl = request.nextUrl.origin;

    const geistBold = await fetch(
      new URL(`${baseUrl}/fonts/Geist-Bold.ttf`)
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#020617', 
            backgroundImage: 'radial-gradient(circle at 50% 50%, #0f172a 0%, #020617 100%)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -100,
              left: -100,
              width: 600,
              height: 600,
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, transparent 70%)',
              display: 'flex',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1
              style={{
                fontSize: '100px',
                fontFamily: 'Geist',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
                padding: 0,
                lineHeight: 1,
              }}
            >
              Edwin Bonilla
            </h1>
            
            <p
              style={{
                fontSize: '50px',
                fontFamily: 'Geist',
                color: '#50a2ff',
                fontWeight: 'bold',
                marginTop: '20px',
                marginRight: 0,
                marginBottom: 0,
                marginLeft: 0,
              }}
            >
              Software Engineer
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Geist',
            data: geistBold,
            style: 'normal',
            weight: 700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.error(e.message);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}