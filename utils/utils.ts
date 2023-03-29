export function generateSlides(length = 10): Array<{ src: string, alt: string }> {
    return Array.from( { length } ).map( ( value, index ) => {
        return {
            src: `https://placehold.jp/3d4070/ffffff/1200x400.png?text=${index}`,
            alt: `Image ${ index }`
        }
    } )
}
