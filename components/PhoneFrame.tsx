import Image, { type StaticImageData } from 'next/image'

type Props = {
  src: StaticImageData
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}

/** Moldura de celular para as capturas dos guias do hóspede. */
export default function PhoneFrame({ src, alt, className = '', sizes = '240px', priority }: Props) {
  return (
    <div
      className={`relative aspect-[390/844] overflow-hidden rounded-[2.1rem] bg-ink p-[7px] shadow-[0_30px_60px_-20px_rgba(23,21,15,0.45),0_0_0_1px_rgba(23,21,15,0.08)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.65rem] bg-paper-sunk">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          placeholder="blur"
          priority={priority}
          className="object-cover object-top"
        />
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-2 h-[18px] w-[72px] -translate-x-1/2 rounded-full bg-ink"
        />
      </div>
    </div>
  )
}
