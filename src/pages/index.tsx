import * as React from "react"
import type {HeadFC} from "gatsby"
import {Heading, HStack, Link, Text, VStack} from "../design-system";
import {FacebookIcon} from "../design-system/components/icon/icon";

const IndexPage = () => {
    return (
        <VStack space={['sm','lg']} p={['sm','xl']}>
            <Heading fontSize={['sm', 'lg']}>Welome to my personal site</Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ex dui, ac posuere diam
                malesuada sit amet. Integer in dignissim orci, sed egestas ante. Sed et massa at orci maximus tempor
                vehicula quis mauris. Pellentesque venenatis viverra metus in finibus. Suspendisse id sollicitudin leo.
                Ut consectetur convallis est in sagittis. Vivamus aliquet, sapien ac ornare vehicula, est sem luctus
                sapien, quis porta lectus lectus eget orci. Cras eget nisi rutrum, efficitur ante ac, varius mauris. Sed
                feugiat lorem nec sem consequat, ac aliquam diam ultricies. Aenean in massa luctus, finibus est sed,
                venenatis nisi.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ex dui, ac posuere diam
                malesuada sit amet. Integer in dignissim orci, sed egestas ante. Sed et massa at orci maximus tempor
                vehicula quis mauris. Pellentesque venenatis viverra metus in finibus. Suspendisse id sollicitudin leo.
                Ut consectetur convallis est in sagittis. Vivamus aliquet, sapien ac ornare vehicula, est sem luctus
                sapien, quis porta lectus lectus eget orci. Cras eget nisi rutrum, efficitur ante ac, varius mauris. Sed
                feugiat lorem nec sem consequat, ac aliquam diam ultricies. Aenean in massa luctus, finibus est sed,
                venenatis nisi.
            </Text>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ex dui, ac posuere diam
                malesuada sit amet. Integer in dignissim orci, sed egestas ante. Sed et massa at orci maximus tempor
                vehicula quis mauris. Pellentesque venenatis viverra metus in finibus. Suspendisse id sollicitudin leo.
                Ut consectetur convallis est in sagittis. Vivamus aliquet, sapien ac ornare vehicula, est sem luctus
                sapien, quis porta lectus lectus eget orci. Cras eget nisi rutrum, efficitur ante ac, varius mauris. Sed
                feugiat lorem nec sem consequat, ac aliquam diam ultricies. Aenean in massa luctus, finibus est sed,
                venenatis nisi.
            </Text>
            <HStack space={'xl'}>
                <Link href={"https://facebook.com"}>
                    <FacebookIcon/>
                </Link>
                <Link href={"https://facebook.com"}>
                    <FacebookIcon/>
                </Link>
                <Link href={"https://facebook.com"}>
                    <FacebookIcon/>
                </Link>
            </HStack>
        </VStack>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
