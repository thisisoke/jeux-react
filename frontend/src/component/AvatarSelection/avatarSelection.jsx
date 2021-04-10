import React from 'react';





export const AvatarSelection = ()=> {

    const avatars = [
        {
            "id": "1",
            "imageLink": "images/1.png"

        },
        {
            "id": "2",
            "imageLink": "images/2.png"

        },
        {
            "id": "3",
            "imageLink": "images/3.png"

        },
        {
            "id": "4",
            "imageLink": "images/4.png"

        },
        {
            "id": "5",
            "imageLink": "images/5.png"

        },
    ]

    return( 

        <div id="avatarSelectDiv">

            {avatars.map(item => (
                <img key = {item.id } src={item.imageLink} />
            ))}
           
        </div>

    );

}