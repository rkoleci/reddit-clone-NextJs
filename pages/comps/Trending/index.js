import React from 'react'

import {
    Container,
    Title,
    Item,
    ItemTitle,
    Author,
    Account,
} from './styles'

const trending = [
    {
        "id": 1,
        "name": "Michael Flynn",
        "title": "Disgraced former Trump aide Michael Flynn sparks outrage by saying US must have only one religion",
        "src": "https://external-preview.redd.it/5gkgoQ_tJwaKH1KL8L_uQ9dfdn_B_u7iUTSTFMDY61Y.jpg?auto=webp&s=7fce98d7dc15ae2a0d026b21ca6315a99f900851",
        "category": "r/politics and more",
        "user_src": "https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&s=0842d327b6d42f0e432135c7f46030bd8db64e4b"
    },
    {
        "id": 2,
        "name": "Michael Flynn",
        "title": "Disgraced former Trump aide Michael Flynn sparks outrage by saying US must have only one religion",
        "src": "https://external-preview.redd.it/5gkgoQ_tJwaKH1KL8L_uQ9dfdn_B_u7iUTSTFMDY61Y.jpg?auto=webp&s=7fce98d7dc15ae2a0d026b21ca6315a99f900851",
        "category": "r/politics and more",
        "user_src": "https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&s=0842d327b6d42f0e432135c7f46030bd8db64e4b"
    },
    {
        "id": 3,
        "name": "Michael Flynn",
        "title": "Disgraced former Trump aide Michael Flynn sparks outrage by saying US must have only one religion",
        "src": "https://external-preview.redd.it/5gkgoQ_tJwaKH1KL8L_uQ9dfdn_B_u7iUTSTFMDY61Y.jpg?auto=webp&s=7fce98d7dc15ae2a0d026b21ca6315a99f900851",
        "category": "r/politics and more",
        "user_src": "https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&s=0842d327b6d42f0e432135c7f46030bd8db64e4b"
    },
    {
        "id": 4,
        "name": "Michael Flynn",
        "title": "Disgraced former Trump aide Michael Flynn sparks outrage by saying US must have only one religion",
        "src": "https://external-preview.redd.it/5gkgoQ_tJwaKH1KL8L_uQ9dfdn_B_u7iUTSTFMDY61Y.jpg?auto=webp&s=7fce98d7dc15ae2a0d026b21ca6315a99f900851",
        "category": "r/politics and more",
        "user_src": "https://styles.redditmedia.com/t5_2cneq/styles/communityIcon_fy84mdgh75201.jpg?width=256&s=0842d327b6d42f0e432135c7f46030bd8db64e4b"
    }
]

const Trending = (props) => { // data will be passed a prop, from parent page comp

    return (
        <>
            <Title>Trending today</Title>
            <Container>
                {trending.map(({ name, title, category, src }) => (
                    <Item src={src}>
                        <Author>{name}</Author>
                        <ItemTitle>{title}</ItemTitle>
                        <Account>{category}</Account>
                    </Item>
                ))}
            </Container>
        </>
    )
}

export default Trending