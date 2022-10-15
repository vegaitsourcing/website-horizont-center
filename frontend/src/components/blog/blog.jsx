import React from "react";

import styles from './blog.module.scss';

import { Input, Card } from "shared-components";

export const Blog = () => {
    const BLOGS_MOCK = [
    {
        id:1,
        title:"Blog2",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&s",
        created:"2022-10-14",
    categories:[
            {
                name:"categorija 1",
                color:"#89eb34"
            }
        ],
        "description":"Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst"
    },
    {
        id:2,
        title:"Blog2",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
        created:"2022-09-13",
        categories:[
            {
                name:"categorija 1",
                color:"#89eb34"
            }
        ],
        description:"Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst.Ovo je random tekst."
    },    
    {
        id:3,
        title:"Blog1",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
        created:"2022-10-12",
        categories:[
            {
                name:"categorija 1",
                color:"#89eb34"
            }
        ],
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a "
    },
    {
        id:4,
        title:"Blog3",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
        created:"2022-10-11",
        categories:[
            {
                name:"categorija 1",
                color:"#89eb34"
            }
        ],
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even "
    },
    {
        id:5,
        title:"Blog4",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK0Mndy8Wto5NncxuHCjsqwXVNzigPTXHrq53DFOcz&",
        created:"2022-10-10",
        categories:[
            {
                name:"categorija 1",
                color:"#89eb34"
            }
        ],
        description:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10."
    }
]
    return (<>
        <div className={styles.blogHeader}>
            <h2 className={styles.h2}>Podrška</h2>
            <p className={styles.p1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt reprehenderit nisi corporis quas sint eos inventore accusamus fuga dignissimos maxime?</p>
        </div>
        <div className={styles.blogBody}>
            <div className={styles.blogBodyInputs}>
                <Input type='search' id='searchBlogs' name='searchBlogs' placeholder='Pretraži...' />
                <Input type='text' id='filterBlogs' name='filterBlogs' placeholder='Filteri' />
            </div>
            <ul className={styles.blogList}>
                {BLOGS_MOCK.map(blog => (<Card key={blog.id} categories={blog.categories} description={blog.description} title={blog.title} date={blog.created} image={blog.image} />))}
            </ul>
        </div>
    </>)
}