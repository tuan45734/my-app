import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
    width: 32,
    height: 32,
}

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                   
                    borderRadius: '20%',
                   
                }}
            >
                <img
                    src={'https://res.cloudinary.com/dvg7ourbo/image/upload/v1766046738/logo22px_re6vqu.png'}
                    width={32}
                    height={32}
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