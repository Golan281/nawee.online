import { Box } from "@chakra-ui/react"
export const MediaItem = (props) => {
    return (
        <Box>
            {props.children}
            {/* will later be mapped like I did for romka */}
            {/* img or iframe */}
            {/* text below (to avoid flipping ltr direction in the meantime) */}
        </Box>
    )
}