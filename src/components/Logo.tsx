import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div>
      <Image
        src="https://imagizer.imageshack.com/img924/8489/Ul24nu.png"
        alt=""
        width={120}
        height={100}
        unoptimized
      />
    </div>
  )
}
