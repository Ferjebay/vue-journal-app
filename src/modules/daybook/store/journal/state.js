export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius, obcaecati adipisci dolore alias distinctio est corporis quae necessitatibus? Ea iure maxime ducimus. Repellendus praesentium maiores dolorem id veniam laboriosam.",
            picture: null
        },
        {
            id: new Date().getTime() + 100,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ab obcaecati libero velit unde accusantium molestias fugit quo vel consequatur? Ea rerum magni nam consequuntur ad, a et cupiditate necessitatibus.",
            picture: null
        },
        {
            id: new Date().getTime() + 200,
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eius, obcaecati adipisci dolore alias distinctio est corporis quae necessitatibus? Ea iure maxime ducimus. Repellendus praesentium maiores dolorem id veniam laboriosam.",
            picture: null
        }
    ]
})