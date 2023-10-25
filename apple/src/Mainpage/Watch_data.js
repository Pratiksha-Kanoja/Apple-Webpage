
const products = [
    {
        new1: "New", title: "Apple Watch Series 9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693635968545",
        image2: [
            { img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110" },
            { img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177" },
            { img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-starlight-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920742817" },
            { img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692973854100" }],
        price: "From $399 or $33.25/mo.for 12 mo.*", bttn: "Buy", id: 1,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }
        ]

    },
    {
        new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1693611623658", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id: 2,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693271766625",
        image2: [{ img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110" },
        { img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177" },
        { img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-stainless-gold-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692973854100" }],
        price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id: 3,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "New", title: "Apple Watch Hermès", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-hermes-202309?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1692799806688",
        image2: [{ img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-41-aluminum-pink-nc-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920740110" },
        { img1: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-case-45-aluminum-midnight-cell-s9_SW_COLOR?wid=32&hei=32&fmt=png-alpha&.v=1692920745177" }],
        price: "From $1249 or $104.08/mo. for 12 mo*", bttn: "Buy", id: 4,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "New", title: "Apple Watch Series 9", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-s9-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1692847847702", image2: "", price: "Available in 8 case finishes", bttn: "Buy", id: 5,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384610", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id: 6,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384550", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id: 7,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "New", title: "Apple Watch Ultra 2", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-ultra2-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1692603384617", image2: "", price: "From $799 or $66.58/mo. for 12 mo.*", bttn: "Buy", id: 8,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-1-202309?wid=728&hei=666&fmt=png-alpha&.v=1693271766625", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id: 9,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-2-202309?wid=728&hei=666&fmt=png-alpha&.v=1693849713342", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id: 10,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-3-202309?wid=728&hei=666&fmt=png-alpha&.v=1693849835005", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id: 11,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    },
    {
        new: "", title: "Apple Watch SE", image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-se-digitalmat-gallery-4-202309?wid=728&hei=666&fmt=png-alpha&.v=1693894356398", image2: "", price: "From $249 or $20.75/mo. for 12 mo.*", bttn: "Buy", id: 12,
        info: [
            { text1: "Brighter Always-On Retina display with a durable, crack-resistant front crystal" },
            { text1: "Get deep insights into your physical and mental health including heart rate,  footnote  1 blood oxygen levels,  footnote  2 mood, and more" },
            { text1: "With advanced workout metrics and views" },
            { text1: "The all-new S9 SiP powers a magical new way to use your watch without touching the screen" },
            { text1: "Innovative safety features including Emergency SOS,  footnote  3 Fall Detection, and Crash Detection" }]
    }
]

export default products