const Youtube = ({ blok}) => {
    console.log('', blok);

return (
    <iframe width="560" height="315" src={blok.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
)
}

export default Youtube