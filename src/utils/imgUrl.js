function GetImgURL (name) {
    return new URL(`../assets/${name}`, import.meta.url).href
}

export default GetImgURL