import React from 'react'

function Contact(){
const email = 'hernandezj.4567@gmail.com'
const phone = '9 4 9 9 2 2 9 7 1 6'
    return(
        <div className='contact-container'>
                    <div className='contact-a'><a href='https://www.linkedin.com/in/jhernandez456/'><img className='contact-a-img' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEUAAAD////f39/p6ekrKyvX19fm5ubJycmioqL5+fn29va0tLQ+Pj6tra2WlpZdXV0fHx/BwcGoqKjw8PCPj49jY2O6urp0dHSdnZ0WFhYyMjJFRUVNTU0JCQl8fHzR0dGEhIRsbGwlJSVTU1M1NTVISEiIiIgEpGRAAAAEnElEQVR4nO2d6XaqMBRGQa0DFHCeaq1U2/d/xFu0617bS3JyMpiE9e21/GfwbAwknAwk6RdZUU2TrjGtiqyRS74+ue9gnJHfDEvfcTikbAy7+w825GmS+Y7BMVlS+A7BMUVS+Q7BMVXSvWbiJ133AwAAAAAAAAAAAAAAAKDGaz5JBSzGvoOzwXkh8mvov/uOz5y+TDBNn3zHZ8xWLpimR98RmvJEGc58R2jKkDLs+Y7QFOIyhGEEwBCG4QNDGIYPDGEYPjCEYfjAEIbhA8P4Dbufp+l+rq2kDDe+IzSGqKZvvuMz51l6r+ntfMdng2KYTVrJhlvfsdnifdBKB8adAAAAAAAAAN1nsDoeT8tyu/w8Hetn39FY5jxe937NiJwsRkX8GZMrL+WbOKcwzGsHWYVDORu1MltepAVX89Zi45W4yKUk05fZ2vYeF2PZzy3F5XYjYanRa3uRjeTfu6dvNXuSy39MrNiTlGpNI9dkfv2OreAk8VlRPyW6ycknpv7/J9SyM9LG2JKjuKp9MxcUFE4Ov7L49e2LYv38cQzJ9cyAPLOCadA7eanJ/se3l3y/BisjCrpjTwOi2H3l3nMr6F8mH8EaTu4Mj7p+DeadAPeGcxNBC9uwOTckb2UUkiY5BMM92YWhMayobg33nEZeiFmr4dRwKl1xpMzCqO131Vq8NN+xI2jYLroy/KpZFytV9EodoOE8qTJLeun/ncAQDFNbNfSGQZPhzNAumf6TfySGLY9jXTPsd95Qv9mPxlB76lI0hmkshsPZ9lRXh6o+rZnPxbod8Icarn9dTKrZxVvh4A17ny2H2c+Uy+vuZ/0ow4Woksl3PLjnJWhDSYP9qlpVNS/Ehxj29+0H+WatdhTNbs0jDMmmTC2Xo9kiPsBQYUN4pSfJYaiGKnf5g8qBFnrPF84N1epWoXIovZFw14aKVWsnH+i5cQjS8KwYBzGMeUXv8cKxofJrJ1SOdwrQkJHpVOiH6w1huDVkJJAU7jWiwVqfhoxAyOF23cSwU0PO+3uIQeWGUXiGrKcBul8TniEvU02uE9TsmLo05J1zuvutt3ecS0NeKp6+mYZnqNqfufFJHk9vwa5DwwXvHUV1fIbM57kqPkPmZXO2fcrcGzLf1/cRnyFzVPM5PkPmvqADclQ8OEPmZGZ6akpwhty0ChlKcIbcpeDkBLHQDCfcUGAIw4cbsucxkbmo0AzZvcjoDNk5h+gM2Zmx6AzZMwtgGJwh+2XnMAzOkP22cxgGZ8geKYJhcIbst/DAEIYwhCEMYQhDGMIQhjCEIQxhCEMYwhCGMIQhDGEIQxjCEIYwhCEMYWh6WMG6kKl9Q3J5nt6aGXJNnGjSCLmAnr0VCbl4TW+F5YY6rGiZP7W1LH/DHHLrCM3tW4hNfsR1jbiCNbYHkO4Ob7ADpnQ3A8nFNJBdN5nW+ZYqsufJ/aPKnwTM5ZtNb2aCcm/lQC+Uj7kolNz26wQAAAAAAAAAAAAAAAAAgEDh7e8XH9Ok60n/KmGvjY+MItF9v0csZInJ4FsE5Gli4YWlAVOmjWGH/8VmEDu5DjwXVfcajWlVXDeU/AOrm1R+84CfuwAAAABJRU5ErkJggg==' alt='image'/></a></div>
                    <div className='contact-b'><a href='https://github.com/Vision26'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn11Rru16VFClaKhYzoL9yGLIwOEaggMpa1Q&usqp=CAU' alt='images'/></a></div>
                    <div className='h-tags'>
                    <h3>{email}</h3>
                    <h2>{phone}</h2>
                    </div>
        </div>
    )
}

export default Contact
