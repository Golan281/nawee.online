import {Image} from "@chakra-ui/react";

export const LazyImage = ({content}) => {
    console.log(content)
    return (
        <Image
        borderRadius="lg"
        src={content.imgUrl}
        alt={content.header}
        objectFit="contain"
        />
    )
}